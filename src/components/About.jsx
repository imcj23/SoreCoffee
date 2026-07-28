import { FaSeedling, FaBalanceScale, FaHeart } from "react-icons/fa";
import ownerImage from "../assets/photo/Sore.jpg.jpeg";
import Bean from "../assets/Icon/coffee-beans.png";
import HandLove from "../assets/Icon/in-love.png";

export default function AboutUs() {
  return (
    <section id="about" className="py-12 sm:py-16 bg-amber-50 text-gray-800">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-900 mb-3 sm:mb-4 px-2">
            Tentang Kami
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-amber-600 mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12">
          <div className="lg:w-1/3 w-full px-2 sm:px-0">
            <div className="relative max-w-xs sm:max-w-sm md:max-w-md mx-auto">
              <img
                src={ownerImage}
                alt="Owner Sore Coffee"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-3 sm:-bottom-4 -right-2 sm:-right-4 bg-amber-700 text-white p-3 sm:p-4 rounded-xl shadow-lg">
                <p className="font-bold text-base sm:text-lg">Bagus Setiawan</p>
                <p className="text-xs sm:text-sm">Owner Sore Coffee</p>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 md:mt-10 p-4 sm:p-5 md:p-6 bg-white rounded-xl shadow-lg border-l-4 border-amber-600 mx-2 sm:mx-0">
              <p className="text-gray-700 italic text-base sm:text-lg md:text-lg">
                "Ngopi nggak harus di tempat mewah. Cukup berhenti sebentar,
                pesan satu gelas, dan biarkan SoreCoffee menjadi teman
                kegiatanmu."
              </p>
            </div>
          </div>

          <div className="lg:w-2/3 w-full px-3 sm:px-4 lg:px-0">
            <h3 className="text-2xl sm:text-3xl font-bold text-amber-900 mb-4 sm:mb-6 text-left lg:text-left">
              Cerita Sore Coffee
            </h3>
            <div className="space-y-4 sm:space-y-6 text-gray-700 text-base sm:text-lg">
              <p>
                Sore Coffee keliling berdiri sejak 2025 dengan visi sederhana:
                menghadirkan suasana hangat di setiap sudut kota, tempat orang
                dapat menikmati kopi berkualitas tanpa harus datang ke kafe.
                Dari sebuah gerobak kopi yang dibawa menggunakan sepeda listrik,
                kami hadir menyapa pelanggan dari satu lokasi ke lokasi lainnya,
                membawa suasana yang santai dan penuh cerita.
              </p>
              <p>
                Kami dengan cermat memilih biji kopi terbaik untuk menghasilkan
                cita rasa yang autentik. Setiap cangkir yang kami sajikan adalah
                hasil dari proses yang penuh perhatian dari biji kopi sampai
                hingga tersaji hangat di tangan penikmatnya. Sore Coffee bukan
                sekedar kopi keliling, tetapi pengalaman sederhana yang
                mendekatkan kualitas dan kenyamanan, langsung ke tempat kalian
                berada.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <img
                  src={Bean}
                  alt="Selected Beans"
                  className="w-8 h-8 mx-auto mb-4 opacity-80"
                />
                {/* <FaSeedling className="w-8 h-8 mx-auto mb-4 text-green-600" /> */}
                <h4 className="text-lg font-semibold text-amber-900 mb-2 text-center">
                  Biji Kopi Pilihan
                </h4>
                <p className="text-sm text-gray-600 text-center leading-relaxed">
                  Menggunakan biji kopi pilihan dengan karakter rasa yang
                  konsisten di setiap seduhan.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                {/* <img
                  src={Bean}
                  alt="Precise Brewing"
                  className="w-8 h-8 mx-auto mb-4 opacity-80"
                /> */}
                <FaBalanceScale className="w-8 h-8 mx-auto mb-4 text-amber-600" />
                <h4 className="text-lg font-semibold text-amber-900 mb-2 text-center">
                  Penyeduhan Presisi
                </h4>
                <p className="text-sm text-gray-600 text-center leading-relaxed">
                  Takaran dan teknik seduh yang terjaga untuk menghasilkan rasa
                  yang seimbang.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <img
                  src={HandLove}
                  alt="Crafted Carefully"
                  className="w-8 h-8 mx-auto mb-4 opacity-80"
                />
                <h4 className="text-lg font-semibold text-amber-900 mb-2 text-center">
                  Crafted Carefully
                </h4>
                <p className="text-sm text-gray-600 text-center leading-relaxed">
                  Setiap gelas dibuat dengan perhatian pada detail dan kualitas.
                </p>
              </div>
            </div>

            {/* Stats - 2 columns on mobile, 4 on desktop */}
            <div className="mt-8  sm:mt-10 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
              <div className="text-center p-2">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-700">
                  2022
                </p>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-1 sm:mt-2">
                  Tahun Berdiri
                </p>
              </div>
              <div className="text-center p-2">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-700">
                  6
                </p>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-1 sm:mt-2">
                  Varietas Menu
                </p>
              </div>
              <div className="text-center p-2">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-700">
                  237K
                </p>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-1 sm:mt-2">
                  Pelanggan Setia
                </p>
              </div>
              <div className="text-center p-2">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-700">
                  6
                </p>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-1 sm:mt-2">
                  Cabang
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
