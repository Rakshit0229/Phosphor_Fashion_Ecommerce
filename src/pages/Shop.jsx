import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Filter, X } from 'lucide-react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { products } from '../data/dummyData';
import './Shop.css';

const Shop = () => {
  const { category } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortBy, setSortBy] = useState('recommended');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    priceRange: [0, 500],
    sizes: [],
    subCategories: []
  });

  useEffect(() => {
    let result = products;
    
    // Category filter
    if (category === 'men') {
      result = products.filter(p => p.category === 'Men');
    } else if (category === 'women') {
      result = products.filter(p => p.category === 'Women');
    } else if (category === 'new') {
      result = products.filter(p => p.isNew);
    }

    // Price filter
    result = result.filter(p => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]);

    // Size filter
    if (filters.sizes.length > 0) {
      result = result.filter(p => p.sizes.some(size => filters.sizes.includes(size)));
    }

    // Subcategory filter
    if (filters.subCategories.length > 0) {
      result = result.filter(p => filters.subCategories.includes(p.subCategory));
    }

    // Sort logic
    if (sortBy === 'price-low') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sortBy === 'newest') {
      result = [...result].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    } else if (sortBy === 'trending') {
      result = [...result].sort((a, b) => (b.isTrending ? 1 : 0) - (a.isTrending ? 1 : 0));
    }

    setFilteredProducts(result);
  }, [category, sortBy, filters]);

  const pageTitle = category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Shop All';

  const handleSizeToggle = (size) => {
    setFilters(prev => ({
      ...prev,
      sizes: prev.sizes.includes(size) ? prev.sizes.filter(s => s !== size) : [...prev.sizes, size]
    }));
  };

  const handleSubCategoryToggle = (subCat) => {
    setFilters(prev => ({
      ...prev,
      subCategories: prev.subCategories.includes(subCat) ? prev.subCategories.filter(s => s !== subCat) : [...prev.subCategories, subCat]
    }));
  };

  const clearFilters = () => {
    setFilters({
      priceRange: [0, 500],
      sizes: [],
      subCategories: []
    });
  };

  const allSizes = ['XS', 'S', 'M', 'L', 'XL', '30', '32', '34', '36'];
  const allSubCategories = [...new Set(products.map(p => p.subCategory))];

  return (
    <div className="shop-page container section-padding pt-navbar animate-fade-in">
      <div className="shop-header">
        <h1 className="shop-title">{pageTitle}</h1>
        <p className="text-muted">Discover our latest collection for {pageTitle.toLowerCase()}.</p>
      </div>

      <div className="shop-controls">
        <button className="filter-btn" onClick={() => setShowFilters(!showFilters)}>
          <Filter size={18} /> Filters {showFilters ? <X size={18} /> : ''}
        </button>
        
        <div className="sort-wrapper">
          <span className="text-muted">Sort by:</span>
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-select"
          >
            <option value="recommended">Recommended</option>
            <option value="newest">Newest Arrivals</option>
            <option value="trending">Trending</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      {showFilters && (
        <div className="filters-panel">
          <div className="filter-section">
            <h3>Price Range</h3>
            <div className="price-range">
              <input
                type="range"
                min="0"
                max="500"
                value={filters.priceRange[1]}
                onChange={(e) => setFilters(prev => ({ ...prev, priceRange: [0, parseInt(e.target.value)] }))}
                className="price-slider"
              />
              <span>${filters.priceRange[0]} - ${filters.priceRange[1]}</span>
            </div>
          </div>

          <div className="filter-section">
            <h3>Sizes</h3>
            <div className="size-filters">
              {allSizes.map(size => (
                <button
                  key={size}
                  className={`size-filter-btn ${filters.sizes.includes(size) ? 'active' : ''}`}
                  onClick={() => handleSizeToggle(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <h3>Category</h3>
            <div className="category-filters">
              {allSubCategories.map(subCat => (
                <label key={subCat} className="category-filter-label">
                  <input
                    type="checkbox"
                    checked={filters.subCategories.includes(subCat)}
                    onChange={() => handleSubCategoryToggle(subCat)}
                  />
                  {subCat}
                </label>
              ))}
            </div>
          </div>

          <button className="clear-filters-btn" onClick={clearFilters}>
            Clear All Filters
          </button>
        </div>
      )}

      <div className="shop-grid grid grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))
        ) : (
          <div className="no-products">
            <p>No products found matching your filters.</p>
            <button onClick={clearFilters} className="btn btn-primary mt-4">Clear Filters</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
