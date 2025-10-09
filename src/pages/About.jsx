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

          <ul className="mt-2 text-sm text-gray-700 list-disc list-inside space-y-1 text-justify">
            <li>Setiausaha Politik kepada Menteri, Kementerian Sains, Teknologi, Inovasi dan Ekonomi (MOSTI), 2013-2016</li>
            <li>Setiausaha Politik kepada Menteri, Kementerian Pembangunan Luar Bandar Negeri Sabah (KPLB), 2008-2013</li>
            <li>Setiausaha Politik kepada Menteri, Kementerian Pembangunan Perindustrian Negeri Sabah (MID), 2004-2008</li>
            <li>Ketua Bahagian Dun Kundasang, Parti Bersatu Rakyat Sabah (PBRS), 2018-sekarang</li>
            <li>Timbalan Ketua Bahagian UPKO Ranau, United Progressive Kinabalu Organisation, 2008-2013</li>
            <li>Ketua Pemuda Barisan Nasional Ranau, Barisan Nasional, 2008-2013</li>
            <li>Ketua Pemuda UPKO Bahagian Ranau, United Progressive Kinabalu Organisation, 2003-2008</li>
          </ul>

          <h4 className="font-semibold mt-2">Penglibatan dalam NGO:</h4>
          <ul className="mt-2 text-sm text-gray-700 list-disc list-inside space-y-1 text-justify">
            <li>Naib Presiden, United Sabah Dusun Association (USDA)</li>
            <li>Presiden, Kundasang Highland Four Wheel Drive Club (KHFWDC), 2020-sekarang</li>
          </ul>
        </div>
        </div>
    </section>
  )
}
