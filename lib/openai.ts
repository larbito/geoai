import OpenAI from 'openai'

// Check if OpenAI is configured
export const isOpenAIConfigured = (): boolean => {
  return !!process.env.OPENAI_API_KEY
}

// Initialize OpenAI client
const openai = isOpenAIConfigured() 
  ? new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })
  : null

export { openai }

// Types for our analysis
export interface AnalysisRequest {
  companyName: string
  industry?: string
  website?: string
  description?: string
}

export interface AnalysisResult {
  summary: string
  aiMentions: string[]
  recommendations: string[]
  visibilityScore: number
  competitorAnalysis: string[]
  keyInsights: string[]
}

// Types for GPT visibility check
export interface VisibilityCheckRequest {
  brandName: string
  website?: string
  category: string
  targetAudience: string
}

export interface PromptResult {
  prompt: string
  mentioned: boolean
  tone: 'Positive' | 'Neutral' | 'Negative'
  response: string
  competitors: string[]
}

export interface VisibilityCheckResult {
  overallScore: number
  prompts: PromptResult[]
  topCompetitors: Array<{
    name: string
    mentions: number
    frequency: number
  }>
  recommendations: string[]
  summary: string
}

// Function to check GPT visibility with 10 different prompts
export async function checkGPTVisibility(request: VisibilityCheckRequest): Promise<VisibilityCheckResult> {
  if (!openai || !isOpenAIConfigured()) {
    throw new Error('OpenAI API is not configured. Please set your OPENAI_API_KEY environment variable.')
  }

  const { brandName, category, targetAudience } = request

  // Generate 10 different prompts
  const prompts = [
    `Best ${category} for ${targetAudience}`,
    `Top ${category} tools in 2024`,
    `Which ${category} do solopreneurs use?`,
    `Recommended ${category} platforms`,
    `Best alternatives to popular ${category} tools`,
    `What are the most used ${category} products?`,
    `Top picks for ${category} in 2024`,
    `Top tools for ${targetAudience} looking for ${category} solutions`,
    `Most popular ${category} software for small businesses`,
    `AI-recommended ${category} tools for ${targetAudience}`
  ]

  const results: PromptResult[] = []
  const competitorMentions: Record<string, number> = {}

  // Process each prompt
  for (const prompt of prompts) {
    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: `You are a helpful assistant providing recommendations for business tools and software. 
            When recommending tools, provide realistic and helpful suggestions based on actual market knowledge.
            Always respond in a natural, conversational way as if you're genuinely helping someone find the right solution.
            Include specific tool names and briefly explain why each is good for the specified audience.`
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.7,
        max_tokens: 500,
      })

      const response = completion.choices[0]?.message?.content || ''
      
      // Check if brand is mentioned
      const mentioned = response.toLowerCase().includes(brandName.toLowerCase())
      
      // Determine tone if mentioned
      let tone: 'Positive' | 'Neutral' | 'Negative' = 'Neutral'
      if (mentioned) {
        const brandContext = extractBrandContext(response, brandName)
        tone = analyzeTone(brandContext)
      }

      // Extract competitors mentioned
      const competitors = extractCompetitors(response, brandName)
      
      // Count competitor mentions
      competitors.forEach(competitor => {
        competitorMentions[competitor] = (competitorMentions[competitor] || 0) + 1
      })

      results.push({
        prompt,
        mentioned,
        tone,
        response,
        competitors
      })

    } catch (error) {
      console.error(`Error processing prompt: ${prompt}`, error)
      // Add a fallback result
      results.push({
        prompt,
        mentioned: false,
        tone: 'Neutral',
        response: 'Unable to generate response for this prompt.',
        competitors: []
      })
    }

    // Add a small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 100))
  }

  // Calculate overall score
  const mentions = results.filter(r => r.mentioned).length
  const positiveReferences = results.filter(r => r.mentioned && r.tone === 'Positive').length
  const overallScore = Math.round((mentions * 10 + positiveReferences * 5) / 15 * 10) / 10

  // Get top competitors
  const topCompetitors = Object.entries(competitorMentions)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 5)
    .map(([name, mentions]) => ({
      name,
      mentions,
      frequency: Math.round((mentions / prompts.length) * 100)
    }))

  // Generate recommendations
  const recommendations = await generateVisibilityRecommendations(request, overallScore, topCompetitors)

  // Generate summary
  const summary = `Your brand "${brandName}" was mentioned in ${mentions} out of ${prompts.length} AI responses. ${
    mentions > 0 
      ? `Most mentions were ${results.filter(r => r.mentioned)[0]?.tone.toLowerCase() || 'neutral'} in tone.` 
      : 'Consider implementing our recommendations to improve your AI visibility.'
  }`

  return {
    overallScore: Math.max(0, Math.min(10, overallScore)),
    prompts: results,
    topCompetitors,
    recommendations,
    summary
  }
}

// Helper function to extract brand context from response
function extractBrandContext(response: string, brandName: string): string {
  const sentences = response.split(/[.!?]+/)
  const relevantSentences = sentences.filter(sentence => 
    sentence.toLowerCase().includes(brandName.toLowerCase())
  )
  return relevantSentences.join('. ').trim()
}

// Helper function to analyze tone
function analyzeTone(context: string): 'Positive' | 'Neutral' | 'Negative' {
  const positiveWords = ['excellent', 'great', 'best', 'top', 'recommend', 'popular', 'leading', 'favorite', 'outstanding', 'perfect']
  const negativeWords = ['poor', 'bad', 'worst', 'avoid', 'terrible', 'difficult', 'problematic', 'limited']
  
  const lowerContext = context.toLowerCase()
  const positiveCount = positiveWords.filter(word => lowerContext.includes(word)).length
  const negativeCount = negativeWords.filter(word => lowerContext.includes(word)).length
  
  if (positiveCount > negativeCount) return 'Positive'
  if (negativeCount > positiveCount) return 'Negative'
  return 'Neutral'
}

