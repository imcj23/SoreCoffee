export const gerobakLocations = [
  {
    id: 0,
    name: "Sore Coffee - Bintan Centre",
    shortName: "Bintan Centre",
    address: "Area Bundaran Patung Naga",
    exactLocation: "Depan D'sayur Bundaran Patung Naga",
    googleMaps:
      "https://maps.app.goo.gl/i8PjkLuFUGh4hS4w9",
    hours: "08:00 - 22:00",
    phone: "6285222255234",
    // description:
    //   "Gerobak kopi di tengah kawasan Bintan Centre, dekat Patung Naga ikonik",
    landmark: "Bundaran Patung Naga Bintan Centre",
  },
  {
    id: 1,
    name: "Sore Coffee - Batu 8",
    shortName: "Batu 8",
    address: "Area bundaran TCC Mall",
    exactLocation: "Sebelum Bundaran TCC Mall dari arah Bt 9",
    googleMaps:
      "https://maps.app.goo.gl/eHkcxT5fEux8RhCBA",
    hours: "08:00 - 22:00",
    phone: "6285222255234",
    // description:
    //   "Gerobak kopi strategis di depan TCC Mall, pusat perbelanjaan Tanjungpinang",
    landmark: "Bundaran TCC Mall",
  },
  {
    id: 2,
    name: "Sore Coffee - Hotel Comfort",
    shortName: "Hotel Comfort",
    address: "Area Hotel Comfort",
    exactLocation: "Depan Hotel Comfort, Jl. Adi Sucipto, Tanjungpinang",
    googleMaps:
      "https://maps.app.goo.gl/yfYfP1BhoGjTr2aDA",
    hours: "08:00 - 22:00",
    phone: "6285222255234",
    // description:
    //   "Gerobak kopi di area hotel, cocok untuk tamu hotel dan warga sekitar",
    landmark: "Hotel Comfort Tanjungpinang",
  },
  {
    id: 3,
    name: "Sore Coffee - Ganet",
    shortName: "Ganet",
    address: "Area Jalan Bandara RHF",
    exactLocation: "Jl.Bandara Tanjungpinang",
    googleMaps:
      "https://maps.app.goo.gl/7CFWdMcfAaZgcHsm9",
    phone: "6285222255234",
    hours: "08:00 - 22:00",
    // description: "Gerobak kopi di depan Pasar Ganet, ramai pengunjung pasar",

    landmark: "Jalan Bandara RHF",
  },
  {
    id: 4,
    name: "Sore Coffee - BRK Batu 9",
    shortName: "BRK Batu 9",
    address: "Jl.D.I.Panjaitan Batu 9",
    exactLocation: "Depan Bank Riau Kepri batu 9",
    googleMaps:
      "https://maps.app.goo.gl/MvjrWWEPD2AiRDkj8",
    hours: "08:00 - 22:00",
    phone: "6285222255234",
    // description: "Gerobak kopi dengan view laut, cocok untuk menikmati sunset",
    landmark: "Kawasan Tepi Laut",
  },
  {
    id: 5,
    name: "Sore Coffee - Batu 14",
    shortName: "Batu 14",
    address: "Batu 14 Arah Uban",
    exactLocation: "Depan Perumahan Permata Galaxy",
    googleMaps:
      "https://maps.app.goo.gl/8tsUDm1FRs3EFEi99",

      phone: "6285222255234",
    hours: "08:00 - 22:00",
    // description: "Gerobak kopi di kawasan perumahan, cocok untuk warga sekitar",
    landmark: "Perumahan Permata Galaxy",
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
  phone = "6285222255234",
) => {
  const message = `Halo Sore Coffee, saya mau pesan untuk diambil di: ${locationName}`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

export const locationStats = {
  totalLocations: 6,
  cities: ["Tanjungpinang"],
  averageHours: "14 jam/hari",
  operatingHours: "08:00 - 22:00",
  contactNumber: "6285222255234",
  email: "sorecoffee.tpi@gmail.com",
};
