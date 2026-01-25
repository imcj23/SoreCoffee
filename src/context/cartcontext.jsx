import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('coffeeCart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [orderSummary, setOrderSummary] = useState({
    subtotal: 0,
    tax: 0,
    serviceCharge: 0,
    total: 0,
  });

  const calculateOrderSummary = () => {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.11;
    const serviceCharge = cart.length > 0 ? 2000 : 0;
    const total = subtotal + tax + serviceCharge;

    setOrderSummary({
      subtotal,
      tax,
      serviceCharge,
      total,
    });
  };

  useEffect(() => {
    localStorage.setItem('coffeeCart', JSON.stringify(cart));
    calculateOrderSummary();
  }, [cart]);

  const addToCart = (item, size = 'M', sweetness = '100%') => {
    setCart(prevCart => {
      const existingIndex = prevCart.findIndex(
        cartItem => 
          cartItem.id === item.id && 
          cartItem.size === size && 
          cartItem.sweetness === sweetness
      );

      if (existingIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[existingIndex] = {
          ...updatedCart[existingIndex],
          quantity: updatedCart[existingIndex].quantity + 1
        };
        return updatedCart;
      } else {
        const newItem = {
          ...item,
          quantity: 1,
          size,
          sweetness,
          addedAt: new Date().toISOString()
        };
        return [...prevCart, newItem];
      }
    });
  };

  const updateQuantity = (itemId, newQuantity, size = 'M', sweetness = '100%') => {
    if (newQuantity < 1) {
      removeFromCart(itemId, size, sweetness);
      return;
    }

    setCart(prevCart =>
      prevCart.map(item =>
        item.id === itemId && item.size === size && item.sweetness === sweetness
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const removeFromCart = (itemId, size = 'M', sweetness = '100%') => {
    setCart(prevCart =>
      prevCart.filter(item =>
        !(item.id === itemId && item.size === size && item.sweetness === sweetness)
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const generateWhatsAppMessage = () => {
    const orderNumber = `ORD-${Date.now().toString().slice(-6)}`;
    const orderDate = new Date().toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    let message = `*🥤 ORDER COFFEE - SORECOFFEE*\n`;
    message += `No. Order: ${orderNumber}\n`;
    message += `Tanggal: ${orderDate}\n`;
    message += `========================\n\n`;
    message += `*📋 DAFTAR PESANAN:*\n`;

    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`;
      message += `   Ukuran: ${item.size} | Manis: ${item.sweetness}\n`;
      message += `   Qty: ${item.quantity} x ${item.price}\n`;
      message += `   Subtotal: ${item.price * item.quantity}\n\n`;
    });

    message += `========================\n`;
    message += `Subtotal: ${orderSummary.subtotal}\n`;
    message += `Pajak (11%): ${orderSummary.tax}\n`;
    message += `Service Charge: ${orderSummary.serviceCharge}\n`;
    message += `*TOTAL: ${orderSummary.total}*\n\n`;
    message += `========================\n`;
    message += `*📝 CATATAN TAMBAHAN:*\n`;
    message += `(Silakan tulis catatan khusus di sini)\n\n`;
    message += `========================\n`;
    message += `*👤 DATA PEMESAN:*\n`;
    message += `Nama: \n`;
    message += `No. HP: \n`;
    message += `Alamat: \n\n`;
    message += `*✅ Konfirmasi dengan membalas pesan ini.*`;

    return encodeURIComponent(message);
  };

  const sendOrderViaWhatsApp = (phoneNumber = "6281234567890") => {
    if (cart.length === 0) {
      alert("Keranjang kosong! Silakan tambahkan item terlebih dahulu.");
      return;
    }

    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <CartContext.Provider value={{
      cart,
      orderSummary,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
      getCartItemCount,
      getCartTotal,
      sendOrderViaWhatsApp
    }}>
      {children}
    </CartContext.Provider>
  );
};