import React from 'react'
import { Link } from 'react-router-dom'
import Portfolio from '../components/Portfolio'

export default function Home() {
  return (
    <>
      <section className="grid md:grid-cols-2 gap-8 items-center py-12">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">Japirin Sahadi</h1>
          <p className="mt-4 text-lg text-gray-700">
            For a stronger Kundasang — Experienced, Committed, and Ready to Serve.
          </p>

          <div className="mt-6 flex gap-4">
            <Link
              to="/contact"
              className="inline-block px-6 py-3 bg-bn-blue text-white rounded-md font-medium"
            >
              Join the Campaign
            </Link>
            <Link
              to="/about"
              className="inline-block px-6 py-3 border border-gray-300 rounded-md"
            >
              Learn More
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
            <div>
              <div className="text-xs text-gray-500">Party</div>
              <div className="font-semibold">Barisan Nasional</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">Constituency</div>
              <div className="font-semibold">DUN Kundasang</div>
            </div>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="w-72 h-72 rounded-xl overflow-hidden shadow-lg">
            <img
              src="/portrait.jpg"
              alt="Candidate portrait"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 👇 Add portfolio section here */}
      <Portfolio />
    </>
  )
}