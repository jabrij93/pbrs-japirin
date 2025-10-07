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
            Untuk Kundasang yang lebih baik - Berpengalaman, Komited dan Sedia untuk berkhidmat.
          </p>

          <div className="mt-6 flex gap-4">
            <Link
              to="/contact"
              className="inline-block px-6 py-3 bg-bn-blue text-white rounded-md font-medium"
            >
              Sertai Kempen
            </Link>
            <Link
              to="/about"
              className="inline-block px-6 py-3 border border-gray-300 rounded-md"
            >
              Ketahui lebih lanjut
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
            <div>
              <div className="text-xs text-gray-500">Parti</div>
              <div className="font-semibold">PBRS - Barisan Nasional</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">Tempat Pilihan Raya</div>
              <div className="font-semibold">N.36 Kundasang</div>
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