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
  const [gptUnderstanding, setGptUnderstanding] = useState('')

  // Define the 15 prompts split into 5 sections
  const promptSections = [
    {
      title: "🔍 Discovery Prompts",
      emoji: "🔍",
      prompts: [
        "What are the best {category} tools for {audience} in 2025?",
        "Top {category} platforms this year for {audience}",
        "Recommended {category} tools in 2025?"
      ]
    },
    {
      title: "⚖️ Comparison Prompts", 
      emoji: "⚖️",
      prompts: [
        "Alternatives to [top competitor]",
        "{brand} vs [Competitor] – which is better?",
        "Is {brand} worth using compared to top {category} platforms?"
      ]
    },
    {
      title: "💡 Recommendation Prompts",
      emoji: "💡", 
      prompts: [
        "What should a {audience} use to start with {category}?",
        "What does ChatGPT suggest for {category} today?",
        "AI picks for {category} in 2025?"
      ]
    },
    {
      title: "📈 Trend Prompts",
      emoji: "📈",
      prompts: [
        "What {category} platforms are trending for {audience}?",
        "What's new in {category} this year?",
        "What's the best option for {category} in 2025?"
      ]
    },
    {
      title: "🎯 User-Intent Prompts",
      emoji: "🎯",
      prompts: [
        "I'm a {audience}, what's the best {category} I should use?",
        "What's the easiest {category} service for a beginner?",
        "ChatGPT's top picks for {audience} using {category}"
      ]
    }
  ]

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

  const generateGptUnderstanding = (brand: string, category: string) => {
    // Mock GPT understanding based on brand recognition
    const knownBrands = ['slack', 'hubspot', 'notion', 'figma', 'zoom', 'salesforce', 'microsoft', 'google', 'apple', 'meta', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube']
    const isKnown = knownBrands.some(known => brand.toLowerCase().includes(known) || known.includes(brand.toLowerCase()))
    
    if (isKnown) {
      return `🤖 GPT recognizes "${brand}" as a well-established ${category} platform. High awareness detected — verifying deeper visibility across search contexts...`
    } else {
      return `🤖 GPT shows limited recognition of "${brand}" in the ${category} space. Brand not clearly recognized — scanning for mentions and competitive positioning...`
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.brandName.trim() || !formData.category.trim() || !formData.targetAudience.trim()) {
      alert('Please fill in all required fields')
      return
    }

    // Generate GPT understanding
    setGptUnderstanding(generateGptUnderstanding(formData.brandName, formData.category))

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

  const getScoreEmoji = (score: number) => {
    if (score >= 8) return '🚀'
    if (score >= 6) return '✅'
    if (score >= 4) return '⚠️'
    return '❌'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-white/20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/dashboard" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">🤖</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                ChatRank
              </h1>
            </Link>
            <Link 
              href="/dashboard"
              className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-white/50"
            >
              ← Back to Dashboard
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Main Title Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <span className="text-6xl mr-4">🤖</span>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              GPT Visibility Checker
            </h1>
            <span className="text-6xl ml-4">🔍</span>
          </div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            🎯 Discover how AI models like ChatGPT, Claude, and Gemini respond when users search for solutions in your industry. 
            <br />📊 Get actionable insights to improve your AI visibility and beat your competitors! ✨
          </p>
        </div>

        {/* Form Section */}
        <div className={`transition-all duration-700 ${showResults ? 'lg:grid lg:grid-cols-2 lg:gap-8 mb-12' : 'mb-12'}`}>
          <div className={`bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl p-8 ${showResults ? '' : 'max-w-2xl mx-auto'} border border-white/20`}>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center justify-center">
                <span className="mr-3">📝</span>
                Tell Us About Your Brand
                <span className="ml-3">🚀</span>
              </h2>
              <p className="text-gray-600">We'll analyze how AI sees your business in 2025! 🔮</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="brandName" className="block text-sm font-semibold text-gray-900 mb-2 flex items-center">
                  <span className="mr-2">🏢</span>
                  Brand Name *
                </label>
                <input
                  id="brandName"
                  name="brandName"
                  type="text"
                  required
                  value={formData.brandName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all backdrop-blur-sm bg-white/80"
                  placeholder="🎯 e.g., Slack, HubSpot, ChatRank"
                  disabled={loading}
                />
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-semibold text-gray-900 mb-2 flex items-center">
                  <span className="mr-2">🌐</span>
                  Website URL (Optional)
                </label>
                <input
                  id="website"
                  name="website"
                  type="url"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all backdrop-blur-sm bg-white/80"
                  placeholder="🔗 https://yourwebsite.com"
                  disabled={loading}
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-semibold text-gray-900 mb-2 flex items-center">
                  <span className="mr-2">📂</span>
                  Product/Service Category *
                </label>
                <input
                  id="category"
                  name="category"
                  type="text"
                  required
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all backdrop-blur-sm bg-white/80"
                  placeholder="🛠️ e.g., CRM, Legal SaaS, Marketing Tool, AI Platform"
                  disabled={loading}
                />
              </div>

              <div>
                <label htmlFor="targetAudience" className="block text-sm font-semibold text-gray-900 mb-2 flex items-center">
                  <span className="mr-2">👥</span>
                  Target Audience *
                </label>
                <input
                  id="targetAudience"
                  name="targetAudience"
                  type="text"
                  required
                  value={formData.targetAudience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all backdrop-blur-sm bg-white/80"
                  placeholder="🎯 e.g., coaches, freelancers, startups, small businesses"
                  disabled={loading}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    🤖 Analyzing your brand with AI… ✨
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <span className="mr-2">🚀</span>
                    Run Deep AI Check
                    <span className="ml-2">🔍</span>
                  </span>
                )}
              </button>
            </form>

            {error && (
              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl backdrop-blur-sm">
                <div className="flex items-center">
                  <span className="text-2xl mr-2">❌</span>
                  <span className="text-red-800 text-sm font-medium">Analysis Failed</span>
                </div>
                <p className="text-red-700 text-sm mt-1">{error}</p>
              </div>
            )}
          </div>

          {/* GPT Understanding Card - Show during loading */}
          {(loading || showResults) && gptUnderstanding && (
            <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="mr-3">🧠</span>
                GPT Understanding
              </h3>
              <div className="bg-gradient-to-r from-blue-50/80 to-cyan-50/80 rounded-xl p-6 backdrop-blur-sm border border-blue-200/30">
                <p className="text-gray-800 text-lg leading-relaxed">{gptUnderstanding}</p>
              </div>
            </div>
          )}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-white/70 backdrop-blur-md rounded-full shadow-2xl mb-6">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-200 border-t-blue-600"></div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center justify-center">
              <span className="mr-3">🤖</span>
              Analyzing your brand with AI…
              <span className="ml-3 animate-pulse">✨</span>
            </h3>
            <p className="text-gray-600 text-lg">Running 15 GPT simulations across different search contexts 🔍</p>
          </div>
        )}

        {/* Results Section */}
        {result && (
          <div className="space-y-8 animate-fade-in">
            {/* AI Visibility Score */}
            <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/20">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center">
                  <span className="mr-3">📊</span>
                  AI Visibility Report
                  <span className="ml-3">{getScoreEmoji(result.overallScore)}</span>
                </h2>
                <p className="text-gray-600 text-lg">{result.summary}</p>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
                <div className="text-center">
                  <div className={`text-7xl font-bold mb-4 px-8 py-6 rounded-3xl ${getScoreColor(result.overallScore)} shadow-lg`}>
                    {result.overallScore}/10
                  </div>
                  <p className="text-xl font-bold text-gray-700 flex items-center justify-center">
                    <span className="mr-2">🎯</span>
                    Visibility Score
                  </p>
                  {result.overallScore >= 7 && (
                    <p className="text-green-600 font-semibold mt-2 flex items-center justify-center">
                      <span className="mr-1">✅</span>
                      Strong GPT Recognition
                    </p>
                  )}
                  {result.overallScore < 5 && (
                    <p className="text-red-600 font-semibold mt-2 flex items-center justify-center">
                      <span className="mr-1">⚠️</span>
                      Weak AI Visibility
                    </p>
                  )}
                </div>

                <div className="w-full md:w-80">
                  <p className="text-lg font-semibold text-gray-700 mb-4 flex items-center justify-center md:justify-start">
                    <span className="mr-2">📈</span>
                    Score Breakdown
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-6 shadow-inner">
                    <div 
                      className={`h-6 rounded-full transition-all duration-2000 ${getScoreBarColor(result.overallScore)} shadow-lg`}
                      style={{ width: `${(result.overallScore / 10) * 100}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>Poor 😞</span>
                    <span>Good 😊</span>
                    <span>Excellent 🚀</span>
                  </div>
                </div>
              </div>
            </div>

            {/* GPT Prompt Simulation - 15 Prompts */}
            <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/20">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
                <span className="mr-3">📄</span>
                GPT Visibility Results (15 AI prompts)
                <span className="ml-3">🤖</span>
              </h3>
              
              {/* Display prompts by sections */}
              {promptSections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-8">
                  <h4 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <span className="mr-3">{section.emoji}</span>
                    {section.title}
                  </h4>
                  <div className="grid gap-6">
                    {result.prompts.slice(sectionIndex * 3, (sectionIndex + 1) * 3).map((prompt, index) => (
                      <div key={sectionIndex * 3 + index} className="border border-gray-200/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 bg-white/50 backdrop-blur-sm">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h5 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                              <span className="mr-2">💬</span>
                              "{prompt.prompt}"
                            </h5>
                            <div className="flex items-center space-x-4 flex-wrap gap-2">
                              <span className={`px-4 py-2 rounded-full text-sm font-bold ${prompt.mentioned ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} flex items-center`}>
                                {prompt.mentioned ? '✅ Mentioned' : '❌ Not mentioned'}
                              </span>
                              {prompt.mentioned && (
                                <span className={`px-4 py-2 rounded-full text-sm font-bold ${getToneColor(prompt.tone)} flex items-center`}>
                                  {prompt.tone === 'Positive' && '😊'} 
                                  {prompt.tone === 'Negative' && '😞'} 
                                  {prompt.tone === 'Neutral' && '😐'} 
                                  <span className="ml-1">{prompt.tone}</span>
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-50/80 to-blue-50/80 rounded-xl p-4 mb-4 backdrop-blur-sm border border-gray-200/30">
                          <h6 className="font-semibold text-gray-900 mb-2 flex items-center">
                            <span className="mr-2">🤖</span>
                            AI Response:
                          </h6>
                          <p className="text-gray-700 text-sm leading-relaxed">{prompt.response}</p>
                        </div>

                        {prompt.competitors.length > 0 && (
                          <div>
                            <h6 className="font-semibold text-gray-900 mb-3 flex items-center">
                              <span className="mr-2">🏆</span>
                              Competitors Also Mentioned:
                            </h6>
                            <div className="flex flex-wrap gap-2">
                              {prompt.competitors.map((competitor, idx) => (
                                <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200">
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
              ))}
            </div>

            {/* Top Competitors */}
            {result.topCompetitors.length > 0 && (
              <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/20">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
                  <span className="mr-3">🏆</span>
                  Top Competitors Mentioned Instead of You
                  <span className="ml-3">⚔️</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {result.topCompetitors.map((competitor, index) => (
                    <div key={index} className="bg-gradient-to-br from-red-50/80 to-orange-50/80 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 border border-red-200/30">
                      <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <span className="text-white font-bold text-xl">{competitor.name.charAt(0)}</span>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">{competitor.name}</h4>
                      <p className="text-sm text-gray-600 mb-1 flex items-center justify-center">
                        <span className="mr-1">📊</span>
                        {competitor.mentions} mentions
                      </p>
                      <p className="text-xs text-gray-500 flex items-center justify-center">
                        <span className="mr-1">📈</span>
                        {competitor.frequency}% frequency
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* GPT-Based Recommendations */}
            <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/20">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
                <span className="mr-3">🛠️</span>
                GPT-Based Recommendations
                <span className="ml-3">💡</span>
              </h3>
              <div className="grid gap-6">
                {result.recommendations.slice(0, 2).map((recommendation, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-gradient-to-r from-green-50/80 to-blue-50/80 rounded-2xl hover:shadow-xl transition-all duration-300 border border-green-200/30">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                    <div>
                      <p className="text-gray-800 font-semibold text-lg leading-relaxed">{recommendation}</p>
                    </div>
                  </div>
                ))}
                
                {result.recommendations.length > 2 && (
                  <div className="text-center p-6 bg-gradient-to-r from-purple-50/80 to-pink-50/80 rounded-2xl border border-purple-200/30">
                    <p className="text-gray-700 mb-4 font-semibold">
                      🚀 Want to see {result.recommendations.length - 2} more personalized recommendations?
                    </p>
                    <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                      ✨ Get Full Analysis Report
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-3xl shadow-2xl p-8 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-cyan-600/90"></div>
              <div className="relative z-10">
                <h3 className="text-4xl font-bold mb-4 flex items-center justify-center">
                  <span className="mr-3">🚀</span>
                  Want to boost your GPT and AI visibility?
                  <span className="ml-3">✨</span>
                </h3>
                <p className="text-blue-100 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
                  📈 Want to boost your GPT visibility across ChatGPT, Google SGE, and Gemini? 
                  Our AI visibility experts can help you dominate AI search results! 🎯
                </p>
                <button className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 flex items-center justify-center mx-auto">
                  <span className="mr-2">📞</span>
                  Book a Free Strategy Call
                  <span className="ml-2">🎉</span>
                </button>
              </div>
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
} 