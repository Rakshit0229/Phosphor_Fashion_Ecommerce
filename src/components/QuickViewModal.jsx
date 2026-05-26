import React, { useState } from 'react';
import { X, ShoppingBag, Heart } from 'lucide-react';
import { addToWishlist, removeFromWishlist, isInWishlist } from '../services/wishlist';
import './QuickViewModal.css';

const QuickViewModal = ({ product, onClose, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [wishlisted, setWishlisted] = useState(isInWishlist(product.id));

  const handleWishlistToggle = () => {
    if (wishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product.id);
    }
    setWishlisted(!wishlisted);
  };

  const handleAddToCart = () => {
    if (selectedSize) {
      onAddToCart(product, selectedSize);
      onClose();
    }
  };

  return (
    <div className="quick-view-overlay" onClick={onClose}>
      <div className="quick-view-modal" onClick={(e) => e.stopPropagation()}>
        <button className="quick-view-close" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="quick-view-content">
          <div className="quick-view-image">
            <img src={product.images[0]} alt={product.name} />
          </div>

          <div className="quick-view-details">
            <p className="quick-view-category">{product.subCategory}</p>
            <h2 className="quick-view-title">{product.name}</h2>
            <p className="quick-view-price">${product.price.toFixed(2)}</p>
            <p className="quick-view-description">{product.description}</p>

            <div className="quick-view-sizes">
              <p className="size-label">Select Size:</p>
              <div className="size-options">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="quick-view-actions">
              <button
                className="add-to-cart-btn"
                disabled={!selectedSize}
                onClick={handleAddToCart}
              >
                <ShoppingBag size={18} />
                {selectedSize ? 'Add to Cart' : 'Select Size'}
              </button>
              <button
                className={`wishlist-btn ${wishlisted ? 'active' : ''}`}
                onClick={handleWishlistToggle}
              >
                <Heart size={18} fill={wishlisted ? '#c9a84c' : 'none'} stroke={wishlisted ? '#c9a84c' : 'currentColor'} />
              </button>
            </div>

            <button className="view-full-btn" onClick={() => { onClose(); window.location.href = `/product/${product.id}`; }}>
              View Full Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
