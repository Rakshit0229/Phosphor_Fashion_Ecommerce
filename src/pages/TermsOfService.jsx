import React from 'react';
import './TermsOfService.css';

const TermsOfService = () => {
  return (
    <div className="terms-of-service-page">
      <div className="container">
        <div className="terms-header">
          <h1>Terms of Service</h1>
          <p className="subtitle">Please Read These Terms Carefully</p>
        </div>

        <div className="terms-content">
          <section className="terms-section">
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using Phospor, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services. We reserve the right to modify these terms at any time, and your continued use of the website constitutes acceptance of any changes.
            </p>
          </section>

          <section className="terms-section">
            <h2>Account Registration</h2>
            <p>To access certain features of our website, you may be required to create an account. You agree to:</p>
            <ul>
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
              <li>Be responsible for all activities that occur under your account</li>
            </ul>
            <p>You are responsible for maintaining the confidentiality of your account and password. You agree not to share your account credentials with any third party.</p>
          </section>

          <section className="terms-section">
            <h2>Products and Services</h2>
            <p>We strive to provide accurate descriptions and images of our products. However, we do not warrant that:</p>
            <ul>
              <li>Product descriptions are completely error-free</li>
              <li>Colors displayed on our website are exact representations</li>
              <li>All products are available at all times</li>
            </ul>
            <p>We reserve the right to limit the quantity of products purchased by any customer and to discontinue products without notice.</p>
          </section>

          <section className="terms-section">
            <h2>Pricing and Payment</h2>
            <p>All prices are listed in USD unless otherwise specified. We reserve the right to modify prices at any time without prior notice. Prices displayed at the time of purchase will apply to your order.</p>
            <p>Payment is due at the time of purchase. We accept various payment methods as listed on our website. By providing payment information, you represent and warrant that you are authorized to use the payment method.</p>
          </section>

          <section className="terms-section">
            <h2>Orders and Acceptance</h2>
            <p>We reserve the right to accept or decline your order for any reason, including but not limited to:</p>
            <ul>
              <li>Product availability</li>
              <li>Errors in product descriptions or pricing</li>
              <li>Suspected fraud or unauthorized transactions</li>
              <li>Violation of these Terms of Service</li>
            </ul>
            <p>After you place an order, you will receive an email confirmation. This confirmation does not constitute acceptance of your order. We accept your order when we ship the products to you.</p>
          </section>

          <section className="terms-section">
            <h2>Shipping and Delivery</h2>
            <p>Shipping times are estimates and are not guaranteed. We are not liable for any delays in shipping or delivery. Risk of loss transfers to you upon delivery to the shipping carrier.</p>
            <p>Please refer to our Shipping & Returns policy for detailed information about shipping options, costs, and delivery times.</p>
          </section>

          <section className="terms-section">
            <h2>Returns and Refunds</h2>
            <p>Our return policy is outlined in our Shipping & Returns page. By placing an order, you agree to comply with our return policy. We reserve the right to refuse returns that do not meet our policy requirements.</p>
          </section>

          <section className="terms-section">
            <h2>Intellectual Property</h2>
            <p>All content on our website, including but not limited to text, graphics, logos, images, and software, is the property of Phospor or its content suppliers and is protected by intellectual property laws.</p>
            <p>You may not:</p>
            <ul>
              <li>Use our content for commercial purposes without permission</li>
              <li>Modify, reproduce, or distribute our content</li>
              <li>Remove any copyright or proprietary notices</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>User Conduct</h2>
            <p>You agree not to use our website for any unlawful purpose or in any way that could damage the website or impair its availability. Prohibited activities include:</p>
            <ul>
              <li>Using automated systems to access our website</li>
              <li>Interfering with the operation of our website</li>
              <li>Attempting to gain unauthorized access to our systems</li>
              <li>Posting false or misleading information</li>
              <li>Harassing or abusing other users or our staff</li>
              <li>Violating any applicable laws or regulations</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, Phospor shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website or products. Our total liability to you for all claims shall not exceed the amount you paid for the products or services in question.</p>
          </section>

          <section className="terms-section">
            <h2>Indemnification</h2>
            <p>You agree to indemnify and hold harmless Phospor, its officers, directors, employees, and agents from any claims, damages, or expenses arising from your use of our website or violation of these Terms of Service.</p>
          </section>

          <section className="terms-section">
            <h2>Governing Law</h2>
            <p>These Terms of Service shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in New York, New York.</p>
          </section>

          <section className="terms-section">
            <h2>Changes to Terms</h2>
            <p>We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to our website. Your continued use of our website after changes constitutes acceptance of the modified terms.</p>
          </section>

          <section className="terms-section">
            <h2>Contact Us</h2>
            <p>If you have any questions about these Terms of Service, please contact us:</p>
            <div className="contact-info">
              <p><strong>Email:</strong> legal@phospor.com</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Address:</strong> 123 Fashion Street, New York, NY 10001</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
