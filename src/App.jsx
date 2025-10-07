import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Achievements from './pages/Achievements'
import Vision from './pages/Vision'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<About />} />
          <Route path="/pencapaian" element={<Achievements />} />
          <Route path="/visi" element={<Vision />} />
          <Route path="/hubungi" element={<Contact />} />
        </Routes>
      </main>
      <footer className="border-t mt-12 py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Japirin Sahadi — N.36 Kundasang
      </footer>
    </div>
  )
}
