import React from 'react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Updated Swiper module imports
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import { AiFillStar } from 'react-icons/ai';

// Fake review data
const reviews = [
  {
    name: 'John Doe',
    rating: 1,
    review:
      'Absolutely love these shoes! Super comfortable and stylish. Highly recommended.'
  },
  {
    name: 'Jane Smith',
    rating: 4,
    review:
      'Great quality shoes, but the sizes run a bit small. Will definitely buy again in a larger size.'
  },
  {
    name: 'Michael Brown',
    rating: 5,
    review: "The best pair of shoes I've ever owned. Worth every penny!"
  },
  {
    name: 'Emily White',
    rating: 4,
    review: 'Stylish and comfortable, but delivery took longer than expected.'
  },
  {
    name: 'Chris Johnson',
    rating: 3,
    review: 'Good design, but the material could be better for the price.'
  }
];

const Reviews = () => {
  return (
    <div className="py-20 bg-gray-100">
      <h2 className="text-4xl text-center mb-10">Customer Reviews</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // Updated Swiper modules
        spaceBetween={30}
        slidesPerView={1} // Show one review per slide on smaller screens
        breakpoints={{
          640: { slidesPerView: 1 }, // For mobile screens, show 1 review
          768: { slidesPerView: 2 }, // For tablets, show 2 reviews
          1024: { slidesPerView: 3 } // For desktops, show 3 reviews
        }}
        loop={true}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        navigation
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="flex items-center mb-4">
                <div className="font-bold text-xl">{review.name}</div>
                <div className="ml-auto flex">
                  {/* Displaying star ratings */}
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 * i, duration: 0.3 }}
                    >
                      <AiFillStar
                        className={
                          i < review.rating
                            ? 'text-yellow-500'
                            : 'text-gray-400'
                        }
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
              <p className="text-gray-700">{review.review}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
