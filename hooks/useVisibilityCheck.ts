import { useState } from 'react'
import type { VisibilityCheckRequest, VisibilityCheckResult } from '../lib/openai'

interface UseVisibilityCheckState {
  loading: boolean
  error: string | null
  result: VisibilityCheckResult | null
}

export function useVisibilityCheck() {
  const [state, setState] = useState<UseVisibilityCheckState>({
    loading: false,
    error: null,
    result: null
  })

  const checkVisibility = async (request: VisibilityCheckRequest) => {
    setState({ loading: true, error: null, result: null })

    try {
      const response = await fetch('/api/check-visibility', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.details || data.error || 'Visibility check failed')
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
    checkVisibility,
    clearResults
  }
} 