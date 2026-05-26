import React from 'react';
import './ShippingReturns.css';

const ShippingReturns = () => {
  return (
    <div className="shipping-returns-page">
      <div className="container">
        <div className="shipping-header">
          <h1>Shipping & Returns</h1>
          <p className="subtitle">Everything You Need to Know About Delivery and Returns</p>
        </div>

        <div className="shipping-content">
          <section className="shipping-section">
            <h2>Shipping Information</h2>
            
            <div className="shipping-types">
              <div className="shipping-type">
                <h3>Standard Shipping</h3>
                <p><strong>Delivery Time:</strong> 5-7 business days</p>
                <p><strong>Cost:</strong> Free on orders over $50, otherwise $5.99</p>
                <p><strong>Tracking:</strong> Included</p>
              </div>
              
              <div className="shipping-type">
                <h3>Express Shipping</h3>
                <p><strong>Delivery Time:</strong> 2-3 business days</p>
                <p><strong>Cost:</strong> $12.99</p>
                <p><strong>Tracking:</strong> Included with real-time updates</p>
              </div>
              
              <div className="shipping-type">
                <h3>International Shipping</h3>
                <p><strong>Delivery Time:</strong> 7-14 business days</p>
                <p><strong>Cost:</strong> Calculated at checkout based on destination</p>
                <p><strong>Tracking:</strong> Included</p>
              </div>
            </div>

            <div className="shipping-details">
              <h3>Order Processing</h3>
              <p>All orders are processed within 1-2 business days. You will receive a confirmation email with tracking information once your order ships.</p>
              
              <h3>Shipping Destinations</h3>
              <p>We ship to over 100 countries worldwide. Some restrictions may apply to certain locations due to customs regulations.</p>
              
              <h3>Customs and Duties</h3>
              <p>International orders may be subject to customs fees and import duties. These are the responsibility of the customer and will be collected upon delivery.</p>
            </div>
          </section>

          <section className="shipping-section">
            <h2>Returns & Exchanges</h2>
            
            <div className="return-policy">
              <h3>30-Day Return Policy</h3>
              <p>We accept returns within 30 days of purchase. Items must be unworn, unwashed, and in their original condition with all tags attached.</p>
              
              <h3>How to Return</h3>
              <ol>
                <li>Contact our customer service team at support@phospor.com</li>
                <li>Receive a return authorization number and shipping label</li>
                <li>Package the item securely in its original packaging</li>
                <li>Attach the shipping label and drop off at any authorized shipping location</li>
                <li>Receive your refund within 5-7 business days after we receive the item</li>
              </ol>
              
              <h3>Refund Process</h3>
              <p>Refunds are processed to the original payment method within 5-7 business days of receiving and inspecting the returned item. You will receive an email confirmation once your refund is processed.</p>
              
              <h3>Exchanges</h3>
              <p>If you'd like to exchange for a different size or style, please contact us first. We'll arrange for the exchange and send you the new item once we receive the original.</p>
            </div>
          </section>

          <section className="shipping-section">
            <h2>Non-Returnable Items</h2>
            <p>The following items cannot be returned or exchanged:</p>
            <ul>
              <li>Items marked as "Final Sale"</li>
              <li>Personalized or customized items</li>
              <li>Intimate apparel and swimwear (for hygiene reasons)</li>
              <li>Items without original tags or packaging</li>
              <li>Items showing signs of wear or damage</li>
            </ul>
          </section>

          <section className="shipping-section">
            <h2>Lost or Damaged Packages</h2>
            <p>If your package is lost or arrives damaged, please contact us immediately at support@phospor.com. We will work with the shipping carrier to resolve the issue and arrange for a replacement or refund.</p>
            <p>Please note: We are not responsible for packages lost due to incorrect shipping addresses provided by the customer.</p>
          </section>

          <section className="shipping-section">
            <h2>Need Help?</h2>
            <p>If you have any questions about shipping or returns, our customer service team is here to help. Contact us at:</p>
            <div className="contact-info">
              <p><strong>Email:</strong> support@phospor.com</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Hours:</strong> Monday - Friday, 9AM - 6PM EST</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ShippingReturns;
