import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-12">
      <h2 className="text-2xl font-semibold">Biografi</h2>
      <p className="mt-4 text-gray-700">Biografi ringkas Japirin Sahadi. Latar belakang pendidikan, pengalaman, dan keterlibatan dalam komuniti setempat.</p>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="bg-bn-light p-6 rounded-lg">
          <h3 className="font-semibold">Latar Belakang</h3>
          <p className="mt-2 text-sm text-gray-700">Keluarga, asal usul, hubungan dengan komuniti setempat dan keterlibatan dalam masyarakat.</p>
        </div>
        <div className="bg-bn-light p-6 rounded-lg">
          <h3 className="font-semibold">Pengalaman</h3>
          <p className="mt-2 text-sm text-gray-700">Jawatan yang dipegang, projek yang disiapkan, dan impak terhadap masyarakat.</p>
        </div>
      </div>
    </section>
  )
}
