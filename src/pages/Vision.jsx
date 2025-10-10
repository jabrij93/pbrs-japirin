import React from 'react'

export default function Vision() {
  const misiItems = [
    {
      title: 'Memperkasa Ekonomi Rakyat Desa',
      desc: 'Membuka peluang pekerjaan dan keusahawanan kepada belia melalui sektor pelancongan, pertanian moden, dan perusahaan kecil. Menubuhkan Pusat Pengumpulan Hasil Pertanian Kundasang bagi membantu petani memasarkan produk terus ke pasaran.',
    },
    {
      title: 'Membangun Infrastruktur dan Kemudahan Asas',
      desc: 'Menaik taraf jalan pertanian, bekalan air, elektrik dan liputan internet di semua kampung. Memastikan setiap keluarga di kawasan pedalaman Kundasang menikmati kemudahan asas yang lebih baik.',
    },
    {
      title: 'Menjaga Kepentingan dan Suara Anak Tempatan',
      desc: 'Mengutamakan penyertaan anak jati Kundasang dalam setiap peluang pembangunan. Memperjuangkan hak tanah, peluang kerja, dan pendidikan untuk generasi muda tempatan.',
    },
    {
      title: 'Memajukan Pelancongan Berasaskan Komuniti',
      desc: 'Mempromosikan Kundasang sebagai destinasi pelancongan eko dan budaya terunggul di Sabah. Menggalakkan penglibatan penduduk kampung dalam projek pelancongan desa dan inap desa.',
    },
    {
      title: 'Membina Masyarakat Bersatu dan Harmoni',
      desc: 'Menyemai nilai perpaduan, tolong-menolong, dan semangat kemasyarakatan di antara semua lapisan rakyat. Memastikan kebajikan warga emas, ibu tunggal, dan golongan B40 terus dibela.',
    },
  ]

  return (
    <section id="vision" className="py-12">
      <h2 className="text-2xl font-semibold">Visi</h2>

      {/* Vision Box */}
      <ul className="mt-6 grid md:grid-cols-2 gap-6">
        <li
          className="p-5 border rounded-lg shadow-sm hover:shadow-md transition duration-300 bg-white col-span-2"
        >
          <div className="font-semibold text-lg mt-1 text-bn-black">
            Kundasang Maju, Rakyat Sejahtera, Suara Jati Anak Kundasang.
          </div>
          <div className="mt-3 text-base text-gray-700 text-justify leading-relaxed">
            Menjadikan Kundasang sebagai kawasan pergunungan yang maju, berdaya saing dan makmur,
            dengan pembangunan seimbang antara pertanian, pelancongan dan kesejahteraan rakyat tempatan.
          </div>
        </li>
      </ul>

      {/* Mission Section */}
      <h2 className="text-2xl font-semibold mt-8">Misi</h2>

      <ul className="mt-6 grid md:grid-cols-2 gap-6">
        {misiItems.map((it, index) => (
          <li
            key={index}
            className="p-5 border rounded-lg shadow-sm hover:shadow-md transition duration-300 bg-white"
          >
            <div className="font-semibold text-lg mt-1 text-bn-black">{it.title}</div>
            <div className="mt-3 text-base text-gray-700 text-justify leading-relaxed">{it.desc}</div>
          </li>
        ))}
      </ul>
    </section>
  )
}
