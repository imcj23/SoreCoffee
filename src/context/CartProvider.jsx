import { useState } from 'react';
import CartContext from './CartContext.jsx';

const parsePrice = (priceString) => {
  if (!priceString || typeof priceString !== 'string') return 0;
  
  const cleanString = priceString.replace(/[^\d.,]/g, '');
  const hasCommaDecimal = cleanString.includes(',') && !cleanString.includes('.');
  let normalized = cleanString;
  
  if (hasCommaDecimal) {
    normalized = cleanString.replace(',', '.');
  }
  
  const withoutThousandSeparator = normalized.replace(/\./g, '');
  return parseFloat(withoutThousandSeparator) || 0;
};

const formatPrice = (price) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price).replace('Rp', 'Rp ');
};

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item, quantity) => {
    setCartItems(prev => {
      const existingItemIndex = prev.findIndex(cartItem => cartItem.id === item.id);
      
      if (existingItemIndex >= 0) {
        const updatedCart = [...prev];
        updatedCart[existingItemIndex].quantity += quantity;
        return updatedCart;
      } else {
        return [...prev, { ...item, quantity }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(id);
      return;
    }
    
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parsePrice(item.price);
      return total + (price * item.quantity);
    }, 0);
  };

  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getFormattedCartTotal = () => {
    return formatPrice(getCartTotal());
  };

  const cartContextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    getFormattedCartTotal, 
    getCartCount,
    clearCart
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;