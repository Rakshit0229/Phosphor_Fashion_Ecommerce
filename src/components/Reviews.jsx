import React, { useState, useEffect } from 'react';
import { Star, MessageSquare } from 'lucide-react';
import { getReviews, addReview, getAverageRating } from '../services/reviews';
import './Reviews.css';

const Reviews = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    comment: ''
  });

  useEffect(() => {
    loadReviews();
  }, [productId]);

  const loadReviews = () => {
    setReviews(getReviews(productId));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.comment) {
      addReview(productId, formData);
      setFormData({ name: '', rating: 5, comment: '' });
      setShowForm(false);
      loadReviews();
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        fill={i < rating ? '#c9a84c' : 'none'}
        stroke={i < rating ? '#c9a84c' : 'currentColor'}
      />
    ));
  };

  const averageRating = reviews.length > 0 
    ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)
    : 0;

  return (
    <div className="reviews-section">
      <div className="reviews-header">
        <h2>Customer Reviews</h2>
        <div className="reviews-summary">
          <div className="average-rating">
            <span className="rating-number">{averageRating}</span>
            <div className="rating-stars">{renderStars(Math.round(averageRating))}</div>
            <span className="review-count">({reviews.length} reviews)</span>
          </div>
          <button className="write-review-btn" onClick={() => setShowForm(!showForm)}>
            <MessageSquare size={16} />
            {showForm ? 'Cancel' : 'Write a Review'}
          </button>
        </div>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="review-form">
          <h3>Write a Review</h3>
          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label>Rating</label>
            <div className="rating-input">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setFormData({ ...formData, rating: star })}
                  className={`star-btn ${star <= formData.rating ? 'active' : ''}`}
                >
                  <Star size={24} fill={star <= formData.rating ? '#c9a84c' : 'none'} />
                </button>
              ))}
            </div>
          </div>
          <div className="form-group">
            <label>Your Review</label>
            <textarea
              value={formData.comment}
              onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
              required
              rows={4}
              placeholder="Share your experience with this product..."
            />
          </div>
          <button type="submit" className="submit-review-btn">Submit Review</button>
        </form>
      )}

      <div className="reviews-list">
        {reviews.length === 0 ? (
          <div className="no-reviews">
            <p>No reviews yet. Be the first to review this product!</p>
          </div>
        ) : (
          reviews.map((review) => (
            <div key={review.id} className="review-item">
              <div className="review-header">
                <div className="reviewer-info">
                  <h4>{review.name}</h4>
                  <div className="review-stars">{renderStars(review.rating)}</div>
                </div>
                <span className="review-date">
                  {new Date(review.date).toLocaleDateString()}
                </span>
              </div>
              <p className="review-comment">{review.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Reviews;
