import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';

const ProductDetails = ({ shoes }) => {
  const [selectedShoe, setSelectedShoe] = useState(null);

  const openModal = (shoe) => {
    setSelectedShoe(shoe);
  };

  const closeModal = () => {
    setSelectedShoe(null);
  };

  return (
    <div className="py-20">
      <h2 className="text-4xl text-center mb-10">Shoe Details</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {shoes.slice(0, 4).map((shoe, index) => (
          <motion.div
            key={index}
            className="relative bg-white shadow-lg rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            onClick={() => openModal(shoe)}
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

      {selectedShoe && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="bg-white p-8 rounded-lg shadow-lg relative">
            <button className="absolute top-2 right-2" onClick={closeModal}>
              <AiOutlineClose size={24} />
            </button>
            <img
              src={selectedShoe.src.large}
              alt={selectedShoe.alt}
              className="w-96 h-96 object-cover"
            />
            <h3 className="mt-4 text-xl font-bold">
              {selectedShoe.photographer}
            </h3>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ProductDetails;
