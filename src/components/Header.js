import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaUserCircle } from 'react-icons/fa';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchExpanded, setIsSearchExpanded] = useState(false); // Track search bar expansion

  const handleSearch = () => {
    // Implement search functionality here
    console.log('Search:', searchQuery);
  };

  return (
    <header className="bg-gray-800 text-white p-4 flex items-center justify-between relative">
      {/* Brand name and animated logo */}
      <motion.div
        className="text-3xl font-bold flex items-center"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-blue-500">MK</span> <span>shoe</span>
      </motion.div>

      {/* Search bar and menu options */}
      <div className="relative mx-4 flex items-center space-x-6">
        {/* Search Bar - Expands on hover */}
        <div
          className={`relative ${
            isSearchExpanded ? 'w-96' : 'w-12'
          } transition-all duration-300 ease-in-out`}
          onMouseEnter={() => setIsSearchExpanded(true)}
          onMouseLeave={() => setIsSearchExpanded(false)}
        >
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`h-12 pl-6 pr-16 text-black border-none focus:outline-none rounded-full 
              ${
                isSearchExpanded ? 'w-full opacity-100' : 'w-0 opacity-0'
              } transition-all duration-300`}
          />
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white h-12 w-12 rounded-full flex items-center justify-center"
            onClick={handleSearch}
          >
            <FaSearch size={20} />
          </button>
        </div>

        {/* Navigation options for larger screens */}
        <nav className="hidden sm:flex items-center space-x-6">
          <a
            href="/collections"
            className="hover:text-blue-500 transition-colors"
          >
            Collections
          </a>
          <a
            href="/new-releases"
            className="hover:text-blue-500 transition-colors"
          >
            New Releases
          </a>
          <a href="/men" className="hover:text-blue-500 transition-colors">
            Men
          </a>
          <a href="/women" className="hover:text-blue-500 transition-colors">
            Women
          </a>
        </nav>
      </div>

      {/* Sign in/out button */}
      <div className="flex items-center space-x-4">
        <button
          className="bg-gray-700 p-2 rounded-full hover:bg-gray-600"
          // You can implement the onClick functionality here later
        >
          <FaUserCircle size={30} />
        </button>
      </div>
    </header>
  );
};

export default Header;
