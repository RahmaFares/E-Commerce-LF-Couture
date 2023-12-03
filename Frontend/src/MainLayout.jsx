import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import NewsPage from './Pages/NewsPage';
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
import ProfileSettings from './Pages/ProfileSettings';
import OrderSummary from './Pages/OrderSummary';
import ForgotPassword from './Pages/ForgotPassword'; // Adjust the path as necessary
import ResetPassword from './Pages/ResetPassword'; // Adjust the path as necessary
import AdminPanel from './admin_panel/src/App';

function MainLayout() {
    return (
        <div>
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
                <Route path="/profile-settings" element={<ProfileSettings />} />
                <Route path='/order-summary/:orderId' element={<OrderSummary />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password/:token" element={<ResetPassword />} />
            </Routes>
            <Footer />

        </div>
    );
}

export default MainLayout;