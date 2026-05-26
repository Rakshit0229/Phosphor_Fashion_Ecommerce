import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus } from 'lucide-react';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Load cart from localStorage
    const loadCart = () => {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      }
    };

    loadCart();

    // Listen for cart updates
    const handleCartUpdate = () => {
      loadCart();
    };

    window.addEventListener('cartUpdated', handleCartUpdate);
    window.addEventListener('storage', (e) => {
      if (e.key === 'cart') {
        loadCart();
      }
    });

    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdate);
      window.removeEventListener('storage', handleCartUpdate);
    };
  }, []);

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    
    const updatedCart = cartItems.map(item => 
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleRemoveItem = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = 0;

  return (
    <div className="cart-page container section-padding pt-navbar animate-fade-in">
      <h1 className="cart-title">Your Cart</h1>
      
      {cartItems.length > 0 ? (
        <div className="cart-grid">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.images[0]} alt={item.name} className="cart-item-image" />
                
                <div className="cart-item-details">
                  <div className="item-header">
                    <Link to={`/product/${item.id}`} className="item-name">{item.name}</Link>
                    <button 
                      className="remove-btn"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                  
                  <p className="item-prop text-muted">{item.subCategory}</p>
                  <p className="item-price">${item.price.toFixed(2)}</p>
                  
                  <div className="quantity-controls">
                    <button 
                      className="qty-btn"
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    >
                      <Minus size={14} />
                    </button>
                    <span className="qty-value">{item.quantity}</span>
                    <button 
                      className="qty-btn"
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Order Summary</h3>
            
            <div className="summary-row">
              <span className="text-muted">Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span className="text-muted">Shipping</span>
              <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
            </div>
            
            <div className="summary-row total">
              <span>Total</span>
              <span>${(subtotal + shipping).toFixed(2)}</span>
            </div>
            
            <Link to="/checkout" state={{ cartItems }} className="btn btn-primary checkout-btn">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      ) : (
        <div className="empty-cart">
          <p>Your cart is currently empty.</p>
          <Link to="/shop/new" className="btn btn-primary mt-4">Continue Shopping</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
