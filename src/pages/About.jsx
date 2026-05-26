import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="about-header">
          <h1>About Phospor</h1>
          <p className="subtitle">Your Destination for Premium Fashion</p>
        </div>

        <div className="about-content">
          <section className="about-section">
            <h2>Our Story</h2>
            <p>
              Founded with a passion for fashion and a commitment to quality, Phospor has grown from a small idea into a trusted name in online fashion retail. We believe that everyone deserves access to stylish, high-quality clothing that makes them look and feel their best.
            </p>
            <p>
              Our journey began with a simple mission: to curate the finest fashion pieces from around the world and make them accessible to fashion enthusiasts everywhere. Today, we continue to uphold this mission by carefully selecting each product in our collection, ensuring it meets our high standards of quality, style, and value.
            </p>
          </section>

          <section className="about-section">
            <h2>Our Mission</h2>
            <p>
              At Phospor, we're dedicated to providing an exceptional shopping experience that combines convenience, quality, and style. We strive to:
            </p>
            <ul>
              <li>Offer a curated selection of premium fashion items for men and women</li>
              <li>Provide outstanding customer service and support</li>
              <li>Maintain competitive pricing without compromising on quality</li>
              <li>Create a seamless and enjoyable online shopping experience</li>
              <li>Foster a community of fashion enthusiasts who share our passion</li>
            </ul>
          </section>

          <section className="about-section">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>Quality</h3>
                <p>We never compromise on quality. Every product in our collection is carefully selected to ensure it meets our exacting standards.</p>
              </div>
              <div className="value-card">
                <h3>Customer Focus</h3>
                <p>Our customers are at the heart of everything we do. We're committed to providing exceptional service and support.</p>
              </div>
              <div className="value-card">
                <h3>Innovation</h3>
                <p>We constantly evolve and adapt to bring you the latest fashion trends and shopping innovations.</p>
              </div>
              <div className="value-card">
                <h3>Integrity</h3>
                <p>We believe in honest business practices, transparent pricing, and building trust with our customers.</p>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>Our Team</h2>
            <p>
              Behind Phospor is a dedicated team of fashion enthusiasts, designers, and customer service professionals who share a common passion for bringing you the best in fashion. Our team works tirelessly to ensure that every aspect of your shopping experience exceeds your expectations.
            </p>
            <p>
              From our product curators who hand-pick each item to our customer support team who are always ready to help, every member of the Phospor family is committed to your satisfaction.
            </p>
          </section>

          <section className="about-section">
            <h2>Connect With Us</h2>
            <p>
              We'd love to hear from you! Follow us on social media to stay updated on the latest trends, exclusive offers, and behind-the-scenes content.
            </p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/rakshit0229a/" target="_blank" rel="noopener noreferrer" className="social-link">
                LinkedIn
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                Instagram
              </a>
              <a href="https://github.com/Rakshit0229" target="_blank" rel="noopener noreferrer" className="social-link">
                GitHub
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
