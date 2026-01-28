import { useState } from "react";
import { FaStar, FaClock, FaCoffee, FaLeaf, FaShoppingCart } from "react-icons/fa";
import { FaFireFlameCurved } from "react-icons/fa6";
import { menus } from "../utils/menu";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BottomSheet from "../components/BottomSheet";
import CartNotification from "../components/CartNotification";

const Catalog = () => {
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

  return (
    <>
      <Navbar />
      <CartNotification />
      <section
        id="menu"
        className="py-16 bg-gradient-to-b from-amber-50 to-white min-h-screen"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12 relative">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Menu <span className="text-amber-900">Spesial</span> Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Temukan cita rasa terbaik dalam setiap tegukan. Dari kopi klasik
              hingga kreasi spesial, kami menghadirkan pengalaman ngopi yang tak
              terlupakan.
            </p>
            
          </div>

          <div className="flex justify-center mb-10">
            <div className="inline-flex flex-wrap justify-center gap-2 rounded-full p-1 bg-white shadow-md border border-amber-100 max-w-full">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === "all"
                    ? "bg-amber-900 text-white shadow-sm"
                    : "text-gray-600 hover:text-amber-900"
                }`}
              >
                Semua Menu
              </button>
              <button
                onClick={() => setActiveCategory("coffee")}
                className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                  activeCategory === "coffee"
                    ? "bg-amber-900 text-white shadow-sm"
                    : "text-gray-600 hover:text-amber-900"
                }`}
              >
                <FaCoffee size={16} className="hidden sm:inline" />
                <span>Coffee</span>
              </button>
              <button
                onClick={() => setActiveCategory("non-coffee")}
                className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                  activeCategory === "non-coffee"
                    ? "bg-amber-900 text-white shadow-sm"
                    : "text-gray-600 hover:text-amber-900"
                }`}
              >
                <FaLeaf size={16} className="hidden sm:inline" />
                <span>Non-Coffee</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-amber-100"
              >
                <div className="relative h-40 sm:h-52 md:h-60 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-55 h-full object-cover transition-transform duration-500 hover:scale-110 mx-auto"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="bg-white/90 backdrop-blur-sm text-amber-900 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                      {item.price}
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 line-clamp-1">
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
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
                          <span className="ml-1 sm:ml-2 text-xs sm:text-sm text-gray-600">
                            {item.rating}/5.0
                          </span>
                        </div>
                      </div>
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold self-start ${
                        item.category === "Coffee"
                          ? "bg-amber-100 text-amber-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {item.category}
                    </span>
                  </div>

                  <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  {item.tags && item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-5">
                      {item.tags.slice(0, 2).map((tag, index) => (
                        <span
                          key={index}
                          className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-100 text-gray-700 rounded-lg text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                      {item.tags.length > 2 && (
                        <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-100 text-gray-700 rounded-lg text-xs">
                          +{item.tags.length - 2}
                        </span>
                      )}
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <FaFireFlameCurved size={12} className="hidden sm:inline" />
                        <span>{item.calories} kcal</span>
                      </div>
                    </div>
                    <button
                      onClick={() => openSheet(item)}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-amber-900 hover:bg-amber-800 text-white font-medium rounded-full transition-colors duration-300 shadow-md hover:shadow-lg text-xs sm:text-sm"
                    >
                      Detail
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <div className="w-32 h-32 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaCoffee className="text-amber-300" size={48} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Menu Tidak Ditemukan
              </h3>
              <p className="text-gray-600 mb-6">
                Coba pilih kategori lain atau kembali ke semua menu
              </p>
              <button
                onClick={() => setActiveCategory("all")}
                className="px-6 py-3 bg-amber-900 text-white font-bold rounded-xl hover:bg-amber-800 transition-colors"
              >
                Tampilkan Semua Menu
              </button>
            </div>
          )}
        </div>

        {selectedMenu && (
          <BottomSheet
            menu={selectedMenu}
            isOpen={isSheetOpen}
            onClose={closeSheet}
          />
        )}
      </section>
      <Footer />
    </>
  );
};

export default Catalog;