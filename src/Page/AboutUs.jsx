import {
  FaCoffee,
  FaUsers,
  FaAward,
  FaLeaf,
  FaHeart,
  FaClock,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaStar,
  FaGlobeAmericas,
  FaBullseye,
  FaCheckCircle,
  FaFire,
  FaHandsHelping,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import ownerImage from "../assets/photo/Owner.jpeg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import halalCertImage from "../assets/photo/logo_halal.svg";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-linear-to-b from-amber-50 to-white text-gray-800">
        <section className="relative py-12 md:py-20 bg-linear-to-r from-amber-900 to-amber-700 text-white overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-600/20 rounded-full md:block hidden"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-amber-500/10 rounded-full md:block hidden"></div>

          <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Sore Coffee Story
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-6 md:mb-8 px-2">
              Lebih dari sekadar kedai kopi, kami adalah tempat di mana cerita
              bertemu cita rasa
            </p>
            <div className="mt-8 md:mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base">
                <FaShieldAlt className="mr-1.5 sm:mr-2 sm:size-5" size={16} />
                <span>Bersertifikat Halal MUI</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base">
                <FaAward className="mr-1.5 sm:mr-2 sm:size-5" size={16} />
                <span>Kualitas Terjamin</span>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12">
          <section className="mb-12 md:mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-4 md:mb-6 flex items-center">
                  <FaStar className="mr-2 md:mr-3 md:size-7" size={24} />
                  Visi Kami
                </h2>
                <div className="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg border border-amber-100">
                  <p className="text-lg md:text-xl lg:text-2xl font-semibold text-amber-800 mb-3 md:mb-4">
                    Menjadi usaha kopi keliling yang dekat dengan keseharian,
                    menghadirkan kopi berkualitas sebagai teman menikmati momen
                    dari pagi hingga malam.
                  </p>
                  <p className="text-gray-600 text-sm md:text-base">
                    Kami berkomitmen menyajikan kopi yang jujur, rasa yang
                    konsisten, dan kehadiran yang bisa diandalkan
                  </p>
                </div>
              </div>

              {/* Mission */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-4 md:mb-6 flex items-center">
                  <FaBullseye className="mr-2 md:mr-3 md:size-7" size={24} />
                  Misi Kami
                </h2>
                <div className="space-y-3 md:space-y-4">
                  {[
                    "Menyajikan kopi yang enak, jujur, dan mudah dijangkau untuk semua kalangan",
                    "Menghadirkan pengalaman minum kopi yang santai dan hangat di setiap perjalanan",
                    "Menjadi tempat yang inklusif dan nyaman untuk semua kalangan",
                    "Menjadi bagian dari rutinitas dan cerita pelanggan, di mana pun Sorecoffee berhenti",
                    "Terus berkembang tanpa kehilangan kesederhanaan dan rasa khas Sorecoffee",
                  ].map((mission, index) => (
                    <div
                      key={index}
                      className="flex items-start bg-white p-3 md:p-4 rounded-lg md:rounded-xl shadow-sm border border-amber-50"
                    >
                      <div className="bg-amber-100 text-amber-700 p-1.5 md:p-2 rounded-lg mr-3 md:mr-4 text-sm md:text-base min-w-6 md:min-w-8 h-6 md:h-8 flex items-center justify-center">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 text-sm md:text-base">
                        {mission}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Founder Story Section - Responsive Flex */}
          <section className="mb-12 md:mb-20">
            <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
              {/* Founder Image */}
              <div className="w-full lg:w-2/5">
                <div className="relative">
                  <img
                    src={ownerImage}
                    alt="Owner Sore Coffee"
                    className="rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl w-full"
                  />
                  <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-amber-800 text-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg md:shadow-xl">
                    <p className="font-bold text-lg md:text-xl">Bagus</p>
                    <p className="text-amber-200 text-sm md:text-base">
                      Owner Sore Coffee
                    </p>
                  </div>
                </div>
              </div>

              {/* Founder Bio */}
              <div className="w-full lg:w-3/5">
                <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-4 md:mb-6">
                  Cerita Pendiri
                </h2>
                <div className="space-y-4 md:space-y-6 text-base md:text-lg">
                  <p>
                    Sorecoffee lahir dari kecintaan pada kopi dan perjalanan.
                    Berawal dari satu gerobak kopi keliling, kami mulai menyapa
                    pelanggan sejak pagi hari—saat hari baru dimulai—hingga
                    malam, ketika kota mulai melambat.
                  </p>
                  <p>
                    Meski namanya sorecoffee, bagi kami "sore" bukan cuma soal
                    waktu, tapi soal rasa: jeda, santai, dan menikmati momen.
                  </p>
                  <p className="italic text-amber-700">
                    "Berkeliling dari pagi sampai malam ngajarin kami satu hal:
                    setiap tempat punya cerita, dan kopi selalu jadi
                    pembukanya."
                  </p>

                  {/* Founder Stats */}
                  <div className="flex flex-wrap gap-3 md:gap-4 mt-6 md:mt-8">
                    {[
                      { icon: <FaAward />, text: "Certified Q-Grader" },
                      { icon: <FaGlobeAmericas />, text: "5 Tahun Pengalaman" },
                      { icon: <FaCoffee />, text: "Spesialis Kopi" },
                      { icon: <FaUsers />, text: "Mentor 50+ Barista" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center bg-amber-50 px-3 py-2 md:px-4 md:py-3 rounded-lg md:rounded-xl flex-1 min-w-35 md:min-w-0"
                      >
                        <div className="text-amber-700 mr-2 md:mr-3">
                          {item.icon}
                        </div>
                        <span className="font-medium text-sm md:text-base">
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12 md:mb-20 bg-linear-to-r from-green-50 to-emerald-50 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
              <div className="w-full lg:w-2/5">
                <div className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg md:shadow-xl">
                  <img
                    src={halalCertImage}
                    alt="Sertifikat Halal MUI Sore Coffee"
                    className="rounded-lg md:rounded-xl w-full max-w-75 mx-auto"
                  />
                </div>
                <div className="mt-4 md:mt-6 text-center">
                  <FaShieldAlt
                    size={40}
                    className="md:size-12 text-green-600 mx-auto mb-3 md:mb-4"
                  />
                  <p className="text-green-700 font-bold text-sm md:text-base">
                    No. Sertifikat: ID21110019080810524
                  </p>
                  <p className="text-gray-600 text-sm md:text-base">
                    Berlaku hingga: Seumur Hidup
                  </p>
                </div>
              </div>

              {/* Halal Commitment Info */}
              <div className="w-full lg:w-3/5">
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="bg-green-600 text-white p-2 md:p-3 rounded-lg md:rounded-xl mr-3 md:mr-4">
                    <FaShieldAlt size={24} className="md:size-8" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-green-900">
                    Komitmen Kehalalan
                  </h2>
                </div>

                <p className="text-base md:text-lg mb-4 md:mb-6">
                  Sore Coffee dengan bangga telah mendapatkan sertifikasi halal
                  resmi dari Majelis Ulama Indonesia (MUI). Komitmen kami
                  terhadap kehalalan bukan hanya sekadar sertifikat, tetapi
                  bagian integral dari nilai-nilai perusahaan.
                </p>

                {/* Halal Process Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                  {[
                    {
                      title: "Bahan Baku Halal",
                      desc: "Semua biji kopi dan bahan tambahan berasal dari supplier bersertifikat halal MUI",
                    },
                    {
                      title: "Proses Produksi",
                      desc: "Proses roasting, grinding, dan brewing dipastikan bebas dari kontaminasi non-halal",
                    },
                    {
                      title: "Audit Berkala",
                      desc: "Inspeksi rutin oleh auditor halal independen untuk memastikan standar",
                    },
                    {
                      title: "Pelatihan Staf",
                      desc: "Semua staff mendapatkan pelatihan khusus tentang prinsip kehalalan",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white p-4 md:p-5 rounded-lg md:rounded-xl shadow-sm border border-green-100"
                    >
                      <h4 className="font-bold text-green-800 mb-1 md:mb-2 text-base md:text-lg">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-xs md:text-sm">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="bg-green-100 border-l-4 border-green-600 p-4 md:p-5 rounded-r-xl">
                  <p className="text-green-800 font-medium text-sm md:text-base">
                    "Kehalalan adalah hak dasar konsumen Muslim. Kami di Sore
                    Coffee berkomitmen penuh untuk menjamin setiap produk yang
                    kami sajikan memenuhi standar halal tertinggi."
                  </p>
                  <p className="text-green-700 mt-2 text-sm md:text-base">
                    - Tim Quality Assurance Sore Coffee
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12 md:mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-amber-900 mb-8 md:mb-12">
              Journey of Our Coffee
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                {
                  step: "1",
                  title: "Biji Kopi Pilihan",
                  desc: "Kami memilih biji kopi berkualitas dari petani dan roastery lokal untuk menjaga cita rasa khas Sorecoffee.",
                  icon: <FaLeaf size={24} className="md:size-8" />,
                },
                {
                  step: "2",
                  title: "Proses Pracikan",
                  desc: "Setiap biji kopi diracik dengan proses sederhana dan penuh perhatian agar rasa tetap konsisten di setiap sajian.",
                  icon: <FaFire size={24} className="md:size-8" />,
                },
                {
                  step: "3",
                  title: "Kontrol Kualitas",
                  desc: "Setiap racikan diperiksa untuk memastikan kualitas, kebersihan, dan rasa sebelum disajikan kepada pelanggan.",
                  icon: <FaCheckCircle size={24} className="md:size-8" />,
                },
                {
                  step: "4",
                  title: "Diseduh Segar",
                  desc: "Kopi diseduh langsung di gerobak Sorecoffee dan disajikan hangat—menemani momen Anda dari pagi hingga malam.",
                  icon: <FaHeart size={24} className="md:size-8" />,
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-amber-100 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                    <div className="text-amber-700">{item.icon}</div>
                  </div>
                  <div className="bg-white p-1.5 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center mx-auto mb-3 md:mb-4 font-bold text-amber-700 text-sm md:text-base">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg md:text-xl text-amber-900 mb-2 md:mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base px-2">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-linear-to-br from-amber-900 to-amber-800 text-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
              Kunjungi Kami
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
              {/* Location */}
              <div className="text-center">
                <FaMapMarkerAlt
                  size={40}
                  className="md:size-12 mx-auto mb-4 md:mb-6 text-amber-300"
                />
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">
                  Lokasi
                </h3>
                <p className="text-amber-200 text-sm md:text-base">
                  Jl. D.I. Panjaitan, Bintan Centre
                  <br />
                  Tanjungpinang
                </p>
              </div>

              {/* Hours */}
              <div className="text-center">
                <FaClock
                  size={40}
                  className="md:size-12 mx-auto mb-4 md:mb-6 text-amber-300"
                />
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">
                  Jam Operasional
                </h3>
                <div className="space-y-1 md:space-y-2 text-amber-200 text-sm md:text-base">
                  <p>Setiap Hari : 08:00 - 22:00</p>
                </div>
              </div>

              {/* Contact */}
              <div className="text-center">
                <FaUsers
                  size={40}
                  className="md:size-12 mx-auto mb-4 md:mb-6 text-amber-300"
                />
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">
                  Hubungi Kami
                </h3>
                <div className="space-y-2 text-amber-200">
                  <p className="flex justify-center items-center gap-2 text-sm md:text-base">
                    <FaWhatsapp className="text-xl md:text-2xl" />
                    <span>+62 852-2225-5234</span>
                  </p>
                  <p className="flex justify-center items-center gap-2 text-sm md:text-base">
                    <FaInstagram className="text-xl md:text-2xl" />
                    <span>@sorecoffee</span>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
