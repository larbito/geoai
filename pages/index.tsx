import React, { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <Head>
        <title>ChatRank - AI Visibility Checker for Modern Businesses</title>
        <meta name="description" content="Discover how your business appears in AI search results. Get comprehensive AI visibility reports and outrank competitors in ChatGPT recommendations." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0ea5e9" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="ChatRank - AI Visibility Checker" />
        <meta property="og:description" content="Discover how your business appears in AI search results" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-md z-50 shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  ChatRank
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <Link href="/#features" className="px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 font-medium transition-all duration-200 rounded-lg">
                Features
              </Link>
              <Link href="/#how-it-works" className="px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 font-medium transition-all duration-200 rounded-lg">
                How It Works
              </Link>
              <Link href="/pricing" className="px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 font-medium transition-all duration-200 rounded-lg">
                Pricing
              </Link>
              <Link href="/about" className="px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 font-medium transition-all duration-200 rounded-lg">
                About
              </Link>
              <Link href="/contact" className="px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 font-medium transition-all duration-200 rounded-lg">
                Contact
              </Link>
              <div className="ml-4 pl-4 border-l border-gray-200">
                <Link
                  href="/check"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Get Started
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-purple-600 hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 transition-all duration-200"
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
            <div className="md:hidden border-t border-gray-100 bg-white shadow-lg">
              <div className="px-4 py-6 space-y-2">
                <Link href="/#features" className="block px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 font-medium transition-all duration-200 rounded-lg">
                  Features
                </Link>
                <Link href="/#how-it-works" className="block px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 font-medium transition-all duration-200 rounded-lg">
                  How It Works
                </Link>
                <Link href="/pricing" className="block px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 font-medium transition-all duration-200 rounded-lg">
                  Pricing
                </Link>
                <Link href="/about" className="block px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 font-medium transition-all duration-200 rounded-lg">
                  About
                </Link>
                <Link href="/contact" className="block px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 font-medium transition-all duration-200 rounded-lg">
                  Contact
                </Link>
                <div className="pt-4 mt-4 border-t border-gray-100">
                  <Link
                    href="/check"
                    className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-xl text-white bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 transition-all duration-200 shadow-lg"
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
        {/* Enhanced Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-indigo-50"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          
          {/* Clean Floating AI Platform Icons - Top 4 platforms only */}
          <div className="absolute top-24 left-16 animate-float">
            <div className="bg-white rounded-2xl shadow-lg p-4 border border-gray-100 opacity-90 hover:opacity-100 transition-opacity">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg" alt="ChatGPT" className="w-8 h-8" style={{filter: 'invert(0)'}} />
              </div>
              <p className="text-xs text-gray-600 mt-2 text-center font-medium">ChatGPT</p>
            </div>
          </div>
          
          <div className="absolute top-32 right-16 animate-float-delayed">
            <div className="bg-white rounded-2xl shadow-lg p-4 border border-gray-100 opacity-90 hover:opacity-100 transition-opacity">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/anthropic.svg" alt="Claude" className="w-8 h-8" style={{filter: 'invert(0)'}} />
              </div>
              <p className="text-xs text-gray-600 mt-2 text-center font-medium">Claude</p>
            </div>
          </div>
          
          <div className="absolute bottom-24 left-20 animate-float" style={{ animationDelay: '1s' }}>
            <div className="bg-white rounded-2xl shadow-lg p-4 border border-gray-100 opacity-90 hover:opacity-100 transition-opacity">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googlegemini.svg" alt="Gemini" className="w-8 h-8" style={{filter: 'invert(0)'}} />
              </div>
              <p className="text-xs text-gray-600 mt-2 text-center font-medium">Gemini</p>
            </div>
          </div>
          
          <div className="absolute bottom-32 right-20 animate-float-delayed" style={{ animationDelay: '1.5s' }}>
            <div className="bg-white rounded-2xl shadow-lg p-4 border border-gray-100 opacity-90 hover:opacity-100 transition-opacity">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M26.7 14.0 C26.7 15.8 26.0 17.5 24.8 18.7 L24.8 18.7 C23.6 19.9 21.9 20.6 20.1 20.6 L7.9 20.6 C6.1 20.6 4.4 19.9 3.2 18.7 L3.2 18.7 C2.0 17.5 1.3 15.8 1.3 14.0 L1.3 14.0 C1.3 12.2 2.0 10.5 3.2 9.3 L3.2 9.3 C4.4 8.1 6.1 7.4 7.9 7.4 L20.1 7.4 C21.9 7.4 23.6 8.1 24.8 9.3 L24.8 9.3 C26.0 10.5 26.7 12.2 26.7 14.0 Z" fill="#1FB8CD"/>
                  <path d="M20.2 14.0 C20.2 15.1 19.7 16.1 18.9 16.9 C18.1 17.7 17.1 18.2 16.0 18.2 C14.9 18.2 13.9 17.7 13.1 16.9 C12.3 16.1 11.8 15.1 11.8 14.0 C11.8 12.9 12.3 11.9 13.1 11.1 C13.9 10.3 14.9 9.8 16.0 9.8 C17.1 9.8 18.1 10.3 18.9 11.1 C19.7 11.9 20.2 12.9 20.2 14.0 Z" fill="white"/>
                  <path d="M16.4 14.0 C16.4 14.2 16.3 14.4 16.2 14.5 C16.1 14.6 15.9 14.7 15.7 14.7 C15.5 14.7 15.3 14.6 15.2 14.5 C15.1 14.4 15.0 14.2 15.0 14.0 C15.0 13.8 15.1 13.6 15.2 13.5 C15.3 13.4 15.5 13.3 15.7 13.3 C15.9 13.3 16.1 13.4 16.2 13.5 C16.3 13.6 16.4 13.8 16.4 14.0 Z" fill="#1FB8CD"/>
                </svg>
              </div>
              <p className="text-xs text-gray-600 mt-2 text-center font-medium">Perplexity</p>
            </div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  AI-Powered Business Intelligence
                </div>
                
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  Is Your Business
                  <span className="block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Visible in AI Search?
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
                  Discover how ChatGPT and other AI tools recommend your business. Get comprehensive visibility reports, competitor analysis, and actionable strategies to dominate AI search results.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    href="/check"
                    className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Check My Business Now
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  
                  <Link
                    href="#demo"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-lg font-semibold rounded-xl text-gray-700 bg-white hover:bg-gray-50 hover:border-purple-300 hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200"
                  >
                    Watch Demo
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-6-8h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" />
                    </svg>
                  </Link>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Free 7-day trial
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    No credit card required
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Setup in 2 minutes
                  </div>
                </div>
              </div>

              {/* Right Column - Visual */}
              <div className="relative">
                <div className="relative bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-1 transition-transform duration-500">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur opacity-25"></div>
                  <div className="relative bg-white rounded-xl p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">AI Visibility Report</h3>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Live
                        </span>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">ChatGPT Mentions</span>
                          <span className="text-sm font-semibold text-gray-900">8/10 queries</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full w-4/5"></div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Competitor Ranking</span>
                          <span className="text-sm font-semibold text-purple-600">#2 of 15</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                                                      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full w-3/5"></div>
                        </div>
                        
                        <div className="pt-2 border-t border-gray-100">
                          <p className="text-xs text-gray-500">Last updated: 2 minutes ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Stats */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 transform -rotate-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">94%</div>
                    <div className="text-xs text-gray-600">Visibility Score</div>
                  </div>
                </div>
                
                <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 transform rotate-12">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">+47%</div>
                    <div className="text-xs text-gray-600">AI Mentions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Platforms Showcase Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Monitor Your Visibility Across 
                <span className="block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Every AI Platform
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From conversational AI to creative tools, track how your business appears in the complete AI ecosystem
              </p>
            </div>
            
            {/* Main AI Platforms Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg" alt="ChatGPT" className="w-12 h-12" style={{filter: 'invert(0)'}} />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 text-center">ChatGPT</h3>
                <p className="text-xs text-gray-500 text-center mt-1">Conversational AI</p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/anthropic.svg" alt="Claude" className="w-12 h-12" style={{filter: 'invert(0)'}} />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 text-center">Claude</h3>
                <p className="text-xs text-gray-500 text-center mt-1">AI Assistant</p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googlegemini.svg" alt="Gemini" className="w-12 h-12" style={{filter: 'invert(0)'}} />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 text-center">Gemini</h3>
                <p className="text-xs text-gray-500 text-center mt-1">Google AI</p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.7 14.0 C26.7 15.8 26.0 17.5 24.8 18.7 L24.8 18.7 C23.6 19.9 21.9 20.6 20.1 20.6 L7.9 20.6 C6.1 20.6 4.4 19.9 3.2 18.7 L3.2 18.7 C2.0 17.5 1.3 15.8 1.3 14.0 L1.3 14.0 C1.3 12.2 2.0 10.5 3.2 9.3 L3.2 9.3 C4.4 8.1 6.1 7.4 7.9 7.4 L20.1 7.4 C21.9 7.4 23.6 8.1 24.8 9.3 L24.8 9.3 C26.0 10.5 26.7 12.2 26.7 14.0 Z" fill="#1FB8CD"/>
                    <path d="M20.2 14.0 C20.2 15.1 19.7 16.1 18.9 16.9 C18.1 17.7 17.1 18.2 16.0 18.2 C14.9 18.2 13.9 17.7 13.1 16.9 C12.3 16.1 11.8 15.1 11.8 14.0 C11.8 12.9 12.3 11.9 13.1 11.1 C13.9 10.3 14.9 9.8 16.0 9.8 C17.1 9.8 18.1 10.3 18.9 11.1 C19.7 11.9 20.2 12.9 20.2 14.0 Z" fill="white"/>
                    <path d="M16.4 14.0 C16.4 14.2 16.3 14.4 16.2 14.5 C16.1 14.6 15.9 14.7 15.7 14.7 C15.5 14.7 15.3 14.6 15.2 14.5 C15.1 14.4 15.0 14.2 15.0 14.0 C15.0 13.8 15.1 13.6 15.2 13.5 C15.3 13.4 15.5 13.3 15.7 13.3 C15.9 13.3 16.1 13.4 16.2 13.5 C16.3 13.6 16.4 13.8 16.4 14.0 Z" fill="#1FB8CD"/>
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-gray-900 text-center">Perplexity</h3>
                <p className="text-xs text-gray-500 text-center mt-1">AI Search</p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftbing.svg" alt="Bing AI" className="w-12 h-12" style={{filter: 'invert(0)'}} />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 text-center">Bing AI</h3>
                <p className="text-xs text-gray-500 text-center mt-1">Microsoft AI</p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/meta.svg" alt="Llama" className="w-12 h-12" style={{filter: 'invert(0)'}} />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 text-center">Llama</h3>
                <p className="text-xs text-gray-500 text-center mt-1">Meta AI</p>
              </div>
            </div>
            
            {/* Additional AI Tools Grid */}
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-4">
              <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-2">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/midjourney.svg" alt="Midjourney" className="w-8 h-8" style={{filter: 'invert(0)'}} />
                </div>
                <h3 className="text-xs font-medium text-gray-900 text-center">Midjourney</h3>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-2">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/stability.svg" alt="Stable Diffusion" className="w-8 h-8" style={{filter: 'invert(0)'}} />
                </div>
                <h3 className="text-xs font-medium text-gray-900 text-center">Stable AI</h3>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-2">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/cohere.svg" alt="Cohere" className="w-8 h-8" style={{filter: 'invert(0)'}} />
                </div>
                <h3 className="text-xs font-medium text-gray-900 text-center">Cohere</h3>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-2">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/huggingface.svg" alt="Hugging Face" className="w-8 h-8" style={{filter: 'invert(0)'}} />
                </div>
                <h3 className="text-xs font-medium text-gray-900 text-center">Hugging Face</h3>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-2">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/replicate.svg" alt="Replicate" className="w-8 h-8" style={{filter: 'invert(0)'}} />
                </div>
                <h3 className="text-xs font-medium text-gray-900 text-center">Replicate</h3>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-2">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/runwayml.svg" alt="Runway" className="w-8 h-8" style={{filter: 'invert(0)'}} />
                </div>
                <h3 className="text-xs font-medium text-gray-900 text-center">Runway</h3>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-2">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/jasper.svg" alt="Jasper" className="w-8 h-8" style={{filter: 'invert(0)'}} />
                </div>
                <h3 className="text-xs font-medium text-gray-900 text-center">Jasper</h3>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-2">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/cursor.svg" alt="Cursor" className="w-8 h-8" style={{filter: 'invert(0)'}} />
                </div>
                <h3 className="text-xs font-medium text-gray-900 text-center">Cursor</h3>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-2">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg" alt="GitHub Copilot" className="w-8 h-8" style={{filter: 'invert(0)'}} />
                </div>
                <h3 className="text-xs font-medium text-gray-900 text-center">Copilot</h3>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">...and 25+ more AI platforms continuously monitored</p>
              <Link
                href="/check"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Check Your AI Visibility Now
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">10K+</div>
                <div className="text-gray-600">Businesses Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">50M+</div>
                <div className="text-gray-600">AI Queries Tested</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">85%</div>
                <div className="text-gray-600">Improved Visibility</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-gray-600">Monitoring</div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                How <span className="text-primary-600">ChatRank</span> Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI-powered platform analyzes how your business appears across multiple AI search engines and provides actionable insights to improve your visibility.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {/* Step 1 */}
              <div className="relative text-center group">
                <div className="flex items-center justify-center w-20 h-20 mx-auto bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enter Your Business Details</h3>
                <p className="text-gray-600 mb-6">Provide your brand name, industry, target audience, and key services. Our system creates a comprehensive business profile for analysis.</p>
                
                {/* Connection Line */}
                <div className="hidden md:block absolute top-10 -right-6 w-12 h-0.5 bg-gradient-to-r from-primary-300 to-transparent"></div>
              </div>

              {/* Step 2 */}
              <div className="relative text-center group">
                <div className="flex items-center justify-center w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Search Simulation</h3>
                <p className="text-gray-600 mb-6">We run hundreds of real queries across ChatGPT, Bard, and other AI platforms to see how often your business gets recommended.</p>
                
                {/* Connection Line */}
                <div className="hidden md:block absolute top-10 -right-6 w-12 h-0.5 bg-gradient-to-r from-blue-300 to-transparent"></div>
              </div>

              {/* Step 3 */}
              <div className="relative text-center group">
                <div className="flex items-center justify-center w-20 h-20 mx-auto bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Report & Strategy</h3>
                <p className="text-gray-600 mb-6">Receive detailed insights with visibility scores, competitor analysis, and step-by-step recommendations to improve your AI search rankings.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Powerful Features for <span className="text-primary-600">AI Dominance</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to monitor, analyze, and improve your business's presence in AI search results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200">
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Real AI Search Testing</h3>
                <p className="text-gray-600 leading-relaxed">Simulate actual user queries across ChatGPT, Bard, Claude, and other AI platforms to see authentic recommendation patterns.</p>
              </div>

              {/* Feature 2 */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200">
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Competitor Intelligence</h3>
                <p className="text-gray-600 leading-relaxed">Identify which competitors dominate AI recommendations and discover the strategies they use to rank higher.</p>
              </div>

              {/* Feature 3 */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200">
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Actionable Recommendations</h3>
                <p className="text-gray-600 leading-relaxed">Get specific, data-driven strategies to improve your content, SEO, and online presence for better AI visibility.</p>
              </div>

              {/* Feature 4 */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200">
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Real-Time Monitoring</h3>
                <p className="text-gray-600 leading-relaxed">Track your AI visibility scores continuously with automated alerts when your rankings change significantly.</p>
              </div>

              {/* Feature 5 */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200">
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Analytics</h3>
                <p className="text-gray-600 leading-relaxed">Deep dive into detailed reports with sentiment analysis, mention frequency, and visibility trends over time.</p>
              </div>

              {/* Feature 6 */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200">
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Support</h3>
                <p className="text-gray-600 leading-relaxed">Get personalized guidance from our AI visibility experts to implement winning strategies for your industry.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Trusted by <span className="text-primary-600">Industry Leaders</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how businesses across industries are using ChatRank to dominate AI search results.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <img
                    className="h-14 w-14 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1494790108755-2616b95a5161?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Sarah Chen"
                  />
                  <div className="ml-4">
                    <div className="text-lg font-semibold text-gray-900">Sarah Chen</div>
                    <div className="text-gray-600">VP Marketing, TechFlow</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">"ChatRank revealed that our competitors were dominating AI recommendations. Within 3 months of implementing their strategies, we increased our AI mentions by 340%."</p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <img
                    className="h-14 w-14 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Michael Rodriguez"
                  />
                  <div className="ml-4">
                    <div className="text-lg font-semibold text-gray-900">Michael Rodriguez</div>
                    <div className="text-gray-600">CEO, InnovateSpace</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">"We had no idea ChatGPT wasn't recommending our SaaS platform. ChatRank's competitor analysis showed exactly what we needed to fix. Game changer!"</p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <img
                    className="h-14 w-14 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Lisa Thompson"
                  />
                  <div className="ml-4">
                    <div className="text-lg font-semibold text-gray-900">Lisa Thompson</div>
                    <div className="text-gray-600">Founder, EcoDesign Studio</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">"The real-time monitoring feature is incredible. We get alerts whenever our AI visibility changes, allowing us to react quickly to market shifts."</p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-gradient-to-br from-primary-600 to-blue-700 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Dominate AI Search Results?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses using ChatRank to monitor, analyze, and improve their AI visibility. Start your free trial today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/check"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-xl text-primary-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Free Trial
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-semibold rounded-xl text-white bg-transparent hover:bg-white hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200"
              >
                Talk to Sales
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Link>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-primary-100">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                7-day free trial
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                No credit card required
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Setup in minutes
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <span className="text-2xl font-bold">ChatRank</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                The leading AI visibility platform helping businesses understand and improve their presence in AI search results.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Product</h4>
              <ul className="space-y-4">
                <li><Link href="/#features" className="text-gray-400 hover:text-white transition-colors">Features</Link></li>
                <li><Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/check" className="text-gray-400 hover:text-white transition-colors">Free Check</Link></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Support</h4>
              <ul className="space-y-4">
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Status Page</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 ChatRank AI Visibility Checker. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
             `}</style>
     </>
   )
 } 