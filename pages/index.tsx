import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>ChatRank - AI Visibility Checker</title>
        <meta name="description" content="Find out if ChatGPT recommends your brand when users ask for tools, services, or alternatives" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <span className="text-2xl font-bold text-gray-900">ChatRank</span>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 to-blue-100 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                Is Your Business Visible in{' '}
                <span className="text-primary-600">AI Search?</span>
              </h1>
              <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
                Find out if ChatGPT recommends your brand when users ask for tools, services, or alternatives
              </p>
              <div className="mt-10">
                <Link
                  href="/check"
                  className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Check My Business Now
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">How It Works</h2>
              <p className="mt-4 text-xl text-gray-600">Simple steps to check your AI visibility</p>
            </div>
            
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-primary-100 rounded-full">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">Enter Your Brand Info</h3>
                <p className="mt-2 text-gray-600">Provide your brand name, category, and target audience details</p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-primary-100 rounded-full">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">We Simulate AI Prompts</h3>
                <p className="mt-2 text-gray-600">Our system tests various ChatGPT queries related to your industry</p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-primary-100 rounded-full">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">Get Your AI Visibility Report</h3>
                <p className="mt-2 text-gray-600">Receive detailed insights with score, competitors, and actionable recommendations</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Why Choose ChatRank?</h2>
              <p className="mt-4 text-xl text-gray-600">Comprehensive AI visibility analysis for your business</p>
            </div>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">Simulates Real AI Searches</h3>
                <p className="mt-2 text-gray-600">We use actual ChatGPT queries that your potential customers might ask, giving you authentic insights into your AI visibility.</p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">Identifies Competitors</h3>
                <p className="mt-2 text-gray-600">Discover which competitors ChatGPT recommends instead of your business and understand the competitive landscape.</p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">Actionable Recommendations</h3>
                <p className="mt-2 text-gray-600">Get specific, data-driven suggestions to improve your AI visibility and outrank competitors in AI search results.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">What Our Users Say</h2>
            </div>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-gray-50 rounded-xl p-8">
                <div className="flex items-center">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="https://images.unsplash.com/photo-1494790108755-2616b95a5161?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Sarah Chen"
                  />
                  <div className="ml-4">
                    <div className="text-lg font-medium text-gray-900">Sarah Chen</div>
                    <div className="text-gray-600">Marketing Director</div>
                  </div>
                </div>
                <p className="mt-4 text-gray-700">"ChatRank revealed that our competitors were getting mentioned 3x more than us in AI searches. The insights helped us optimize our strategy."</p>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-gray-50 rounded-xl p-8">
                <div className="flex items-center">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Michael Rodriguez"
                  />
                  <div className="ml-4">
                    <div className="text-lg font-medium text-gray-900">Michael Rodriguez</div>
                    <div className="text-gray-600">CEO, TechStart</div>
                  </div>
                </div>
                <p className="mt-4 text-gray-700">"I had no idea ChatGPT wasn't recommending our SaaS tool. ChatRank's report gave us a clear action plan to improve our AI presence."</p>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-gray-50 rounded-xl p-8">
                <div className="flex items-center">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Lisa Thompson"
                  />
                  <div className="ml-4">
                    <div className="text-lg font-medium text-gray-900">Lisa Thompson</div>
                    <div className="text-gray-600">Founder, DesignCo</div>
                  </div>
                </div>
                <p className="mt-4 text-gray-700">"The competitor analysis was eye-opening. We now understand exactly what we need to do to rank higher in AI recommendations."</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-primary-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Want to see how your business performs in AI search?
            </h2>
            <p className="mt-4 text-xl text-primary-100">
              Get your comprehensive AI visibility report in minutes
            </p>
            <div className="mt-8">
              <Link
                href="/check"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-primary-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Start Your Free Check
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <span className="text-2xl font-bold text-white">ChatRank</span>
            <p className="mt-2 text-gray-400">AI Visibility Checker for Modern Businesses</p>
            <div className="mt-8 border-t border-gray-700 pt-8">
              <p className="text-gray-400 text-sm">
                © 2024 ChatRank. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
} 