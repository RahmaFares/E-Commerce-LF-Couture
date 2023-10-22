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
import ShoppingCart from './Pages/ShoppingCart';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

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
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
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
              <Route path="/ShoppingCart" element={<ShoppingCart />} />
            </Routes>
            <Footer />
          </AppContainer>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
