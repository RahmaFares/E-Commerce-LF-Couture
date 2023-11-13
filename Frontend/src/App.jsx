import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import NewsPage from './Pages/NewsPage';
import ContactUs from './Pages/ContactUs';
import styled from 'styled-components';
import bgphoto from './assets/images/bgphoto.jpg';
import Dresses from './Pages/Dresses';
import Accessories from './Pages/Accessories';
import DressDetails from './Pages/DressDetails';
import ShoppingCart from './Pages/ShoppingCart';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Wishlist from './Pages/Wishlist';
import Checkout from './Pages/Checkout';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { useSelector } from "react-redux";

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

const stripePromise = loadStripe('pk_test_51O41GSBr0OR7cHe5TDnAEG1j6LrXLYQbb8Odwgd4yacflm1uHeXalwDBCngBtddeX7Wg3He401oKhqz19aCfeUHo00OJFNDujs');

function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <AuthProvider>
            <AppContainer>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/dresses" element={<Dresses />} />
                <Route path="/accessories" element={<Accessories />} />
                <Route path="/product/:id" element={<DressDetails />} />
                <Route path="/shoppingcart" element={<ProtectedRoute />}>
                  <Route index element={<ShoppingCart />} />
                </Route>
                <Route path="/wishlist" element={<ProtectedRoute />}>
                  <Route index element={<Wishlist />} />
                </Route>
                <Route path="/checkout" element={<ProtectedRoute />}>
                  <Route index element={
                    <Elements stripe={stripePromise}>
                      <Checkout />
                    </Elements>
                  } />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
              <Footer />
            </AppContainer>
          </AuthProvider>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;