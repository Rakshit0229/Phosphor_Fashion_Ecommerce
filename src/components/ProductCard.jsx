import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart } from 'lucide-react';
import { addToWishlist, removeFromWishlist, isInWishlist } from '../services/wishlist';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const [wishlisted, setWishlisted] = useState(false);
  const [addingToCart, setAddingToCart] = useState(false);

  useEffect(() => {
    setWishlisted(isInWishlist(product.id));
    
    const handleWishlistUpdate = () => {
      setWishlisted(isInWishlist(product.id));
    };

    window.addEventListener('wishlistUpdated', handleWishlistUpdate);
    return () => window.removeEventListener('wishlistUpdated', handleWishlistUpdate);
  }, [product.id]);

  const handleWishlistToggle = () => {
    if (wishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product.id);
    }
  };

  const handleQuickAdd = () => {
    setAddingToCart(true);
    
    // Add to localStorage cart
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItem = existingCart.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      existingCart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(existingCart));
    
    // Trigger cart update event
    window.dispatchEvent(new Event('cartUpdated'));
    
    setTimeout(() => {
      alert('Added to cart!');
      setAddingToCart(false);
    }, 500);
  };

  return (
    <div className="product-card">
      {/* ── Image Container ──────────────────────────── */}
      <div className="product-image-container">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.images[0]}
            alt={product.name}
            className="product-image primary"
            loading="lazy"
          />
          {product.images[1] && (
            <img
              src={product.images[1]}
              alt={product.name}
              className="product-image secondary"
              loading="lazy"
            />
          )}
        </Link>

        {/* Badges */}
        <div className="product-badges">
          {product.isNew      && <span className="badge badge-new">New</span>}
          {product.isTrending && <span className="badge badge-trending">Trending</span>}
        </div>

        {/* Wishlist */}
        <button
          className={`wishlist-btn ${wishlisted ? 'active' : ''}`}
          onClick={handleWishlistToggle}
          aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart size={16} fill={wishlisted ? '#c9a84c' : 'none'} stroke={wishlisted ? '#c9a84c' : 'currentColor'} />
        </button>

        {/* Quick Add */}
        <button 
          className="quick-add-btn"
          onClick={handleQuickAdd}
          disabled={addingToCart}
        >
          <ShoppingBag size={15} />
          <span>{addingToCart ? 'Adding...' : 'Quick Add'}</span>
        </button>
      </div>

      {/* ── Info ─────────────────────────────────────── */}
      <div className="product-info">
        <p className="product-category">{product.subCategory}</p>
        <div className="product-header">
          <h3 className="product-name">
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </h3>
          <span className="product-price">${product.price.toFixed(2)}</span>
        </div>
        {/* Size chips */}
        <div className="product-sizes">
          {product.sizes.slice(0, 4).map(size => (
            <span key={size} className="size-chip">{size}</span>
          ))}
          {product.sizes.length > 4 && (
            <span className="size-chip size-more">+{product.sizes.length - 4}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
