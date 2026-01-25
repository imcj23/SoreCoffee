// src/components/Navbar.jsx
import { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import Logo from '../assets/photo/Logo_sore.png';
import useCart from "../hooks/useCart";
import CartSidebar from "../components/CartSidebar";

// Custom hook untuk status toko
const useStoreStatus = () => {
  const [storeStatus, setStoreStatus] = useState({
    isOpen: false,
    message: "Loading...",
    nextOpen: "",
    hours: "8:00 - 22:00"
  });

  useState(() => {
    // Function untuk menghitung status
    const calculateStatus = () => {
      const now = new Date();
      const currentHour = now.getHours();
      const currentDay = now.getDay(); // 0 = Minggu, 1 = Senin, dst
      
      // Jadwal buka toko - constant data
      const storeSchedule = {
        monday: { open: 8, close: 22 },
        tuesday: { open: 8, close: 22 },
        wednesday: { open: 8, close: 22 },
        thursday: { open: 8, close: 22 },
        friday: { open: 8, close: 22 },
        saturday: { open: 8, close: 22 },
        sunday: { open: 8, close: 22 }
      };
      
      // Ambil jadwal hari ini
      const scheduleKeys = Object.keys(storeSchedule);
      const todaySchedule = storeSchedule[scheduleKeys[currentDay === 0 ? 6 : currentDay - 1]];
      
      if (!todaySchedule) {
        return {
          isOpen: false,
          message: "Tutup",
          nextOpen: "Cek jadwal operasional",
          hours: "8:00 - 22:00"
        };
      }
      
      const isOpenNow = currentHour >= todaySchedule.open && currentHour < todaySchedule.close;
      
      // Hitung pesan untuk next open
      let nextMessage = "";
      if (!isOpenNow) {
        if (currentHour < todaySchedule.open) {
          nextMessage = `Buka ${todaySchedule.open}:00`;
        } else {
          const tomorrow = new Date(now);
          tomorrow.setDate(tomorrow.getDate() + 1);
          const tomorrowDay = tomorrow.getDay();
          const tomorrowSchedule = storeSchedule[scheduleKeys[tomorrowDay === 0 ? 6 : tomorrowDay - 1]];
          
          if (tomorrowSchedule) {
            nextMessage = `Buka besok ${tomorrowSchedule.open}:00`;
          }
        }
      }
      
      return {
        isOpen: isOpenNow,
        message: isOpenNow ? "Buka Sekarang" : "Tutup",
        nextOpen: nextMessage,
        hours: `${todaySchedule.open}:00 - ${todaySchedule.close}:00`
      };
    };

    // Set status awal
    const initialStatus = calculateStatus();
    setStoreStatus(initialStatus);

    // Setup interval untuk update setiap menit
    const intervalId = setInterval(() => {
      const newStatus = calculateStatus();
      setStoreStatus(prev => {
        // Hanya update jika ada perubahan
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

    // Cleanup
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

  const isActive = (path) => {
    return location.pathname === path;
  };

  const openCart = () => {
    setIsCartOpen(true);
    setIsMenuOpen(false); // Close mobile menu if open
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <>
      <nav className="bg-[#DC7331] text-white sticky top-0 w-full z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">

            {/* Logo + Brand + Status */}
            <div className="flex items-center gap-3">
              <img
                src={Logo}
                alt="SoreCoffee"
                className="w-16 h-16 object-contain"
              />
              <div>
                <h1 className="text-xl font-bold tracking-wide">
                  Sore Coffee
                </h1>
                <div className="flex items-center gap-2 text-sm mt-1">
                  <span className={`inline-block w-2 h-2 rounded-full ${storeStatus.isOpen ? 'bg-green-400 animate-pulse' : 'bg-red-500'}`}></span>
                  <span>{storeStatus.message}</span>
                </div>
              </div>
            </div>

            <div className="hidden md:flex space-x-6 items-center">
              <Link 
                to="/" 
                className={`relative hover:text-amber-300 transition-colors duration-200 ${
                  isActive('/') ? 'text-amber-300 font-semibold' : ''
                }`}
              >
                Home
                {isActive('/') && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-300"></span>
                )}
              </Link>
              <Link 
                to="/catalog" 
                className={`relative hover:text-amber-300 transition-colors duration-200 ${
                  isActive('/catalog') ? 'text-amber-300 font-semibold' : ''
                }`}
              >
                Menu
                {isActive('/catalog') && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-300"></span>
                )}
              </Link>
              <Link 
                to="/aboutus" 
                className={`relative hover:text-amber-300 transition-colors duration-200 ${
                  isActive('/aboutus') ? 'text-amber-300 font-semibold' : ''
                }`}
              >
                About
                {isActive('/aboutus') && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-300"></span>
                )}
              </Link>
              <Link 
                to="/contact" 
                className={`relative hover:text-amber-300 transition-colors duration-200 ${
                  isActive('/contact') ? 'text-amber-300 font-semibold' : ''
                }`}
              >
                Contact
                {isActive('/contact') && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-300"></span>
                )}
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={openCart}
                className="relative hover:text-amber-300 transition-colors"
              >
                <FaShoppingCart size={24} />
                {getCartCount() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {getCartCount()}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Menu & Cart */}
            <div className="md:hidden flex items-center gap-4">
              <div className="text-right">
                <div className="flex items-center justify-end gap-2">
                  <span className={`inline-block w-2 h-2 rounded-full ${storeStatus.isOpen ? 'bg-green-400' : 'bg-red-500'}`}></span>
                  <span className="text-sm font-medium">{storeStatus.isOpen ? 'Buka' : 'Tutup'}</span>
                </div>
                <div className="text-xs opacity-80">{storeStatus.hours.split(' - ')[0]}</div>
              </div>
              
              {/* Cart Icon Mobile */}
              <button
                onClick={openCart}
                className="relative hover:text-amber-300 transition-colors"
              >
                <FaShoppingCart size={22} />
                {getCartCount() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {getCartCount()}
                  </span>
                )}
              </button>
              
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-1"
              >
                <svg
                  className="w-7 h-7"
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

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#DC7331] px-4 pb-6 space-y-2">
            <div className="pt-2 pb-3 border-b border-amber-500/30">
              <div className="flex items-center gap-2 mb-1">
                <span className={`inline-block w-2 h-2 rounded-full ${storeStatus.isOpen ? 'bg-green-400' : 'bg-red-500'}`}></span>
                <span className="font-medium">{storeStatus.message}</span>
              </div>
              <div className="text-sm opacity-90">{storeStatus.hours}</div>
              {!storeStatus.isOpen && storeStatus.nextOpen && (
                <div className="text-sm mt-1">{storeStatus.nextOpen}</div>
              )}
            </div>
            
            <Link 
              to="/" 
              className={`block py-2 px-3 rounded transition-colors duration-200 ${
                isActive('/') 
                  ? 'bg-amber-700 text-amber-300 font-semibold' 
                  : 'hover:text-amber-300 hover:bg-amber-600/30'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/catalog" 
              className={`block py-2 px-3 rounded transition-colors duration-200 ${
                isActive('/catalog') 
                  ? 'bg-amber-700 text-amber-300 font-semibold' 
                  : 'hover:text-amber-300 hover:bg-amber-600/30'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
            <Link 
              to="/aboutus" 
              className={`block py-2 px-3 rounded transition-colors duration-200 ${
                isActive('/aboutus') 
                  ? 'bg-amber-700 text-amber-300 font-semibold' 
                  : 'hover:text-amber-300 hover:bg-amber-600/30'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`block py-2 px-3 rounded transition-colors duration-200 ${
                isActive('/contact') 
                  ? 'bg-amber-700 text-amber-300 font-semibold' 
                  : 'hover:text-amber-300 hover:bg-amber-600/30'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            
            {/* Cart Button in Mobile Menu */}
            <button
              onClick={() => {
                setIsMenuOpen(false);
                openCart();
              }}
              className={`block py-2 px-3 rounded transition-colors duration-200 flex items-center justify-between w-full ${
                isActive('/cart') 
                  ? 'bg-amber-700 text-amber-300 font-semibold' 
                  : 'hover:text-amber-300 hover:bg-amber-600/30'
              }`}
            >
              <span>Keranjang</span>
              {getCartCount() > 0 && (
                <span className="bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
                  {getCartCount()} item
                </span>
              )}
            </button>

            <Link
              to="/catalog"
              className={`w-full py-3 rounded-lg transition font-medium mt-4 flex items-center justify-center gap-2 ${
                storeStatus.isOpen 
                  ? 'bg-amber-600 hover:bg-amber-500' 
                  : 'bg-gray-600 cursor-not-allowed opacity-80'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {storeStatus.isOpen ? (
                <>
                  <FaShoppingCart />
                  Order Now ({getCartCount()})
                </>
              ) : (
                `Tutup - ${storeStatus.nextOpen}`
              )}
            </Link>
          </div>
        )}
      </nav>

      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={closeCart} />
    </>
  );
}