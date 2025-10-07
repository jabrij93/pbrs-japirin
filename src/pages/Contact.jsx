import React, { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    const form = e.target
    const formData = new FormData(form)

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setSubmitted(true)
        form.reset()
      })
      .catch((error) => alert(error))
  }

  return (
    <section id="contact" className="py-12">
      <h2 className="text-2xl font-semibold">Hubungi</h2>
      <p className="mt-2 text-gray-700">Hubungi atau sebarang pertanyaan</p>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div>
          <div className="font-semibold">Tempat Kempen</div>
          <div className="mt-2 text-sm text-gray-700">
            Rumah Kediaman Sahadi Dungoi
            <br />
            Kg. Dempisung, Kundasang
            <br />
            Ranau, Sabah
          </div>

          <div className="mt-4">
            <div className="font-semibold">Nombor Telefon</div>
            <div className="mt-1 text-sm">+6016-8282704</div>
          </div>

          <div className="mt-4">
            <div className="font-semibold">Laman Sosial</div>
            <div className="mt-1 flex gap-3 text-sm">
              <a
                href="https://www.facebook.com/profile.php?id=61581520988647"
                className="hover:text-bn-blue"
              >
                Facebook
              </a>
              <a
                href="https://www.tiktok.com/@japirinsahadifanclub?_t=ZS-90Le6Uv3gfw&_r=1"
                className="hover:text-bn-blue"
              >
                Tiktok
              </a>
            </div>
          </div>
        </div>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="p-4 border rounded-lg relative"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="subject" value="New message from website" />

          {!submitted ? (
            <>
              <label className="block text-sm">Nama</label>
              <input
                name="nama"
                className="mt-1 w-full border rounded px-3 py-2"
                required
              />

              <label className="block text-sm mt-4">Mesej</label>
              <textarea
                name="mesej"
                className="mt-1 w-full border rounded px-3 py-2 h-24"
                required
              />

              <button
                type="submit"
                className="mt-4 px-4 py-2 bg-bn-blue text-white rounded"
              >
                Hantar
              </button>
            </>
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/90 rounded-lg">
              <h3 className="text-lg font-semibold text-bn-blue">
                Terima kasih!
              </h3>
              <p className="text-gray-700 mt-1">Mesej anda telah dihantar.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-4 py-2 text-sm bg-bn-blue text-white rounded"
              >
                Hantar lagi
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
