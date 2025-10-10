// @ts-nocheck
import React from 'react'

const items = [
  {
    year: '2024',
    title: 'Pengukuhan Kerjasama Ekonomi dan Komuniti',
    desc: 'Terus bekerjasama dengan sektor swasta dan agensi kerajaan melalui peranan dalam PBRS dan NGO bagi memperkukuh hubungan komuniti serta menyokong pertumbuhan ekonomi negeri Sabah.',
  },
  {
    year: '2023',
    title: 'Pembangunan Luar Bandar Ranau',
    desc: 'Menyokong inisiatif pembangunan luar bandar di Ranau melalui kerjasama dengan pihak berkuasa tempatan dan komuniti bagi memperbaiki kemudahan asas dan kesejahteraan penduduk.',
  },
  {
    year: '2018 - Kini',
    title: 'Kepimpinan Politik dan Komuniti',
    desc: 'Memperkukuh hubungan komuniti dan menyampaikan dasar parti kepada masyarakat setempat sebagai Ketua Bahagian Parti Bersatu Rakyat Sabah (PBRS).',
  },
  {
    year: '2013 - 2016',
    title: 'Penggubalan Dasar Sains, Teknologi dan Inovasi',
    desc: 'Membantu dalam penggubalan dasar dan strategi bagi memajukan agenda sains, teknologi, dan inovasi negara ketika berkhidmat sebagai Setiausaha Politik kepada Menteri MOSTI.',
  },
  {
    year: '2008 - 2013',
    title: 'Pembangunan Sosial dan Belia',
    desc: 'Memimpin dan melaksanakan program sosial, kebajikan, dan pendidikan bagi golongan muda sebagai Ketua Pemuda Barisan Nasional Ranau dan UPKO.',
  },
  {
    year: '2008 - 2013',
    title: 'Pembangunan Ekonomi dan Pelaburan Negeri',
    desc: 'Menyelaras inisiatif untuk menarik pelaburan dan mempromosikan industri tempatan ketika berkhidmat sebagai Setiausaha Politik KPLB dan UPKO Ranau.',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-12">
      <h2 className="text-2xl font-semibold">Pencapaian</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {items.map((it) => (
          <div key={it.title} className="p-4 border rounded-lg">
            <div className="text-sm text-gray-500">{it.year}</div>
            <div className="font-semibold mt-1">{it.title}</div>
            <div className="mt-2 text-sm text-gray-600 text-justify">
              {it.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}