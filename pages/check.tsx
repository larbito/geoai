import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default function Check() {
  return (
    <>
      <Head>
        <title>Check Your Business - ChatRank</title>
        <meta name="description" content="Check how your business appears in AI search results" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#9333ea" />
      </Head>

      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/" className="flex justify-start lg:w-0 lg:flex-1">
              <span className="text-2xl font-bold text-gray-900">ChatRank</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="min-h-screen bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-8">
              Check Your Business AI Visibility
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              This feature is coming soon! We're building the AI visibility checker.
            </p>
            
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
              <div className="text-gray-500 mb-6">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 008 10.172V5L8 4z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Under Construction</h2>
              <p className="text-gray-600">
                We're working hard to bring you the most comprehensive AI visibility checker. 
                Check back soon!
              </p>
            </div>

            <div className="mt-12">
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white border-primary-600 hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-200"
              >
                <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
} 