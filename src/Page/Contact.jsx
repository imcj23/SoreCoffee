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
  FaUsers
} from "react-icons/fa";
import { LuMessageSquarePlus } from "react-icons/lu";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  const whatsappNumber = "+6282268853638";
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
      icon: <FaClock className="w-5 h-5 text-amber-600" />
    },
    {
      id: 2,
      question: "Dimana saja lokasi sorecoffee?",
      answer:
        "SoreCoffee beroperasi di berbagai lokasi di Tanjungpinang. Silakan cek Instagram kami untuk update lokasi harian.",
      icon: <FaMapMarkerAlt className="w-5 h-5 text-amber-600" />
    },
    {
      id: 3,
      question: "Apakah SoreCoffee menerima pembayaran non-tunai?",
      answer:
        "Tentu! Kami menyediakan pembayaran melalui QRIS dan aplikasi pembayaran digital lainnya.",
      icon: <FaShoppingBag className="w-5 h-5 text-amber-600" />
    },
    {
      id: 4,
      question: "Bisakah memesan untuk acara khusus?",
      answer:
        "Ya, kami menerima pemesanan untuk acara khusus seperti pertemuan bisnis, ulang tahun, atau gathering. Hubungi kami untuk informasi lebih lanjut.",
      icon: <FaUsers className="w-5 h-5 text-amber-600" />
    },
    {
      id: 5,
      question: "Apakah ada varian yang tidak mengandung kopi?",
      answer:
        "Yap, kami juga menyediakan beberapa varian minuman non-kopi seperti Chocolate, Japanese Matcha, dan Pink Panther.",
      icon: <FaCoffee className="w-5 h-5 text-amber-600" />
    },
    {
      id: 6,
      question: "Apakah ada program promo atau diskon?",
      answer:
        "Ya, kami rutin memberikan promo khusus untuk pelanggan setia. Follow Instagram kami untuk mendapatkan info promo terbaru!",
      icon: <FaTags className="w-5 h-5 text-amber-600" />
    }
  ];

  const toggleFAQ = (id) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-linear-to-b from-amber-50/30 via-white to-amber-50/20">
        <div className="relative bg-linear-to-r from-amber-800 via-amber-700 to-amber-900 text-white py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 left-0 w-64 h-64 bg-amber-600/20 rounded-full -translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full translate-x-48 translate-y-48"></div>
          
          <div className="relative max-w-6xl mx-auto text-center z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Hubungi <span className="text-amber-300">SoreCoffee</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-95 max-w-3xl mx-auto font-light">
              Ada pertanyaan, saran, atau ingin berkolaborasi? Kami siap membantu Anda dengan sepenuh hati ☕
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="flex items-center">
                  <FaClock className="mr-2" /> Buka: 07:00 - 22:00 WIB
                </span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="flex items-center">
                  <FaMapMarkerAlt className="mr-2" /> Multiple Locations
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <div className="inline-block bg-linear-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full mb-4">
              ✨ Connect With Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Temukan Cara Terbaik untuk <span className="text-amber-600">Menghubungi Kami</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pilih metode kontak yang paling nyaman untuk Anda. Kami selalu siap mendengarkan!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="space-y-8">
              <div className="bg-linear-to-br from-white to-amber-50 rounded-3xl shadow-xl p-8 border border-amber-100">
                <div className="flex items-center mb-8">
                  <div className="bg-linear-to-r from-amber-500 to-orange-500 p-3 rounded-xl mr-4">
                    <LuMessageSquarePlus className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">Hubungi Kami Langsung</h2>
                    <p className="text-gray-600">Pilih platform favorit Anda</p>
                  </div>
                </div>

                <div
                  onClick={handleWhatsAppClick}
                  className="group relative bg-linear-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200 hover:border-green-400 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:shadow-xl mb-6 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-green-200/20 rounded-full -translate-y-8 translate-x-8"></div>
                  <div className="relative flex items-center">
                    <div className="bg-linear-to-r from-green-500 to-emerald-500 p-4 rounded-2xl mr-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <FaWhatsapp className="w-10 h-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="text-xl font-bold text-gray-800">WhatsApp Business</h3>
                        <span className="ml-3 bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">Fast Response</span>
                      </div>
                      <p className="text-gray-700 font-medium text-lg">{whatsappNumber}</p>
                      <p className="text-gray-500 mt-2">Respon cepat dalam 1-2 jam pada hari kerja</p>
                    </div>
                    <div className="text-green-600 group-hover:translate-x-2 transition-transform duration-300">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div
                  onClick={handleInstagramClick}
                  className="group relative bg-linear-to-r from-pink-50/80 to-purple-50/80 rounded-2xl p-6 border-2 border-pink-200 hover:border-pink-400 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:shadow-xl mb-6 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-20 h-20 bg-pink-300/20 rounded-full -translate-x-6 -translate-y-6"></div>
                  <div className="relative flex items-center">
                    <div className="bg-linear-to-r from-pink-500 to-purple-600 p-4 rounded-2xl mr-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <FaInstagram className="w-10 h-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="text-xl font-bold text-gray-800">Instagram</h3>
                        <span className="ml-3 bg-pink-100 text-pink-800 text-xs font-semibold px-3 py-1 rounded-full">Daily Updates</span>
                      </div>
                      <p className="text-gray-700 font-medium text-lg">{instagramUsername}</p>
                      <p className="text-gray-500 mt-2">Lihat menu terbaru, promo, dan lokasi hari ini</p>
                    </div>
                    <div className="text-pink-600 group-hover:translate-x-2 transition-transform duration-300">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div
                  onClick={handleTiktokClick}
                  className="group relative bg-linear-to-r from-blue-50/80 to-cyan-50/80 rounded-2xl p-6 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:shadow-xl overflow-hidden"
                >
                  <div className="absolute bottom-0 right-0 w-28 h-28 bg-blue-300/20 rounded-full translate-x-10 translate-y-10"></div>
                  <div className="relative flex items-center">
                    <div className="bg-linear-to-r from-blue-400 to-cyan-500 p-4 rounded-2xl mr-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <FaTiktok className="w-10 h-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="text-xl font-bold text-gray-800">TikTok</h3>
                        <span className="ml-3 bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">Fun Content</span>
                      </div>
                      <p className="text-gray-700 font-medium text-lg">{tiktokUsername}</p>
                      <p className="text-gray-500 mt-2">Tonton video menarik seputar kopi dan cerita SoreCoffee</p>
                    </div>
                    <div className="text-blue-600 group-hover:translate-x-2 transition-transform duration-300">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-linear-to-r from-amber-600 to-orange-600 text-white rounded-3xl p-8 shadow-xl">
                <div className="flex items-start mb-6">
                  <div className="bg-white/20 p-3 rounded-xl mr-4">
                    <FaMapMarkerAlt className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Lokasi & Jam Operasional</h3>
                    <p className="opacity-90">Temukan kami di berbagai spot strategis di Tanjungpinang</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                    <div className="flex items-center mb-3">
                      <FaClock className="w-5 h-5 mr-3 text-amber-200" />
                      <h4 className="font-bold text-lg">Jam Buka</h4>
                    </div>
                    <p className="text-amber-100 font-medium">Setiap Hari</p>
                    <p className="text-amber-50">07:00 - 22:00 WIB</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                    <div className="flex items-center mb-3">
                      <FaMapMarkerAlt className="w-5 h-5 mr-3 text-amber-200" />
                      <h4 className="font-bold text-lg">Lokasi</h4>
                    </div>
                    <p className="text-amber-100 font-medium">Multiple Locations</p>
                    <p className="text-amber-50">Cek Instagram untuk update harian</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center mb-8">
                  <div className="bg-linear-to-r from-amber-500 to-orange-500 p-3 rounded-xl mr-4">
                    <FaQuestionCircle className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">Pertanyaan Umum</h2>
                    <p className="text-gray-600">Temukan jawaban untuk pertanyaan yang sering diajukan</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {faqItems.map((item) => (
                    <div
                      key={item.id}
                      className={`group rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                        activeFAQ === item.id
                          ? 'border-amber-300 bg-amber-50/50 shadow-lg'
                          : 'border-amber-100 hover:border-amber-200 hover:bg-gray-50'
                      }`}
                    >
                      <button
                        className="w-full p-6 text-left flex justify-between items-center transition-colors duration-200"
                        onClick={() => toggleFAQ(item.id)}
                      >
                        <div className="flex items-center">
                          <div className={`p-3 rounded-xl mr-4 ${
                            activeFAQ === item.id 
                              ? 'bg-linear-to-r from-amber-50 to-amber-100' 
                              : 'bg-gray-100 group-hover:bg-amber-50'
                          }`}>
                            {item.icon}
                          </div>
                          <span className="font-semibold text-gray-800 text-lg">{item.question}</span>
                        </div>
                        <div className={`p-2 rounded-full ${
                          activeFAQ === item.id 
                            ? 'bg-linear-to-r from-amber-300 to-amber-600 text-white' 
                            : 'bg-gray-100 group-hover:bg-amber-100 text-gray-600'
                        }`}>
                          <svg
                            className={`w-5 h-5 transform transition-transform duration-300 ${
                              activeFAQ === item.id ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </button>
                      
                      {activeFAQ === item.id && (
                        <div className="px-6 pb-6 pt-2 animate-fadeIn">
                          <div className="pl-16">
                            <p className="text-gray-700 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-gray-600 text-center">
                    Masih punya pertanyaan lain?{' '}
                    <button
                      onClick={handleWhatsAppClick}
                      className="text-orange-400 font-semibold hover:text-amber-800 transition-colors duration-200 cursor-pointer"
                    >
                      Tanyakan langsung via WhatsApp
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-emerald-600 via-green-600 to-emerald-700 text-white p-12 text-center shadow-2xl">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-48 translate-y-48"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Siap Memulai Percakapan?
              </h3>
              <p className="text-xl opacity-95 max-w-2xl mx-auto mb-8">
                Tim SoreCoffee siap membantu Anda dengan pertanyaan, pemesanan, atau sekadar ngobrol tentang kopi!
              </p>
              <button
                onClick={handleWhatsAppClick}
                className="group bg-white text-emerald-700 hover:bg-emerald-50 font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl inline-flex items-center text-lg"
              >
                <FaWhatsapp className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                Mulai Chat Sekarang
                <svg className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <p className="mt-6 text-emerald-200">
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