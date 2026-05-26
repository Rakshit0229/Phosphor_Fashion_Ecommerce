import React from 'react';
import './Careers.css';

const Careers = () => {
  const openPositions = [
    {
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time'
    },
    {
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time'
    },
    {
      title: 'Marketing Specialist',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-time'
    },
    {
      title: 'Customer Support Representative',
      department: 'Customer Success',
      location: 'Remote',
      type: 'Full-time'
    }
  ];

  return (
    <div className="careers-page">
      <div className="container">
        <div className="careers-header">
          <h1>Join Our Team</h1>
          <p className="subtitle">Build the Future of Fashion with Us</p>
        </div>

        <div className="careers-content">
          <section className="careers-section">
            <h2>Why Work at Phospor?</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <h3>🚀 Growth Opportunities</h3>
                <p>We believe in nurturing talent and providing opportunities for professional growth and advancement.</p>
              </div>
              <div className="benefit-card">
                <h3>💰 Competitive Compensation</h3>
                <p>We offer competitive salaries, equity packages, and comprehensive benefits.</p>
              </div>
              <div className="benefit-card">
                <h3>🏠 Remote-First Culture</h3>
                <p>Work from anywhere in the world with our flexible remote work policy.</p>
              </div>
              <div className="benefit-card">
                <h3>🎨 Creative Environment</h3>
                <p>Be part of a team that values creativity, innovation, and bold ideas.</p>
              </div>
              <div className="benefit-card">
                <h3>🌟 Impact-Driven Work</h3>
                <p>Make a real impact on millions of customers' shopping experiences.</p>
              </div>
              <div className="benefit-card">
                <h3>🤝 Collaborative Team</h3>
                <p>Work with talented, passionate people who support and inspire each other.</p>
              </div>
            </div>
          </section>

          <section className="careers-section">
            <h2>Open Positions</h2>
            <div className="positions-list">
              {openPositions.map((position, index) => (
                <div key={index} className="position-card">
                  <div className="position-header">
                    <h3>{position.title}</h3>
                    <button className="apply-btn">Apply Now</button>
                  </div>
                  <div className="position-details">
                    <span className="position-tag">{position.department}</span>
                    <span className="position-tag">{position.location}</span>
                    <span className="position-tag">{position.type}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="careers-section">
            <h2>Our Culture</h2>
            <p>
              At Phospor, we foster a culture of innovation, collaboration, and continuous learning. We believe that great ideas can come from anywhere, and we encourage our team members to think creatively and take ownership of their work.
            </p>
            <p>
              We value diversity and inclusion, and we're committed to creating an environment where everyone feels welcome and empowered to contribute their unique perspectives. Our team is spread across the globe, bringing together diverse backgrounds and experiences to create something truly special.
            </p>
          </section>

          <section className="careers-section">
            <h2>How to Apply</h2>
            <p>
              Interested in joining our team? Send your resume and a brief cover letter to careers@phospor.com. Be sure to mention the position you're applying for in the subject line.
            </p>
            <p>
              We review all applications carefully and will get back to you within 5-7 business days if your qualifications match our current needs. Even if there isn't a perfect fit right now, we'll keep your resume on file for future opportunities.
            </p>
            <div className="contact-box">
              <h3>Email Us</h3>
              <p>careers@phospor.com</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Careers;
