import { useState, useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaClock,
  FaMap,
  FaWhatsapp,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";
import { Coffee } from "lucide-react";
import {
  gerobakLocations,
  // locationStats,
  generateGoogleMapsUrl,
  generateWhatsAppOrderUrl,
} from "../utils/location";
import CoffeeBike from "../assets/Icon/coffee-shop.png";
// import CoffeeBike2 from "../assets/Icon/coffee-shop2.png";

export default function LocationsSection() {
  const [activeOutlet, setActiveOutlet] = useState(0);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isVerySmall, setIsVerySmall] = useState(false);

  const currentLocation =
    gerobakLocations.find((loc) => loc.id === activeOutlet) ||
    gerobakLocations[0];

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 1024);
      setIsVerySmall(width < 400);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const handleOutletClick = (outletId) => {
    setActiveOutlet(outletId);
    if (isMobile) {
      setIsSheetOpen(true);
    }
  };

  const closeSheet = () => {
    setIsSheetOpen(false);
  };

  return (
    <>
      <section id="location-section" className="py-12 sm:py-16 bg-[#faebd7]">
        <div className="container mx-auto px-3 sm:px-4 max-w-6xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-900 mb-3 sm:mb-4 px-2">
              Temukan <span className="text-black">Lokasi</span> Kami
            </h2>
            <p className="">
              {isVerySmall
                ? " Titik Lokasi Kami di Tanjungpinang"
                : "Titik Lokasi kami yang tersebar di Tanjungpinang"}
            </p>

            <div className="w-16 sm:w-24 h-1 bg-amber-900 mx-auto mt-4 sm:mt-6"></div>
          </div>
          <div className=" flex flex-col lg:flex-row gap-6 sm:gap-8">
            <div className="lg:w-2/5 h-full">
              <div className="h-full rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:sticky lg:top-24 lg:bg-white lg:border lg:border-amber-100">
                <div className="h-full sm:space-y-3 mb-4 sm:mb-6 max-h-160 sm:max-h-130 sm:overflow-y-auto pr-1 sm:pr-2 custom-scrollbar space-y-2">
                  {gerobakLocations.map((outlet) => (
                    <button
                      key={outlet.id}
                      onClick={() => handleOutletClick(outlet.id)}
                      className={`w-full text-left p-3 sm:p-4 rounded-xl transition-all duration-300 ${
                        activeOutlet === outlet.id
                          ? "bg-amber-900 text-white shadow-lg"
                          : "lg:bg-white sm:bg-transparent border border-amber-900 sm:border-0 lg:border lg:border-amber-200 hover:shadow-md"
                      }`}
                    >
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div
                          className={`p-2 sm:p-3 rounded-lg sm:rounded-xl shrink-0 ${
                            activeOutlet === outlet.id
                              ? "bg-white/20"
                              : "bg-amber-100"
                          }`}
                        >
                          <Coffee
                            className={
                              activeOutlet === outlet.id
                                ? "text-white"
                                : "text-amber-900"
                            }
                            size={isVerySmall ? 16 : 20}
                          />
                          {/* <FaMapMarkerAlt/> */}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start gap-1 mb-0.5 sm:mb-1">
                            <h4
                              className={`font-bold truncate ${
                                activeOutlet === outlet.id
                                  ? "text-white"
                                  : "text-gray-900"
                              } ${isVerySmall ? "text-sm" : "text-base"}`}
                            >
                              {isVerySmall
                                ? outlet.shortName.replace("Sore Coffee ", "")
                                : outlet.shortName}
                            </h4>
                            <span
                              className={`text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full shrink-0 flex items-center gap-1 ${
                                activeOutlet === outlet.id
                                  ? "bg-white/30 text-white"
                                  : "bg-amber-200 text-amber-900"
                              }`}
                            >
                              {!isVerySmall && " Everyday"}
                            </span>
                          </div>

                          <p
                            className={`text-xs sm:text-sm ${
                              activeOutlet === outlet.id
                                ? "text-amber-100"
                                : "text-gray-600"
                            } truncate max-w-50 sm:max-w-full`}
                          >
                            {isVerySmall
                              ? outlet.address.split(",")[0]
                              : outlet.address}
                          </p>

                          {/* Footer */}
                          {/* <div className="flex items-center justify-between mt-2 sm:mt-3">
                            <span
                              className={`text-[10px] sm:text-xs flex items-center gap-1 ${
                                activeOutlet === outlet.id
                                  ? "text-amber-200"
                                  : "text-gray-500"
                              }`}
                            >
                              <FaClock size={isVerySmall ? 8 : 10} />
                              {isVerySmall
                                ? outlet.hours.replace("0:00", "")
                                : outlet.hours}
                            </span>
                          </div> */}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Detail View Desktop */}
            <div className="lg:w-3/5">
              <div className="hidden lg:block h-full">
                <div className="h-full flex flex-col bg-white rounded-2xl  shadow-lg overflow-hidden">
                  <div className="flex-1 xl:h-64 bg-[url('/src/assets/photo/bg-maps.jpg')] bg-cover relative overflow-hidden before:absolute before:inset-0 before:bg-amber-900 before:opacity-70">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white p-6 xl:p-8">
                        <h3 className="text-xl xl:text-2xl font-bold mb-1 xl:mb-2">
                          {currentLocation.name}
                        </h3>
                        <p className="text-white font-bold text-sm xl:text-base">
                          {currentLocation.shortName} • Tanjungpinang
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 xl:p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 xl:gap-4 mb-5 xl:mb-6">
                      <div>
                        <h3 className="text-xl xl:text-2xl font-bold text-gray-900 mb-2 xl:mb-2">
                          {currentLocation.name}
                        </h3>
                        <div className="flex flex-wrap gap-1.5 xl:gap-2 mb-2 xl:mb-3">
                          <span className="px-2 xl:px-3 py-0.5 xl:py-1 bg-green-100 text-green-800 rounded-full text-xs xl:text-sm font-medium">
                            📍 {currentLocation.landmark}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-col-2 md:grid-cols-2 gap-5 xl:gap-6 mb-6 xl:mb-8">
                      <div className="space-y-3 xl:space-y-4">
                        <div className="flex items-start gap-2 xl:gap-3">
                          <div className="p-1.5 xl:p-2 bg-amber-100 rounded-lg shrink-0">
                            <FaMapMarkerAlt
                              className="text-amber-900"
                              size={18}
                            />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 text-sm xl:text-base mb-0.5">
                              Lokasi Tepat
                            </h4>
                            <p className="text-gray-600 text-xs xl:text-sm">
                              {currentLocation.exactLocation}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3 xl:space-y-4">
                        <div className="flex items-start gap-2 xl:gap-3">
                          <div className="p-1.5 xl:p-2 bg-amber-100 rounded-lg shrink-0">
                            <FaClock className="text-amber-900" size={18} />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 text-sm xl:text-base mb-0.5">
                              Jam Operasional
                            </h4>
                            <p className="text-gray-600 text-xs xl:text-sm">
                              {currentLocation.hours}
                            </p>
                            <p className="text-[10px] xl:text-xs text-gray-500 mt-0.5 xl:mt-1">
                              {currentLocation.operatingDays}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-6 xl:mt-8 pt-6 xl:pt-8 border-t border-gray-200">
                      <div className="flex flex-col sm:flex-row gap-3 xl:gap-4">
                        <a
                          href={generateGoogleMapsUrl(
                            currentLocation.exactLocation,
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-4 xl:px-6 py-2.5 xl:py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-bold text-sm xl:text-base text-center flex items-center justify-center gap-1.5 xl:gap-2"
                        >
                          <FaMap size={16} />
                          Google Maps
                        </a>
                        <a
                          href={generateWhatsAppOrderUrl(currentLocation.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-4 xl:px-6 py-2.5 xl:py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors font-bold text-sm xl:text-base text-center flex items-center justify-center gap-1.5 xl:gap-2"
                        >
                          <FaWhatsapp size={16} />
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Sheet */}
      {isMobile && (
        <>
          {isMobile && (
            <>
              <div
                className={`fixed inset-0 z-40 transition-all duration-300 ${
                  isSheetOpen
                    ? "bg-black/50 backdrop-blur-sm"
                    : "bg-black/0 backdrop-blur-0 pointer-events-none"
                }`}
                onClick={closeSheet}
              />

              <div
                className={`fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-2xl sm:rounded-t-3xl shadow-2xl transform transition-all duration-300 ease-in-out ${
                  isSheetOpen ? "translate-y-0" : "translate-y-full"
                } max-h-[92vh] sm:max-h-[85vh] overflow-y-auto`}
              >
                <div className="sticky top-0 bg-white pt-2 sm:pt-4 pb-1 sm:pb-2 rounded-t-2xl sm:rounded-t-3xl z-10">
                  <div className="w-12 h-1.5 sm:w-12 sm:h-1.5 bg-gray-300 rounded-full mx-auto mb-2 sm:mb-4" />
                  <button
                    onClick={closeSheet}
                    className="absolute right-2 sm:right-4 top-1.5 sm:top-4 p-1.5 sm:p-2 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Tutup"
                  >
                    <FaTimes size={18} className="sm:text-[24px]" />
                  </button>
                </div>

                <div className="px-3 pb-5 sm:px-6 sm:pb-8">
                  <div className="h-28 sm:h-48 mb-3 sm:mb-6 bg-linear-to-r from-amber-900 to-amber-700 rounded-xl sm:rounded-2xl overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center bg-[url('/src/assets/photo/bg-maps.jpg')] bg-cover">
                      <div className="absolute inset-0 bg-amber-900/70"></div>

                      {/* Konten teks */}
                      <div className="relative text-center text-white p-3 sm:p-6 z-10">
                        <h3 className="text-base sm:text-2xl font-bold mb-1 sm:mb-2 px-2 truncate">
                          {currentLocation.name}
                        </h3>
                        <p className="text-[11px] sm:text-base text-amber-100">
                          {currentLocation.shortName} • TPI
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                      {currentLocation.name}
                    </h3>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-green-100 text-green-800 rounded-full text-[9px] sm:text-sm font-medium max-w-full sm:max-w-none whitespace-normal">
                        📍 {currentLocation.landmark}
                      </span>
                    </div>
                  </div>

                  <div className="p-2.5 sm:p-4 space-y-3 bg-amber-50 rounded-xl sm:rounded-2xl mb-5 sm:mb-8">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="p-1.5 sm:p-2 bg-amber-100 rounded-lg shrink-0">
                        <FaMapMarkerAlt className="text-amber-900" size={14} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-xs sm:text-base mb-1">
                          Lokasi Tepat
                        </h4>
                        <p className="text-gray-600 text-[11px] sm:text-sm wrap-break-word">
                          {currentLocation.exactLocation}
                        </p>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="p-1.5 sm:p-2 bg-amber-100 rounded-lg shrink-0">
                        <FaClock className="text-amber-900" size={14} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-xs sm:text-base mb-1">
                          Jam Operasional
                        </h4>
                        <p className="text-gray-600 text-[11px] sm:text-sm">
                          {currentLocation.hours}
                        </p>
                        <p className="text-gray-500 text-[9px] sm:text-xs mt-1">
                          {currentLocation.operatingDays}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="mt-4 sm:mt-8 pt-4 sm:pt-8 space-y-2 border-t border-gray-200">
                    <a
                      href={generateGoogleMapsUrl(
                        currentLocation.exactLocation,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full px-3 py-2 sm:px-6 sm:py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-bold text-center flex items-center justify-center gap-2 text-xs sm:text-base"
                    >
                      <FaMap size={12} />
                      <span>Maps</span>
                    </a>

                    <a
                      href={generateWhatsAppOrderUrl(currentLocation.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full px-3 py-2 sm:px-6 sm:py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors font-bold text-center flex items-center justify-center gap-2 text-xs sm:text-base"
                    >
                      <FaWhatsapp size={12} />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #b45309;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #92400e;
        }
      `}</style>
    </>
  );
}
