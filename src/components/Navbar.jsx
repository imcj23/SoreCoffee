import { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import { FaShoppingCart, FaTimes,  } from "react-icons/fa";
import Logo from '../assets/photo/Logo_sore.png';
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
      sunday: { open: 8, close: 22 }
    };
    
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

  const [storeStatus, setStoreStatus] = useState(() => calculateStatus());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newStatus = calculateStatus();
      setStoreStatus(prev => {
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
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
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
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">

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
              {menuItems.map((item) => (
                <Link 
                  key={item.path}
                  to={item.path} 
                  className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive(item.path) 
                      ? 'bg-white text-[#DC7331] font-bold shadow' 
                      : 'hover:text-amber-300'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={openCart}
                className="relative hover:text-amber-300 transition-colors"
              >
                <FaShoppingCart size={24} />
                {getCartCount() > 0 && (
                  <span className="absolute -top-2.5 -right-2.5 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {getCartCount()}
                  </span>
                )}
              </button>
            </div>

            <div className="md:hidden flex items-center gap-4">
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
                onClick={toggleMenu}
                className="p-2 hover:text-amber-300 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>

          </div>
        </div>

        <div className={`md:hidden fixed inset-0 z-50 transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <div className={`absolute inset-0 bg-[#DC7331] transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}>
            
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={closeMenu}
                className="p-3 text-white hover:text-amber-300 transition-colors"
              >
                <FaTimes size={28} />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center pt-16 pb-8">
              <img
                src={Logo}
                alt="SoreCoffee"
                className="w-24 h-24 object-contain mb-4"
              />
              <h1 className="text-2xl font-bold text-white mb-2">Sore Coffee</h1>
              <div className="flex items-center gap-2">
                <span className={`inline-block w-3 h-3 rounded-full ${storeStatus.isOpen ? 'bg-green-400 animate-pulse' : 'bg-red-500'}`}></span>
                <span className="text-white/90">{storeStatus.message}</span>
              </div>
            </div>

            <div className="px-6 space-y-2">
              {menuItems.map((item) => (
                <Link 
                  key={item.path}
                  to={item.path} 
                  className={`block text-center py-4 text-xl font-medium rounded-xl transition-all duration-200 ${
                    isActive(item.path) 
                      ? 'bg-white text-[#DC7331] shadow-lg scale-105' 
                      : 'text-white hover:bg-white/20 hover:scale-[1.02]'
                  }`}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/20">
              <div className="text-center">
                <p className="text-white/80 mb-1">Jam Operasional</p>
                <p className="text-white text-lg font-semibold mb-2">{storeStatus.hours}</p>
                {!storeStatus.isOpen && storeStatus.nextOpen && (
                  <p className="text-white">
                    ⏰ {storeStatus.nextOpen}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <CartSidebar isOpen={isCartOpen} onClose={closeCart} />
    </>
  );
}