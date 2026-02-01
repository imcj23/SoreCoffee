import { useState, useEffect, useRef } from "react";
import { FaStar, FaMinus, FaPlus } from "react-icons/fa";
import { FaFireFlameCurved } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import useCart from "../hooks/useCart";

export default function BottomSheet (menu, isOpen, onClose){
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const sheetRef = useRef(null);

  const { addToCart } = useCart();

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
        setQuantity(1);
      }, 300);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      onClose();
      setIsVisible(false);
      setQuantity(1);
    }, 300);
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    setIsAdding(true);

    setTimeout(() => {
      addToCart(menu, quantity);
      setIsAdding(false);

      const event = new CustomEvent("cart:added", {
        detail: { menu: menu.name, quantity },
      });
      window.dispatchEvent(event);

      handleClose();
    }, 500);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
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

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isVisible) return null;

  const parsePrice = (priceString) => {
    if (!priceString) return 0;
    const cleanString = priceString.replace(/[^\d.,]/g, "");

    const normalized = cleanString.replace(",", ".");
    const withoutThousandSeparator = normalized.replace(/\./g, "");

    return parseFloat(withoutThousandSeparator) || 0;
  };

  const priceValue = parsePrice(menu.price);
  const totalPrice = priceValue * quantity;

  return (
    <>
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ${
          isAnimating
            ? "bg-black/50 backdrop-blur-sm"
            : "bg-black/0 backdrop-blur-0"
        }`}
        onClick={handleOverlayClick}
      />

      {/* Bottom Sheet Container */}
      <div
        ref={sheetRef}
        className={`fixed z-50 bg-white shadow-2xl transform transition-all duration-300 ease-in-out max-h-[90vh] overflow-y-auto
          w-full max-w-2xl mx-auto
          left-1/2 -translate-x-1/2
          rounded-t-3xl
          ${isAnimating ? "translate-y-0" : "translate-y-full"}
          ${isAnimating ? "opacity-100" : "opacity-0"}
        `}
        style={{
          bottom: 0,
          maxWidth: "42rem",
          height: "auto",
        }}
      >
        {/* Drag Handle */}
        <div className="sticky top-0 bg-white pt-4 pb-2 rounded-t-3xl z-10">
          <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4" />
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Tutup"
          >
            <IoCloseSharp size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="px-4 md:px-6 pb-6 md:pb-8">
          {/* Image Section */}
          <div className="relative mb-6 rounded-2xl overflow-hidden">
            <div className="aspect-[4/3] md:aspect-video w-full">
              <img
                src={menu.image}
                alt={menu.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-3 left-3">
              <span className="bg-amber-900 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {menu.category}
              </span>
            </div>
          </div>

          {/* Title and Price */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                {menu.name}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      size={16}
                      className={
                        i < Math.floor(menu.rating)
                          ? "fill-amber-500 text-amber-500"
                          : "text-gray-300"
                      }
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    {menu.rating}/5.0
                  </span>
                </div>
              </div>
            </div>
            <div className="text-xl md:text-2xl font-bold text-amber-900">
              {menu.price}
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm md:text-base mb-6">
            {menu.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {Array.isArray(menu.tags) &&
              menu.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-amber-50 text-amber-800 rounded-full text-xs md:text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
          </div>

          {/* Nutrition Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-50 p-4 rounded-xl">
              <div className="flex items-center gap-2 text-gray-700 mb-1">
                <FaFireFlameCurved size={18} />
                <span className="font-medium text-sm md:text-base">Kalori</span>
              </div>
              <p className="text-lg font-semibold">{menu.calories} kcal</p>
            </div>
          </div>

          {/* Ingredients */}
          {Array.isArray(menu.ingredients) && menu.ingredients.length > 0 && (
            <div className="mb-8">
              <h4 className="text-base md:text-lg font-bold text-gray-900 mb-3">
                Bahan Utama
              </h4>
              <div className="flex flex-wrap gap-2">
                {menu.ingredients.map((ingredient, index) => (
                  <span
                    key={index}
                    className="px-3 md:px-4 py-2 bg-white border border-amber-200 text-amber-800 rounded-full text-xs md:text-sm"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Quantity Selector */}
          <div className="mb-6">
            <h4 className="text-base md:text-lg font-bold text-gray-900 mb-3">
              Jumlah Pesanan
            </h4>
            <div className="flex items-center justify-between bg-gray-50 rounded-xl p-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={handleDecrease}
                  disabled={quantity <= 1}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    quantity <= 1
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-amber-900 text-white hover:bg-amber-800 active:scale-95"
                  }`}
                >
                  <FaMinus size={16} />
                </button>
                <span className="text-2xl font-bold w-12 text-center">
                  {quantity}
                </span>
                <button
                  onClick={handleIncrease}
                  className="w-10 h-10 rounded-full bg-amber-900 text-white flex items-center justify-center hover:bg-amber-800 active:scale-95 transition-all"
                >
                  <FaPlus size={16} />
                </button>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Total Harga</p>
                <p className="text-xl font-bold text-amber-900">
                  Rp {totalPrice.toLocaleString("id-ID")}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="sticky bottom-0 left-0 right-0 bg-white pt-4 border-t">
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleClose}
                className="px-6 py-3 border-2 border-amber-900 text-amber-900 font-bold rounded-xl hover:bg-amber-50 transition-all duration-300 flex-1 active:scale-95"
              >
                Lihat Menu Lain
              </button>
              <button
                onClick={handleAddToCart}
                disabled={isAdding}
                className={`px-6 py-3 bg-amber-900 text-white font-bold rounded-xl transition-all duration-300 flex-1 ${
                  isAdding
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:bg-amber-800 hover:shadow-xl active:scale-95"
                }`}
              >
                {isAdding ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Menambahkan...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Tambah ke Keranjang
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};