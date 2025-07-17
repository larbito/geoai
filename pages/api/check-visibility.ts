import type { NextApiRequest, NextApiResponse } from 'next'
import { checkGPTVisibility, isOpenAIConfigured, type VisibilityCheckRequest, type VisibilityCheckResult } from '../../lib/openai'

interface ErrorResponse {
  error: string
  details?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<VisibilityCheckResult | ErrorResponse>
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
    const { brandName, website, category, targetAudience }: VisibilityCheckRequest = req.body

    // Validate required fields
    if (!brandName || typeof brandName !== 'string' || brandName.trim().length === 0) {
      return res.status(400).json({ 
        error: 'Invalid request',
        details: 'Brand name is required'
      })
    }

    if (!category || typeof category !== 'string' || category.trim().length === 0) {
      return res.status(400).json({ 
        error: 'Invalid request',
        details: 'Product/Service category is required'
      })
    }

    if (!targetAudience || typeof targetAudience !== 'string' || targetAudience.trim().length === 0) {
      return res.status(400).json({ 
        error: 'Invalid request',
        details: 'Target audience is required'
      })
    }

    // Sanitize inputs
    const checkRequest: VisibilityCheckRequest = {
      brandName: brandName.trim(),
      website: website?.trim() || '',
      category: category.trim(),
      targetAudience: targetAudience.trim()
    }

    // Perform the visibility check
    const result = await checkGPTVisibility(checkRequest)

    // Return the result
    res.status(200).json(result)

  } catch (error) {
    console.error('Visibility Check API Error:', error)
    
    if (error instanceof Error) {
      return res.status(500).json({ 
        error: 'Visibility check failed',
        details: error.message
      })
    }

    return res.status(500).json({ 
      error: 'Internal server error',
      details: 'An unexpected error occurred during the visibility check'
    })
  }
} 