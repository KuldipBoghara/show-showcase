import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Placeholder shoe images for different colors (you can replace these URLs with actual images)
const shoeImages = {
  red: 'https://via.placeholder.com/400x400?text=Red+Shoe',
  blue: 'https://via.placeholder.com/400x400?text=Blue+Shoe',
  green: 'https://via.placeholder.com/400x400?text=Green+Shoe'
};

const Customizer = () => {
  const [selectedColor, setSelectedColor] = useState('red');

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="py-20 bg-gray-100">
      <h2 className="text-4xl text-center mb-10">Customize Your Shoe</h2>
      <div className="flex flex-col items-center">
        <motion.img
          key={selectedColor}
          src={shoeImages[selectedColor]}
          alt={`${selectedColor} shoe`}
          className="w-96 h-96 object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="mt-8 flex space-x-4">
          <motion.button
            className={`w-12 h-12 rounded-full bg-red-500`}
            whileHover={{ scale: 1.1 }}
            onClick={() => handleColorChange('red')}
          />
          <motion.button
            className={`w-12 h-12 rounded-full bg-blue-500`}
            whileHover={{ scale: 1.1 }}
            onClick={() => handleColorChange('blue')}
          />
          <motion.button
            className={`w-12 h-12 rounded-full bg-green-500`}
            whileHover={{ scale: 1.1 }}
            onClick={() => handleColorChange('green')}
          />
        </div>
      </div>
    </div>
  );
};

export default Customizer;
