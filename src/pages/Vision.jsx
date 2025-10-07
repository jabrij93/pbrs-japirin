import React from 'react'

export default function Vision() {
  return (
    <section id="vision" className="py-12">
      <h2 className="text-2xl font-semibold">Vision & Mission</h2>
      <p className="mt-4 text-gray-700">Short, punchy vision statement followed by 3-4 mission points.</p>

      <ul className="mt-4 grid md:grid-cols-3 gap-4">
        <li className="p-4 border rounded">Improve local infrastructure</li>
        <li className="p-4 border rounded">Create more jobs and support small businesses</li>
        <li className="p-4 border rounded">Support education and youth development</li>
      </ul>
    </section>
  )
}
