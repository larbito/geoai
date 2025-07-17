import type { NextApiRequest, NextApiResponse } from 'next'
import { analyzeCompanyAIVisibility, isOpenAIConfigured, type AnalysisRequest, type AnalysisResult } from '../../lib/openai'

interface ErrorResponse {
  error: string
  details?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AnalysisResult | ErrorResponse>
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
    const { companyName, industry, website, description }: AnalysisRequest = req.body

    // Validate required fields
    if (!companyName || typeof companyName !== 'string' || companyName.trim().length === 0) {
      return res.status(400).json({ 
        error: 'Invalid request',
        details: 'Company name is required'
      })
    }

    // Sanitize inputs
    const analysisRequest: AnalysisRequest = {
      companyName: companyName.trim(),
      industry: industry?.trim() || '',
      website: website?.trim() || '',
      description: description?.trim() || ''
    }

    // Perform the analysis
    const result = await analyzeCompanyAIVisibility(analysisRequest)

    // Return the result
    res.status(200).json(result)

  } catch (error) {
    console.error('Analysis API Error:', error)
    
    if (error instanceof Error) {
      return res.status(500).json({ 
        error: 'Analysis failed',
        details: error.message
      })
    }

    return res.status(500).json({ 
      error: 'Internal server error',
      details: 'An unexpected error occurred during analysis'
    })
  }
} 