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