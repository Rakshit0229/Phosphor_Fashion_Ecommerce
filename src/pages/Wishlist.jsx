import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { getWishlist, removeFromWishlist } from '../services/wishlist';
import './Wishlist.css';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    loadWishlist();

    const handleWishlistUpdate = () => {
      loadWishlist();
    };

    window.addEventListener('wishlistUpdated', handleWishlistUpdate);
    return () => window.removeEventListener('wishlistUpdated', handleWishlistUpdate);
  }, []);

  const loadWishlist = () => {
    setWishlist(getWishlist());
  };

  const handleRemove = (productId) => {
    removeFromWishlist(productId);
  };

  const handleQuickAdd = (product) => {
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItem = existingCart.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      existingCart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(existingCart));
    window.dispatchEvent(new Event('cartUpdated'));
    alert('Added to cart!');
  };

  return (
    <div className="wishlist-page container section-padding pt-navbar">
      <div className="wishlist-header">
        <h1>My Wishlist</h1>
        <p className="text-muted">{wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} saved</p>
      </div>

      {wishlist.length === 0 ? (
        <div className="empty-wishlist">
          <Heart size={64} className="empty-icon" />
          <h2>Your wishlist is empty</h2>
          <p className="text-muted">Save your favorite items to keep track of them</p>
          <Link to="/shop" className="btn btn-primary mt-4">Continue Shopping</Link>
        </div>
      ) : (
        <div className="wishlist-grid">
          {wishlist.map(product => (
            <div key={product.id} className="wishlist-item">
              <div className="wishlist-item-image">
                <Link to={`/product/${product.id}`}>
                  <img src={product.images[0]} alt={product.name} />
                </Link>
              </div>
              
              <div className="wishlist-item-details">
                <Link to={`/product/${product.id}`} className="wishlist-item-name">
                  {product.name}
                </Link>
                <p className="wishlist-item-category">{product.subCategory}</p>
                <p className="wishlist-item-price">${product.price.toFixed(2)}</p>
                
                <div className="wishlist-item-actions">
                  <button 
                    className="add-to-cart-btn"
                    onClick={() => handleQuickAdd(product)}
                  >
                    <ShoppingBag size={16} />
                    Add to Cart
                  </button>
                  <button 
                    className="remove-btn"
                    onClick={() => handleRemove(product.id)}
                  >
                    <Trash2 size={16} />
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
