import React, { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData(e.target)

    try {
      const response = await fetch('https://formspree.io/f/xgvndkdy', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        setError('Ralat semasa menghantar mesej. Sila cuba lagi.')
      }
    } catch (err) {
      setError('Ralat sambungan. Sila semak internet anda.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-12">
      <h2 className="text-2xl font-semibold">Hubungi</h2>
      <p className="mt-2 text-gray-700">Hubungi atau sebarang pertanyaan</p>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {/* Contact Info */}
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

        {/* Formspree Form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-4 border rounded-lg relative">
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
              disabled={loading}
              className="mt-4 px-4 py-2 bg-bn-blue text-white rounded disabled:opacity-50"
            >
              {loading ? 'Menghantar...' : 'Hantar'}
            </button>

            {error && <p className="text-red-600 mt-2 text-sm">{error}</p>}
          </form>
        ) : (
          <div className="p-4 border rounded-lg flex flex-col items-center justify-center bg-white/90">
            <h3 className="text-lg font-semibold text-bn-blue">Terima kasih!</h3>
            <p className="text-gray-700 mt-1">Mesej anda telah dihantar.</p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 px-4 py-2 text-sm bg-bn-blue text-white rounded"
            >
              Hantar lagi
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
