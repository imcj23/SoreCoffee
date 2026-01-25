// src/components/CartSidebar.jsx
import { useState, useEffect } from "react";
import { FaTrash, FaPlus, FaMinus, FaShoppingCart, FaTimes, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";

const CartSidebar = ({ isOpen, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    getCartCount,
    clearCart
  } = useCart();

  // WhatsApp configuration
  const whatsappConfig = {
    phoneNumber: "6288268853638", 
    storeName: "Sore Coffee",
    storeAddress: "Jl. Contoh No. 123, Jakarta",
    businessHours: "08:00 - 22:00"
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  const handleWhatsAppCheckout = () => {
    if (cartItems.length === 0) return;

    const now = new Date();
    const orderDate = now.toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    const orderTime = now.toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit'
    });

    let message = `*ORDER - ${whatsappConfig.storeName}*\n`;
    message += `📅 ${orderDate} - ${orderTime}\n`;
    message += `📍 ${whatsappConfig.storeAddress}\n`;
    message += `⏰ ${whatsappConfig.businessHours}\n`;
    message += `━━━━━━━━━━━━━━━━━━━━\n\n`;
    message += `*📋 DAFTAR PESANAN:*\n`;

    // Tambahkan setiap item
    cartItems.forEach((item, index) => {
      const price = parseInt(item.price.replace('Rp ', '').replace('.', '')) || 0;
      const total = price * item.quantity;
      
      message += `\n*${index + 1}. ${item.name}*\n`;
      message += `   • Jumlah: ${item.quantity} x Rp ${price.toLocaleString('id-ID')}\n`;
      message += `   • Total: Rp ${total.toLocaleString('id-ID')}\n`;
      
      if (item.notes) {
        message += `   • Catatan: ${item.notes}\n`;
      }
    });

    message += `\n━━━━━━━━━━━━━━━━━━━━\n`;
    message += `*💰 TOTAL PEMBAYARAN:*\n`;
    message += `Rp ${getCartTotal().toLocaleString('id-ID')}\n\n`;
    
    message += `*📝 DATA PELANGGAN:*\n`;
    message += `Nama: \n`;
    message += `No. HP: \n`;
    message += `Alamat: \n\n`;
    
    message += `*💳 METODE PEMBAYARAN:*\n`;
    message += `• Transfer Bank (BCA/BNI/Mandiri)\n`;
    message += `• Cash on Delivery (COD)\n`;
    message += `• QRIS\n\n`;
    
    message += `*📋 CATATAN TAMBAHAN:*\n`;
    message += `\n`;
    message += `\n\n`;
    
    message += `Silakan lengkapi data di atas dan konfirmasi pesanan ini. Terima kasih! 🎉`;

    const encodedMessage = encodeURIComponent(message);
    
    const whatsappURL = `https://wa.me/${whatsappConfig.phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
    
    // Optional: Clear cart after checkout
    // clearCart();
    // handleClose();
    
    // Atau tampilkan konfirmasi sebelum clear cart
    const shouldClearCart = window.confirm(
      "Pesanan telah dikirim ke WhatsApp. Apakah Anda ingin mengosongkan keranjang?"
    );
    
    if (shouldClearCart) {
      clearCart();
      handleClose();
    }
  };

  // Close sidebar when pressing Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Close when clicking overlay
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black transition-opacity duration-300 ${
          isClosing ? "opacity-0" : "opacity-50"
        }`}
        onClick={handleOverlayClick}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 z-50 bg-white shadow-2xl transform transition-transform duration-300 ${
          isClosing ? "translate-x-full" : "translate-x-0"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <FaShoppingCart className="text-amber-900" size={24} />
            <h2 className="text-2xl font-bold text-gray-900">Keranjang</h2>
            {getCartCount() > 0 && (
              <span className="bg-amber-900 text-white text-sm font-bold rounded-full px-2 py-1">
                {getCartCount()} item
              </span>
            )}
          </div>
          <button
            onClick={handleClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Cart Content */}
        <div className="h-full flex flex-col">
          {cartItems.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
              <div className="w-32 h-32 bg-amber-50 rounded-full flex items-center justify-center mb-6">
                <FaShoppingCart className="text-amber-300" size={48} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Keranjang Kosong
              </h3>
              <p className="text-gray-600 mb-6">
                Tambahkan menu favorit Anda ke keranjang
              </p>
              <button
                onClick={handleClose}
                className="px-6 py-3 bg-amber-900 text-white font-bold rounded-xl hover:bg-amber-800 transition-colors"
              >
                Lihat Menu
              </button>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-4">
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm"
                    >
                      <div className="flex gap-4">
                        <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-bold text-gray-900 line-clamp-1">
                              {item.name}
                            </h4>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-500 hover:text-red-700 transition-colors p-1"
                            >
                              <FaTrash size={16} />
                            </button>
                          </div>
                          
                          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                            {item.description}
                          </p>
                          
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                  item.quantity <= 1
                                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                }`}
                                disabled={item.quantity <= 1}
                              >
                                <FaMinus size={12} />
                              </button>
                              <span className="font-bold w-8 text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-8 h-8 rounded-full bg-amber-900 text-white flex items-center justify-center hover:bg-amber-800"
                              >
                                <FaPlus size={12} />
                              </button>
                            </div>
                            <div className="text-right">
                              <div className="text-sm text-gray-500">Total</div>
                              <div className="font-bold text-amber-900">
                                Rp{" "}
                                {(
                                  parseInt(item.price.replace("Rp ", "").replace(".", "")) *
                                  item.quantity
                                ).toLocaleString("id-ID")}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer with Total and Actions */}
              <div className="border-t border-gray-200 p-6 bg-white">
                <div className="space-y-4">
                  {/* Order Summary */}
                  <div className="space-y-2">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span className="text-gray-600">
                          {item.name} x{item.quantity}
                        </span>
                        <span>
                          Rp{" "}
                          {(
                            parseInt(item.price.replace("Rp ", "").replace(".", "")) *
                            item.quantity
                          ).toLocaleString("id-ID")}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Total */}
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-lg font-bold text-gray-900">Total</span>
                      <span className="text-2xl font-bold text-amber-900">
                        Rp {getCartTotal().toLocaleString("id-ID")}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      {/* WhatsApp Checkout Button */}
                      <button
                        onClick={handleWhatsAppCheckout}
                        className="w-full py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                      >
                        <FaWhatsapp size={20} />
                        Checkout via WhatsApp
                      </button>

                      {/* Secondary Buttons */}
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          onClick={clearCart}
                          className="py-3 border border-red-500 text-red-500 rounded-xl hover:bg-red-50 transition-colors font-medium"
                        >
                          Hapus Semua
                        </button>
                        
                        <Link
                          to="/catalog"
                          onClick={handleClose}
                          className="py-3 text-center border-2 border-amber-900 text-amber-900 rounded-xl hover:bg-amber-50 transition-colors font-medium"
                        >
                          + Tambah Menu
                        </Link>
                      </div>

                      {/* Additional Info */}
                      <div className="text-center text-xs text-gray-500 mt-4 pt-4 border-t border-gray-100">
                        <p>Klik "Checkout via WhatsApp" untuk mengirim pesanan ke admin kami</p>
                        <p className="mt-1">Pesanan akan diproses setelah konfirmasi</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;