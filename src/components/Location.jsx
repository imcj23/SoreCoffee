// src/components/LocationsSection.jsx
import { useState } from 'react';
import { FaMapMarkerAlt, FaClock, FaPhone, FaMotorcycle, FaCoffee, FaMap, FaWhatsapp } from 'react-icons/fa';
import { gerobakLocations, locationStats, generateGoogleMapsUrl, generateWhatsAppOrderUrl } from '../utils/location';

const LocationsSection = () => {
  const [activeOutlet, setActiveOutlet] = useState(0);
  
  const currentLocation = gerobakLocations[activeOutlet];

  return (
    <section id="locations" className="py-16 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-12" >
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
          
          {/* Left Column - Outlet List */}
          <div className="lg:w-2/5" >
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <FaMotorcycle className="text-amber-900" />
                {locationStats.totalLocations} Titik Gerobak
              </h3>
              
              <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto pr-2">
                {gerobakLocations.map((outlet) => (
                  <button
                    key={outlet.id}
                    onClick={() => setActiveOutlet(outlet.id)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                      activeOutlet === outlet.id
                        ? 'bg-amber-900 text-white shadow-lg transform scale-[1.02]'
                        : 'bg-gray-50 hover:bg-gray-100 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-3 rounded-full ${activeOutlet === outlet.id ? 'bg-white/20' : 'bg-amber-100'}`}>
                        <FaMapMarkerAlt className={activeOutlet === outlet.id ? 'text-white' : 'text-amber-900'} size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className={`font-bold ${activeOutlet === outlet.id ? 'text-white' : 'text-gray-900'}`}>
                            {outlet.shortName}
                          </h4>
                          <span className={`text-xs px-2 py-1 rounded-full ${activeOutlet === outlet.id ? 'bg-white/30' : 'bg-amber-200'}`}>
                            🛺 Gerobak
                          </span>
                        </div>
                        <p className={`text-sm ${activeOutlet === outlet.id ? 'text-amber-100' : 'text-gray-600'}`}>
                          {outlet.address}
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                          <span className={`text-xs flex items-center gap-1 ${activeOutlet === outlet.id ? 'text-amber-200' : 'text-gray-500'}`}>
                            <FaClock size={10} />
                            {outlet.hours}
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Quick Stats */}
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

          {/* Right Column - Outlet Details */}
          <div className="lg:w-3/5">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Map/Image Placeholder */}
              <div className="h-64 md:h-50 bg-gradient-to-r from-amber-900 to-amber-700 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="text-4xl mb-4">📍</div>
                    <h3 className="text-2xl font-bold mb-2">{currentLocation.name}</h3>
                    <p className="text-amber-100">{currentLocation.shortName} • Tanjungpinang</p>
                  </div>
                </div>
              </div>

              {/* Outlet Details */}
              <div className="p-6 md:p-8">
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
                  
                  <a
                    href={generateGoogleMapsUrl(currentLocation.exactLocation)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-amber-900 text-white rounded-xl hover:bg-amber-800 transition-colors font-bold whitespace-nowrap text-center"
                  >
                    <FaMap className="inline mr-2" />
                    Lihat di Maps
                  </a>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <p className="text-gray-700 text-lg italic border-l-4 border-amber-500 pl-4 py-2">
                    "{currentLocation.description}"
                  </p>
                </div>

                {/* Contact & Hours */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-amber-100 rounded-lg">
                        <FaMapMarkerAlt className="text-amber-900" size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Lokasi Tepat</h4>
                        <p className="text-gray-600">{currentLocation.exactLocation}</p>
                        {/* <p className="text-sm text-gray-500 mt-1">Tanjungpinang, Kepulauan Riau</p> */}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-amber-100 rounded-lg">
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

                {/* Action Buttons */}
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

            {/* Mobile Navigation */}
            <div className="flex justify-between mt-6 md:hidden">
              <button
                onClick={() => setActiveOutlet(prev => (prev > 0 ? prev - 1 : gerobakLocations.length - 1))}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2"
              >
                ← Sebelumnya
              </button>
              <button
                onClick={() => setActiveOutlet(prev => (prev < gerobakLocations.length - 1 ? prev + 1 : 0))}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2"
              >
                Selanjutnya →
              </button>
            </div>
          </div>
        </div>

        {/* All Outlets Quick View - Mobile Only */}
        <div className="mt-12 md:hidden" data-aos="fade-up">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Semua Titik Gerobak
          </h3>
          <div className="grid grid-cols-1 gap-4">
            {gerobakLocations.map((outlet) => (
              <div
                key={outlet.id}
                className="bg-white rounded-xl p-4 shadow-md"
              >
                <div className="flex items-start gap-3">
                  <div className="p-3 bg-amber-100 rounded-full">
                    <FaMapMarkerAlt className="text-amber-900" size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900">{outlet.shortName}</h4>
                    <p className="text-sm text-gray-600 mt-1">{outlet.address}</p>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <FaClock size={10} />
                        {outlet.hours}
                      </span>
                      <button
                        onClick={() => setActiveOutlet(outlet.id)}
                        className="text-xs text-amber-900 font-medium"
                      >
                        Lihat Detail
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;