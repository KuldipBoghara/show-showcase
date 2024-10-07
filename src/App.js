/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
 */

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CollectionOverview from './components/CollectionOverview';
import FeaturedCarousel from './components/FeaturedCarousel';
import ProductDetails from './components/ProductDetails';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

const App = () => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    // Fetch shoes from the Pexels API
    axios
      .get('https://api.pexels.com/v1/search?query=shoes&per_page=20', {
        headers: {
          Authorization:
            'DDjZrqayCtwJa2LFzO1YxcvRaSRQ74zx7whAfkIKUs1wgJlEYtJJDQSB'
        }
      })
      .then((response) => {
        setShoes(response.data.photos);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="font-sans">
      <Header />
      <HeroSection />
      <CollectionOverview shoes={shoes} />
      <FeaturedCarousel shoes={shoes} />
      <ProductDetails shoes={shoes} />
      <Reviews />
      <Footer />
    </div>
  );
};

export default App;
