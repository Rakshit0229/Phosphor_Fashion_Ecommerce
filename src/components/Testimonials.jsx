import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Sophia Chen',
    role: 'Fashion Blogger',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    text: 'Absolutely stunning quality. The Silk Slip Dress exceeded every expectation — the fabric feels like second skin and the cut is immaculate. Worth every single penny.',
    product: 'Silk Slip Dress',
  },
  {
    id: 2,
    name: 'Marcus Webb',
    role: 'Creative Director',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    text: 'The Classic Wool Overcoat is my go-to this winter. The attention to detail in stitching and the warmth it provides is unparalleled. This brand truly understands quality.',
    product: 'Classic Wool Overcoat',
  },
  {
    id: 3,
    name: 'Isabella Torres',
    role: 'Personal Stylist',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    text: "I've ordered from dozens of luxury brands, and this collection stands among the very best. The Cashmere Sweater is cloud-like softness — I wear it every single week.",
    product: 'Oversized Cashmere Sweater',
  },
  {
    id: 4,
    name: 'James Harrington',
    role: 'Architect',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    text: 'Minimalist, refined, and built to last. The Tailored Slim Trousers fit like they were made for me. Fast shipping and the most beautiful packaging I have ever seen.',
    product: 'Tailored Slim Trousers',
  },
  {
    id: 5,
    name: 'Ava Nakamura',
    role: 'Photographer',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    text: 'The Structured Leather Tote is absolute perfection. Daily use for six months and it still looks brand new. Timeless design that effortlessly elevates every outfit.',
    product: 'Structured Leather Tote',
  },
];

const StarRating = ({ rating }) => (
  <div className="star-row" aria-label={`${rating} out of 5 stars`}>
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={14}
        fill={i < rating ? '#c9a84c' : 'none'}
        stroke={i < rating ? '#c9a84c' : '#ccc'}
      />
    ))}
  </div>
);

const Testimonials = () => {
  const [active, setActive] = useState(0);

  const prev = () => setActive(c => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setActive(c => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="testimonials-section section-padding" id="testimonials">
      <div className="container">

        {/* ── Section Header ───────────────────────────── */}
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-eyebrow">Reviews</span>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="testimonials-sub">
            Real stories from real people who found their signature look with us.
          </p>
        </motion.div>

        {/* ── Featured Testimonial ─────────────────────── */}
        <div className="testimonial-featured-wrapper">
          <button className="t-nav-btn" onClick={prev} aria-label="Previous">
            <ChevronLeft size={20} />
          </button>

          <div className="testimonial-featured-viewport">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="testimonial-featured"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <Quote size={44} className="quote-icon" />
                <p className="featured-text">{testimonials[active].text}</p>
                <StarRating rating={testimonials[active].rating} />
                <div className="featured-author">
                  <img
                    src={testimonials[active].avatar}
                    alt={testimonials[active].name}
                    className="featured-avatar"
                  />
                  <div className="featured-author-info">
                    <span className="featured-name">{testimonials[active].name}</span>
                    <span className="featured-role">{testimonials[active].role}</span>
                    <span className="featured-product">Purchased: {testimonials[active].product}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button className="t-nav-btn" onClick={next} aria-label="Next">
            <ChevronRight size={20} />
          </button>
        </div>

        {/* ── Dot Indicators ───────────────────────────── */}
        <div className="t-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`t-dot ${i === active ? 'active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* ── Grid Cards ───────────────────────────────── */}
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              className={`testimonial-card ${i === active ? 'is-active' : ''}`}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              whileHover={{ y: -4 }}
            >
              <StarRating rating={t.rating} />
              <p className="card-text">"{t.text.slice(0, 110)}…"</p>
              <div className="card-author">
                <img src={t.avatar} alt={t.name} className="card-avatar" />
                <div className="card-author-info">
                  <span className="card-name">{t.name}</span>
                  <span className="card-role">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
