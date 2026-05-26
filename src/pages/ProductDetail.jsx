import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronRight, Ruler, Truck, RefreshCcw, Share2, Package } from 'lucide-react';
import { products } from '../data/dummyData';
import Reviews from '../components/Reviews';
import { addToRecentlyViewed } from '../services/recentlyViewed';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [mainImage, setMainImage] = useState('');
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isZooming, setIsZooming] = useState(false);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      setMainImage(foundProduct.images[0]);
      addToRecentlyViewed(foundProduct);
    }
  }, [id]);

  const handleAddToCart = () => {
    if (!selectedSize) return;
    
    // Add to localStorage cart
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItem = existingCart.find(item => item.id === product.id && item.selectedSize === selectedSize);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      existingCart.push({ ...product, quantity: 1, selectedSize });
    }
    
    localStorage.setItem('cart', JSON.stringify(existingCart));
    
    // Trigger cart update event
    window.dispatchEvent(new Event('cartUpdated'));
    
    alert('Added to cart!');
  };

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPosition({ x, y });
  };

  const handleMouseEnter = () => setIsZooming(true);
  const handleMouseLeave = () => setIsZooming(false);

  if (!product) return <div className="container pt-navbar">Loading...</div>;

  return (
    <div className="product-detail-page pt-navbar animate-fade-in">
      {/* Breadcrumbs */}
      <div className="container breadcrumbs">
        <Link to="/"><ArrowLeft size={16} /> Back</Link>
        <span className="separator"><ChevronRight size={14} /></span>
        <Link to={`/shop/${product.category.toLowerCase()}`}>{product.category}</Link>
        <span className="separator"><ChevronRight size={14} /></span>
        <span className="current">{product.name}</span>
      </div>

      <div className="container detail-grid">
        {/* Images */}
        <div className="detail-images">
          <div className="thumbnails">
            {product.images.map((img, index) => (
              <img 
                key={index} 
                src={img} 
                alt={`${product.name} thumbnail ${index + 1}`} 
                className={mainImage === img ? 'active' : ''}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
          <div className="main-image-container">
            <motion.img 
              key={mainImage}
              src={mainImage} 
              alt={product.name} 
              className="main-image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                transform: isZooming ? 'scale(2)' : 'scale(1)',
                cursor: isZooming ? 'zoom-in' : 'default'
              }}
            />
            {isZooming && (
              <div className="zoom-hint">Hover to zoom</div>
            )}
          </div>
        </div>

        {/* Info */}
        <motion.div 
          className="detail-info"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          <motion.div 
            className="detail-header"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <h1 className="detail-title">{product.name}</h1>
            <p className="detail-price">${product.price.toFixed(2)}</p>
          </motion.div>
          
          <motion.p 
            className="detail-description"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            {product.description}
          </motion.p>

          <motion.div 
            className="size-selector"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <div className="size-header">
              <span className="size-label">Select Size</span>
              <button className="size-guide" onClick={() => setShowSizeGuide(true)}><Ruler size={16} /> Size Guide</button>
            </div>
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
          </motion.div>

          <motion.button 
            className="btn btn-primary add-to-cart-btn"
            disabled={!selectedSize}
            onClick={handleAddToCart}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={selectedSize ? { scale: 1.02 } : {}}
            whileTap={selectedSize ? { scale: 0.98 } : {}}
          >
            {selectedSize ? 'Add to Cart' : 'Select a Size'}
          </motion.button>

          <motion.div 
            className="product-perks"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <div className="perk">
              <Truck size={20} />
              <span>Free standard shipping on orders over $200</span>
            </div>
            <div className="perk">
              <RefreshCcw size={20} />
              <span>Free 30-day returns</span>
            </div>
            <div className="perk">
              <Package size={20} />
              <span>In Stock - Ready to ship</span>
            </div>
          </motion.div>

          <motion.div 
            className="share-buttons"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <span className="share-label">Share:</span>
            <button className="share-btn" onClick={() => window.open(`https://twitter.com/intent/tweet?text=Check out ${encodeURIComponent(product.name)} on Phospor!`, '_blank')}>
              Twitter
            </button>
            <button className="share-btn" onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}>
              Facebook
            </button>
            <button className="share-btn" onClick={() => window.open(`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(window.location.href)}&description=${encodeURIComponent(product.name)}`, '_blank')}>
              Pinterest
            </button>
          </motion.div>
        </motion.div>
      </div>

      <div className="container">
        <Reviews productId={id} />
      </div>

      {showSizeGuide && (
        <div className="modal-overlay" onClick={() => setShowSizeGuide(false)}>
          <div className="size-guide-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Size Guide</h2>
              <button className="close-btn" onClick={() => setShowSizeGuide(false)}>×</button>
            </div>
            <div className="size-guide-content">
              <table className="size-table">
                <thead>
                  <tr>
                    <th>Size</th>
                    <th>Chest (in)</th>
                    <th>Waist (in)</th>
                    <th>Hips (in)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>XS</td>
                    <td>34-36</td>
                    <td>28-30</td>
                    <td>34-36</td>
                  </tr>
                  <tr>
                    <td>S</td>
                    <td>36-38</td>
                    <td>30-32</td>
                    <td>36-38</td>
                  </tr>
                  <tr>
                    <td>M</td>
                    <td>38-40</td>
                    <td>32-34</td>
                    <td>38-40</td>
                  </tr>
                  <tr>
                    <td>L</td>
                    <td>40-42</td>
                    <td>34-36</td>
                    <td>40-42</td>
                  </tr>
                  <tr>
                    <td>XL</td>
                    <td>42-44</td>
                    <td>36-38</td>
                    <td>42-44</td>
                  </tr>
                </tbody>
              </table>
              <p className="size-note">* Measurements are in inches. For best fit, measure yourself and compare to the chart.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
