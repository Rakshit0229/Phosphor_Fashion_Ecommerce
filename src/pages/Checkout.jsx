import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import './Checkout.css';

const Checkout = () => {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Load cart from localStorage
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Create order data
    const orderData = {
      id: Date.now().toString(),
      created_at: new Date().toISOString(),
      total_amount: subtotal + shipping,
      status: 'pending',
      payment_status: 'unpaid',
      order_items: cartItems.map(item => ({
        products: {
          name: item.name,
          price: item.price,
          images: item.images
        },
        quantity: item.quantity
      }))
    };
    
    // Store order data in localStorage
    localStorage.setItem('pendingOrder', JSON.stringify(orderData));
    
    // Redirect to PayPal
    setTimeout(() => {
      window.location.href = 'https://paypal.me/rakshit0229';
    }, 500);
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = 0;

  return (
    <div className="checkout-page container section-padding pt-navbar animate-fade-in">
      <div className="checkout-header">
        <h1>Checkout</h1>
        <p className="text-muted"><Lock size={14} className="inline-icon" /> Secure Payment</p>
      </div>

      <div className="checkout-grid">
        <form className="checkout-form" onSubmit={handleSubmit}>
          {/* Contact Info */}
          <div className="form-section">
            <div className="form-section-header">
              <h2>1. Contact Information</h2>
              <span className="text-muted text-sm">demo@example.com</span>
            </div>
          </div>

          {/* Shipping Info */}
          <div className="form-section">
            <h2>2. Shipping Address</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" required />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input type="text" id="address" required />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input type="text" id="city" required />
              </div>
              <div className="form-group">
                <label htmlFor="zipCode">ZIP Code</label>
                <input type="text" id="zipCode" required />
              </div>
            </div>
          </div>

          {/* Payment Info */}
          <div className="form-section">
            <h2>3. Payment Method</h2>
            <div className="form-group">
              <label htmlFor="cardName">Name on Card</label>
              <input type="text" id="cardName" required />
            </div>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input type="text" id="cardNumber" placeholder="0000 0000 0000 0000" required />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="expDate">Expiration Date</label>
                <input type="text" id="expDate" placeholder="MM/YY" required />
              </div>
              <div className="form-group">
                <label htmlFor="cvv">CVV</label>
                <input type="text" id="cvv" placeholder="123" required />
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-primary submit-btn" disabled={submitting}>
            {submitting ? 'Processing...' : 'Place Order'}
          </button>
        </form>

        <div className="order-summary-sidebar">
          <h3>Order Summary</h3>
          <div className="summary-items">
            {cartItems.map((item) => (
              <div key={item.id} className="summary-item">
                <span className="item-name">{item.name} x{item.quantity}</span>
                <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          
          <div className="summary-totals">
            <div className="total-row">
              <span className="text-muted">Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="total-row">
              <span className="text-muted">Shipping</span>
              <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div className="total-row final">
              <span>Total</span>
              <span>${(subtotal + shipping).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
