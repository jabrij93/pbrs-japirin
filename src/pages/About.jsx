import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-12">
      <h2 className="text-2xl font-semibold">About</h2>
      <p className="mt-4 text-gray-700">Brief biography of Japirin Sahadi. Replace this placeholder with education, experience, community work, and other background that highlights qualifications.</p>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="bg-bn-light p-6 rounded-lg">
          <h3 className="font-semibold">Background</h3>
          <p className="mt-2 text-sm text-gray-700">Family, origin, local ties, community involvement.</p>
        </div>
        <div className="bg-bn-light p-6 rounded-lg">
          <h3 className="font-semibold">Public Service</h3>
          <p className="mt-2 text-sm text-gray-700">Roles held, projects delivered, and community impact.</p>
        </div>
      </div>
    </section>
  )
}
