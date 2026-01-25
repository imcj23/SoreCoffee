import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/photo/Logo_sore.png";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isStoreOpen, setIsStoreOpen] = useState(false);
  const location = useLocation();

  const checkStoreStatus = () => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentDay = now.getDay();

    const openingHour = 8;
    const closingHour = 22;

    const isClosedOnSunday = currentDay === 0;

    const isOpenNow =
      currentHour >= openingHour &&
      currentHour < closingHour &&
      !isClosedOnSunday;

    setIsStoreOpen(isOpenNow);
  };

  useEffect(() => {
    checkStoreStatus();
    const interval = setInterval(checkStoreStatus, 60000);

    return () => clearInterval(interval);
  }, []);

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
              <h1 className="text-xl font-bold tracking-wide">Sore Coffee</h1>
              <div className="flex items-center gap-2 text-sm">
                <span
                  className={`inline-block w-2 h-2 rounded-full ${isStoreOpen ? "bg-green-400 animate-pulse" : "bg-red-500"}`}
                ></span>
                <span>{isStoreOpen ? "Buka Sekarang" : "Tutup"}</span>
              </div>
            </div>
          </div>

          <div className="hidden md:flex space-x-6 items-center">
            <Link
              to="/"
              className={`relative hover:text-amber-300 transition-colors duration-200 ${
                isActive("/") ? "text-amber-300 font-semibold" : ""
              }`}
            >
              Home
              {isActive("/") && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-300"></span>
              )}
            </Link>
            <Link
              to="/Catalog"
              className={`relative hover:text-amber-300 transition-colors duration-200 ${
                isActive("/Catalog") ? "text-amber-300 font-semibold" : ""
              }`}
            >
              Menu
              {isActive("/Catalog") && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-300"></span>
              )}
            </Link>
            <Link
              to="/aboutus"
              className={`relative hover:text-amber-300 transition-colors duration-200 ${
                isActive("/aboutus ") ? "text-amber-300 font-semibold" : ""
              }`}
            >
              About
              {isActive("/aboutus") && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-300"></span>
              )}
            </Link>
            <Link
              to="/contact"
              className={`relative hover:text-amber-300 transition-colors duration-200 ${
                isActive("/contact") ? "text-amber-300 font-semibold" : ""
              }`}
            >
              Contact
              {isActive("/contact") && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-300"></span>
              )}
            </Link>
          </div>

          <div className="hidden md:block">
            <button
              className={`px-5 py-2 rounded-lg transition-all duration-300 font-medium ${
                isStoreOpen
                  ? "bg-[#F6EDE4] text-[#DC7331] border border-transparent hover:bg-[#DC7331] hover:text-[#F6EDE4] hover:border-[#F6EDE4] cursor-pointer shadow-md hover:shadow-lg"
                  : "bg-gray-500 text-gray-300 cursor-not-allowed opacity-80 border border-gray-400"
              }`}
              disabled={!isStoreOpen}
            >
              {isStoreOpen ? "Pesan Sekarang" : "Tutup"}
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2"
            >
              <div className="text-right">
                <div className="flex items-center justify-end gap-2">
                  <span
                    className={`inline-block w-2 h-2 rounded-full ${isStoreOpen ? "bg-green-400" : "bg-red-500"}`}
                  ></span>
                  <span className="text-sm">
                    {isStoreOpen ? "Buka" : "Tutup"}
                  </span>
                </div>
                <div className="text-xs opacity-80">8:00-22:00</div>
              </div>
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
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#DC7331] px-4 pb-6 space-y-2">
          <button
            className={`w-full py-2 rounded-lg transition ${
              isStoreOpen
                ? "bg-amber-600 hover:bg-amber-500"
                : "bg-gray-500 cursor-not-allowed opacity-70"
            }`}
            disabled={!isStoreOpen}
          >
            {isStoreOpen ? "Order Now" : "Tutup - Buka jam 8:00"}
          </button>
        </div>
      )}
    </nav>
  );
}
