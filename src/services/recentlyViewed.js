const RECENTLY_VIEWED_KEY = 'recently_viewed';
const MAX_RECENTLY_VIEWED = 10;

export const getRecentlyViewed = () => {
  try {
    const recentlyViewed = localStorage.getItem(RECENTLY_VIEWED_KEY);
    return recentlyViewed ? JSON.parse(recentlyViewed) : [];
  } catch (error) {
    console.error('Error reading recently viewed:', error);
    return [];
  }
};

export const addToRecentlyViewed = (product) => {
  try {
    const recentlyViewed = getRecentlyViewed();
    const filtered = recentlyViewed.filter(p => p.id !== product.id);
    filtered.unshift(product);
    
    const trimmed = filtered.slice(0, MAX_RECENTLY_VIEWED);
    localStorage.setItem(RECENTLY_VIEWED_KEY, JSON.stringify(trimmed));
    
    window.dispatchEvent(new Event('recentlyViewedUpdated'));
  } catch (error) {
    console.error('Error adding to recently viewed:', error);
  }
};
