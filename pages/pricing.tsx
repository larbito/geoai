import React, { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default function Pricing() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <>
      <Head>
        <title>Pricing - ChatRank AI Visibility Intelligence</title>
        <meta name="description" content="Choose the perfect ChatRank plan for your business. Start with our free trial and scale up with professional AI visibility monitoring across 15+ platforms." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0ea5e9" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Pricing - ChatRank AI Visibility Intelligence" />
        <meta property="og:description" content="Transparent pricing for AI visibility monitoring and optimization" />
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
              <Link href="/pricing" className="px-4 py-2 text-primary-600 bg-primary-50 font-medium transition-all duration-200 rounded-lg">
                Pricing
              </Link>
              <Link href="/about" className="px-4 py-2 text-neutral-700 hover:text-primary-600 hover:bg-primary-50 font-medium transition-all duration-200 rounded-lg">
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
                <Link href="/pricing" className="block px-4 py-3 text-primary-600 bg-primary-50 font-medium transition-all duration-200 rounded-lg">
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                Simple, Transparent Pricing
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 leading-tight mb-6">
                Choose Your{' '}
                <span className="bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600 bg-300% animate-gradient bg-clip-text text-transparent">
                  AI Visibility Plan
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed mb-8 max-w-3xl mx-auto">
                Start with our free trial, then choose the plan that scales with your business needs.
              </p>

              {/* Billing Toggle */}
              <div className="inline-flex items-center p-1 bg-neutral-100 rounded-full mb-12">
                <button
                  onClick={() => setIsAnnual(false)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                    !isAnnual 
                      ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg' 
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsAnnual(true)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                    isAnnual 
                      ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg' 
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  Annual
                  <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Save 20%</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Plans Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Starter Plan */}
              <div className="bg-white rounded-3xl shadow-lg border border-neutral-200 p-8 hover:shadow-xl transition-all duration-300">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">Starter</h3>
                  <p className="text-neutral-600 mb-8">Perfect for small businesses getting started with AI visibility</p>
                  
                  <div className="mb-8">
                    <div className="text-5xl font-bold text-neutral-900 mb-2">
                      ${isAnnual ? '39' : '49'}
                      <span className="text-lg font-normal text-neutral-500">/{isAnnual ? 'mo' : 'month'}</span>
                    </div>
                    {isAnnual && <p className="text-sm text-green-600 font-medium">Save $120/year</p>}
                  </div>

                  <ul className="text-left space-y-4 mb-8">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-neutral-700">5 AI platforms monitored</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-neutral-700">Weekly visibility reports</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-neutral-700">Basic competitor analysis</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-neutral-700">Email support</span>
                    </li>
                  </ul>

                  <Link
                    href="/register"
                    className="w-full bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-semibold py-3 px-6 rounded-xl transition-all duration-200 inline-block"
                  >
                    Start Free Trial
                  </Link>
                </div>
              </div>

              {/* Professional Plan */}
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl shadow-xl border-2 border-primary-200 p-8 relative transform scale-105">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">Professional</h3>
                  <p className="text-neutral-600 mb-8">For growing businesses serious about AI visibility</p>
                  
                  <div className="mb-8">
                    <div className="text-5xl font-bold text-neutral-900 mb-2">
                      ${isAnnual ? '99' : '124'}
                      <span className="text-lg font-normal text-neutral-500">/{isAnnual ? 'mo' : 'month'}</span>
                    </div>
                    {isAnnual && <p className="text-sm text-green-600 font-medium">Save $300/year</p>}
                  </div>

                  <ul className="text-left space-y-4 mb-8">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-neutral-700">15+ AI platforms monitored</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-neutral-700">Daily visibility reports</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-neutral-700">Advanced competitor analysis</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-neutral-700">Real-time alerts</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-neutral-700">Custom optimization recommendations</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-neutral-700">Priority support</span>
                    </li>
                  </ul>

                  <Link
                    href="/register"
                    className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-block"
                  >
                    Start Free Trial
                  </Link>
                </div>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-white rounded-3xl shadow-lg border border-neutral-200 p-8 hover:shadow-xl transition-all duration-300">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">Enterprise</h3>
                  <p className="text-neutral-600 mb-8">For large organizations with complex needs</p>
                  
                  <div className="mb-8">
                    <div className="text-5xl font-bold text-neutral-900 mb-2">
                      Custom
                    </div>
                    <p className="text-neutral-500">Contact us for pricing</p>
                  </div>

                  <ul className="text-left space-y-4 mb-8">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-neutral-700">All AI platforms + custom integrations</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-neutral-700">White-label reporting</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-neutral-700">API access</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-neutral-700">Dedicated account manager</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-neutral-700">Custom training & onboarding</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-neutral-700">24/7 phone support</span>
                    </li>
                  </ul>

                  <Link
                    href="/contact"
                    className="w-full bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-semibold py-3 px-6 rounded-xl transition-all duration-200 inline-block"
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-gradient-to-b from-neutral-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-neutral-900 mb-6">
                Pricing{' '}
                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  Questions?
                </span>
              </h2>
              <p className="text-xl text-neutral-600">
                Get answers to the most common questions about our pricing and plans.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 p-8">
                <h3 className="text-xl font-bold text-neutral-900 mb-4">Is there a free trial?</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Yes! We offer a 14-day free trial with access to all Professional plan features. No credit card required to start.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 p-8">
                <h3 className="text-xl font-bold text-neutral-900 mb-4">Can I change plans anytime?</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 p-8">
                <h3 className="text-xl font-bold text-neutral-900 mb-4">What payment methods do you accept?</h3>
                <p className="text-neutral-600 leading-relaxed">
                  We accept all major credit cards (Visa, MasterCard, American Express) and support annual billing. Enterprise customers can also pay by invoice.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 p-8">
                <h3 className="text-xl font-bold text-neutral-900 mb-4">Do you offer refunds?</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Yes, we offer a 30-day money-back guarantee on all paid plans. If you're not satisfied, contact us for a full refund.
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
                Ready to Dominate{' '}
                <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                  AI Search Results?
                </span>
              </h2>

              <p className="text-xl text-neutral-300 leading-relaxed mb-12 max-w-3xl mx-auto">
                Join thousands of businesses using ChatRank to monitor and improve their AI visibility.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/register"
                  className="group px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center text-lg"
                >
                  Start Free Trial
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                
                <Link
                  href="/contact"
                  className="group px-8 py-4 bg-white/80 backdrop-blur-sm text-neutral-700 font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl border border-neutral-200 hover:border-primary-300 flex items-center justify-center text-lg"
                >
                  Contact Sales
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