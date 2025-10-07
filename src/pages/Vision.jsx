import React from 'react'

export default function Vision() {
  return (
    <section id="vision" className="py-12">
      <h2 className="text-2xl font-semibold">Visi & Misi</h2>
      <p className="mt-4 text-gray-700">Short, punchy vision statement followed by 3-4 mission points.</p>

      <ul className="mt-4 grid md:grid-cols-3 gap-4">
        <li className="p-4 border rounded">Membaik pulih dan meningkatkan kemudahan dan infrastruktur setempat</li>
        <li className="p-4 border rounded">Mencipta lebih banyak peluang pekerjaan dan menyokong pembangunan perniagaan setempat</li>
        <li className="p-4 border rounded">Menyokong pembangunan dan pendidikan belia</li>
      </ul>
    </section>
  )
}
