import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import { Provider, useSelector } from 'react-redux';
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
import ProfileSettings from './Pages/ProfileSettings';
import OrderSummary from './Pages/OrderSummary';
import ForgotPassword from './Pages/ForgotPassword';
import ResetPassword from './Pages/ResetPassword';
import AdminRoutes from '../src/admin_panel/src/AdminRouter';

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

// This new component is responsible for rendering routes and is a child of <Router>
const AppRoutes = () => {
  const location = useLocation();
  const user = useSelector((state) => state.user.currentUser);
  const inAdminPanel = location.pathname.startsWith('/admin');

  return (
    <>
      {!inAdminPanel && <Navbar />}
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
        {user?.isAdmin && (
          <Route path="/admin/*" element={<AdminRoutes />} />
        )}
      </Routes>
      {!inAdminPanel && <Footer />}
    </>
  );
};

function App() {
  // The useSelector hook is moved to the AppRoutes component
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <AuthProvider>
            <AppContainer>
              <AppRoutes />
            </AppContainer>
          </AuthProvider>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
