import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useVisibilityCheck } from '../hooks/useVisibilityCheck'

export default function Check() {
  const router = useRouter()
  const { loading, error, result, checkVisibility } = useVisibilityCheck()
  const [formData, setFormData] = useState({
    brandName: '',
    website: '',
    category: '',
    targetAudience: ''
  })
  const [showResults, setShowResults] = useState(false)

  useEffect(() => {
    // Check authentication
    const isAuthenticated = localStorage.getItem('fake_authenticated')
    if (!isAuthenticated) {
      router.push('/login')
    }
  }, [router])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.brandName.trim() || !formData.category.trim() || !formData.targetAudience.trim()) {
      alert('Please fill in all required fields')
      return
    }

    try {
      await checkVisibility({
        brandName: formData.brandName.trim(),
        website: formData.website.trim(),
        category: formData.category.trim(),
        targetAudience: formData.targetAudience.trim()
      })
      setShowResults(true)
    } catch (err) {
      console.error('Visibility check failed:', err)
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 7) return 'text-green-600 bg-green-100'
    if (score >= 4) return 'text-yellow-600 bg-yellow-100'
    return 'text-red-600 bg-red-100'
  }

  const getScoreBarColor = (score: number) => {
    if (score >= 7) return 'bg-green-500'
    if (score >= 4) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  const getToneColor = (tone: string) => {
    switch (tone) {
      case 'Positive': return 'text-green-600 bg-green-50'
      case 'Negative': return 'text-red-600 bg-red-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/dashboard" className="flex items-center space-x-3">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                ChatRank
              </h1>
            </Link>
            <Link 
              href="/dashboard"
              className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              ← Back to Dashboard
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Form Section */}
        <div className={`transition-all duration-500 ${showResults ? 'mb-8' : ''}`}>
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Check If Your Business Is Visible in GPT Search
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how AI models like ChatGPT, Claude, and Gemini respond when users search for solutions in your industry. 
              Get actionable insights to improve your AI visibility.
            </p>
          </div>

          <div className={`bg-white rounded-2xl shadow-lg p-8 ${showResults ? 'lg:w-1/2' : 'max-w-2xl mx-auto'} transition-all duration-500`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="brandName" className="block text-sm font-semibold text-gray-900 mb-2">
                  Brand Name *
                </label>
                <input
                  id="brandName"
                  name="brandName"
                  type="text"
                  required
                  value={formData.brandName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="e.g., Slack, HubSpot, ChatRank"
                  disabled={loading}
                />
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-semibold text-gray-900 mb-2">
                  Website URL (Optional)
                </label>
                <input
                  id="website"
                  name="website"
                  type="url"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="https://yourwebsite.com"
                  disabled={loading}
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-semibold text-gray-900 mb-2">
                  Product/Service Category *
                </label>
                <input
                  id="category"
                  name="category"
                  type="text"
                  required
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="e.g., CRM, Legal SaaS, Marketing Tool, AI Platform"
                  disabled={loading}
                />
              </div>

              <div>
                <label htmlFor="targetAudience" className="block text-sm font-semibold text-gray-900 mb-2">
                  Target Audience *
                </label>
                <input
                  id="targetAudience"
                  name="targetAudience"
                  type="text"
                  required
                  value={formData.targetAudience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="e.g., coaches, freelancers, startups, small businesses"
                  disabled={loading}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Running deep AI search simulation...
                  </span>
                ) : (
                  'Run AI Check'
                )}
              </button>
            </form>

            {error && (
              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-red-800 text-sm font-medium">Analysis Failed</span>
                </div>
                <p className="text-red-700 text-sm mt-1">{error}</p>
              </div>
            )}
          </div>
        </div>

        {/* Results Section */}
        {result && (
          <div className="space-y-8 animate-fade-in">
            {/* Overall Score */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Visibility Report</h2>
                <p className="text-gray-600">{result.summary}</p>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
                <div className="text-center">
                  <div className={`text-6xl font-bold mb-2 px-6 py-4 rounded-2xl ${getScoreColor(result.overallScore)}`}>
                    {result.overallScore}/10
                  </div>
                  <p className="text-lg font-semibold text-gray-700">Visibility Score</p>
                </div>

                <div className="w-full md:w-64">
                  <p className="text-sm font-medium text-gray-700 mb-2">Score Breakdown</p>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div 
                      className={`h-4 rounded-full transition-all duration-1000 ${getScoreBarColor(result.overallScore)}`}
                      style={{ width: `${(result.overallScore / 10) * 100}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Poor</span>
                    <span>Good</span>
                    <span>Excellent</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Prompt Results */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">AI Search Simulation Results</h3>
              <div className="space-y-6">
                {result.prompts.map((prompt, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">"{prompt.prompt}"</h4>
                        <div className="flex items-center space-x-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${prompt.mentioned ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                            {prompt.mentioned ? '✅ Mentioned' : '❌ Not mentioned'}
                          </span>
                          {prompt.mentioned && (
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getToneColor(prompt.tone)}`}>
                              {prompt.tone}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <h5 className="font-medium text-gray-900 mb-2">AI Response:</h5>
                      <p className="text-gray-700 text-sm leading-relaxed">{prompt.response}</p>
                    </div>

                    {prompt.competitors.length > 0 && (
                      <div>
                        <h5 className="font-medium text-gray-900 mb-2">Competitors Also Mentioned:</h5>
                        <div className="flex flex-wrap gap-2">
                          {prompt.competitors.map((competitor, idx) => (
                            <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                              {competitor}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Top Competitors */}
            {result.topCompetitors.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Most Mentioned Competitors</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {result.topCompetitors.map((competitor, index) => (
                    <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-xl">{competitor.name.charAt(0)}</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">{competitor.name}</h4>
                      <p className="text-sm text-gray-600 mb-1">{competitor.mentions} mentions</p>
                      <p className="text-xs text-gray-500">{competitor.frequency}% frequency</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Recommendations */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Personalized AI Visibility Recommendations</h3>
              <div className="grid gap-6">
                {result.recommendations.map((recommendation, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <p className="text-gray-800 font-medium">{recommendation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl shadow-lg p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Want help improving your AI visibility?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Our team of AI visibility experts can help you implement these recommendations and track your progress over time.
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg">
                Book a Free Strategy Call
              </button>
            </div>
          </div>
        )}
      </main>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  )
} 