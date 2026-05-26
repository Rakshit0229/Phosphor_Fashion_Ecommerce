import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, User, Menu, X, Heart, Globe, DollarSign } from 'lucide-react';
import { createClient } from '@insforge/sdk';
import { getWishlistCount } from '../services/wishlist';
import { useLanguage } from '../contexts/LanguageContext';
import { useCurrency } from '../contexts/CurrencyContext';
import './Navbar.css';

const insforge = createClient({
  baseUrl: import.meta.env.VITE_INSFORGE_URL,
  anonKey: import.meta.env.VITE_INSFORGE_ANON_KEY
});

const Navbar = () => {
  const { language, changeLanguage } = useLanguage();
  const { currency, currencies, changeCurrency } = useCurrency();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Load cart count from localStorage
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      const count = cart.reduce((acc, item) => acc + item.quantity, 0);
      setCartCount(count);
    };

    // Load wishlist count
    const updateWishlistCount = () => {
      setWishlistCount(getWishlistCount());
    };

    updateCartCount();
    updateWishlistCount();

    // Load current user from InsForge
    const loadUser = async () => {
      const { data, error } = await insforge.auth.getCurrentUser();
      if (data.user) {
        setUser(data.user);
      }
    };

    loadUser();

    // Listen for cart updates
    const handleCartUpdate = () => {
      updateCartCount();
    };

    const handleWishlistUpdate = () => {
      updateWishlistCount();
    };

    window.addEventListener('cartUpdated', handleCartUpdate);
    window.addEventListener('wishlistUpdated', handleWishlistUpdate);
    window.addEventListener('storage', (e) => {
      if (e.key === 'cart') {
        updateCartCount();
      }
    });

    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdate);
      window.removeEventListener('wishlistUpdated', handleWishlistUpdate);
      window.removeEventListener('storage', handleCartUpdate);
    };
  }, []);

  const handleLogout = async () => {
    await insforge.auth.signOut();
    setUser(null);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results page with query parameter
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setSearchOpen(false);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
    document.body.classList.toggle('dark-mode', savedDarkMode);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <Link to="/" className="logo">
          PHOSPHOR<span>.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/shop/women" className={location.pathname === '/shop/women' ? 'active' : ''}>Women</Link>
          <Link to="/shop/men" className={location.pathname === '/shop/men' ? 'active' : ''}>Men</Link>
          <Link to="/shop/new" className={location.pathname === '/shop/new' ? 'active' : ''}>New Arrivals</Link>
        </nav>

        {/* Actions */}
        <div className="nav-actions">
          <button className="icon-btn" onClick={() => setSearchOpen(!searchOpen)}><Search size={20} /></button>
          {searchOpen && (
            <form onSubmit={handleSearch} className="search-form">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                autoFocus
              />
              <button type="submit"><Search size={16} /></button>
            </form>
          )}
          <Link to="/wishlist" className="icon-btn wishlist-btn">
            <Heart size={20} />
            {wishlistCount > 0 && <span className="wishlist-badge">{wishlistCount}</span>}
          </Link>
          <button className="icon-btn" onClick={toggleDarkMode} title="Toggle Dark Mode">
            {darkMode ? '☀️' : '🌙'}
          </button>
          <button className="icon-btn language-btn" onClick={() => {
            const languages = ['en', 'es', 'fr'];
            const currentIndex = languages.indexOf(language);
            const nextIndex = (currentIndex + 1) % languages.length;
            changeLanguage(languages[nextIndex]);
          }} title="Change Language">
            <Globe size={20} />
            <span className="language-code">{language.toUpperCase()}</span>
          </button>
          <button className="icon-btn currency-btn" onClick={() => {
            const currencyList = Object.keys(currencies);
            const currentIndex = currencyList.indexOf(currency);
            const nextIndex = (currentIndex + 1) % currencyList.length;
            changeCurrency(currencyList[nextIndex]);
          }} title="Change Currency">
            <DollarSign size={20} />
            <span className="currency-code">{currency}</span>
          </button>
          {user ? (
            <>
              <Link to="/profile" className="icon-btn"><User size={20} /></Link>
              <button onClick={handleLogout} className="icon-btn" title="Logout">
                <User size={20} />
              </button>
            </>
          ) : (
            <Link to="/login" className="icon-btn"><User size={20} /></Link>
          )}
          <Link to="/cart" className="icon-btn cart-btn">
            <ShoppingBag size={20} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
