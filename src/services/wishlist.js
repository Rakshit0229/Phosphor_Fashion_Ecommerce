const WISHLIST_KEY = 'wishlist';

export const getWishlist = () => {
  try {
    const wishlist = localStorage.getItem(WISHLIST_KEY);
    return wishlist ? JSON.parse(wishlist) : [];
  } catch (error) {
    console.error('Error reading wishlist:', error);
    return [];
  }
};

export const addToWishlist = (product) => {
  try {
    const wishlist = getWishlist();
    const exists = wishlist.some(item => item.id === product.id);
    
    if (!exists) {
      wishlist.push(product);
      localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
      window.dispatchEvent(new Event('wishlistUpdated'));
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error adding to wishlist:', error);
    return false;
  }
};

export const removeFromWishlist = (productId) => {
  try {
    const wishlist = getWishlist();
    const updatedWishlist = wishlist.filter(item => item.id !== productId);
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(updatedWishlist));
    window.dispatchEvent(new Event('wishlistUpdated'));
    return true;
  } catch (error) {
    console.error('Error removing from wishlist:', error);
    return false;
  }
};

export const isInWishlist = (productId) => {
  const wishlist = getWishlist();
  return wishlist.some(item => item.id === productId);
};

export const getWishlistCount = () => {
  return getWishlist().length;
};
