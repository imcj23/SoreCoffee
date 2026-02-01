// import { Phone, Instagram, MessageSquare } from "lucide-react";
import { FaPhone, FaInstagram  } from "react-icons/fa";
import { LuMessageSquarePlus } from "react-icons/lu";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  const whatsappNumber = "+6282268853638";
  const instagramUsername = "@sorecoffee";

  const message = "Halo, saya ingin bertanya...";

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleInstagramClick = () => {
    const instagramUrl = `https://instagram.com/${instagramUsername.replace("@", "")}`;
    window.open(instagramUrl, "_blank");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-3">
              Hubungi Kami
            </h1>
            <p className="text-gray-600">
              Kami siap membantu Anda melalui WhatsApp dan Instagram
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div
              onClick={handleWhatsAppClick}
              className="flex items-center p-6 mb-6 bg-green-50 rounded-xl border border-green-200 hover:bg-green-100 hover:border-green-300 transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
            >
              <div className="bg-green-100 p-4 rounded-full mr-5">
                <LuMessageSquarePlus className="w-8 h-8 text-green-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-1">
                  <FaPhone className="w-4 h-4 text-green-600 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-800">
                    WhatsApp
                  </h3>
                </div>
                <p className="text-gray-700 font-medium">{whatsappNumber}</p>
                <p className="text-sm text-gray-500 mt-1">
                  Klik untuk chat langsung
                </p>
              </div>
              <div className="text-green-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>

            <div
              onClick={handleInstagramClick}
              className="flex items-center p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl border border-pink-200 hover:border-pink-300 transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
            >
              <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-4 rounded-full mr-5">
                <FaInstagram className="w-8 h-8 text-gradient-to-r from-pink-600 to-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  Instagram
                </h3>
                <p className="text-gray-700 font-medium">{instagramUsername}</p>
                <p className="text-sm text-gray-500 mt-1">
                  Klik untuk kunjungi profil
                </p>
              </div>
              <div className="text-pink-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>

            {/* Info */}
            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-gray-600 text-center">
                ⏰ Respon cepat dalam 1-2 jam pada hari kerja
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">
              Pilih salah satu kontak di atas untuk terhubung dengan kami
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
