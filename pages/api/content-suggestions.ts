import type { NextApiRequest, NextApiResponse } from 'next'
import { generateContentSuggestions, isOpenAIConfigured } from '../../lib/openai'

interface ContentRequest {
  companyName: string
  industry: string
}

interface ContentResponse {
  suggestions: string[]
}

interface ErrorResponse {
  error: string
  details?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContentResponse | ErrorResponse>
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // Check if OpenAI is configured
  if (!isOpenAIConfigured()) {
    return res.status(500).json({ 
      error: 'OpenAI API is not configured',
      details: 'Please set the OPENAI_API_KEY environment variable'
    })
  }

  try {
    const { companyName, industry }: ContentRequest = req.body

    // Validate required fields
    if (!companyName || typeof companyName !== 'string' || companyName.trim().length === 0) {
      return res.status(400).json({ 
        error: 'Invalid request',
        details: 'Company name is required'
      })
    }

    if (!industry || typeof industry !== 'string' || industry.trim().length === 0) {
      return res.status(400).json({ 
        error: 'Invalid request',
        details: 'Industry is required'
      })
    }

    // Generate content suggestions
    const suggestions = await generateContentSuggestions(companyName.trim(), industry.trim())

    // Return the suggestions
    res.status(200).json({ suggestions })

  } catch (error) {
    console.error('Content Suggestions API Error:', error)
    
    if (error instanceof Error) {
      return res.status(500).json({ 
        error: 'Content generation failed',
        details: error.message
      })
    }

    return res.status(500).json({ 
      error: 'Internal server error',
      details: 'An unexpected error occurred during content generation'
    })
  }
} 