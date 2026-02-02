import { useState, useEffect } from 'react';
import { 
  FaMapMarkerAlt, 
  FaClock, 
  FaMotorcycle, 
  FaCoffee, 
  FaMap, 
  FaWhatsapp,
  FaTimes,
  FaChevronDown,
} from 'react-icons/fa';
import { gerobakLocations, locationStats, generateGoogleMapsUrl, generateWhatsAppOrderUrl } from '../utils/location';

export default function LocationsSection () {
  const [activeOutlet, setActiveOutlet] = useState(0);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const currentLocation = gerobakLocations.find(loc => loc.id === activeOutlet) || gerobakLocations[0];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleOutletClick = (outletId) => {
    setActiveOutlet(outletId);
    if (isMobile) {
      setIsSheetOpen(true);
    }
  };

  // const openSheet = () => {
  //   setIsSheetOpen(true);
  // };

  const closeSheet = () => {
    setIsSheetOpen(false);
  };
  return (
    <>
    <section id="location-section" className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 max-w-6xl">
          
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Titik <span className="text-amber-900">Gerobak</span> Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Temukan 7 gerobak kopi spesial kami yang tersebar di Tanjungpinang
            </p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <FaCoffee className="text-amber-900" size={20} />
              <span className="text-amber-900 font-medium">Kopi Gerobakan • Tanjungpinang</span>
            </div>
            <div className="w-24 h-1 bg-amber-900 mx-auto mt-6"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            
            <div className="lg:w-2/5">
              <div className="bg-white rounded-2xl shadow-lg p-6 lg:sticky lg:top-24">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <FaMotorcycle className="text-amber-900" />
                  {locationStats.totalLocations} Titik Gerobak
                </h3>
                
                <div className="space-y-3 mb-6 max-h-96 overflow-y-auto pr-2">
                  {gerobakLocations.map((outlet) => (
                    <button
                      key={outlet.id}
                      onClick={() => handleOutletClick(outlet.id)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                        activeOutlet === outlet.id
                          ? 'bg-amber-900 text-white shadow-lg'
                          : 'bg-gray-50 hover:bg-gray-100 hover:shadow-md'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`p-3 rounded-full shrink-0 ${
                          activeOutlet === outlet.id 
                            ? 'bg-white/20' 
                            : 'bg-amber-100'
                        }`}>
                          <FaMapMarkerAlt 
                            className={activeOutlet === outlet.id ? 'text-white' : 'text-amber-900'} 
                            size={20} 
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-1">
                            <h4 className={`font-bold ${
                              activeOutlet === outlet.id ? 'text-white' : 'text-gray-900'
                            }`}>
                              {outlet.shortName}
                            </h4>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              activeOutlet === outlet.id 
                                ? 'bg-white/30 text-white' 
                                : 'bg-amber-200 text-amber-900'
                            }`}>
                              🛺 Gerobak
                            </span>
                          </div>
                          <p className={`text-sm ${
                            activeOutlet === outlet.id ? 'text-amber-100' : 'text-gray-600'
                          }`}>
                            {outlet.address}
                          </p>
                          <div className="flex items-center justify-between mt-3">
                            <span className={`text-xs flex items-center gap-1 ${
                              activeOutlet === outlet.id ? 'text-amber-200' : 'text-gray-500'
                            }`}>
                              <FaClock size={10} />
                              {outlet.hours}
                            </span>
                            {isMobile && activeOutlet === outlet.id && (
                              <span className="text-xs text-amber-200 flex items-center gap-1">
                                <FaChevronDown size={10} />
                                Detail
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-3 text-center pt-6 border-t border-gray-200">
                  <div>
                    <div className="text-2xl font-bold text-amber-900">{locationStats.totalLocations}</div>
                    <div className="text-xs text-gray-600">Titik</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-amber-900">{locationStats.cities.length}</div>
                    <div className="text-xs text-gray-600">Kota</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-amber-900">{locationStats.averageHours.split(' ')[0]}</div>
                    <div className="text-xs text-gray-600">Jam/Hari</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-3/5">
              <div className="hidden lg:block">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="h-64 bg-linear-to-r from-amber-900 to-amber-700 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white p-8">
                        <div className="text-4xl mb-4">📍</div>
                        <h3 className="text-2xl font-bold mb-2">{currentLocation.name}</h3>
                        <p className="text-amber-100">{currentLocation.shortName} • Tanjungpinang</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 md:p-8 ">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-2xl md:text-2xl font-bold text-gray-900 mb-2">
                          {currentLocation.name}
                        </h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                            🛺 Gerobak Kopi
                          </span>
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                            ⏰ {currentLocation.hours}
                          </span>
                          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                            📍 {currentLocation.landmark}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-amber-100 rounded-lg shrink-0">
                            <FaMapMarkerAlt className="text-amber-900" size={20} />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-1">Lokasi Tepat</h4>
                            <p className="text-gray-600">{currentLocation.exactLocation}</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-amber-100 rounded-lg shrink-0">
                            <FaClock className="text-amber-900" size={20} />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-1">Jam Operasional</h4>
                            <p className="text-gray-600">{currentLocation.hours}</p>
                            <p className="text-sm text-gray-500 mt-1">{currentLocation.operatingDays}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-gray-200">
                      <div className="flex flex-col sm:flex-row gap-4">
                        <a
                          href={generateGoogleMapsUrl(currentLocation.exactLocation)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-bold text-center flex items-center justify-center gap-2"
                        >
                          <FaMap />
                          Buka Google Maps
                        </a>
                        <a
                          href={generateWhatsAppOrderUrl(currentLocation.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors font-bold text-center flex items-center justify-center gap-2"
                        >
                          <FaWhatsapp />
                          Pesan via WhatsApp
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

      {isMobile && (
        <>
          <div 
            className={`fixed inset-0 z-40 transition-all duration-300 ${
              isSheetOpen 
                ? 'bg-black/50 backdrop-blur-sm' 
                : 'bg-black/0 backdrop-blur-0 pointer-events-none'
            }`}
            onClick={closeSheet}
          />
          
          <div 
            className={`fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl shadow-2xl transform transition-all duration-300 ease-in-out max-h-[85vh] overflow-y-auto ${
              isSheetOpen ? 'translate-y-0' : 'translate-y-full'
            }`}
          >
            <div className="sticky top-0 bg-white pt-4 pb-2 rounded-t-3xl z-10">
              <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4" />
              <button
                onClick={closeSheet}
                className="absolute right-4 top-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Tutup"
              >
                <FaTimes size={24} />
              </button>
            </div>

            <div className="px-6 pb-8">
              <div className="h-48 bg-linear-to-r from-amber-900 to-amber-700 rounded-2xl overflow-hidden mb-6 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <div className="text-4xl mb-4">📍</div>
                    <h3 className="text-2xl font-bold mb-2">{currentLocation.name}</h3>
                    <p className="text-amber-100">{currentLocation.shortName} • Tanjungpinang</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex flex-col gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {currentLocation.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                        🛺 Gerobak Kopi
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        ⏰ {currentLocation.hours}
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        📍 {currentLocation.landmark}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 mb-8">
                  <div className="bg-amber-50 rounded-2xl p-4">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 bg-amber-100 rounded-lg shrink-0">
                        <FaMapMarkerAlt className="text-amber-900" size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Lokasi Tepat</h4>
                        <p className="text-gray-600">{currentLocation.exactLocation}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-amber-100 rounded-lg shrink-0">
                        <FaClock className="text-amber-900" size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Jam Operasional</h4>
                        <p className="text-gray-600">{currentLocation.hours}</p>
                        <p className="text-sm text-gray-500 mt-1">{currentLocation.operatingDays}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200 space-y-3">
                  <a
                    href={generateGoogleMapsUrl(currentLocation.exactLocation)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-bold text-center flex items-center justify-center gap-2"
                  >
                    <FaMap />
                    Buka Google Maps
                  </a>
                  <a
                    href={generateWhatsAppOrderUrl(currentLocation.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors font-bold text-center flex items-center justify-center gap-2"
                  >
                    <FaWhatsapp />
                    Pesan via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}