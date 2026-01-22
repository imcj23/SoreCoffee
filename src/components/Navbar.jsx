import { Link } from 'react-router-dom';
import Logo from '../assets/photo/Logo_sore.png';
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#DC7331] text-white sticky top-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        {/* Perbesar tinggi navbar */}
        <div className="flex justify-between items-center h-20">

          {/* Logo + Brand */}
          <div className="flex items-center gap-3">
            <img
              src={Logo}
              alt="SoreCoffee"
              className="w-16 h-16 object-contain"
            />
            <h1 className="text-xl font-bold tracking-wide">
              Sore Coffee
            </h1>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-amber-300">
              Home
            </Link>
            <Link to="/Catalog" className="hover:text-amber-300">
              Menu
            </Link>
            <Link className="hover:text-amber-300">
              About
            </Link>
            <Link className="hover:text-amber-300">
              Contact
            </Link>
          </div>

          {/* Button */}
          <div className="hidden md:block">
            <button className="bg-amber-600 px-5 py-2 rounded-lg hover:bg-amber-500 transition">
              Order Now
            </button>
          </div>

          {/* Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
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

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-[#DC7331] px-4 pb-6 space-y-2">
          <Link to="/" className="block py-2 hover:text-amber-300">
            Home
          </Link>
          <Link to="/Catalog" className="block py-2 hover:text-amber-300">
            Menu
          </Link>
          <Link className="block py-2 hover:text-amber-300">
            About
          </Link>
          <Link className="block py-2 hover:text-amber-300">
            Contact
          </Link>

          <button className="w-full bg-amber-600 py-2 rounded-lg hover:bg-amber-500 transition">
            Order Now
          </button>
        </div>
      )}
    </nav>
  );
}
