import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { CurrencyProvider } from './contexts/CurrencyContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LiveChat from './components/LiveChat';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Auth from './components/Auth';
import AuthCallback from './components/AuthCallback';
import Profile from './pages/Profile';
import PaymentSuccess from './pages/PaymentSuccess';
import About from './pages/About';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import FAQ from './pages/FAQ';
import ShippingReturns from './pages/ShippingReturns';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Wishlist from './pages/Wishlist';

function App() {
  return (
    <LanguageProvider>
      <CurrencyProvider>
        <Router>
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop/:category" element={<Shop />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/login" element={<Auth mode="login" />} />
              <Route path="/auth/callback" element={<AuthCallback />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/payment/success" element={<PaymentSuccess />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/shipping-returns" element={<ShippingReturns />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
          <LiveChat />
        </Router>
      </CurrencyProvider>
    </LanguageProvider>
  );
}

export default App;
