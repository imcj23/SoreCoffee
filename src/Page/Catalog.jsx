import { useState } from "react";
import { FaStar, FaClock, FaCoffee, FaLeaf, FaShoppingCart, FaFilter, FaTag, FaPercent, FaGlassCheers } from "react-icons/fa";
import { FaFireFlameCurved } from "react-icons/fa6";
import { menus } from "../utils/menu";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BottomSheet from "../components/BottomSheet";
import CartNotification from "../components/CartNotification";

export default function Catalog() {
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const openSheet = (menu) => {
    setSelectedMenu(menu);
    setIsSheetOpen(true);
  };

  const closeSheet = () => {
    setIsSheetOpen(false);
    setTimeout(() => {
      setSelectedMenu(null);
    }, 300);
  };

  const filteredItems =
    activeCategory === "all"
      ? menus
      : menus.filter((item) =>
          item.category.toLowerCase() === activeCategory.toLowerCase()
        );

  const popularItems = menus.filter(item => item.rating >= 4.5);
  const coffeeItems = menus.filter(item => item.category === "Coffee");
  const nonCoffeeItems = menus.filter(item => item.category === "Non-Coffee");

  return (
    <>
      <Navbar />
      <CartNotification />
      <div className="relative overflow-hidden bg-gradient-to-br from-amber-900 via-amber-800 to-amber-950 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full"></div>
        </div>

        <div className="container relative mx-auto px-4 py-20 max-w-6xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Menu <span className="text-amber-300">SoreCoffee</span>
            </h1>
            
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-8 px-4">
              Temukan cita rasa terbaik dalam setiap tegukan. Dari kopi klasik hingga kreasi spesial
            </p>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-amber-300">{menus.length}+</div>
                <div className="text-xs md:text-sm opacity-80">Menu Variasi</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-amber-300">
                  {Math.round(menus.reduce((acc, item) => acc + item.rating, 0) / menus.length * 10) / 10}
                </div>
                <div className="text-xs md:text-sm opacity-80">Rating Rata-rata</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-amber-300">
                  {popularItems.length}
                </div>
                <div className="text-xs md:text-sm opacity-80">Menu Populer</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-8 md:py-12 bg-gradient-to-b from-white to-amber-50/30 min-h-screen">
        <div className="container mx-auto px-3 md:px-4 max-w-7xl">
          <div className="sticky top-16 md:top-20 z-40 bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-md md:shadow-lg p-1.5 md:p-2 mb-6 md:mb-10 border border-amber-100">
            <div className="flex flex-wrap justify-center gap-1.5 md:gap-2">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-3 md:px-5 py-2 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm font-medium md:font-semibold transition-all duration-300 flex items-center gap-1.5 md:gap-2 ${
                  activeCategory === "all"
                    ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md md:shadow-lg shadow-amber-200"
                    : "text-gray-700 hover:bg-amber-50 hover:text-amber-900"
                }`}
              >
                <FaFilter size={14} className="md:size-4" />
                <span className="hidden sm:inline">Semua Menu</span>
                <span className="sm:hidden">Semua</span>
              </button>
              <button
                onClick={() => setActiveCategory("coffee")}
                className={`px-3 md:px-5 py-2 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm font-medium md:font-semibold transition-all duration-300 flex items-center gap-1.5 md:gap-2 ${
                  activeCategory === "coffee"
                    ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md md:shadow-lg shadow-amber-200"
                    : "text-gray-700 hover:bg-amber-50 hover:text-amber-900"
                }`}
              >
                <FaCoffee size={14} className="md:size-4" />
                <span>Coffee</span>
                <span className="bg-amber-100 text-amber-800 text-xs px-1.5 md:px-2 py-0.5 rounded-full">
                  {coffeeItems.length}
                </span>
              </button>
              <button
                onClick={() => setActiveCategory("non-coffee")}
                className={`px-3 md:px-5 py-2 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm font-medium md:font-semibold transition-all duration-300 flex items-center gap-1.5 md:gap-2 ${
                  activeCategory === "non-coffee"
                    ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md md:shadow-lg shadow-amber-200"
                    : "text-gray-700 hover:bg-amber-50 hover:text-amber-900"
                }`}
              >
                <FaLeaf size={14} className="md:size-4" />
                <span className="hidden sm:inline">Non-Coffee</span>
                <span className="sm:hidden">Non-Kopi</span>
                <span className="bg-green-100 text-green-800 text-xs px-1.5 md:px-2 py-0.5 rounded-full">
                  {nonCoffeeItems.length}
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6 mb-12 md:mb-16">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 md:hover:-translate-y-2 border border-amber-100"
              >
                <div className="relative h-40 md:h-56 overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10"></div>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 md:group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 z-20">
                    <div className="bg-white/95 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-lg md:rounded-xl shadow-md">
                      <span className="text-amber-900 font-bold text-sm md:text-lg">{item.price}</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 md:p-6">
                  <div className="flex justify-between items-start mb-2 md:mb-3">
                    <div className="flex-1">
                      <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1 md:mb-2 line-clamp-1 group-hover:text-amber-800 transition-colors">
                        {item.name}
                      </h3>
                      
                      <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                        <span className={`px-2 md:px-3 py-0.5 md:py-1 rounded-full text-xs font-medium ${
                          item.category === "Coffee"
                            ? "bg-amber-100 text-amber-800"
                            : "bg-green-100 text-green-800"
                        }`}>
                          {item.category}
                        </span>
                        
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              size={12}
                              className={
                                i < Math.floor(item.rating)
                                  ? "fill-amber-500 text-amber-500"
                                  : "text-gray-300"
                              }
                            />
                          ))}
                          <span className="ml-1 md:ml-2 text-xs md:text-sm font-medium md:font-semibold text-gray-700">
                            {item.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  {item.tags && item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                      {item.tags.slice(0, 2).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 md:px-3 py-0.5 md:py-1 bg-gradient-to-r from-amber-50 to-orange-50 text-amber-800 rounded text-xs md:text-xs font-medium border border-amber-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-amber-100">
                    <div className="flex items-center gap-3 md:gap-4 text-xs md:text-sm text-gray-500">
                      <div className="flex items-center gap-1 md:gap-2">
                        <FaFireFlameCurved className="text-orange-500 md:size-4" size={12} />
                        <span>{item.calories} kcal</span>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => openSheet(item)}
                      className="group relative px-3 md:px-5 py-1.5 md:py-2.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-medium md:font-semibold rounded-full transition-all duration-300 hover:shadow-md md:hover:shadow-lg hover:shadow-amber-200 hover:-translate-y-0.5 overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center gap-1 md:gap-2 text-xs md:text-sm">
                        Detail
                        <svg className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12 md:py-16">
              <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 md:mb-8">
                <div className="absolute inset-0 bg-linear-to-r from-amber-200 to-orange-200 rounded-full animate-pulse"></div>
                <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
                  <FaCoffee className="text-amber-300 md:size-16" size={48} />
                </div>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">
                Menu Tidak Ditemukan
              </h3>
              <p className="text-gray-600 mb-6 md:mb-8 max-w-md mx-auto px-4 text-sm md:text-base">
                Kami sedang memperbarui menu untuk kategori ini. Coba pilih kategori lain!
              </p>
              
              <button
                onClick={() => setActiveCategory("all")}
                className="px-6 md:px-8 py-2.5 md:py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-amber-200 transition-all duration-300 transform hover:-translate-y-1 text-sm md:text-base"
              >
                Lihat Semua Menu
              </button>
            </div>
          )}

          {/* Special Features Section */}
          <div className="mt-12 md:mt-20">
            <div className="text-center mb-8 md:mb-10">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-3 md:mb-4">
                <FaGlassCheers />
                <span className="text-xs md:text-sm font-semibold">Keunggulan Kami</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
                Mengapa <span className="text-amber-600">SoreCoffee?</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              <div className="bg-gradient-to-br from-white to-amber-50 p-4 md:p-8 rounded-2xl md:rounded-3xl border border-amber-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 mx-auto md:mx-0">
                  <FaCoffee className="text-white text-xl md:text-2xl" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 text-center md:text-left">Biji Kopi Pilihan</h3>
                <p className="text-gray-600 text-sm md:text-base text-center md:text-left">
                  Biji kopi arabika terbaik dari perkebunan lokal dengan roasting sempurna
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-amber-50 p-4 md:p-8 rounded-2xl md:rounded-3xl border border-amber-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 mx-auto md:mx-0">
                  <FaLeaf className="text-white text-xl md:text-2xl" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 text-center md:text-left">Bahan Alami</h3>
                <p className="text-gray-600 text-sm md:text-base text-center md:text-left">
                  100% bahan alami tanpa pengawet atau bahan kimia tambahan
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-amber-50 p-4 md:p-8 rounded-2xl md:rounded-3xl border border-amber-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 mx-auto md:mx-0">
                  <FaTag className="text-white text-xl md:text-2xl" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 text-center md:text-left">Harga Terjangkau</h3>
                <p className="text-gray-600 text-sm md:text-base text-center md:text-left">
                  Kualitas premium dengan harga yang ramah di kantong
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedMenu && (
        <BottomSheet
          menu={selectedMenu}
          isOpen={isSheetOpen}
          onClose={closeSheet}
        />
      )}
      
      <Footer />
    </>
  );
}