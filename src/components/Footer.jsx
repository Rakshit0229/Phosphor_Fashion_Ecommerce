import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section-padding">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="logo">
            PHOSPHOR<span>.</span>
          </Link>
          <p className="text-muted footer-desc">
            Elevating everyday style with premium, minimalist fashion. Designed for the modern individual.
          </p>
        </div>
        
        <div className="footer-links">
          <h4>Shop</h4>
          <ul>
            <li><Link to="/shop/women">Women's Collection</Link></li>
            <li><Link to="/shop/men">Men's Collection</Link></li>
            <li><Link to="/shop/new">New Arrivals</Link></li>
            <li><Link to="/shop/sale">Sale</Link></li>
          </ul>
        </div>
        
        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/careers">Careers</Link></li>
          </ul>
        </div>
        
        <div className="footer-links">
          <h4>Support</h4>
          <ul>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/shipping-returns">Shipping & Returns</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="container footer-bottom">
        <div className="social-links">
          <a href="https://www.linkedin.com/in/rakshit0229a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
          <a href="https://github.com/Rakshit0229" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub</a>
        </div>
        <p className="text-muted copyright">
          &copy; {new Date().getFullYear()} PHOSPHOR. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
