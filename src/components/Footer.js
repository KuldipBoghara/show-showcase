import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <p>&copy; 2024 Shoe Collection. All Rights Reserved.</p>
      <div className="mt-4">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:underline mx-2"
        >
          Instagram
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:underline mx-2"
        >
          Twitter
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:underline mx-2"
        >
          Facebook
        </a>
      </div>
    </footer>
  );
};

export default Footer;
