import {
  FaPhone,
  FaInstagram,
  FaWhatsapp,
  FaQuestionCircle,
  FaStar,
  FaMapMarkerAlt,
  FaClock,
  FaTiktok,
  FaCoffee,
  FaShoppingBag,
  FaTags,
  FaUsers,
  FaChevronDown,
  FaChevronUp
} from "react-icons/fa";
import { LuMessageSquarePlus } from "react-icons/lu";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  const whatsappNumber = "+6285222255234";
  const instagramUsername = "@sorecoffee";
  const tiktokUsername = "@sorecoffee";

  const message = "Halo SoreCoffee, saya ingin bertanya tentang...";

  const [activeFAQ, setActiveFAQ] = useState(null);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleInstagramClick = () => {
    const instagramUrl = `https://instagram.com/${instagramUsername.replace("@", "")}`;
    window.open(instagramUrl, "_blank");
  };

  const handleTiktokClick = () => {
    const tiktokUrl = `https://tiktok.com/@${tiktokUsername.replace("@", "")}`;
    window.open(tiktokUrl, "_blank");
  };

  const faqItems = [
    {
      id: 1,
      question: "Jam berapa SoreCoffee buka?",
      answer: "Kami buka setiap hari dari pukul 07:00 hingga 22:00 WIB.",
      icon: <FaClock className="w-4 h-4 md:w-5 md:h-5 text-amber-600" />
    },
    {
      id: 2,
      question: "Dimana saja lokasi SoreCoffee?",
      answer:
        "SoreCoffee beroperasi di berbagai lokasi di Tanjungpinang. Silakan cek Instagram kami untuk update lokasi harian.",
      icon: <FaMapMarkerAlt className="w-4 h-4 md:w-5 md:h-5 text-amber-600" />
    },
    {
      id: 3,
      question: "Apakah SoreCoffee menerima pembayaran non-tunai?",
      answer:
        "Tentu! Kami menyediakan pembayaran melalui QRIS dan aplikasi pembayaran digital lainnya.",
      icon: <FaShoppingBag className="w-4 h-4 md:w-5 md:h-5 text-amber-600" />
    },
    {
      id: 4,
      question: "Bisakah memesan untuk acara khusus?",
      answer:
        "Ya, kami menerima pemesanan untuk acara khusus seperti pertemuan bisnis, ulang tahun, atau gathering. Hubungi kami untuk informasi lebih lanjut.",
      icon: <FaUsers className="w-4 h-4 md:w-5 md:h-5 text-amber-600" />
    },
    {
      id: 5,
      question: "Apakah ada varian yang tidak mengandung kopi?",
      answer:
        "Ya, kami juga menyediakan beberapa varian minuman non-kopi seperti Chocolate, Japanese Matcha, dan Pink Panther.",
      icon: <FaCoffee className="w-4 h-4 md:w-5 md:h-5 text-amber-600" />
    },
    {
      id: 6,
      question: "Apakah ada program promo atau diskon?",
      answer:
        "Ya, kami rutin memberikan promo khusus untuk pelanggan setia. Follow Instagram kami untuk mendapatkan info promo terbaru!",
      icon: <FaTags className="w-4 h-4 md:w-5 md:h-5 text-amber-600" />
    }
  ];

  const toggleFAQ = (id) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-linear-to-b from-amber-50/30 via-white to-amber-50/20">
        <div className="relative bg-linear-to-r from-amber-800 via-amber-700 to-amber-900 text-white py-12 md:py-16 lg:py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-amber-600/20 rounded-full -translate-x-16 -translate-y-16 md:-translate-x-24 md:-translate-y-24 lg:-translate-x-32 lg:-translate-y-32"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-amber-500/10 rounded-full translate-x-12 translate-y-12 md:translate-x-24 md:translate-y-24 lg:translate-x-48 lg:translate-y-48"></div>
          
          <div className="relative max-w-6xl mx-auto text-center z-10 px-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-tight">
              Hubungi <span className="text-amber-300">SoreCoffee</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-95 max-w-2xl sm:max-w-3xl mx-auto font-light mb-4 md:mb-6">
              Ada pertanyaan, saran, atau ingin berkolaborasi? Kami siap membantu Anda dengan sepenuh hati ☕
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mt-4 md:mt-6">
              <div className="bg-white/10 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm">
                <span className="flex items-center">
                  <FaClock className="mr-1.5 sm:mr-2 w-3 h-3 sm:w-4 sm:h-4" /> 
                  Buka: 07:00 - 22:00 WIB
                </span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm">
                <span className="flex items-center">
                  <FaMapMarkerAlt className="mr-1.5 sm:mr-2 w-3 h-3 sm:w-4 sm:h-4" /> 
                  Multiple Locations
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-8 sm:py-10 md:py-12">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <div className="inline-block bg-linear-to-r from-amber-500 to-orange-500 text-white px-4 py-1.5 sm:px-5 sm:py-2 md:px-6 md:py-2 rounded-full mb-3 sm:mb-4 text-sm sm:text-base">
              ✨ Connect With Us
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 px-2">
              Temukan Cara Terbaik untuk <span className="text-amber-600">Menghubungi Kami</span>
            </h2>
            <p className="text-gray-600 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2">
              Pilih metode kontak yang paling nyaman untuk Anda. Kami selalu siap mendengarkan!
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 mb-12 md:mb-16">
            <div className="lg:w-1/2 space-y-6 md:space-y-8">
              <div className="bg-linear-to-br from-white to-amber-50 rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl p-4 sm:p-6 md:p-8 border border-amber-100">
                <div className="flex gap-4 sm:flex-row sm:items-center mb-6 md:mb-8">
                  <div className="bg-linear-to-r from-amber-500 to-orange-500 p-2.5 sm:p-3 rounded-lg sm:rounded-xl mr-0 sm:mr-4 mb-3 sm:mb-0 w-12 h-12 sm:w-auto sm:h-auto flex items-center justify-center">
                    <LuMessageSquarePlus className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Hubungi Kami Langsung</h2>
                    <p className="text-gray-600 text-sm sm:text-base">Pilih platform favorit Anda</p>
                  </div>
                </div>

                <div
                  onClick={handleWhatsAppClick}
                  className="group relative bg-linear-to-r from-green-50 to-emerald-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-green-200 hover:border-green-400 transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5 sm:hover:-translate-y-1 hover:shadow-lg sm:hover:shadow-xl mb-4 sm:mb-6 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-green-200/20 rounded-full -translate-y-4 translate-x-4 sm:-translate-y-6 sm:translate-x-6"></div>
                  <div className="relative flex items-center">
                    <div className="bg-linear-to-r from-green-500 to-emerald-500 p-2.5 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl mr-3 sm:mr-4 md:mr-6 shadow-md sm:shadow-lg group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300">
                      <FaWhatsapp className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center mb-1 sm:mb-2 gap-1 sm:gap-3">
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 truncate">WhatsApp Business</h3>
                        <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 sm:px-3 sm:py-1 rounded-full w-fit">Fast Response</span>
                      </div>
                      <p className="text-gray-700 font-medium text-sm sm:text-base md:text-lg truncate">{whatsappNumber}</p>
                      <p className="text-gray-500 mt-1 sm:mt-2 text-xs sm:text-sm">Respon cepat dalam 1-2 jam pada hari kerja</p>
                    </div>
                    <div className="text-green-600 ml-2 sm:ml-4 group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-300">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div
                  onClick={handleInstagramClick}
                  className="group relative bg-linear-to-r from-pink-50/80 to-purple-50/80 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-pink-200 hover:border-pink-400 transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5 sm:hover:-translate-y-1 hover:shadow-lg sm:hover:shadow-xl mb-4 sm:mb-6 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-pink-300/20 rounded-full -translate-x-3 -translate-y-3 sm:-translate-x-4 sm:-translate-y-4 md:-translate-x-6 md:-translate-y-6"></div>
                  <div className="relative flex items-center">
                    <div className="bg-linear-to-r from-pink-500 to-purple-600 p-2.5 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl mr-3 sm:mr-4 md:mr-6 shadow-md sm:shadow-lg group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300">
                      <FaInstagram className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center mb-1 sm:mb-2 gap-1 sm:gap-3">
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 truncate">Instagram</h3>
                        <span className="bg-pink-100 text-pink-800 text-xs font-semibold px-2 py-0.5 sm:px-3 sm:py-1 rounded-full w-fit">Daily Updates</span>
                      </div>
                      <p className="text-gray-700 font-medium text-sm sm:text-base md:text-lg truncate">{instagramUsername}</p>
                      <p className="text-gray-500 mt-1 sm:mt-2 text-xs sm:text-sm">Lihat menu terbaru, promo, dan lokasi hari ini</p>
                    </div>
                    <div className="text-pink-600 ml-2 sm:ml-4 group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-300">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div
                  onClick={handleTiktokClick}
                  className="group relative bg-linear-to-r from-blue-50/80 to-cyan-50/80 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5 sm:hover:-translate-y-1 hover:shadow-lg sm:hover:shadow-xl overflow-hidden"
                >
                  <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 bg-blue-300/20 rounded-full translate-x-2 translate-y-2 sm:translate-x-4 sm:translate-y-4 md:translate-x-6 md:translate-y-6"></div>
                  <div className="relative flex items-center">
                    <div className="bg-linear-to-r from-blue-400 to-cyan-500 p-2.5 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl mr-3 sm:mr-4 md:mr-6 shadow-md sm:shadow-lg group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300">
                      <FaTiktok className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center mb-1 sm:mb-2 gap-1 sm:gap-3">
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 truncate">TikTok</h3>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 sm:px-3 sm:py-1 rounded-full w-fit">Fun Content</span>
                      </div>
                      <p className="text-gray-700 font-medium text-sm sm:text-base md:text-lg truncate">{tiktokUsername}</p>
                      <p className="text-gray-500 mt-1 sm:mt-2 text-xs sm:text-sm">Tonton video menarik seputar kopi dan cerita SoreCoffee</p>
                    </div>
                    <div className="text-blue-600 ml-2 sm:ml-4 group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-300">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-linear-to-r from-amber-600 to-orange-600 text-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl p-4 sm:p-6 md:p-8">
                <div className="flex gap-4 sm:flex-row sm:items-start mb-4 sm:mb-6">
                  <div className="bg-white/20 p-2 sm:p-3 rounded-lg sm:rounded-xl mr-0 sm:mr-4 mb-3 sm:mb-0 w-12 h-12 sm:w-auto sm:h-auto flex items-center justify-center">
                    <FaMapMarkerAlt className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">Lokasi & Jam Operasional</h3>
                    <p className="opacity-90 text-sm sm:text-base">Temukan kami di berbagai spot strategis di Tanjungpinang</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5">
                    <div className="flex items-center mb-2 sm:mb-3">
                      <FaClock className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-amber-200" />
                      <h4 className="font-bold text-base sm:text-lg">Jam Buka</h4>
                    </div>
                    <p className="text-amber-100 font-medium text-sm sm:text-base">Setiap Hari</p>
                    <p className="text-amber-50 text-sm">07:00 - 22:00 WIB</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5">
                    <div className="flex items-center mb-2 sm:mb-3">
                      <FaMapMarkerAlt className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-amber-200" />
                      <h4 className="font-bold text-base sm:text-lg">Lokasi</h4>
                    </div>
                    <p className="text-amber-100 font-medium text-sm sm:text-base">Multiple Locations</p>
                    <p className="text-amber-50 text-sm">Cek Instagram untuk update harian</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 space-y-6 md:space-y-8">
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl p-4 sm:p-6 md:p-8 border border-gray-100">
                <div className="flex gap-4 sm:flex-row sm:items-center mb-6 md:mb-8">
                  <div className="bg-linear-to-r from-amber-500 to-orange-500 p-2.5 sm:p-3 rounded-lg sm:rounded-xl mr-0 sm:mr-4 mb-3 sm:mb-0 w-12 h-12 sm:w-auto sm:h-auto flex items-center justify-center">
                    <FaQuestionCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Pertanyaan Umum</h2>
                    <p className="text-gray-600 text-sm sm:text-base">Temukan jawaban untuk pertanyaan yang sering diajukan</p>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {faqItems.map((item) => (
                    <div
                      key={item.id}
                      className={`group rounded-xl sm:rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                        activeFAQ === item.id
                          ? 'border-amber-300 bg-amber-50/50 shadow-md sm:shadow-lg'
                          : 'border-amber-100 hover:border-amber-200 hover:bg-gray-50'
                      }`}
                    >
                      <button
                        className="w-full p-3 sm:p-4 md:p-6 text-left flex justify-between items-center transition-colors duration-200"
                        onClick={() => toggleFAQ(item.id)}
                      >
                        <div className="flex items-center flex-1 min-w-0">
                          <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl mr-2 sm:mr-3 md:mr-4 ${
                            activeFAQ === item.id 
                              ? 'bg-linear-to-r from-amber-50 to-amber-100' 
                              : 'bg-gray-100 group-hover:bg-amber-50'
                          }`}>
                            {item.icon}
                          </div>
                          <span className="font-semibold text-gray-800 text-sm sm:text-base md:text-lg truncate pr-2">{item.question}</span>
                        </div>
                        <div className={`p-1.5 sm:p-2 rounded-full shrink-0 ${
                          activeFAQ === item.id 
                            ? 'bg-linear-to-r from-amber-300 to-amber-600 text-white' 
                            : 'bg-gray-100 group-hover:bg-amber-100 text-gray-600'
                        }`}>
                          {activeFAQ === item.id ? (
                            <FaChevronUp className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                          ) : (
                            <FaChevronDown className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                          )}
                        </div>
                      </button>
                      
                      {activeFAQ === item.id && (
                        <div className="px-3 sm:px-4 md:px-6 pb-3 sm:pb-4 md:pb-6 pt-1 sm:pt-2">
                          <div className="pl-10 sm:pl-12 md:pl-16">
                            <p className="text-gray-700 bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl border border-gray-200 shadow-sm text-sm sm:text-base">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
                  <p className="text-gray-600 text-center text-sm sm:text-base">
                    Masih punya pertanyaan lain?{' '}
                    <button
                      onClick={handleWhatsAppClick}
                      className="text-amber-600 font-semibold hover:text-amber-800 transition-colors duration-200 cursor-pointer"
                    >
                      Tanyakan langsung via WhatsApp
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-linear-to-r from-emerald-600 via-green-600 to-emerald-700 text-white p-6 sm:p-8 md:p-10 lg:p-12 text-center shadow-xl sm:shadow-2xl">
            <div className="absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-white/10 rounded-full -translate-x-16 -translate-y-16 sm:-translate-x-24 sm:-translate-y-24 md:-translate-x-32 md:-translate-y-32"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-white/5 rounded-full translate-x-8 translate-y-8 sm:translate-x-16 sm:translate-y-16 md:translate-x-24 md:translate-y-24"></div>
            
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6">
                Siap Memulai Percakapan?
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl opacity-95 max-w-xl sm:max-w-2xl mx-auto mb-4 sm:mb-6 md:mb-8">
                Tim SoreCoffee siap membantu Anda dengan pertanyaan, pemesanan, atau sekadar ngobrol tentang kopi!
              </p>
              <button
                onClick={handleWhatsAppClick}
                className="group bg-white text-emerald-700 hover:bg-emerald-50 font-bold py-2.5 px-6 sm:py-3 sm:px-8 md:py-4 md:px-10 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 sm:hover:-translate-y-1 hover:shadow-lg sm:hover:shadow-2xl inline-flex items-center text-sm sm:text-base md:text-lg"
              >
                <FaWhatsapp className="mr-2 sm:mr-3 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-300" />
                Mulai Chat Sekarang
                <svg className="ml-2 sm:ml-3 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <p className="mt-4 sm:mt-6 text-emerald-200 text-xs sm:text-sm">
                ⚡ Respon dalam hitungan menit • 🎁 Special offer untuk chat pertama
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}