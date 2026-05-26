import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import './PaymentSuccess.css';

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get pending order from localStorage
    const pendingOrder = localStorage.getItem('pendingOrder');
    
    if (pendingOrder) {
      const orderData = JSON.parse(pendingOrder);
      
      // Update order status to confirmed and paid
      const updatedOrder = {
        ...orderData,
        status: 'confirmed',
        payment_status: 'paid',
        payment_date: new Date().toISOString()
      };
      
      // Store completed order in localStorage
      const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
      existingOrders.push(updatedOrder);
      localStorage.setItem('orders', JSON.stringify(existingOrders));
      
      // Clear pending order
      localStorage.removeItem('pendingOrder');
      
      setOrder(updatedOrder);
    }
    
    setLoading(false);
  }, []);

  useEffect(() => {
    // Redirect to profile after 5 seconds
    if (!loading && order) {
      const timer = setTimeout(() => {
        navigate('/profile');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [loading, order, navigate]);

  if (loading) {
    return (
      <div className="payment-success-page container section-padding pt-navbar animate-fade-in">
        <p>Processing payment...</p>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="payment-success-page container section-padding pt-navbar animate-fade-in">
        <div className="error-message">
          <h2>No pending order found</h2>
          <button className="btn btn-primary mt-4" onClick={() => navigate('/')}>
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="payment-success-page container section-padding pt-navbar animate-fade-in">
      <div className="success-content">
        <div className="success-icon">
          <CheckCircle size={80} />
        </div>
        <h1>Payment Successful!</h1>
        <p className="text-muted">Your order has been confirmed.</p>
        
        <div className="order-details">
          <h2>Order Details</h2>
          <div className="detail-row">
            <span className="label">Order ID:</span>
            <span className="value">#{order.id.slice(0, 8)}</span>
          </div>
          <div className="detail-row">
            <span className="label">Total Amount:</span>
            <span className="value">${order.total_amount.toFixed(2)}</span>
          </div>
          <div className="detail-row">
            <span className="label">Payment Status:</span>
            <span className="value status-paid">Paid</span>
          </div>
          <div className="detail-row">
            <span className="label">Order Status:</span>
            <span className="value status-confirmed">Confirmed</span>
          </div>
        </div>

        <div className="action-buttons">
          <button className="btn btn-primary" onClick={() => navigate('/profile')}>
            View Order History
          </button>
          <button className="btn btn-outline" onClick={() => navigate('/')}>
            Continue Shopping
          </button>
        </div>

        <p className="redirect-info">
          Redirecting to your profile in 5 seconds...
        </p>
      </div>
    </div>
  );
};

export default PaymentSuccess;
