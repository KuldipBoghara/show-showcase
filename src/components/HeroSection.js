import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <motion.div
      className="h-screen bg-cover bg-center text-white flex items-center justify-center"
      style={{ backgroundImage: `url('/hero-background.jpg')` }} // Replace with actual hero image
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="text-center">
        <motion.h1
          className="text-6xl font-bold"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          Discover Your Perfect Pair
        </motion.h1>
        <motion.button
          className="mt-8 px-6 py-3 bg-blue-500 rounded-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Browse Collection
        </motion.button>
      </div>
    </motion.div>
  );
};

export default HeroSection;
