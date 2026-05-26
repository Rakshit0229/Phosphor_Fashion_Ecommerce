import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    shop: 'Shop',
    about: 'About',
    contact: 'Contact',
    login: 'Login',
    cart: 'Cart',
    search: 'Search',
    addToCart: 'Add to Cart',
    wishlist: 'Wishlist',
    quickAdd: 'Quick Add',
    new: 'New',
    trending: 'Trending',
    price: 'Price',
    size: 'Size',
    color: 'Color',
    category: 'Category',
    filter: 'Filter',
    sort: 'Sort',
    recommended: 'Recommended',
    newest: 'Newest',
    priceLow: 'Price: Low to High',
    priceHigh: 'Price: High to Low',
    inStock: 'In Stock',
    outOfStock: 'Out of Stock',
    reviews: 'Reviews',
    writeReview: 'Write a Review',
    share: 'Share',
    sizeGuide: 'Size Guide',
    freeShipping: 'Free Shipping',
    returns: 'Free Returns',
    recentlyViewed: 'Recently Viewed'
  },
  es: {
    shop: 'Tienda',
    about: 'Acerca de',
    contact: 'Contacto',
    login: 'Iniciar Sesión',
    cart: 'Carrito',
    search: 'Buscar',
    addToCart: 'Añadir al Carrito',
    wishlist: 'Lista de Deseos',
    quickAdd: 'Añadir Rápido',
    new: 'Nuevo',
    trending: 'Tendencia',
    price: 'Precio',
    size: 'Talla',
    color: 'Color',
    category: 'Categoría',
    filter: 'Filtrar',
    sort: 'Ordenar',
    recommended: 'Recomendado',
    newest: 'Más Reciente',
    priceLow: 'Precio: Bajo a Alto',
    priceHigh: 'Precio: Alto a Bajo',
    inStock: 'En Stock',
    outOfStock: 'Agotado',
    reviews: 'Reseñas',
    writeReview: 'Escribir Reseña',
    share: 'Compartir',
    sizeGuide: 'Guía de Tallas',
    freeShipping: 'Envío Gratis',
    returns: 'Devoluciones Gratis',
    recentlyViewed: 'Vistos Recientemente'
  },
  fr: {
    shop: 'Boutique',
    about: 'À Propos',
    contact: 'Contact',
    login: 'Connexion',
    cart: 'Panier',
    search: 'Rechercher',
    addToCart: 'Ajouter au Panier',
    wishlist: 'Favoris',
    quickAdd: 'Ajout Rapide',
    new: 'Nouveau',
    trending: 'Tendance',
    price: 'Prix',
    size: 'Taille',
    color: 'Couleur',
    category: 'Catégorie',
    filter: 'Filtrer',
    sort: 'Trier',
    recommended: 'Recommandé',
    newest: 'Plus Récent',
    priceLow: 'Prix: Croissant',
    priceHigh: 'Prix: Décroissant',
    inStock: 'En Stock',
    outOfStock: 'Rupture',
    reviews: 'Avis',
    writeReview: 'Écrire un Avis',
    share: 'Partager',
    sizeGuide: 'Guide des Tailles',
    freeShipping: 'Livraison Gratuite',
    returns: 'Retours Gratuits',
    recentlyViewed: 'Vus Récemment'
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('language');
    return saved || 'en';
  });

  const t = (key) => {
    return translations[language][key] || translations['en'][key] || key;
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, t, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
