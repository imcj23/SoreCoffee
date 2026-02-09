import { useState, useEffect } from "react";
import {
  FaTrash,
  FaPlus,
  FaMinus,
  FaShoppingCart,
  FaTimes,
  FaWhatsapp,
  FaStore,
  FaUser,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart";

const parsePrice = (priceString) => {
  if (!priceString || typeof priceString !== "string") return 0;

  const cleanString = priceString.replace(/[^\d.,]/g, "");
  const hasCommaDecimal =
    cleanString.includes(",") && !cleanString.includes(".");
  let normalized = cleanString;

  if (hasCommaDecimal) {
    normalized = cleanString.replace(",", ".");
  }

  const withoutThousandSeparator = normalized.replace(/\./g, "");
  return parseFloat(withoutThousandSeparator) || 0;
};

const formatPrice = (price) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
    .format(price)
    .replace("Rp", "Rp ");
};

const OUTLET_OPTIONS = [
  { id: 1, name: "Sore Coffee Bintan Centre", address: "-" },
  { id: 2, name: "Sore Coffee Batu 8", address: "-" },
  { id: 3, name: "Sore Coffee Hotel Comfort", address: "-" },
  { id: 4, name: "Sore Coffee Ganet", address: "-" },
  { id: 5, name: "Sore Coffee Jl.Pemuda", address: "-" },
  { id: 6, name: "Sore Coffee Tepi Laut", address: "-" },
  { id: 7, name: "Sore Coffee Batu 16 Uban", address: "-" },
];

const CartSidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [selectedOutlet, setSelectedOutlet] = useState(OUTLET_OPTIONS[0].id);
  const [showForm, setShowForm] = useState(false);

  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    getCartCount,
    clearCart,
  } = useCart();

  const whatsappConfig = {
    phoneNumber: "6285222255234",
    storeName: "Sore Coffee",
    businessHours: "08:00 - 22:00",
  };

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setTimeout(() => {
        setIsAnimating(true);
      }, 10);
    } else {
      setIsAnimating(false);
      setTimeout(() => {
        setIsVisible(false);
      }, 300);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      onClose();
      setIsVisible(false);
    }, 300);
  };

  const handleMenuClick = () => {
    navigate("/catalog");
  };

  const getSelectedOutlet = () => {
    return (
      OUTLET_OPTIONS.find((outlet) => outlet.id === selectedOutlet) ||
      OUTLET_OPTIONS[0]
    );
  };

  const handleWhatsAppCheckout = () => {
    if (cartItems.length === 0) return;

    if (!customerName.trim()) {
      alert("Harap masukkan nama Anda terlebih dahulu!");
      setShowForm(true);
      return;
    }

    const now = new Date();
    const orderDate = now.toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const orderTime = now.toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
    });

    const outlet = getSelectedOutlet();

    let message = `*ORDER - ${whatsappConfig.storeName}*\n`;
    message += ` ${orderDate} - ${orderTime}\n`;
    message += ` ${outlet.name}\n`;
    message += ` ${whatsappConfig.businessHours}\n`;
    message += `━━━━━━━━━━━━━━━━━━━━\n\n`;
    message += `* DATA PELANGGAN*\n`;
    message += `Nama: ${customerName}\n`;
    message += `Outlet: ${outlet.name}\n`;
    message += `━━━━━━━━━━━━━━━━━━━━\n\n`;
    message += `* DAFTAR PESANAN:*\n`;

    cartItems.forEach((item, index) => {
      const price = parsePrice(item.price);
      const total = price * item.quantity;

      message += `\n*${index + 1}. ${item.name}*\n`;
      message += `   • Jumlah: ${item.quantity} x Rp ${price.toLocaleString("id-ID")}\n`;
      message += `   • Total: Rp ${total.toLocaleString("id-ID")}\n`;

      if (item.notes) {
        message += `   • Catatan: ${item.notes}\n`;
      }
    });

    message += `\n━━━━━━━━━━━━━━━━━━━━\n`;
    message += `*TOTAL PEMBAYARAN:*\n`;
    message += `*Rp ${getCartTotal().toLocaleString("id-ID")}*\n\n`;
    message += `Terima kasih telah berbelanja di ${whatsappConfig.storeName}! \n`;
    message += `Pesanan Anda akan diproses segera.`;

    const encodedMessage = encodeURIComponent(message);

    const whatsappURL = `https://wa.me/${whatsappConfig.phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");

    const shouldClearCart = window.confirm(
      "Pesanan telah dikirim ke WhatsApp. Apakah Anda ingin mengosongkan keranjang?",
    );

    if (shouldClearCart) {
      clearCart();
      setCustomerName("");
      setSelectedOutlet(OUTLET_OPTIONS[0].id);
      setShowForm(false);
      handleClose();
    }
  };

  const handleProceedToCheckout = () => {
    if (cartItems.length === 0) return;

    setShowForm(!showForm);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";

      if (cartItems.length === 0) {
        setShowForm(false);
      }
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, cartItems.length]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isVisible) return null;

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-black transition-all duration-300 ease-in-out ${
          isAnimating ? "opacity-50" : "opacity-0"
        }`}
        onClick={handleOverlayClick}
      />

      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 z-50 bg-white shadow-2xl transform transition-all duration-300 ease-in-out ${
          isAnimating ? "translate-x-0" : "translate-x-full"
        }`}
      >
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
            aria-label="Tutup keranjang"
          >
            <FaTimes size={20} />
          </button>
        </div>

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
                onClick={handleMenuClick}
                className="px-6 py-3 bg-amber-900 text-white font-bold rounded-xl hover:bg-amber-800 transition-colors transform hover:scale-105 active:scale-95"
              >
                Lihat Menu
              </button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto p-4 sm:p-6">
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => {
                    const itemPrice = parsePrice(item.price);
                    const itemTotal = itemPrice * item.quantity;

                    return (
                      <div
                        key={item.id}
                        className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm transform transition-transform hover:scale-[1.01]"
                      >
                        <div className="flex gap-4">
                          <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
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
                                aria-label={`Hapus ${item.name} dari keranjang`}
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
                                  onClick={() =>
                                    updateQuantity(item.id, item.quantity - 1)
                                  }
                                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                                    item.quantity <= 1
                                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                      : "bg-gray-200 text-gray-700 hover:bg-gray-300 active:scale-95"
                                  }`}
                                  disabled={item.quantity <= 1}
                                  aria-label="Kurangi jumlah"
                                >
                                  <FaMinus size={12} />
                                </button>
                                <span className="font-bold w-8 text-center">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() =>
                                    updateQuantity(item.id, item.quantity + 1)
                                  }
                                  className="w-8 h-8 rounded-full bg-amber-900 text-white flex items-center justify-center hover:bg-amber-800 active:scale-95 transition-all"
                                  aria-label="Tambah jumlah"
                                >
                                  <FaPlus size={12} />
                                </button>
                              </div>
                              <div className="text-right">
                                <div className="text-sm text-gray-500">
                                  Total
                                </div>
                                <div className="font-bold text-amber-900">
                                  {formatPrice(itemTotal)}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {showForm && (
                  <div className="animate-fadeIn mb-6">
                    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
                      <div className="flex items-center gap-2 mb-4">
                        <FaUser className="text-amber-900" size={18} />
                        <h3 className="font-bold text-gray-900">
                          Informasi Pesanan
                        </h3>
                      </div>

                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nama Anda *
                        </label>
                        <input
                          type="text"
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                          placeholder="Masukkan nama lengkap"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <FaStore
                            className="inline mr-2 text-amber-900"
                            size={16}
                          />
                          Pilih Outlet Pengambilan *
                        </label>
                        <div className="space-y-3 max-h-48 overflow-y-auto pr-2">
                          {OUTLET_OPTIONS.map((outlet) => (
                            <div
                              key={outlet.id}
                              className={`p-4 border rounded-xl cursor-pointer transition-all transform hover:scale-[1.01] ${
                                selectedOutlet === outlet.id
                                  ? "border-amber-900 bg-amber-100"
                                  : "border-gray-300 hover:bg-gray-50"
                              }`}
                              onClick={() => setSelectedOutlet(outlet.id)}
                            >
                              <div className="flex items-start">
                                <div
                                  className={`w-5 h-5 rounded-full border flex items-center justify-center mt-0.5 mr-3 transition-all ${
                                    selectedOutlet === outlet.id
                                      ? "border-amber-900 bg-amber-900"
                                      : "border-gray-400"
                                  }`}
                                >
                                  {selectedOutlet === outlet.id && (
                                    <div className="w-2 h-2 rounded-full bg-white"></div>
                                  )}
                                </div>
                                <div>
                                  <div
                                    className={`font-medium transition-colors ${
                                      selectedOutlet === outlet.id
                                        ? "text-amber-900"
                                        : "text-gray-900"
                                    }`}
                                  >
                                    {outlet.name}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="border-t border-gray-200 bg-white pt-6 pb-8 px-4 sm:px-6 mt-auto">
                <div className="space-y-4">
                  <div className="space-y-2">
                    {cartItems.map((item) => {
                      const itemPrice = parsePrice(item.price);
                      const itemTotal = itemPrice * item.quantity;

                      return (
                        <div
                          key={item.id}
                          className="flex justify-between text-sm animate-fadeInUp"
                          style={{ animationDelay: `${cartItems.indexOf(item) * 50}ms` }}
                        >
                          <span className="text-gray-600">
                            {item.name} x{item.quantity}
                          </span>
                          <span>{formatPrice(itemTotal)}</span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-lg font-bold text-gray-900">
                        Total
                      </span>
                      <span className="text-2xl font-bold text-amber-900 animate-pulse-once">
                        {formatPrice(getCartTotal())}
                      </span>
                    </div>

                    <div className="space-y-4">
                      {!showForm ? (
                        <button
                          onClick={handleProceedToCheckout}
                          className="w-full py-4 bg-amber-900 text-white rounded-xl font-bold hover:bg-amber-800 active:scale-[0.98] transition-all shadow-lg hover:shadow-xl"
                        >
                          Lanjutkan ke Checkout
                        </button>
                      ) : (
                        <>
                          <button
                            onClick={handleWhatsAppCheckout}
                            className="w-full py-4 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 active:scale-[0.98] transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                          >
                            <FaWhatsapp size={20} />
                            Kirim Pesanan ke WhatsApp
                          </button>

                          <button
                            onClick={() => setShowForm(false)}
                            className="w-full py-4 border-2 border-amber-900 text-amber-900 rounded-xl hover:bg-amber-50 active:scale-[0.98] transition-all font-bold mt-2"
                          >
                            Kembali ke Keranjang
                          </button>
                        </>
                      )}

                      {!showForm && (
                        <>
                          <div className="grid grid-cols-2 gap-4 mt-4">
                            <button
                              onClick={clearCart}
                              className="py-3 border border-red-500 text-red-500 rounded-xl hover:bg-red-50 active:scale-[0.98] transition-all font-medium"
                            >
                              Hapus Semua
                            </button>

                            <Link
                              to="/catalog"
                              onClick={handleClose}
                              className="py-3 text-center border-2 border-amber-900 text-amber-900 rounded-xl hover:bg-amber-50 active:scale-[0.98] transition-all font-medium"
                            >
                              + Tambah Menu
                            </Link>
                          </div>

                          <div className="text-center text-xs text-gray-500 pt-4 border-t border-gray-100">
                            <p>
                              Klik "Lanjutkan ke Checkout" untuk mengisi data
                              pesanan
                            </p>
                          </div>
                        </>
                      )}

                      {showForm && (
                        <div className="text-center text-xs text-gray-500 pt-4 border-t border-gray-100 mt-4">
                          <p>
                            Pastikan nama dan outlet sudah benar sebelum
                            mengirim pesanan
                          </p>
                        </div>
                      )}
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