import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './portfolio.css' // 👈 add a custom CSS file for styling below

export default function Portfolio() {
  const portfolioItems = [
    {
      title: '',
      category: 'Kundasang',
      image: 'portfolio-02.jpg',
    },
    {
      title: 'Menghantar bantuan kepada yang memerlukan',
      category: 'Ulu Sugut',
      image: 'portfolio-03.jpg',
    },
    {
      title: 'Membangun ekonomi tempatan',
      category: 'Ranau',
      image: 'portfolio-04.jpg',
    },
    {
      title: 'Meningkatkan infrastruktur kampung',
      category: 'Kg. Timbua',
      image: 'portfolio-05.jpg',
    },
  ]

  return (
    <section id="portfolio" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-bn-blue uppercase text-sm font-semibold tracking-wider">
            Berita / Pengumuman
          </span>
          {/* <h2 className="text-3xl font-bold text-gray-900 mt-2">B</h2> */}
        </div>

        {/* 👇 Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1} // 👈 always show only 1 slide
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true, // 👈 smaller, modern dots
          }}
          navigation={true} // 👈 enables next/prev arrows
          speed={800}
          className="pb-10 max-w-4xl mx-auto" // 👈 centers and limits width
        >
          {portfolioItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-transform duration-500">
                <img
                  src={`${import.meta.env.BASE_URL}${item.image}`}
                  alt={item.title}
                  className="w-full h-[450px] object-cover" // 👈 bigger image
                />
                <div className="p-6 text-center">
                  <span className="text-gray-500 text-sm">{item.category}</span>
                  <h4 className="mt-3 font-semibold text-xl text-gray-900">{item.title}</h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
