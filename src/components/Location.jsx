// src/components/LocationsSection.jsx
import { useState } from 'react';
import { FaMapMarkerAlt, FaClock, FaPhone, FaCar, FaMotorcycle, FaSubway } from 'react-icons/fa';

const LocationsSection = () => {
  const [activeOutlet, setActiveOutlet] = useState(0);

  const outlets = [
    {
      id: 0,
      name: "Sore Coffee Central Park",
      address: "Jl. Letjen S. Parman No.28, Grogol, Jakarta Barat",
      hours: "08:00 - 22:00",
      phone: "(021) 567-8901",
      type: "mall", // mall, street, residential, etc.
      features: ["Indoor Seating", "Free WiFi", "Parking Available", "AC"],
      coordinates: "-6.1777, 106.7890"
    },
    {
      id: 1,
      name: "Sore Coffee Pondok Indah Mall",
      address: "Pondok Indah Mall 3, Lt. 1, Jl. Metro Pondok Indah, Jakarta Selatan",
      hours: "10:00 - 22:00",
      phone: "(021) 765-4321",
      type: "mall",
      features: ["Indoor Seating", "Premium Roasts", "Meeting Room", "Valet Parking"],
      coordinates: "-6.2654, 106.7834"
    },
    {
      id: 2,
      name: "Sore Coffee SCBD Sudirman",
      address: "Jl. Jend. Sudirman Kav. 52-53, SCBD, Jakarta Selatan",
      hours: "07:00 - 21:00",
      phone: "(021) 234-5678",
      type: "business",
      features: ["Fast Service", "Takeaway", "Business Lounge", "Printing Service"],
      coordinates: "-6.2248, 106.8086"
    },
    {
      id: 3,
      name: "Sore Coffee Alam Sutera",
      address: "Jl. Alam Sutera Boulevard No.45, Tangerang",
      hours: "08:00 - 23:00",
      phone: "(021) 876-5432",
      type: "residential",
      features: ["Outdoor Garden", "Pet Friendly", "Live Music", "Play Area"],
      coordinates: "-6.2240, 106.6472"
    },
    {
      id: 4,
      name: "Sore Coffee Kelapa Gading",
      address: "Jl. Boulevard Kelapa Gading, Blok M, Jakarta Utara",
      hours: "09:00 - 00:00",
      phone: "(021) 345-6789",
      type: "lifestyle",
      features: ["24/7 Weekend", "Night Cafe", "Hookah Lounge", "Live Sports"],
      coordinates: "-6.1574, 106.9061"
    },
    {
      id: 5,
      name: "Sore Coffee BSD City",
      address: "BSD Green Office Park, Jl. BSD Grand Boulevard, Tangerang",
      hours: "07:30 - 21:30",
      phone: "(021) 987-6543",
      type: "business",
      features: ["Co-working Space", "Conference Room", "High-speed WiFi", "Power Outlets"],
      coordinates: "-6.3026, 106.6443"
    },
    {
      id: 6,
      name: "Sore Coffee PIK Avenue",
      address: "PIK Avenue Mall, Lt. GF, Pantai Indah Kapuk, Jakarta Utara",
      hours: "10:00 - 22:00",
      phone: "(021) 456-7890",
      type: "mall",
      features: ["Beach View", "Instagrammable Spot", "Dessert Bar", "Merchandise Store"],
      coordinates: "-6.1172, 106.7353"
    }
  ];

  const getTypeIcon = (type) => {
    switch(type) {
      case 'mall': return <FaSubway className="text-purple-500" />;
      case 'business': return <FaCar className="text-blue-500" />;
      case 'street': return <FaMotorcycle className="text-green-500" />;
      default: return <FaMapMarkerAlt className="text-amber-500" />;
    }
  };

  const getTypeColor = (type) => {
    switch(type) {
      case 'mall': return 'bg-purple-100 text-purple-800';
      case 'business': return 'bg-blue-100 text-blue-800';
      case 'residential': return 'bg-green-100 text-green-800';
      case 'lifestyle': return 'bg-pink-100 text-pink-800';
      default: return 'bg-amber-100 text-amber-800';
    }
  };

  return (
    <section id="locations" className="py-16 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Temukan <span className="text-amber-900">Outlet</span> Kami
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Nikmati kopi spesial kami di 7 lokasi strategis di Jakarta dan sekitarnya
          </p>
          <div className="w-24 h-1 bg-amber-900 mx-auto mt-6"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Column - Outlet List */}
          <div className="lg:w-2/5" data-aos="fade-right">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <FaMapMarkerAlt className="text-amber-900" />
                7 Outlet Tersedia
              </h3>
              
              <div className="space-y-4 mb-6">
                {outlets.map((outlet) => (
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
                      <div className={`p-2 rounded-lg ${activeOutlet === outlet.id ? 'bg-white/20' : getTypeColor(outlet.type)}`}>
                        {getTypeIcon(outlet.type)}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className={`font-bold ${activeOutlet === outlet.id ? 'text-white' : 'text-gray-900'}`}>
                            {outlet.name.split(' ')[2]} {/* Show area name only */}
                          </h4>
                          <span className={`text-xs px-2 py-1 rounded-full ${activeOutlet === outlet.id ? 'bg-white/30' : 'bg-gray-200'}`}>
                            {outlet.type === 'mall' ? 'Mall' : 
                             outlet.type === 'business' ? 'Business' : 
                             outlet.type === 'residential' ? 'Residential' : 'Lifestyle'}
                          </span>
                        </div>
                        <p className={`text-sm ${activeOutlet === outlet.id ? 'text-amber-100' : 'text-gray-600'}`}>
                          {outlet.address.split(',')[0]}
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
                  <div className="text-2xl font-bold text-amber-900">7</div>
                  <div className="text-xs text-gray-600">Outlet</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber-900">3</div>
                  <div className="text-xs text-gray-600">Kota</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber-900">15</div>
                  <div className="text-xs text-gray-600">Jam/Hari</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Outlet Details */}
          <div className="lg:w-3/5" data-aos="fade-left">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Map/Image Placeholder */}
              <div className="h-64 md:h-80 bg-gradient-to-r from-amber-900 to-amber-700 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="text-6xl mb-4">📍</div>
                    <h3 className="text-3xl font-bold mb-2">{outlets[activeOutlet].name}</h3>
                    <p className="text-amber-100">Lokasi {outlets[activeOutlet].type === 'mall' ? 'di dalam mall' : 'area bisnis'}</p>
                  </div>
                </div>
                
                {/* Location Indicator */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2">
                  <div className="text-sm font-medium text-gray-900">Koordinat</div>
                  <div className="text-xs text-gray-600 font-mono">{outlets[activeOutlet].coordinates}</div>
                </div>
              </div>

              {/* Outlet Details */}
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      {outlets[activeOutlet].name}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(outlets[activeOutlet].type)}`}>
                        {outlets[activeOutlet].type === 'mall' ? '📁 Mall Outlet' : 
                         outlets[activeOutlet].type === 'business' ? '💼 Business Area' : 
                         outlets[activeOutlet].type === 'residential' ? '🏡 Residential' : '🌟 Lifestyle'}
                      </span>
                    </div>
                  </div>
                  
                  <button className="px-6 py-3 bg-amber-900 text-white rounded-xl hover:bg-amber-800 transition-colors font-bold whitespace-nowrap">
                    Dapatkan Petunjuk Arah
                  </button>
                </div>

                {/* Contact & Hours */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-amber-100 rounded-lg">
                        <FaMapMarkerAlt className="text-amber-900" size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Alamat Lengkap</h4>
                        <p className="text-gray-600">{outlets[activeOutlet].address}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-amber-100 rounded-lg">
                        <FaPhone className="text-amber-900" size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Telepon</h4>
                        <p className="text-gray-600">{outlets[activeOutlet].phone}</p>
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
                        <p className="text-gray-600">{outlets[activeOutlet].hours}</p>
                        <p className="text-sm text-gray-500 mt-1">Setiap Hari</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-amber-100 rounded-lg">
                        <FaCar className="text-amber-900" size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Akses</h4>
                        <p className="text-gray-600">
                          {outlets[activeOutlet].type === 'mall' 
                            ? 'Parkir Mall, Transportasi Umum' 
                            : 'Parkir Jalan, Grab/Gojek'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Fasilitas</h4>
                  <div className="flex flex-wrap gap-2">
                    {outlets[activeOutlet].features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gray-50 text-gray-700 rounded-full text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Google Maps Button */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(outlets[activeOutlet].address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-bold text-center"
                    >
                      Buka di Google Maps
                    </a>
                    <a
                      href={`https://maps.apple.com/?q=${encodeURIComponent(outlets[activeOutlet].address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors font-bold text-center"
                    >
                      Buka di Apple Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="flex justify-between mt-6 md:hidden">
              <button
                onClick={() => setActiveOutlet(prev => (prev > 0 ? prev - 1 : outlets.length - 1))}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                ← Sebelumnya
              </button>
              <button
                onClick={() => setActiveOutlet(prev => (prev < outlets.length - 1 ? prev + 1 : 0))}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Selanjutnya →
              </button>
            </div>
          </div>
        </div>

        {/* All Outlets Quick View - Mobile Only */}
        <div className="mt-12 md:hidden" data-aos="fade-up">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Semua Lokasi
          </h3>
          <div className="grid grid-cols-1 gap-4">
            {outlets.map((outlet) => (
              <div
                key={outlet.id}
                className="bg-white rounded-xl p-4 shadow-md"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-amber-100 rounded-lg">
                    {getTypeIcon(outlet.type)}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900">{outlet.name.split(' ')[2]}</h4>
                    <p className="text-sm text-gray-600 mt-1">{outlet.address.split(',')[0]}</p>
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