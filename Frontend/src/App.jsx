import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import NewsPage from './Pages/NewsPage';
import ContactUs from './Pages/ContactUs';
import Register from './Pages/Register';
import styled from 'styled-components';
import bgphoto from './assets/images/bgphoto.jpg';
import Dresses from './Pages/Dresses';
import Accessories from './Pages/Accessories';
import DressDetails from './Pages/DressDetails';
import Wishlist from './Pages/Wishlist';
import yourCart from './Pages/yourCart';
import { WishlistProvider } from './WishlistContext'; // Ensure this import is correct.

const AppContainer = styled.div`
  background-image: url(${bgphoto});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: relative;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: inherit;
    background-size: inherit;
    background-repeat: inherit;
    background-position: inherit;
    filter: blur(5px);
    z-index: -1;
  }
`;

function App() {
  return (
    <Router>
      <WishlistProvider> {/* Wrap your entire app with WishlistProvider */}
        <AppContainer>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dresses" element={<Dresses />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/product/:id" element={<DressDetails />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<yourCart />} />
          </Routes>
          <Footer />
        </AppContainer>
      </WishlistProvider>
    </Router>
  );
}

export default App;
