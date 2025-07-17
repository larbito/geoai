import React, { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <Head>
        <title>About ChatRank - AI Visibility Intelligence Leaders</title>
        <meta name="description" content="Learn about ChatRank's mission to help businesses dominate AI search results. Our team of AI experts helps 10,000+ companies improve their visibility across ChatGPT, Claude, and other platforms." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0ea5e9" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="About ChatRank - AI Visibility Intelligence Leaders" />
        <meta property="og:description" content="Meet the team revolutionizing how businesses appear in AI search results" />
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
              <Link href="/about" className="px-4 py-2 text-primary-600 bg-primary-50 font-medium transition-all duration-200 rounded-lg">
                About
              </Link>
              <Link href="/contact" className="px-4 py-2 text-neutral-700 hover:text-primary-600 hover:bg-primary-50 font-medium transition-all duration-200 rounded-lg">
                Contact
              </Link>
              <Link
                href="/register"
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
                <Link href="/about" className="block px-4 py-3 text-primary-600 bg-primary-50 font-medium transition-all duration-200 rounded-lg">
                  About
                </Link>
                <Link href="/contact" className="block px-4 py-3 text-neutral-700 hover:text-primary-600 hover:bg-primary-50 font-medium transition-all duration-200 rounded-lg">
                  Contact
                </Link>
                <div className="pt-4 mt-4 border-t border-neutral-200">
                  <Link
                    href="/register"
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
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-4 -right-4 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
            <div className="absolute -bottom-8 -left-4 w-96 h-96 bg-secondary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 text-sm font-medium mb-8">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                About Our Mission
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 leading-tight mb-6">
                Pioneering the{' '}
                <span className="bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600 bg-300% animate-gradient bg-clip-text text-transparent">
                  AI Visibility Revolution
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed mb-12 max-w-3xl mx-auto">
                We're on a mission to help every business thrive in the age of AI by making their visibility in AI search results transparent, measurable, and optimizable.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-neutral-900 mb-2">12K+</div>
                  <div className="text-sm text-neutral-600">Businesses Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-neutral-900 mb-2">50M+</div>
                  <div className="text-sm text-neutral-600">AI Queries Analyzed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-neutral-900 mb-2">96%</div>
                  <div className="text-sm text-neutral-600">Customer Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-neutral-900 mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                  ChatRank was founded when our team realized that the emergence of AI assistants like ChatGPT was fundamentally changing how people discover businesses. Traditional SEO was no longer enough.
                </p>
                <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                  We saw countless businesses losing customers to competitors who were better optimized for AI recommendations, often without even knowing it was happening.
                </p>
                <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                  Today, we're the world's leading AI visibility intelligence platform, helping businesses understand and improve their presence across 15+ AI platforms.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">Founded</h3>
                    <p className="text-3xl font-bold text-primary-600">2023</p>
                  </div>
                  <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">Headquarters</h3>
                    <p className="text-lg font-medium text-neutral-700">San Francisco, CA</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-3xl shadow-2xl border border-neutral-200 p-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-neutral-900">Vision</h3>
                        <p className="text-neutral-600">A world where every business can thrive in AI search</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-neutral-900">Mission</h3>
                        <p className="text-neutral-600">Democratize AI visibility intelligence for all businesses</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-neutral-900">Values</h3>
                        <p className="text-neutral-600">Transparency, innovation, and customer success</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-2xl opacity-20 blur-xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-gradient-to-b from-neutral-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                Meet Our{' '}
                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  Expert Team
                </span>
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Our team combines deep AI expertise with business intelligence to help companies succeed in the new AI-driven landscape.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="group bg-white rounded-2xl shadow-lg border border-neutral-200 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">AS</span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Alex Silva</h3>
                  <p className="text-primary-600 font-medium mb-4">CEO & Co-Founder</p>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    Former ML engineer at Google. PhD in Computer Science from Stanford. Expert in NLP and AI search algorithms.
                  </p>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="group bg-white rounded-2xl shadow-lg border border-neutral-200 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-secondary-400 to-primary-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">SC</span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Sarah Chen</h3>
                  <p className="text-primary-600 font-medium mb-4">CTO & Co-Founder</p>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    Former Principal Engineer at OpenAI. Expert in large language models and AI system optimization.
                  </p>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="group bg-white rounded-2xl shadow-lg border border-neutral-200 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-secondary-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">MR</span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Marcus Rodriguez</h3>
                  <p className="text-primary-600 font-medium mb-4">VP of Product</p>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    Former Product Lead at Microsoft Azure AI. 10+ years building enterprise AI solutions at scale.
                  </p>
                </div>
              </div>

              {/* Team Member 4 */}
              <div className="group bg-white rounded-2xl shadow-lg border border-neutral-200 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-secondary-500 to-primary-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">EP</span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Emily Park</h3>
                  <p className="text-primary-600 font-medium mb-4">Head of Customer Success</p>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    Former Director of Growth at Salesforce. Expert in helping businesses optimize their digital presence.
                  </p>
                </div>
              </div>

              {/* Team Member 5 */}
              <div className="group bg-white rounded-2xl shadow-lg border border-neutral-200 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">DJ</span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">David Johnson</h3>
                  <p className="text-primary-600 font-medium mb-4">Lead AI Researcher</p>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    PhD in AI from MIT. Published researcher in AI reasoning and knowledge representation systems.
                  </p>
                </div>
              </div>

              {/* Team Member 6 */}
              <div className="group bg-white rounded-2xl shadow-lg border border-neutral-200 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-secondary-400 to-primary-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">LT</span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Lisa Thompson</h3>
                  <p className="text-primary-600 font-medium mb-4">VP of Engineering</p>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    Former Principal Engineer at Amazon Web Services. Expert in building scalable AI infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                Our{' '}
                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  Core Values
                </span>
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                These principles guide everything we do and shape how we build products that truly serve our customers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Value 1 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Transparency</h3>
                <p className="text-neutral-600 leading-relaxed">
                  We believe in complete transparency in how AI systems work and provide clear, honest insights about your AI visibility.
                </p>
              </div>

              {/* Value 2 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Innovation</h3>
                <p className="text-neutral-600 leading-relaxed">
                  We're constantly pushing the boundaries of what's possible in AI visibility intelligence and search optimization.
                </p>
              </div>

              {/* Value 3 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Customer-First</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Every decision we make starts with our customers. Your success is our success, and we're committed to your growth.
                </p>
              </div>

              {/* Value 4 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Excellence</h3>
                <p className="text-neutral-600 leading-relaxed">
                  We maintain the highest standards in everything we do, from our technology to our customer support.
                </p>
              </div>

              {/* Value 5 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Collaboration</h3>
                <p className="text-neutral-600 leading-relaxed">
                  We work closely with our customers and partners to build solutions that truly address real business needs.
                </p>
              </div>

              {/* Value 6 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Global Impact</h3>
                <p className="text-neutral-600 leading-relaxed">
                  We're building solutions that help businesses worldwide succeed in the AI-driven future of search and discovery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-600/20 rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Join Our{' '}
                <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                  Mission?
                </span>
              </h2>

              <p className="text-xl text-neutral-300 leading-relaxed mb-12 max-w-3xl mx-auto">
                Whether you're looking to improve your AI visibility or join our team, we'd love to hear from you.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/register"
                  className="group px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center text-lg"
                >
                  Start Your Journey
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                
                <Link
                  href="/contact"
                  className="group px-8 py-4 bg-white/80 backdrop-blur-sm text-neutral-700 font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl border border-neutral-200 hover:border-primary-300 flex items-center justify-center text-lg"
                >
                  Get In Touch
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </Link>
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
                <li><Link href="/register" className="text-neutral-400 hover:text-white transition-colors">Free Analysis</Link></li>
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