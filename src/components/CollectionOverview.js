import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './customSwiper.css'; // Custom CSS for Swiper arrows

const CollectionOverview = ({ shoes }) => {
  return (
    <div className="py-20 bg-gray-100">
      <h2 className="text-4xl text-center mb-10">Shoe Categories</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20} // Space between slides
        slidesPerView={4} // Constant 4 slides per view
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 1000
        }}
        //loop={true} // Enable looping for continuous autoplay
        //watchSlidesProgress={true}
        className="flex justify-center group collection-swiper"
      >
        {shoes.slice(0, 8).map((shoe, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative bg-white shadow-lg rounded-full overflow-hidden"
              style={{
                width: '100%', // Take full width in the container
                maxWidth: '300px', // Max width to limit size
                height: 'auto', // Automatic height based on content
                clipPath: 'ellipse(100% 100% at 50% 0%)'
              }}
            >
              {/* Image */}
              <img
                src={shoe.src.medium}
                alt={shoe.alt}
                className="w-full h-64 object-cover sm:h-72 md:h-80 lg:h-96 xl:h-96" // Responsive height
              />

              {/* Text overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h3 className="text-lg md:text-xl font-bold text-white">
                  {shoe.photographer}
                </h3>{' '}
                {/* Responsive text size */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CollectionOverview;
