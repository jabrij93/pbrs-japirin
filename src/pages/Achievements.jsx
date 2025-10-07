import React from 'react'

const items = [
  { year: '2024', title: 'Community Centre Renovation', desc: 'Led repairs and fundraising to reopen the centre.' },
  { year: '2022', title: 'Youth Scholarship Program', desc: 'Established a small scholarship for local students.' },
  { year: '2020', title: 'Market Infrastructure Upgrade', desc: 'Coordinated improvements for the local market.' },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-12">
      <h2 className="text-2xl font-semibold">Achievements</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {items.map((it) => (
          <div key={it.title} className="p-4 border rounded-lg">
            <div className="text-sm text-gray-500">{it.year}</div>
            <div className="font-semibold mt-1">{it.title}</div>
            <div className="mt-2 text-sm text-gray-600">{it.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
