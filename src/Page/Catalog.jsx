import { useState } from "react";
import { FaStar, FaClock, FaCoffee, FaLeaf, FaShoppingCart } from "react-icons/fa";
import { FaFireFlameCurved } from "react-icons/fa6";
import { menus } from "../utils/menu";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BottomSheet from "../components/BottomSheet";
import CartNotification from "../components/CartNotification";
import useCart from "../hooks/useCart";

const Catalog = () => {
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const { getCartCount } = useCart();

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
          item.category.toLowerCase().includes(activeCategory),
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
            
            {getCartCount() > 0 && (
              <div className="absolute top-0 right-0">
                <div className="relative">
                  <FaShoppingCart size={24} className="text-amber-900" />
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {getCartCount()}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-center mb-10">
            <div className="inline-flex rounded-full p-1 bg-white shadow-md border border-amber-100">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === "all"
                    ? "bg-amber-900 text-white shadow-sm"
                    : "text-gray-600 hover:text-amber-900"
                }`}
              >
                Semua Menu
              </button>
              <button
                onClick={() => setActiveCategory("coffee")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                  activeCategory === "coffee"
                    ? "bg-amber-900 text-white shadow-sm"
                    : "text-gray-600 hover:text-amber-900"
                }`}
              >
                <FaCoffee size={16} />
                Coffee Based
              </button>
              <button
                onClick={() => setActiveCategory("non-coffee")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                  activeCategory === "non-coffee"
                    ? "bg-amber-900 text-white shadow-sm"
                    : "text-gray-600 hover:text-amber-900"
                }`}
              >
                <FaLeaf size={16} />
                Non-Coffee
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-amber-100"
                data-aos="fade-up"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="bg-white/90 backdrop-blur-sm text-amber-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {item.price}
                    </span>
                  </div>
                  {item.tags && item.tags.includes("Best Seller") && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        BESTSELLER
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              size={14}
                              className={
                                i < Math.floor(item.rating)
                                  ? "fill-amber-500 text-amber-500"
                                  : "text-gray-300"
                              }
                            />
                          ))}
                          <span className="ml-2 text-sm text-gray-600">
                            {item.rating}/5.0
                          </span>
                        </div>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        item.category === "Coffee"
                          ? "bg-amber-100 text-amber-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {item.category}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  {item.tags && item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-5">
                      {item.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <FaFireFlameCurved size={14} />
                        <span>{item.calories} kcal</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaClock size={14} />
                        <span>5-7 menit</span>
                      </div>
                    </div>
                    <button
                      onClick={() => openSheet(item)}
                      className="px-5 py-2 bg-amber-900 hover:bg-amber-800 text-white font-medium rounded-full transition-colors duration-300 shadow-md hover:shadow-lg"
                    >
                      Detail
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
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