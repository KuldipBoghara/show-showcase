import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaUserCircle } from 'react-icons/fa';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(true); // For demonstration, set this to true or false as needed

  const handleSearch = () => {
    // Implement search functionality here
    console.log('Search:', searchQuery);
  };

  const handleSignOut = () => {
    // Implement sign-out functionality here
    setIsLoggedIn(false);
  };

  return (
    <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
      <motion.div
        className="text-3xl font-bold flex items-center"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-blue-500">MK</span> <span>shoe</span>
      </motion.div>

      <div className="relative flex-grow mx-8">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full h-12 rounded-full pl-6 pr-16 text-black border-none focus:outline-none"
        />
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white h-12 w-12 rounded-full flex items-center justify-center"
          onClick={handleSearch}
        >
          <FaSearch size={20} />
        </button>
      </div>

      <div className="flex items-center space-x-4">
        {isLoggedIn ? (
          <button
            className="bg-gray-700 p-2 rounded-full hover:bg-gray-600"
            onClick={handleSignOut}
          >
            <FaUserCircle size={30} />
          </button>
        ) : (
          <button
            className="bg-blue-500 p-2 rounded-full hover:bg-blue-600"
            // Implement sign-in functionality
          >
            Sign In
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
