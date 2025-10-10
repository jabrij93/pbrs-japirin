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
      title: 'Perasmian PDM Kundasang',
      category: 'Kundasang',
      image: 'poster.jpg',
    },
    {
      title: 'Menghantar bantuan kepada yang memerlukan',
      category: 'Ulu Sugut',
      image: 'portfolio-03.jpg',
    }
  ]

  return (
    <section id="portfolio" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <span className="text-bn-blue uppercase text-xl font-semibold tracking-wider">
            Berita / Pengumuman
          </span>
          {/* <h2 className="text-3xl font-bold text-gray-900 mt-2">B</h2> */}
        </div>

        {/* 👇 Swiper Slider */}
        <div className="relative max-w-4xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            speed={800}
            loop={true}
            className="pb-10"
          >
            {portfolioItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-transform duration-500">
                  <img
                    src={`${import.meta.env.BASE_URL}${item.image}`}
                    alt={item.title}
                    className="w-full h-[450px] object-cover"
                  />
                  <div className="p-6 text-center">
                    <span className="text-gray-500 text-sm">{item.category}</span>
                    <h4 className="mt-3 font-semibold text-xl text-gray-900">{item.title}</h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* 👇 Custom Arrows (outside the image) */}
          <button className="custom-prev absolute -left-14 top-1/2 -translate-y-1/2 bg-white shadow-md border border-gray-200 rounded-full p-3 hover:bg-bn-blue hover:text-white transition-all duration-300">
            ‹
          </button>
          <button className="custom-next absolute -right-14 top-1/2 -translate-y-1/2 bg-white shadow-md border border-gray-200 rounded-full p-3 hover:bg-bn-blue hover:text-white transition-all duration-300">
            ›
          </button>
        </div>
      </div>
    </section>
  )
}
