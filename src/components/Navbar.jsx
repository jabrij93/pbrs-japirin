import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-bn-blue flex items-center justify-center text-white font-bold">BN</div>
          <div>
            <div className="font-semibold">Japirin Sahadi</div>
            <div className="text-xs text-gray-500">N.36 Kundasang</div>
          </div>
        </div>
        <nav className="flex items-center gap-6 text-sm">
          <Link to="/" className="hover:text-bn-blue">Laman Utama</Link>
          <Link to="/about" className="hover:text-bn-blue">Profil</Link>
          <Link to="/achievements" className="hover:text-bn-blue">Pencapaian</Link>
          <Link to="/vision" className="hover:text-bn-blue">Visi & Misi</Link>
          <Link to="/contact" className="px-4 py-2 bg-bn-blue text-white rounded-md">Hubungi</Link>
        </nav>
      </div>
    </header>
  )
}
