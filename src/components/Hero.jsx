import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div className="hero">
      {/* ── Video Background ─────────────────────────────── */}
      <div className="hero-video-wrapper">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
          poster="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1920"
        >
          <source src="https://www.pexels.com/download/video/10320249/" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
      </div>

      {/* ── Decorative Lines ─────────────────────────────── */}
      <div className="hero-deco-line left" />
      <div className="hero-deco-line right" />

      {/* ── Main Content ─────────────────────────────────── */}
      <div className="hero-content-wrapper">
        <motion.span
          className="hero-eyebrow"
          initial={{ opacity: 0, letterSpacing: '0.6em' }}
          animate={{ opacity: 1, letterSpacing: '0.3em' }}
          transition={{ duration: 1.4, delay: 0.2, ease: 'easeOut' }}
        >
          New Collection · 2025
        </motion.span>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          DEFINE YOUR<br />
          <em>AESTHETIC</em>
        </motion.h1>

        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          Curated luxury for the modern wardrobe
        </motion.p>

        <motion.div
          className="hero-cta-group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link to="/shop" className="hero-btn-primary">
            Shop Now <ArrowRight size={16} />
          </Link>
          <Link to="/shop/new" className="hero-btn-ghost">
            New Arrivals
          </Link>
        </motion.div>

        {/* ── Stats Bar ───────────────────────────────────── */}
        <motion.div
          className="hero-stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          {[
            { value: '500+', label: 'Curated Pieces' },
            { value: '50K+', label: 'Happy Customers' },
            { value: '15+', label: 'Global Brands' },
          ].map(({ value, label }) => (
            <div key={label} className="hero-stat">
              <span className="stat-value">{value}</span>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll Indicator ─────────────────────────────── */}
      <motion.button
        className="scroll-indicator"
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        aria-label="Scroll down"
      >
        <ChevronDown size={22} />
      </motion.button>
    </div>
  );
};

export default Hero;
