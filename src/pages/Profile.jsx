import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createClient } from '@insforge/sdk';
import './Profile.css';

const insforge = createClient({
  baseUrl: import.meta.env.VITE_INSFORGE_URL,
  anonKey: import.meta.env.VITE_INSFORGE_ANON_KEY
});

const Profile = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('orders');
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Load user from InsForge
    const loadUser = async () => {
      const { data, error } = await insforge.auth.getCurrentUser();
      if (data.user) {
        setUser(data.user);
      } else {
        navigate('/login');
      }
    };

    loadUser();

    // Load orders from localStorage (for now, can be moved to InsForge later)
    const storedOrders = localStorage.getItem('orders');
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders));
    }
  }, [navigate]);

  const handleLogout = async () => {
    await insforge.auth.signOut();
    navigate('/');
  };

  const getStatusColor = (status) => {
    const colors = {
      pending: '#f59e0b',
      processing: '#3b82f6',
      shipped: '#8b5cf6',
      delivered: '#10b981',
      cancelled: '#ef4444',
      confirmed: '#10b981',
    };
    return colors[status] || '#666';
  };

  if (!user) {
    return (
      <div className="profile-container">
        <div className="not-logged-in">
          <h2>Please sign in to view your profile</h2>
          <a href="/login" className="btn">Sign In</a>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">
          <div className="avatar-placeholder">
            {user.email?.[0]?.toUpperCase() || 'U'}
          </div>
        </div>
        <div className="profile-info">
          <h1>{user.user_metadata?.full_name || user.email}</h1>
          <p>{user.email}</p>
          <button onClick={handleLogout} className="logout-btn">
            Sign Out
          </button>
        </div>
      </div>

      <div className="profile-tabs">
        <button
          className={`tab ${activeTab === 'orders' ? 'active' : ''}`}
          onClick={() => setActiveTab('orders')}
        >
          Orders
        </button>
        <button
          className={`tab ${activeTab === 'account' ? 'active' : ''}`}
          onClick={() => setActiveTab('account')}
        >
          Account Settings
        </button>
      </div>

      {activeTab === 'orders' && (
        <div className="orders-section">
          <h2>Order History</h2>
          {orders.length === 0 ? (
            <div className="no-orders">
              <p>No orders yet</p>
              <a href="/" className="btn">Start Shopping</a>
            </div>
          ) : (
            <div className="orders-list">
              {orders.map((order) => (
                <div key={order.id} className="order-card">
                  <div className="order-header">
                    <div className="order-id">
                      <span>Order #{order.id.slice(0, 8)}</span>
                      <span className="order-date">
                        {new Date(order.created_at).toLocaleDateString()}
                      </span>
                    </div>
                    <div
                      className="order-status"
                      style={{ color: getStatusColor(order.status) }}
                    >
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </div>
                  </div>

                  <div className="order-items">
                    {order.order_items?.map((item, idx) => (
                      <div key={idx} className="order-item">
                        <img
                          src={item.products?.images?.[0] || '/placeholder.jpg'}
                          alt={item.products?.name}
                        />
                        <div className="item-details">
                          <h4>{item.products?.name}</h4>
                          <p>Qty: {item.quantity}</p>
                          <p className="item-price">
                            ${(item.products?.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="order-footer">
                    <div className="order-total">
                      <span>Total:</span>
                      <span className="total-amount">
                        ${order.total_amount.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {activeTab === 'account' && (
        <div className="account-section">
          <h2>Account Settings</h2>
          <div className="account-details">
            <div className="detail-item">
              <label>Email</label>
              <p>{user.email}</p>
            </div>
            <div className="detail-item">
              <label>Full Name</label>
              <p>{user.user_metadata?.full_name || 'Not set'}</p>
            </div>
            <div className="detail-item">
              <label>Member Since</label>
              <p>{new Date(user.created_at).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
