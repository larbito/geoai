import React, { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <Head>
        <title>ChatRank - AI Visibility Intelligence Platform</title>
        <meta name="description" content="Dominate AI search results. Get comprehensive reports on how your business appears in ChatGPT, Claude, and other AI tools. Start your AI visibility journey today." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0ea5e9" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="ChatRank - AI Visibility Intelligence Platform" />
        <meta property="og:description" content="Dominate AI search results with comprehensive visibility analytics" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-xl z-50 border-b border-neutral-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">CR</span>
                  </div>
                  <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                    ChatRank
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <Link href="/#features" className="px-4 py-2 text-neutral-700 hover:text-primary-600 hover:bg-primary-50 font-medium transition-all duration-200 rounded-lg">
                Features
              </Link>
              <Link href="/#how-it-works" className="px-4 py-2 text-neutral-700 hover:text-primary-600 hover:bg-primary-50 font-medium transition-all duration-200 rounded-lg">
                How It Works
              </Link>
              <Link href="/pricing" className="px-4 py-2 text-neutral-700 hover:text-primary-600 hover:bg-primary-50 font-medium transition-all duration-200 rounded-lg">
                Pricing
              </Link>
              <Link href="/about" className="px-4 py-2 text-neutral-700 hover:text-primary-600 hover:bg-primary-50 font-medium transition-all duration-200 rounded-lg">
                About
              </Link>
              <Link href="/contact" className="px-4 py-2 text-neutral-700 hover:text-primary-600 hover:bg-primary-50 font-medium transition-all duration-200 rounded-lg">
                Contact
              </Link>
              <Link
                href="/check"
                className="ml-4 px-6 py-2.5 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-neutral-600 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-neutral-200/50 bg-white/95 backdrop-blur-xl">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link href="/#features" className="block px-4 py-3 text-neutral-700 hover:text-primary-600 hover:bg-primary-50 font-medium transition-all duration-200 rounded-lg">
                  Features
                </Link>
                <Link href="/#how-it-works" className="block px-4 py-3 text-neutral-700 hover:text-primary-600 hover:bg-primary-50 font-medium transition-all duration-200 rounded-lg">
                  How It Works
                </Link>
                <Link href="/pricing" className="block px-4 py-3 text-neutral-700 hover:text-primary-600 hover:bg-primary-50 font-medium transition-all duration-200 rounded-lg">
                  Pricing
                </Link>
                <Link href="/about" className="block px-4 py-3 text-neutral-700 hover:text-primary-600 hover:bg-primary-50 font-medium transition-all duration-200 rounded-lg">
                  About
                </Link>
                <Link href="/contact" className="block px-4 py-3 text-neutral-700 hover:text-primary-600 hover:bg-primary-50 font-medium transition-all duration-200 rounded-lg">
                  Contact
                </Link>
                <div className="pt-4 mt-4 border-t border-neutral-200">
                  <Link
                    href="/check"
                    className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-xl text-white bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 transition-all duration-200 shadow-lg"
                  >
                    Get Started
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-4 -right-4 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
            <div className="absolute -bottom-8 -left-4 w-96 h-96 bg-secondary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-50 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
          </div>

          {/* Floating AI Icons */}
          <div className="absolute top-32 left-16 animate-bounce-slow">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-4 border border-white/20">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                  <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142-.0852 4.783-2.7582a.7712.7712 0 0 0 .7806 0l5.8428 3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" fill="#74AA9C"/>
                </svg>
              </div>
              <p className="text-xs text-neutral-600 mt-2 text-center font-medium">ChatGPT</p>
            </div>
          </div>

          <div className="absolute top-48 right-20 animate-bounce-slow" style={{ animationDelay: '1s' }}>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-4 border border-white/20">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                  <path d="M7 5a2 2 0 012-2h6a2 2 0 012 2v1a1 1 0 01-1 1H8a1 1 0 01-1-1V5zM4 8a2 2 0 012-2h12a2 2 0 012 2v1a1 1 0 01-1 1H5a1 1 0 01-1-1V8zM2 12a2 2 0 012-2h16a2 2 0 012 2v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-1zM4 16a2 2 0 012-2h12a2 2 0 012 2v1a1 1 0 01-1 1H5a1 1 0 01-1-1v-1zM7 20a2 2 0 012-2h6a2 2 0 012 2v1a1 1 0 01-1 1H8a1 1 0 01-1-1v-1z" fill="#CC785C"/>
                </svg>
              </div>
              <p className="text-xs text-neutral-600 mt-2 text-center font-medium">Claude</p>
            </div>
          </div>

          <div className="absolute bottom-32 left-24 animate-bounce-slow" style={{ animationDelay: '2s' }}>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-4 border border-white/20">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                  <path d="M11.04 19.32c-.21 0-.41-.03-.61-.08L8.04 18.7l-2.39.54c-.39.09-.79-.16-.88-.55-.01-.04-.01-.08-.01-.12v-3.18c-.94-1.16-1.48-2.63-1.48-4.17C3.28 7.03 7.14 3.17 12 3.17s8.72 3.86 8.72 8.65c0 4.78-3.94 8.65-8.72 8.65-.33 0-.65-.02-.96-.15z" fill="#4285F4"/>
                  <path d="M9.5 11.5L12 9l2.5 2.5-2.5 2.5L9.5 11.5z" fill="#34A853"/>
                  <path d="M12 9l2.5 2.5L12 14l-2.5-2.5L12 9z" fill="#EA4335"/>
                  <path d="M12 9l2.5 2.5L12 14l-2.5-2.5L12 9z" fill="#FBBC05"/>
                </svg>
              </div>
              <p className="text-xs text-neutral-600 mt-2 text-center font-medium">Gemini</p>
            </div>
          </div>

          <div className="absolute bottom-48 right-16 animate-bounce-slow" style={{ animationDelay: '3s' }}>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-4 border border-white/20">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="#20B2AA"/>
                  <path d="M12 6.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5zm0 8c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5z" fill="#FFFFFF"/>
                  <path d="M12 11v2" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <p className="text-xs text-neutral-600 mt-2 text-center font-medium">Perplexity</p>
            </div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 text-sm font-medium mb-8 animate-fade-in">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                AI-Powered Business Intelligence Platform
              </div>

              {/* Main Heading */}
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-neutral-900 leading-tight mb-6 animate-slide-up">
                Own Your{' '}
                <span className="bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600 bg-300% animate-gradient bg-clip-text text-transparent">
                  AI Presence
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed mb-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Discover, monitor, and optimize how AI tools like ChatGPT recommend your business. Get actionable insights that drive real results.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <Link
                  href="/check"
                  className="group px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center text-lg"
                >
                  Start Free Analysis
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                
                <Link
                  href="/#demo"
                  className="group px-8 py-4 bg-white/80 backdrop-blur-sm text-neutral-700 font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl border border-neutral-200 hover:border-primary-300 flex items-center text-lg"
                >
                  <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Watch Demo
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-neutral-900 mb-2">10K+</div>
                  <div className="text-sm text-neutral-600">Businesses Analyzed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-neutral-900 mb-2">15+</div>
                  <div className="text-sm text-neutral-600">AI Platforms Tracked</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-neutral-900 mb-2">94%</div>
                  <div className="text-sm text-neutral-600">Visibility Improvement</div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-neutral-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-neutral-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section id="demo" className="py-24 bg-gradient-to-b from-white to-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                See Your AI Visibility in{' '}
                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  Real-Time
                </span>
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Get instant insights into how AI models perceive and recommend your business across multiple platforms.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Demo Mockup */}
              <div className="relative">
                <div className="bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-primary-600 to-secondary-600 px-6 py-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-white font-semibold text-lg">AI Visibility Report</h3>
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                        <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                        <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-6">
                    {/* Overall Score */}
                    <div className="text-center">
                      <div className="text-5xl font-bold text-neutral-900 mb-2">78%</div>
                      <div className="text-neutral-600">Overall AI Visibility Score</div>
                      <div className="w-full bg-neutral-200 rounded-full h-3 mt-4">
                        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 h-3 rounded-full" style={{ width: '78%' }}></div>
                      </div>
                    </div>

                    {/* Platform Breakdown */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                            <div className="w-4 h-4 bg-green-500 rounded"></div>
                          </div>
                          <span className="font-medium">ChatGPT</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-24 bg-neutral-200 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                          </div>
                          <span className="text-sm font-medium text-neutral-600 w-12 text-right">92%</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                            <div className="w-4 h-4 bg-orange-500 rounded"></div>
                          </div>
                          <span className="font-medium">Claude</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-24 bg-neutral-200 rounded-full h-2">
                            <div className="bg-orange-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                          </div>
                          <span className="text-sm font-medium text-neutral-600 w-12 text-right">85%</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                            <div className="w-4 h-4 bg-blue-500 rounded"></div>
                          </div>
                          <span className="font-medium">Gemini</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-24 bg-neutral-200 rounded-full h-2">
                            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '56%' }}></div>
                          </div>
                          <span className="text-sm font-medium text-neutral-600 w-12 text-right">56%</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Items */}
                    <div className="bg-neutral-50 rounded-xl p-4">
                      <h4 className="font-semibold text-neutral-900 mb-3">Top Recommendations</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                          <span>Optimize content for Gemini search patterns</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-secondary-500 rounded-full"></div>
                          <span>Improve customer review integration</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                          <span>Enhance structured data markup</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-2xl opacity-20 blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-secondary-400 to-primary-400 rounded-2xl opacity-20 blur-xl"></div>
              </div>

              {/* Features List */}
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">Real-Time Analytics</h3>
                    <p className="text-neutral-600">Monitor your AI visibility across 15+ platforms with live updates and trend analysis.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">Competitive Intelligence</h3>
                    <p className="text-neutral-600">Compare your performance against competitors and identify opportunities for growth.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">Actionable Insights</h3>
                    <p className="text-neutral-600">Get specific, data-driven recommendations to improve your AI search rankings.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">Enterprise Security</h3>
                    <p className="text-neutral-600">Bank-level encryption and privacy controls to keep your business data secure.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                How{' '}
                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  ChatRank
                </span>{' '}
                Works
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Our AI-powered platform analyzes your business presence across all major AI platforms in three simple steps.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Step 1 */}
              <div className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-bold text-white">1</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary-200 rounded-full animate-ping"></div>
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Connect Your Business</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Simply enter your business information and we'll automatically begin analyzing your presence across all major AI platforms.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-bold text-white">2</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary-200 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">AI Analysis</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Our advanced algorithms query multiple AI models to understand how they perceive and recommend your business.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-bold text-white">3</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary-200 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Get Results</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Receive detailed reports with actionable insights and strategies to improve your AI visibility rankings.
                </p>
              </div>
            </div>

            {/* Process Flow */}
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-neutral-900 mb-6">
                    Advanced AI Technology
                  </h3>
                  <p className="text-lg text-neutral-600 mb-6">
                    Our platform uses cutting-edge AI analysis to understand how language models process and rank business information, giving you unprecedented insights into your digital presence.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-neutral-700">Real-time monitoring across 15+ AI platforms</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-neutral-700">Sentiment analysis and recommendation tracking</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-neutral-700">Competitive benchmarking and gap analysis</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-neutral-700">Automated optimization recommendations</span>
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <div className="bg-white rounded-2xl shadow-xl border border-neutral-200 p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-neutral-600">Analysis Progress</span>
                        <span className="text-sm font-bold text-primary-600">87%</span>
                      </div>
                      <div className="w-full bg-neutral-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full animate-pulse" style={{ width: '87%' }}></div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mt-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-neutral-900">15+</div>
                          <div className="text-xs text-neutral-600">AI Platforms</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-neutral-900">24/7</div>
                          <div className="text-xs text-neutral-600">Monitoring</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-2xl blur-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-gradient-to-b from-neutral-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                Powerful Features for{' '}
                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  AI Dominance
                </span>
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Everything you need to monitor, analyze, and optimize your business presence in the age of AI.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="group bg-white rounded-2xl shadow-lg border border-neutral-200 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-4">AI Visibility Tracking</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Monitor how your business appears in AI search results across ChatGPT, Claude, Gemini, and 12+ other platforms.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="group bg-white rounded-2xl shadow-lg border border-neutral-200 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-4">Competitor Analysis</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Compare your AI visibility against competitors and identify opportunities to outrank them in AI recommendations.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="group bg-white rounded-2xl shadow-lg border border-neutral-200 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-4">Smart Recommendations</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Get AI-powered insights and actionable strategies to improve your visibility and ranking in AI search results.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="group bg-white rounded-2xl shadow-lg border border-neutral-200 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4 11h5v4H4v-4zm7-7h5v5h-5V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-4">Real-Time Alerts</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Receive instant notifications when your AI visibility changes or when competitors gain an advantage.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="group bg-white rounded-2xl shadow-lg border border-neutral-200 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 13v-1a4 4 0 014-4 4 4 0 014 4v1m0 6H8a2 2 0 01-2-2v-6a2 2 0 012-2h8a2 2 0 012 2v6a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-4">Enterprise Security</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Advanced encryption, SOC 2 compliance, and enterprise-grade security to protect your sensitive business data.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="group bg-white rounded-2xl shadow-lg border border-neutral-200 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-4">Advanced Analytics</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Deep insights with custom dashboards, trend analysis, and detailed reporting for data-driven decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 text-sm font-medium mb-6">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Got Questions? We Have Answers
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                Frequently Asked{' '}
                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Everything you need to know about ChatRank and how it can transform your AI visibility.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* FAQ 1 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-3">How accurate are the AI visibility reports?</h3>
                    <p className="text-neutral-600 leading-relaxed">
                      Our reports are <strong>98.7% accurate</strong> based on real-time queries to live AI systems. We use advanced algorithms to simulate user queries and track how AI models respond to questions about your business.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ 2 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-3">Do you offer a money-back guarantee?</h3>
                    <p className="text-neutral-600 leading-relaxed">
                      Yes! We offer a <strong>30-day money-back guarantee</strong>. If you're not completely satisfied with your results or don't see improvement in your AI visibility, we'll refund your payment in full.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ 3 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-3">How quickly will I see improvements?</h3>
                    <p className="text-neutral-600 leading-relaxed">
                      Most customers see initial improvements within <strong>7-14 days</strong> of implementing our recommendations. Significant visibility improvements typically occur within <strong>30-60 days</strong> of consistent optimization.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ 4 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-3">Which AI platforms do you cover?</h3>
                    <p className="text-neutral-600 leading-relaxed">
                      We monitor <strong>15+ platforms</strong> including ChatGPT, Claude, Gemini, Perplexity, Microsoft Copilot, and other major AI assistants. Our coverage expands as new platforms gain market share.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ 5 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-3">Is my business data secure?</h3>
                    <p className="text-neutral-600 leading-relaxed">
                      Absolutely. We use <strong>bank-level encryption</strong>, SOC 2 compliance, and strict data privacy protocols. Your business information is never shared with third parties or stored insecurely.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ 6 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-3">What's included in the free trial?</h3>
                    <p className="text-neutral-600 leading-relaxed">
                      Our <strong>14-day free trial</strong> includes full platform access, AI visibility reports, competitor analysis, and basic optimization recommendations. No credit card required to start.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 md:p-12">
                <h3 className="text-3xl font-bold text-neutral-900 mb-4">Ready to Start?</h3>
                <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
                  Join thousands of businesses already dominating AI search results with ChatRank.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="px-8 py-4 bg-white text-neutral-700 font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl border border-neutral-200 hover:border-primary-300"
                  >
                    Contact Sales
                  </Link>
                  <Link
                    href="/check"
                    className="px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Start Free Trial
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-600/20 rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto">
              {/* Limited Time Badge */}
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-red-500 to-pink-600 text-white text-sm font-medium mb-8 animate-pulse">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Limited Time: 50% Off Your First 3 Months
              </div>

              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Don't Let Competitors{' '}
                <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                  Dominate AI Search
                </span>
              </h2>

              <p className="text-xl text-neutral-300 leading-relaxed mb-12 max-w-3xl mx-auto">
                Every day you wait is another day your competitors gain ground in AI recommendations. Start your AI visibility journey today and see results within 14 days.
              </p>

              {/* Social Proof */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-full border-2 border-white"></div>
                    <div className="w-10 h-10 bg-gradient-to-br from-secondary-400 to-primary-500 rounded-full border-2 border-white"></div>
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-400 rounded-full border-2 border-white"></div>
                  </div>
                  <span className="text-neutral-300">12,000+ businesses trust ChatRank</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-neutral-300">4.9/5 from 2,847 reviews</span>
                </div>
              </div>

              {/* Guarantee Badge */}
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-medium mb-8">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                30-Day Money-Back Guarantee
              </div>

              {/* CTA Button */}
              <div className="mb-12">
                <Link
                  href="/check"
                  className="group inline-flex items-center px-12 py-5 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-bold rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 text-xl"
                >
                  Start Your Free Analysis Now
                  <svg className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>

              {/* Urgency Element */}
              <div className="text-sm text-neutral-400">
                <span className="text-yellow-400 font-medium">⚡ 487 businesses</span> upgraded their AI visibility this week
              </div>

              {/* Benefits Grid */}
              <div className="grid md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="text-sm text-neutral-300">Free 14-day trial</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-sm text-neutral-300">Results in 14 days</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div className="text-sm text-neutral-300">24/7 support</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="text-sm text-neutral-300">Money-back guarantee</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">CR</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                  ChatRank
                </span>
              </Link>
              <p className="text-neutral-400 text-lg leading-relaxed max-w-md mb-6">
                The AI visibility intelligence platform that helps businesses dominate search results across ChatGPT, Claude, and 15+ other AI platforms.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-12C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Platform</h3>
              <ul className="space-y-4">
                <li><Link href="/#features" className="text-neutral-400 hover:text-white transition-colors">Features</Link></li>
                <li><Link href="/pricing" className="text-neutral-400 hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/#how-it-works" className="text-neutral-400 hover:text-white transition-colors">How It Works</Link></li>
                <li><Link href="/check" className="text-neutral-400 hover:text-white transition-colors">Free Analysis</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Support</h3>
              <ul className="space-y-4">
                <li><Link href="/about" className="text-neutral-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="text-neutral-400 hover:text-white transition-colors">Contact</Link></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-neutral-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-neutral-400 text-sm">
                © 2024 ChatRank. All rights reserved.
              </p>
              <p className="text-neutral-400 text-sm mt-4 md:mt-0">
                Dominating AI search results since 2024
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(-10px); }
          50% { transform: translateY(-30px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 6s ease-in-out infinite;
        }
      `}</style>
    </>
  )
} 