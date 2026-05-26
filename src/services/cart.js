// Cart service using localStorage instead of InsForge
// InsForge SDK disabled to prevent 404 errors

export const getCartItems = async(userId) => {
    // Return cart from localStorage
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    return cart;
};

export const addToCart = async(userId, productId, quantity = 1) => {
    // This function is no longer used - cart is handled in components
    return null;
};

export const updateCartItem = async(cartItemId, quantity) => {
    // This function is no longer used - cart is handled in components
    return null;
};

export const removeFromCart = async(cartItemId) => {
    // This function is no longer used - cart is handled in components
    return null;
};

export const clearCart = async(userId) => {
    // This function is no longer used - cart is handled in components
    return null;
};

export const createOrder = async(userId, cartItems) => {
    // This function is no longer used - orders are handled in components
    return null;
};

export default {
    getCartItems,
    addToCart,
    updateCartItem,
    removeFromCart,
    clearCart,
    createOrder,
};