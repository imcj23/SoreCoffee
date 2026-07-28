import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaShoppingCart, FaTimes, FaStore, FaClock } from "react-icons/fa";
import Logo from "../assets/photo/Logo_sore.png";
import useCart from "../hooks/useCart";
import CartSidebar from "../components/CartSidebar";

const useStoreStatus = () => {
  const calculateStatus = () => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentDay = now.getDay();

    const storeSchedule = {
      monday: { open: 8, close: 22 },
      tuesday: { open: 8, close: 22 },
      wednesday: { open: 8, close: 22 },
      thursday: { open: 8, close: 22 },
      friday: { open: 8, close: 22 },
      saturday: { open: 8, close: 22 },
      sunday: { open: 8, close: 22 },
    };

    const scheduleKeys = Object.keys(storeSchedule);
    const todaySchedule =
      storeSchedule[scheduleKeys[currentDay === 0 ? 6 : currentDay - 1]];

    if (!todaySchedule) {
      return {
        isOpen: false,
        message: "Tutup",
        nextOpen: "Cek jadwal operasional",
        hours: "8:00 - 22:00",
      };
    }

    const isOpenNow =
      currentHour >= todaySchedule.open && currentHour < todaySchedule.close;

    let nextMessage = "";
    if (!isOpenNow) {
      if (currentHour < todaySchedule.open) {
        nextMessage = `Buka ${todaySchedule.open}:00`;
      } else {
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const tomorrowDay = tomorrow.getDay();
        const tomorrowSchedule =
          storeSchedule[scheduleKeys[tomorrowDay === 0 ? 6 : tomorrowDay - 1]];

        if (tomorrowSchedule) {
          nextMessage = `Buka besok ${tomorrowSchedule.open}:00`;
        }
      }
    }

    return {
      isOpen: isOpenNow,
      message: isOpenNow ? "Buka Sekarang" : "Tutup",
      nextOpen: nextMessage,
      hours: `${todaySchedule.open}:00 - ${todaySchedule.close}:00`,
    };
  };

  const [storeStatus, setStoreStatus] = useState(() => calculateStatus());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newStatus = calculateStatus();
      setStoreStatus((prev) => {
        if (
          prev.isOpen !== newStatus.isOpen ||
          prev.message !== newStatus.message ||
          prev.nextOpen !== newStatus.nextOpen ||
          prev.hours !== newStatus.hours
        ) {
          return newStatus;
        }
        return prev;
      });
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return storeStatus;
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const storeStatus = useStoreStatus();
  const location = useLocation();
  const { getCartCount } = useCart();

  const isActive = (path) => location.pathname === path;

  const openCart = () => {
    setIsCartOpen(true);
    setIsMenuOpen(false);
  };

  const closeCart = () => setIsCartOpen(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/catalog", label: "Menu" },
    { path: "/aboutus", label: "About Us" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="bg-[#DC7331] text-white sticky top-0 w-full z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="flex items-center gap-3 sm:gap-3 flex-1 min-w-0">
              <img
                src={Logo}
                alt="SoreCoffee"
                className="w-8 h-8 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain flex shrink-0"
              />
              <div className="min-w-0">
                <h1 className="text-base sm:text-lg md:text-xl font-bold tracking-wide truncate">
                  Sore Coffee
                </h1>
                <div className="flex items-center gap-1.5 text-xs sm:text-sm mt-0.5">
                  <span
                    className={`inline-block w-2 h-2 rounded-full  shrink-0 ${
                      storeStatus.isOpen
                        ? "bg-green-400 animate-pulse"
                        : "bg-red-500"
                    }`}
                  ></span>
                  <span className="truncate max-w-30 sm:max-w-none">
                    {window.innerWidth < 400
                      ? storeStatus.isOpen
                        ? "Buka"
                        : "Tutup"
                      : storeStatus.message}
                  </span>
                </div>
              </div>
            </div>

            <div className="hidden md:flex space-x-6 items-center">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive(item.path)
                      ? "bg-white text-[#DC7331] font-bold shadow"
                      : "hover:text-amber-300"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center ml-5 gap-2 sm:gap-4">
              <button
                onClick={openCart}
                className="relative hover:text-amber-300 transition-colors p-1.5"
              >
                <FaShoppingCart size={20} />
                {getCartCount() > 0 && (
                  <span
                    className="absolute top-1 right-1 sm:top-2 sm:right-2 lg:-top-1 lg:-right-1 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center xs:top"
                  >
                    {getCartCount()}
                  </span>
                )}
              </button>

              <button
                onClick={toggleMenu}
                className="md:hidden p-1.5 hover:text-amber-300 transition-colors"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      isMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Optimized for <400px */}
        <div
          className={`md:hidden fixed inset-0 z-50 transition-all duration-300 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-300 ${
              isMenuOpen ? "opacity-50" : "opacity-0"
            }`}
            onClick={closeMenu}
          ></div>

          {/* Sidebar Menu */}
          <div
            className={`absolute inset-0 w-full h-full bg-[#DC7331] transition-transform duration-300 ease-out ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="absolute top-2 right-2 z-10">
              <button
                onClick={closeMenu}
                className="p-2 text-white hover:text-amber-300 transition-colors"
                aria-label="Close menu"
              >
                <FaTimes size={24} />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center pt-12 pb-6 px-4">
              <img
                src={Logo}
                alt="SoreCoffee"
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-2"
              />
              <h1 className="text-lg sm:text-xl font-bold text-white mb-1">
                Sore Coffee
              </h1>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
                <span
                  className={`inline-block w-2.5 h-2.5 rounded-full ${
                    storeStatus.isOpen
                      ? "bg-green-400 animate-pulse"
                      : "bg-red-500"
                  }`}
                ></span>
                <span className="text-sm text-white/90">
                  {storeStatus.message}
                </span>
              </div>
            </div>

            {/* Menu Items */}
            <div className="px-4 space-y-1.5">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block text-center py-3 px-4 text-base font-medium rounded-lg transition-all duration-200 ${
                    isActive(item.path)
                      ? "bg-white text-[#DC7331] shadow-md"
                      : "text-white hover:bg-white/20"
                  }`}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/20 bg-[#DC7331]/95">
              <div className="flex items-start gap-2">
                <FaClock
                  className="text-white/80 mt-0.5 flex shrink-0"
                  size={14}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-white/80 mb-0.5">
                    Jam Operasional
                  </p>
                  <p className="text-sm text-white font-semibold">
                    {storeStatus.hours}
                  </p>
                  {!storeStatus.isOpen && storeStatus.nextOpen && (
                    <p className="text-xs text-white/90 mt-1 truncate">
                      ⏰ {storeStatus.nextOpen}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {window.innerWidth < 360 && !isMenuOpen && (
          <div className="md:hidden bg-[#C4662C] px-4 py-1.5 text-xs flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FaStore className="text-white/80" size={12} />
              <span className="text-white/90">Status:</span>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`inline-block w-2 h-2 rounded-full ${
                  storeStatus.isOpen
                    ? "bg-green-400 animate-pulse"
                    : "bg-red-500"
                }`}
              ></span>
              <span className="text-white font-medium">
                {storeStatus.message}
              </span>
              <span className="text-white/70 text-[10px]">
                {storeStatus.hours}
              </span>
            </div>
          </div>
        )}
      </nav>

      <CartSidebar isOpen={isCartOpen} onClose={closeCart} />
    </>
  );
}
