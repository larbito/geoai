import { useState } from 'react'
import { useAnalysis } from '../hooks/useAnalysis'

export default function AnalysisTest() {
  const { loading, error, result, analyzeCompany } = useAnalysis()
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    website: '',
    description: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.companyName.trim()) {
      alert('Please enter a company name')
      return
    }

    try {
      await analyzeCompany({
        companyName: formData.companyName.trim(),
        industry: formData.industry.trim(),
        website: formData.website.trim(),
        description: formData.description.trim()
      })
    } catch (err) {
      console.error('Analysis failed:', err)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        🧪 Test AI Analysis
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
            Company Name *
          </label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            required
            value={formData.companyName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="e.g., Apple, Tesla, ChatRank"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
              Industry
            </label>
            <input
              id="industry"
              name="industry"
              type="text"
              value={formData.industry}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g., Technology, Healthcare"
            />
          </div>

          <div>
            <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
              Website
            </label>
            <input
              id="website"
              name="website"
              type="url"
              value={formData.website}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="https://example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={3}
            value={formData.description}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Brief description of what the company does..."
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Analyzing...
            </span>
          ) : (
            'Analyze AI Visibility'
          )}
        </button>
      </form>

      {/* Error Display */}
      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-red-800 text-sm font-medium">Analysis Failed</span>
          </div>
          <p className="text-red-700 text-sm mt-1">{error}</p>
          {error.includes('not configured') && (
            <p className="text-red-600 text-xs mt-2">
              💡 Check the OPENAI_SETUP.md file for setup instructions
            </p>
          )}
        </div>
      )}

      {/* Results Display */}
      {result && (
        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-semibold text-gray-900">Analysis Results</h4>
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
              Score: {result.visibilityScore}/100
            </span>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h5 className="font-medium text-gray-900 mb-2">Summary</h5>
            <p className="text-gray-700 text-sm">{result.summary}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <h5 className="font-medium text-blue-900 mb-2">AI Mentions ({result.aiMentions.length})</h5>
              <ul className="text-blue-800 text-sm space-y-1">
                {result.aiMentions.slice(0, 3).map((mention, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>{mention}</span>
                  </li>
                ))}
                {result.aiMentions.length > 3 && (
                  <li className="text-blue-600 text-xs">+{result.aiMentions.length - 3} more...</li>
                )}
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-4">
              <h5 className="font-medium text-green-900 mb-2">Recommendations ({result.recommendations.length})</h5>
              <ul className="text-green-800 text-sm space-y-1">
                {result.recommendations.slice(0, 3).map((rec, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>{rec}</span>
                  </li>
                ))}
                {result.recommendations.length > 3 && (
                  <li className="text-green-600 text-xs">+{result.recommendations.length - 3} more...</li>
                )}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs text-gray-500">
              ✨ Analysis powered by OpenAI GPT-4
            </p>
          </div>
        </div>
      )}
    </div>
  )
} 