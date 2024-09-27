import React from 'react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Import modules
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';

const FeaturedCarousel = ({ shoes }) => {
  return (
    <div className="py-20 bg-gray-900 text-white">
      <h2 className="text-4xl text-center mb-10">Featured Shoes</h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        navigation // Enable navigation arrows
        autoplay={{ delay: 3000 }} // Enable autoplay
        pagination={{ clickable: true }} // Enable pagination dots
        modules={[Navigation, Pagination, Autoplay]}
      >
        {shoes.slice(0, 5).map((shoe, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="flex flex-col items-center"
              whileHover={{ scale: 1.1 }}
            >
              <img
                src={shoe.src.large}
                alt={shoe.alt}
                className="w-64 h-64 object-cover"
              />
              <h3 className="mt-4">{shoe.photographer}</h3>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedCarousel;
