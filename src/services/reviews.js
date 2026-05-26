const REVIEWS_KEY = 'product_reviews';

export const getReviews = (productId) => {
  try {
    const allReviews = JSON.parse(localStorage.getItem(REVIEWS_KEY) || '{}');
    return allReviews[productId] || [];
  } catch (error) {
    console.error('Error reading reviews:', error);
    return [];
  }
};

export const addReview = (productId, review) => {
  try {
    const allReviews = JSON.parse(localStorage.getItem(REVIEWS_KEY) || '{}');
    if (!allReviews[productId]) {
      allReviews[productId] = [];
    }
    allReviews[productId].push({
      ...review,
      id: Date.now(),
      date: new Date().toISOString()
    });
    localStorage.setItem(REVIEWS_KEY, JSON.stringify(allReviews));
    return true;
  } catch (error) {
    console.error('Error adding review:', error);
    return false;
  }
};

export const getAverageRating = (productId) => {
  const reviews = getReviews(productId);
  if (reviews.length === 0) return 0;
  const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
  return (sum / reviews.length).toFixed(1);
};

export const getReviewCount = (productId) => {
  return getReviews(productId).length;
};
