import { useState } from "react";
import { menus } from "../utils/menu";
import Navbar from "../components/Navbar";

export default function MenuCatalog() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const openSheet = (menu) => {
    setSelectedMenu(menu);
    setIsOpen(true);
  };

  const closeSheet = () => {
    setIsClosing(true);

    setTimeout(() => {
      setIsOpen(false);
      setSelectedMenu(null);
      setIsClosing(false);
    }, 300);
  };

  const filteredMenus =
    activeCategory === "all"
      ? menus
      : menus.filter((menu) => menu.category === activeCategory);

  return (
    <>
      <Navbar />

      <div className="p-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Menu Kopi Sore</h2>

        <div className="flex justify-center gap-3 mb-6">
          {["all", "Coffee-Based", "Non-Coffee", "Kopi Kaleng"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#DC7331] text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {cat === "all" ? "All" : cat.replace("-", " ")}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5" data-aos="slide">
          {filteredMenus.map((menu) => (
            <div
              key={menu.id}
              className="rounded-xl shadow hover:scale-105 transition"
            >
              <img
                src={menu.image}
                alt={menu.name}
                className="h-80 w-60 object-cover rounded-t-xl mx-auto "
              />

              <div className="p-3">
                <h3 className="font-semibold">{menu.name}</h3>
                <p className="text-sm text-gray-500">{menu.category}</p>

                <div className="flex justify-end mt-2">
                  <button
                    onClick={() => openSheet(menu)}
                    className="bg-amber-600 text-white px-4 py-1 rounded-xl font-bold cursor-pointer"
                  >
                    Detail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {isOpen && selectedMenu && (
          <div className="fixed inset-0 z-50 flex items-end justify-center" data-aos='slide-up'>
            <div
              className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                isClosing ? "opacity-0" : "opacity-40"
              }`}
              onClick={closeSheet}
            />

            <div
              className="w-full max-w-md mx-auto bg-[#F6EDE4] rounded-t-3xl p-6 transition-transform duration-300" 
              style={{
                transform: isClosing ? "translateY(100%)" : "translateY(0)",
              }}
            >
              <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4" />

              <img
                src={selectedMenu.image}
                alt={selectedMenu.name}
                className="w-full h-56 object-cover rounded-xl"
              />

              <h2 className="text-xl font-bold mt-4">{selectedMenu.name}</h2>

              <p className="text-sm text-gray-600 mt-2">
                {selectedMenu.description}
              </p>

              <p className="text-sm text-black mt-2 font-bold">
                {selectedMenu.price}
              </p>

              <button
                onClick={closeSheet}
                className="mt-5 w-full bg-[#DC7331] text-white py-3 rounded-xl font-semibold"
              >
                Tutup
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
