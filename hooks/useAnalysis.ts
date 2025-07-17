import { useState } from 'react'
import type { AnalysisRequest, AnalysisResult } from '../lib/openai'

interface UseAnalysisState {
  loading: boolean
  error: string | null
  result: AnalysisResult | null
}

interface ContentSuggestionsState {
  loading: boolean
  error: string | null
  suggestions: string[]
}

export function useAnalysis() {
  const [state, setState] = useState<UseAnalysisState>({
    loading: false,
    error: null,
    result: null
  })

  const analyzeCompany = async (request: AnalysisRequest) => {
    setState({ loading: true, error: null, result: null })

    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.details || data.error || 'Analysis failed')
      }

      setState({ loading: false, error: null, result: data })
      return data
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred'
      setState({ loading: false, error: errorMessage, result: null })
      throw error
    }
  }

  const clearResults = () => {
    setState({ loading: false, error: null, result: null })
  }

  return {
    ...state,
    analyzeCompany,
    clearResults
  }
}

export function useContentSuggestions() {
  const [state, setState] = useState<ContentSuggestionsState>({
    loading: false,
    error: null,
    suggestions: []
  })

  const generateSuggestions = async (companyName: string, industry: string) => {
    setState({ loading: true, error: null, suggestions: [] })

    try {
      const response = await fetch('/api/content-suggestions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ companyName, industry }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.details || data.error || 'Content generation failed')
      }

      setState({ loading: false, error: null, suggestions: data.suggestions })
      return data.suggestions
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred'
      setState({ loading: false, error: errorMessage, suggestions: [] })
      throw error
    }
  }

  const clearSuggestions = () => {
    setState({ loading: false, error: null, suggestions: [] })
  }

  return {
    ...state,
    generateSuggestions,
    clearSuggestions
  }
} 