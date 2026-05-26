import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Truck, RefreshCw, Shield, Headphones } from 'lucide-react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import Testimonials from '../components/Testimonials';
import { fetchTrendingProducts, fetchNewProducts } from '../data/dummyData';
import './Home.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const [trending, newItems] = await Promise.all([
          fetchTrendingProducts(),
          fetchNewProducts()
        ]);
        setTrendingProducts(trending.slice(0, 4));
        setNewProducts(newItems.slice(0, 4));
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    return (
      <div className="home">
        <Hero />
        <div className="container section-padding" style={{ textAlign: 'center', padding: '4rem 0' }}>
          <p>Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="home">
      {/* ── Hero (Full-width Video) ───────────────────── */}
      <Hero />

      {/* ── Marquee Strip ────────────────────────────── */}
      <div className="marquee-strip">
        <div className="marquee-track">
          {[
            'Free Shipping Over $150',
            'New Arrivals Every Week',
            'Sustainable Luxury',
            'Easy Returns',
            'Premium Craftsmanship',
            'Exclusive Collections',
            'Free Shipping Over $150',
            'New Arrivals Every Week',
            'Sustainable Luxury',
            'Easy Returns',
            'Premium Craftsmanship',
            'Exclusive Collections',
          ].map((text, i) => (
            <span key={i} className="marquee-item">
              {text} <span className="marquee-dot">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Trending Now ─────────────────────────────── */}
      <motion.section
        className="section-padding container"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <div className="section-header">
          <div>
            <span className="section-eyebrow">Curated for You</span>
            <h2 className="section-title">Trending Now</h2>
          </div>
          <Link to="/shop/new" className="section-link">
            View All <ArrowRight size={14} />
          </Link>
        </div>

        <div className="products-grid">
          {trendingProducts.map((product, i) => (
            <motion.div
              key={product.id}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── Category Split ────────────────────────────── */}
      <motion.section
        className="categories-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="category-split">
          <Link to="/shop/women" className="category-card">
            <img
              src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=900"
              alt="Women's Collection"
            />
            <div className="category-overlay" />
            <div className="category-content">
              <span className="category-eyebrow">Explore</span>
              <h3>Women</h3>
              <span className="category-cta">Shop Collection <ArrowRight size={14} /></span>
            </div>
          </Link>

          <Link to="/shop/men" className="category-card">
            <img
              src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?auto=format&fit=crop&q=80&w=900"
              alt="Men's Collection"
            />
            <div className="category-overlay" />
            <div className="category-content">
              <span className="category-eyebrow">Explore</span>
              <h3>Men</h3>
              <span className="category-cta">Shop Collection <ArrowRight size={14} /></span>
            </div>
          </Link>
        </div>
      </motion.section>

      {/* ── New Arrivals ──────────────────────────────── */}
      <motion.section
        className="section-padding container"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <div className="section-header">
          <div>
            <span className="section-eyebrow">Just Dropped</span>
            <h2 className="section-title">New Arrivals</h2>
          </div>
          <Link to="/shop/new" className="section-link">
            View All <ArrowRight size={14} />
          </Link>
        </div>

        <div className="products-grid">
          {newProducts.map((product, i) => (
            <motion.div
              key={product.id}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── Brand Story ───────────────────────────────── */}
      <motion.section
        className="brand-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="brand-image-side">
          <img
            src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=900"
            alt="Brand Story"
          />
        </div>
        <div className="brand-text-side">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="section-eyebrow">Our Philosophy</span>
            <h2 className="brand-heading">Elevate Your<br /><em>Everyday</em></h2>
            <p className="brand-body">
              We believe in the power of minimalism. Our collections are designed to transcend
              seasons, focusing on quality craftsmanship and timeless silhouettes. Each piece
              is thoughtfully created to form the foundation of a truly modern wardrobe.
            </p>
            <Link to="/about" className="btn btn-primary">
              Our Story <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* ── Testimonials ─────────────────────────────── */}
      <Testimonials />

      {/* ── Trust Badges ─────────────────────────────── */}
      <section className="trust-section section-padding container">
        <div className="trust-grid">
          {[
            { icon: <Truck size={28} />,       title: 'Free Shipping',      body: 'On all orders over $150' },
            { icon: <RefreshCw size={28} />,   title: 'Easy Returns',       body: '30-day hassle-free returns' },
            { icon: <Shield size={28} />,      title: 'Secure Payments',    body: '100% secure & encrypted' },
            { icon: <Headphones size={28} />,  title: '24/7 Support',       body: 'Dedicated customer service' },
          ].map(({ icon, title, body }, i) => (
            <motion.div
              key={title}
              className="trust-item"
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="trust-icon">{icon}</div>
              <h4 className="trust-title">{title}</h4>
              <p className="trust-body">{body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Newsletter CTA ────────────────────────────── */}
      <section className="newsletter-section">
        <motion.div
          className="newsletter-inner container"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="section-eyebrow" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Stay in the Loop
          </span>
          <h2 className="newsletter-heading">Get Early Access to<br />New Collections</h2>
          <p className="newsletter-sub">
            Subscribe and receive 10% off your first order, plus exclusive style updates.
          </p>
          <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="newsletter-input"
              aria-label="Email address"
            />
            <button type="submit" className="newsletter-btn">
              Subscribe
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
