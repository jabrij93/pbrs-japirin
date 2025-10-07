import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="py-12">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <p className="mt-2 text-gray-700">Get in touch to volunteer or ask questions.</p>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div>
          <div className="font-semibold">Campaign Office</div>
          <div className="mt-2 text-sm text-gray-700">Address line 1<br/>Kundasang, Sabah</div>

          <div className="mt-4">
            <div className="font-semibold">Phone</div>
            <div className="mt-1 text-sm">+60 12-345 6789</div>
          </div>

          <div className="mt-4">
            <div className="font-semibold">Social</div>
            <div className="mt-1 flex gap-3 text-sm">
              <a href="#" className="hover:text-bn-blue">Facebook</a>
              <a href="#" className="hover:text-bn-blue">Instagram</a>
            </div>
          </div>
        </div>

        <form className="p-4 border rounded-lg" onSubmit={(e)=>e.preventDefault()}>
          <label className="block text-sm">Your name</label>
          <input className="mt-1 w-full border rounded px-3 py-2" />

          <label className="block text-sm mt-4">Message</label>
          <textarea className="mt-1 w-full border rounded px-3 py-2 h-24" />

          <button type="submit" className="mt-4 px-4 py-2 bg-bn-blue text-white rounded">Send</button>
        </form>
      </div>
    </section>
  )
}
