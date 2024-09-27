import React from 'react';
import { motion } from 'framer-motion';

const CollectionOverview = ({ shoes }) => {
  return (
    <div className="py-20 bg-gray-100">
      <h2 className="text-4xl text-center mb-10">Shoe Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {shoes.slice(0, 4).map((shoe, index) => (
          <motion.div
            key={index}
            className="relative bg-white shadow-lg rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={shoe.src.medium}
              alt={shoe.alt}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">{shoe.photographer}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CollectionOverview;
