import { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/photo/Logo_sore.png';

const useStoreStatus = () => {
  const [storeStatus, setStoreStatus] = useState({
    isOpen: false,
    message: "Loading...",
    nextOpen: "",
    hours: "8:00 - 22:00"
  });

  const storeSchedule = {
    monday: { open: 8, close: 22 },
    tuesday: { open: 8, close: 22 },
    wednesday: { open: 8, close: 22 },
    thursday: { open: 8, close: 22 },
    friday: { open: 8, close: 22 },
    saturday: { open: 8, close: 22 },
    sunday: { open: 8, close: 22 }
  };

  useEffect(() => {
    const calculateStatus = () => {
      const now = new Date();
      const currentHour = now.getHours();
      const currentDay = now.getDay(); 
      

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

    const initialStatus = calculateStatus();
    setStoreStatus(initialStatus);

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
  const [isOpen, setIsOpen] = useState(false);
  const storeStatus = useStoreStatus();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-[#DC7331] text-white sticky top-0 w-full z-50 shadow-md">
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
                <span className="text-xs opacity-80 hidden sm:inline">
                  • {storeStatus.hours}
                </span>
              </div>
              {!storeStatus.isOpen && storeStatus.nextOpen && (
                <div className="text-xs opacity-90 mt-0.5">
                  {storeStatus.nextOpen}
                </div>
              )}
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
              to="/Catalog" 
              className={`relative hover:text-amber-300 transition-colors duration-200 ${
                isActive('/Catalog') ? 'text-amber-300 font-semibold' : ''
              }`}
            >
              Menu
              {isActive('/Catalog') && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-300"></span>
              )}
            </Link>
            <Link 
              to="/about" 
              className={`relative hover:text-amber-300 transition-colors duration-200 ${
                isActive('/about') ? 'text-amber-300 font-semibold' : ''
              }`}
            >
              About
              {isActive('/about') && (
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

          <div className="hidden md:block">
            <button 
              className={`px-5 py-2 rounded-lg transition ${storeStatus.isOpen 
                ? 'bg-amber-600 hover:bg-amber-500 cursor-pointer' 
                : 'bg-gray-600 cursor-not-allowed opacity-80'}`}
              disabled={!storeStatus.isOpen}
            >
              {storeStatus.isOpen ? 'Order Now' : 'Tutup'}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <div className="text-right">
              <div className="flex items-center justify-end gap-2">
                <span className={`inline-block w-2 h-2 rounded-full ${storeStatus.isOpen ? 'bg-green-400' : 'bg-red-500'}`}></span>
                <span className="text-sm font-medium">{storeStatus.isOpen ? 'Buka' : 'Tutup'}</span>
              </div>
              <div className="text-xs opacity-80">{storeStatus.hours.split(' - ')[0]}</div>
            </div>
            <button 
              onClick={() => setIsOpen(!isOpen)}
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
                    isOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>

        </div>
      </div>

      {isOpen && (
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
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/Catalog" 
            className={`block py-2 px-3 rounded transition-colors duration-200 ${
              isActive('/Catalog') 
                ? 'bg-amber-700 text-amber-300 font-semibold' 
                : 'hover:text-amber-300 hover:bg-amber-600/30'
            }`}
            onClick={() => setIsOpen(false)}
          >
            Menu
          </Link>
          <Link 
            to="/about" 
            className={`block py-2 px-3 rounded transition-colors duration-200 ${
              isActive('/about') 
                ? 'bg-amber-700 text-amber-300 font-semibold' 
                : 'hover:text-amber-300 hover:bg-amber-600/30'
            }`}
            onClick={() => setIsOpen(false)}
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
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>

          <button 
            className={`w-full py-3 rounded-lg transition font-medium mt-4 ${
              storeStatus.isOpen 
                ? 'bg-amber-600 hover:bg-amber-500' 
                : 'bg-gray-600 cursor-not-allowed opacity-80'
            }`}
            disabled={!storeStatus.isOpen}
          >
            {storeStatus.isOpen ? 'Order Now' : `Tutup - ${storeStatus.nextOpen}`}
          </button>
        </div>
      )}
    </nav>
  );
}