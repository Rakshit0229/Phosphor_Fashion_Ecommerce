import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-page">
      <div className="container">
        <div className="privacy-header">
          <h1>Privacy Policy</h1>
          <p className="subtitle">Your Privacy Matters to Us</p>
        </div>

        <div className="privacy-content">
          <section className="privacy-section">
            <h2>Introduction</h2>
            <p>
              At Phospor, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. By using Phospor, you agree to the terms of this policy.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us, including:</p>
            <ul>
              <li>Name and contact information (email, phone, address)</li>
              <li>Account credentials (username, password)</li>
              <li>Payment information (processed securely through third-party payment processors)</li>
              <li>Shipping and billing addresses</li>
              <li>Profile information and preferences</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>We may automatically collect certain information when you use our website, including:</p>
            <ul>
              <li>IP address and browser type</li>
              <li>Device information and operating system</li>
              <li>Pages visited and time spent on each page</li>
              <li>Referring website</li>
              <li>Clickstream data</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect for various purposes, including:</p>
            <ul>
              <li>Processing and fulfilling your orders</li>
              <li>Providing customer service and support</li>
              <li>Sending you order confirmations and shipping notifications</li>
              <li>Improving our website and services</li>
              <li>Personalizing your shopping experience</li>
              <li>Sending marketing communications (with your consent)</li>
              <li>Preventing fraud and ensuring security</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>Information Sharing</h2>
            <p>We may share your information with third parties in the following circumstances:</p>
            <ul>
              <li><strong>Service Providers:</strong> We may share information with third-party service providers who assist us in operating our website, processing payments, and providing services.</li>
              <li><strong>Shipping Partners:</strong> We share shipping information with shipping carriers to deliver your orders.</li>
              <li><strong>Legal Requirements:</strong> We may disclose information if required by law or to protect our rights.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred.</li>
            </ul>
            <p>We do not sell your personal information to third parties for their marketing purposes.</p>
          </section>

          <section className="privacy-section">
            <h2>Cookies and Tracking Technologies</h2>
            <p>We use cookies and similar tracking technologies to collect information about your browsing activities. Cookies are small data files stored on your device. You can control cookies through your browser settings, but disabling cookies may affect your experience on our website.</p>
            <p>We use cookies for:</p>
            <ul>
              <li>Remembering your preferences and settings</li>
              <li>Keeping you logged in to your account</li>
              <li>Tracking website usage and analytics</li>
              <li>Personalizing content and advertisements</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>Data Security</h2>
            <p>We implement appropriate security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. These include:</p>
            <ul>
              <li>SSL encryption for data transmission</li>
              <li>Secure payment processing through PCI-compliant providers</li>
              <li>Regular security audits and updates</li>
              <li>Access controls and authentication systems</li>
            </ul>
            <p>However, no method of transmission over the internet is completely secure. We cannot guarantee absolute security.</p>
          </section>

          <section className="privacy-section">
            <h2>Your Rights</h2>
            <p>You have certain rights regarding your personal information:</p>
            <ul>
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Opt-out:</strong> Opt-out of marketing communications</li>
              <li><strong>Portability:</strong> Request transfer of your data</li>
            </ul>
            <p>To exercise these rights, please contact us at privacy@phospor.com</p>
          </section>

          <section className="privacy-section">
            <h2>Children's Privacy</h2>
            <p>Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.</p>
          </section>

          <section className="privacy-section">
            <h2>Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date. We encourage you to review this policy periodically.</p>
          </section>

          <section className="privacy-section">
            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
            <div className="contact-info">
              <p><strong>Email:</strong> privacy@phospor.com</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Address:</strong> 123 Fashion Street, New York, NY 10001</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