// Helper function to extract competitor names
function extractCompetitors(response: string, brandName: string): string[] {
  // Common patterns for tool/company names
  const patterns = [
    /\b[A-Z][a-z]+(?:\s+[A-Z][a-z]+)*(?:\s+(?:CRM|SaaS|Platform|Tool|Software|App|Suite|Pro|Plus|Enterprise))?/g,
    /\b[A-Z][a-z]+[A-Z][a-z]+/g, // CamelCase names
  ]
  
  const competitors = new Set<string>()
  
  patterns.forEach(pattern => {
    const matches = response.match(pattern) || []
    matches.forEach(match => {
      const cleaned = match.trim()
      if (cleaned.length > 2 && 
          !cleaned.toLowerCase().includes(brandName.toLowerCase()) &&
          !['The', 'This', 'That', 'These', 'Those', 'Here', 'There', 'When', 'Where', 'What', 'Why', 'How'].includes(cleaned)) {
        competitors.add(cleaned)
      }
    })
  })
  
  return Array.from(competitors).slice(0, 8) // Limit to 8 competitors per response
}

// Helper function to generate visibility recommendations
async function generateVisibilityRecommendations(
  request: VisibilityCheckRequest, 
  score: number, 
  topCompetitors: Array<{name: string, mentions: number}>
): Promise<string[]> {
  if (!openai) return []

  try {
    const competitorNames = topCompetitors.map(c => c.name).join(', ')
    
    const prompt = `
Based on an AI visibility analysis for "${request.brandName}" (a ${request.category} for ${request.targetAudience}), 
provide 3-4 specific, actionable recommendations to improve their visibility in AI model responses.

Current visibility score: ${score}/10
Main competitors mentioned: ${competitorNames}

Focus on:
1. Content strategy that AI models would reference
2. Authority building in relevant communities
3. SEO and backlink strategies
4. Platform presence optimization

Provide specific, actionable recommendations as a JSON array of strings.
`

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.8,
      max_tokens: 400,
    })

    const result = completion.choices[0]?.message?.content
    if (!result) return []

    return JSON.parse(result)
  } catch (error) {
    console.error('Error generating recommendations:', error)
    return [
      `Create comprehensive content targeting "Best ${request.category} for ${request.targetAudience}"`,
      `Build authority on platforms like Reddit, Product Hunt, and industry forums`,
      `Earn high-quality backlinks from sites frequently cited by AI models`,
      `Optimize your website for AI crawlers with structured data and clear positioning`
    ]
  }
}

// Function to analyze company AI visibility
export async function analyzeCompanyAIVisibility(request: AnalysisRequest): Promise<AnalysisResult> {
  if (!openai || !isOpenAIConfigured()) {
    throw new Error('OpenAI API is not configured. Please set your OPENAI_API_KEY environment variable.')
  }

  const prompt = `
You are an AI visibility analyst for ChatRank. Analyze the following company for their potential visibility and mentions across AI platforms like ChatGPT, Claude, Gemini, and Perplexity.

Company Details:
- Name: ${request.companyName}
- Industry: ${request.industry || 'Not specified'}
- Website: ${request.website || 'Not provided'}
- Description: ${request.description || 'Not provided'}

Please provide a comprehensive analysis in the following JSON format:
{
  "summary": "Brief overview of the company's current AI visibility potential",
  "aiMentions": ["List of specific areas where AI might mention this company"],
  "recommendations": ["Actionable recommendations to improve AI visibility"],
  "visibilityScore": 0-100,
  "competitorAnalysis": ["Analysis of how competitors might rank in AI responses"],
  "keyInsights": ["Key insights about improving AI discoverability"]
}

Focus on:
1. How likely AI tools are to mention this company when users ask relevant questions
2. What search queries would likely surface this company
3. Specific strategies to improve AI visibility
4. Competitive positioning in AI responses
5. Content and SEO strategies that work well for AI training data

Respond only with valid JSON.
`

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are an expert AI visibility analyst. Always respond with valid JSON only."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 1500,
    })

    const result = completion.choices[0]?.message?.content
    if (!result) {
      throw new Error('No response from OpenAI')
    }

    // Parse the JSON response
    const analysis: AnalysisResult = JSON.parse(result)
    
    // Validate the response structure
    if (!analysis.summary || !Array.isArray(analysis.aiMentions) || !Array.isArray(analysis.recommendations)) {
      throw new Error('Invalid response structure from OpenAI')
    }

    return analysis
  } catch (error) {
    console.error('OpenAI API Error:', error)
    throw new Error(error instanceof Error ? error.message : 'Failed to analyze company AI visibility')
  }
}

// Function to generate AI-optimized content suggestions
export async function generateContentSuggestions(companyName: string, industry: string): Promise<string[]> {
  if (!openai || !isOpenAIConfigured()) {
    throw new Error('OpenAI API is not configured')
  }

  const prompt = `
Generate 10 content ideas that would help "${companyName}" in the ${industry} industry improve their visibility in AI model responses. 

Focus on:
- Content that AI models would likely reference
- Topics that potential customers ask AI about
- Authority-building content pieces
- FAQ-style content that addresses common queries

Return as a JSON array of strings.
`

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.8,
      max_tokens: 800,
    })

    const result = completion.choices[0]?.message?.content
    if (!result) {
      throw new Error('No response from OpenAI')
    }

    return JSON.parse(result)
  } catch (error) {
    console.error('Content generation error:', error)
    throw new Error('Failed to generate content suggestions')
  }
} 