export const gerobakLocations = [
  {
    id: 0,
    name: "Sore Coffee - Bintan Centre",
    shortName: "Bintan Centre",
    address: "Area Bundaran Patung Naga",
    exactLocation: "Depan Patung Naga, Bintan Centre, Tanjungpinang",
    googleMaps:
      "https://maps.app.goo.gl/?link=https://www.google.com/maps/place/Bundaran+Patung+Naga+Tanjungpinang/@0.9233613,104.4595329,17z&apif_1&usp=sharing",
    hours: "08:00 - 22:00",
    description:
      "Gerobak kopi di tengah kawasan Bintan Centre, dekat Patung Naga ikonik",
    landmark: "Patung Naga Bintan Centre",
  },
  {
    id: 1,
    name: "Sore Coffee - Batu 8",
    shortName: "Batu 8",
    address: "Kawasan bundaran TCC Mall",
    exactLocation: "Sebelah timur TCC Mall, Jl. Raja H. Fisabilillah, Batu 8",
    googleMaps:
      "https://maps.app.goo.gl/?link=https://www.google.com/maps/place/TCC+Mall+Tanjungpinang/@0.9336894,104.4804653,17z&apif_1&usp=sharing",
    hours: "08:00 - 22:00",
    description:
      "Gerobak kopi strategis di depan TCC Mall, pusat perbelanjaan Tanjungpinang",
    landmark: "TCC Mall Tanjungpinang",
  },
  {
    id: 2,
    name: "Sore Coffee - Hotel Comfort",
    shortName: "Hotel Comfort",
    address: "Area Hotel Comfort",
    exactLocation: "Depan Hotel Comfort, Jl. Kemboja No. 1, Tanjungpinang",
    googleMaps:
      "https://maps.app.goo.gl/?link=https://www.google.com/maps/place/Hotel+Comfort+Tanjungpinang/@0.9214971,104.4558904,17z&apif_1&usp=sharing",
    hours: "08:00 - 22:00",
    description:
      "Gerobak kopi di area hotel, cocok untuk tamu hotel dan warga sekitar",
    landmark: "Hotel Comfort Tanjungpinang",
  },
  {
    id: 3,
    name: "Sore Coffee - Ganet",
    shortName: "Ganet",
    address: "Area Pasar Ganet",
    exactLocation: "Depan Pasar Ganet, Jl. Kijang, Tanjungpinang",
    googleMaps:
      "https://maps.app.goo.gl/?link=https://www.google.com/maps/place/Pasar+Ganet/@0.9301568,104.4875432,17z&apif_1&usp=sharing",

    hours: "08:00 - 22:00",
    description: "Gerobak kopi di depan Pasar Ganet, ramai pengunjung pasar",

    landmark: "Pasar Ganet",
  },
  {
    id: 4,
    name: "Sore Coffee - Pemuda",
    shortName: "Pemuda",
    address: "Jl. Pemuda",
    exactLocation: "Persimpangan Jl. Pemuda dan Jl. Merdeka, Tanjungpinang",
    googleMaps:
      "https://maps.app.goo.gl/?link=https://www.google.com/maps/place/Jl.+Pemuda,+Tanjungpinang+Kota,+Tanjungpinang+City,+Riau+Islands/@0.9228944,104.4552133,17z&apif_1&usp=sharing",

    hours: "08:00 - 22:00",
    description: "Gerobak kopi di jantung kota, dekat pusat aktivitas pemuda",
    landmark: "Kawasan Jl. Pemuda",
  },
  {
    id: 5,
    name: "Sore Coffee - Tepi Laut",
    shortName: "Tepi Laut",
    address: "Kawasan Tepi Laut",
    exactLocation: "Sepanjang jalan Tepi Laut, dekat Pelabuhan Sri Bintan Pura",
    googleMaps:
      "https://maps.app.goo.gl/?link=https://www.google.com/maps/place/Tepi+Laut+Tanjungpinang/@0.9205567,104.4471833,17z&apif_1&usp=sharing",
    hours: "08:00 - 22:00",
    phone: "0817-8901-2345",
    description: "Gerobak kopi dengan view laut, cocok untuk menikmati sunset",
    landmark: "Kawasan Tepi Laut",
  },
  {
    id: 6,
    name: "Sore Coffee - Batu 16 Uban",
    shortName: "Batu 16",
    address: "Kawasan Batu 16",
    exactLocation: "Jl. Raya Batu 16, dekat perumahan Uban, Tanjungpinang",
    googleMaps:
      "https://maps.app.goo.gl/?link=https://www.google.com/maps/place/Batu+16+Tanjungpinang/@0.9178894,104.4934567,17z&apif_1&usp=sharing",

    hours: "08:00 - 22:00",
    description: "Gerobak kopi di kawasan perumahan, cocok untuk warga sekitar",
    landmark: "Kawasan Perumahan Uban",
  },
];

export const getLocationById = (id) => {
  return (
    gerobakLocations.find((location) => location.id === id) ||
    gerobakLocations[0]
  );
};

export const getAllLocations = () => {
  return gerobakLocations;
};

export const getLocationCoordinates = (id) => {
  const location = getLocationById(id);
  return location.coordinates;
};

export const generateGoogleMapsUrl = (address) => {
  const encodedAddress = encodeURIComponent(`${address} Tanjungpinang`);
  return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
};

export const generateWhatsAppOrderUrl = (
  locationName,
  phone = "6281367048816",
) => {
  const message = `Halo Sore Coffee, saya mau pesan untuk diambil di: ${locationName}`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

export const locationStats = {
  totalLocations: 7,
  cities: ["Tanjungpinang"],
  averageHours: "14 jam/hari",
  operatingHours: "08:00 - 22:00",
  contactNumber: "0813-6704-8816",
  email: "sorecoffee.tpi@gmail.com",
};
