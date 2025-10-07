import React from 'react'

export default function Portfolio() {
  const portfolioItems = [
    {
      title: 'Membangun komuniti setempat',
      category: 'Kundasang',
      image: 'portfolio-02.jpg',
      likes: 650,
    },
    {
      title: 'Menghantar bantuan kepada yang memerlukan',
      category: 'Ulu sugut',
      image: 'portfolio-03.jpg',
      likes: 650,
    },
    {
      title: 'Membangun ekonomi tempatan',
      category: 'Ranau',
      image: 'portfolio-04.jpg',
      likes: 650,
    },
    {
      title: 'Meningkatkan infrastruktur kampung',
      category: 'Kg. Timbua',
      image: 'portfolio-05.jpg',
      likes: 650,
    },
  ]

  return (
    <section id="portfolio" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div
          className="text-center mb-12"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="100"
          data-aos-once="true"
        >
          <span className="text-bn-blue uppercase text-sm font-semibold tracking-wider">
            Lihat portfolio dan tinggalkan maklum balas anda
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">Sumbangan</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay={200 + index * 100}
              data-aos-once="true"
            >
              <div className="relative">
                <img src={item.image} alt={item.title} className="w-full h-52 object-cover" />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{item.category}</span>
                  {/* <span>❤️ {item.likes}</span> */}
                </div>
                <h4 className="mt-2 font-semibold text-gray-900">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}