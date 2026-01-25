import { useState, useEffect, useRef } from "react";
import { FaStar, FaClock, FaCoffee, FaLeaf } from "react-icons/fa";
import { FaFireFlameCurved } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { menus } from "../utils/menu";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BottomSheet = ({ menu, isOpen, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const sheetRef = useRef(null);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 1000);
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

  if (!isOpen) return null;

  return (
    <>
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          isClosing
            ? "bg-black/0 backdrop-blur-0"
            : "bg-black/50 backdrop-blur-sm"
        }`}
        onClick={handleOverlayClick}
      />

      <div
        // data-aos='slide-up'
        ref={sheetRef}
        className={`fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl shadow-2xl transform transition-all duration-1000 slide-down max-h-[90vh] w-200 overflow-y-auto mx-auto ${
          isClosing
            ? "translate-y-full opacity-100"
            : "translate-y-0 opacity-100"
        }`}
        style={{
          transitionTimingFunction: isClosing
            ? "cubic-bezier(0.4, 0, 0.2, 1)"
            : "cubic-bezier(0.32, 0.72, 0, 1)",
        }}
      >
        <div className="sticky top-0 bg-white pt-4 pb-2 rounded-t-3xl z-10">
          <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4" />
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <IoCloseSharp size={24} />
          </button>
        </div>

        <div className="px-6 pb-8">
          <div className="relative h-100 w-full mb-6 rounded-2xl overflow-hidden">
            <img
              src={menu.image}
              alt={menu.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3">
              <span className="bg-amber-900 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {menu.category}
              </span>
            </div>
          </div>

          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{menu.name}</h3>
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
            <div className="text-2xl font-bold text-amber-900">
              {menu.price}
            </div>
          </div>

          <p className="text-gray-600 mb-6">{menu.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {Array.isArray(menu.tags) &&
              menu.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-amber-50 text-amber-800 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-50 p-4 rounded-xl">
              <div className="flex items-center gap-2 text-gray-700 mb-1">
                <FaFireFlameCurved size={18} />
                <span className="font-medium">Kalori</span>
              </div>
              <p className="text-lg font-semibold">{menu.calories} kcal</p>
            </div>
          </div>

          {Array.isArray(menu.ingredients) && menu.ingredients.length > 0 && (
            <div className="mb-8">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Bahan Utama
              </h4>
              <div className="flex flex-wrap gap-2">
                {menu.ingredients.map((ingredient, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white border border-amber-200 text-amber-800 rounded-full text-sm"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* <div className="mb-8">
            <h4 className="text-lg font-bold text-gray-900 mb-3">
              Opsi Customization
            </h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">Ukuran</span>
                <div className="flex gap-2">
                  {["S", "M", "L"].map((size) => (
                    <button
                      key={size}
                      className="px-3 py-1 text-sm rounded-full border border-amber-300 hover:bg-amber-50 transition-colors"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">Tingkat Kemanisan</span>
                <div className="flex gap-2">
                  {["25%", "50%", "75%", "100%"].map((sweet) => (
                    <button
                      key={sweet}
                      className="px-3 py-1 text-sm rounded-full border border-amber-300 hover:bg-amber-50 transition-colors"
                    >
                      {sweet}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div> */}

          <button className="w-full bg-amber-900 hover:bg-amber-800 text-white font-bold py-4 rounded-xl text-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
            Tambah ke Keranjang - {menu.price}
          </button>
        </div>
      </div>
    </>
  );
};

const MenuSection = () => {
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
          item.category.toLowerCase().includes(activeCategory),
        );

  return (
    <>
      <Navbar />
      <section
        id="menu"
        className="py-16 bg-gradient-to-b from-amber-50 to-white"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
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
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-amber-100 "
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 bg-amber-300"
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

                <div className="p-6 ">
                  <div className="flex justify-between items-start mb-3 ">
                    <div className="">
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

export default MenuSection;
