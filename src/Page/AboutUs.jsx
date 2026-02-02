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
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white text-gray-800">
        <section className="relative py-20 bg-gradient-to-r from-amber-900 to-amber-700 text-white">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Sore Coffee Story
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Lebih dari sekadar kedai kopi, kami adalah tempat di mana cerita
              bertemu cita rasa
            </p>
            <div className="mt-10 flex justify-center space-x-4">
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <FaShieldAlt className="mr-2" size={20} />
                <span>Bersertifikat Halal MUI</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <FaAward className="mr-2" size={20} />
                <span>Kualitas Terjamin</span>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 md:px-8 py-12">
          <section className="mb-20">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-amber-900 mb-6 flex items-center">
                  <FaStar className="mr-3" size={28} />
                  Visi Kami
                </h2>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-amber-100">
                  <p className="text-2xl font-semibold text-amber-800 mb-4">
                    Menjadi usaha kopi keliling yang dekat dengan keseharian,
                    menghadirkan kopi berkualitas sebagai teman menikmati momen
                    dari pagi hingga malam.
                  </p>
                  <p className="text-gray-600">
                    Kami berkomitmen menyajikan kopi yang jujur, rasa yang
                    konsisten, dan kehadiran yang bisa diandalkan
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-amber-900 mb-6 flex items-center">
                  <FaBullseye className="mr-3" size={28} />
                  Misi Kami
                </h2>
                <div className="space-y-4">
                  {[
                    "Menyajikan kopi yang enak, jujur, dan mudah dijangkau untuk semua kalangan",
                    "Menghadirkan pengalaman minum kopi yang santai dan hangat di setiap perjalanan",
                    "Menjadi tempat yang inklusif dan nyaman untuk semua kalangan",
                    "Menjadi bagian dari rutinitas dan cerita pelanggan, di mana pun Sorecoffee berhenti",
                    "Terus berkembang tanpa kehilangan kesederhanaan dan rasa khas Sorecoffee",
                  ].map((mission, index) => (
                    <div
                      key={index}
                      className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-amber-50"
                    >
                      <div className="bg-amber-100 text-amber-700 p-2 rounded-lg mr-4">
                        {index + 1}
                      </div>
                      <p className="text-gray-700">{mission}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-2/5">
                <div className="relative">
                  <img
                    src={ownerImage}
                    alt="Owner Sore Coffee"
                    className="rounded-3xl shadow-2xl w-full"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-amber-800 text-white p-6 rounded-2xl shadow-xl">
                    <p className="font-bold text-xl">Bagus</p>
                    <p className="text-amber-200">Owner Sore Coffee</p>
                  </div>
                </div>
              </div>

              <div className="lg:w-3/5">
                <h2 className="text-3xl font-bold text-amber-900 mb-6">
                  Cerita Pendiri
                </h2>
                <div className="space-y-6 text-lg">
                  <p>
                    Sorecoffee lahir dari kecintaan pada kopi dan perjalanan.
                    Berawal dari satu gerobak kopi keliling, kami mulai menyapa
                    pelanggan sejak pagi hari—saat hari baru dimulai—hingga
                    malam, ketika kota mulai melambat. Meski namanya sorecoffee,
                    bagi kami “sore” bukan cuma soal waktu, tapi soal rasa:
                    jeda, santai, dan menikmati momen. Dengan kopi yang jujur
                    dan mudah dijangkau, Sorecoffee hadir menemani aktivitas
                    dari pagi sampai malam, di mana pun roda kami berhenti.
                  </p>
                  <p>
                    "Berkeliling dari pagi sampai malam ngajarin kami satu hal:
                    setiap tempat punya cerita, dan kopi selalu jadi
                    pembukanya."
                  </p>
                  <div className="flex flex-wrap gap-4 mt-8">
                    {[
                      { icon: <FaAward />, text: "Certified Q-Grader" },
                      { icon: <FaGlobeAmericas />, text: "5 Tahun Pengalaman" },
                      { icon: <FaCoffee />, text: "Spesialis Kopi Indonesia" },
                      { icon: <FaUsers />, text: "Mentor 50+ Barista" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center bg-amber-50 px-4 py-3 rounded-xl"
                      >
                        <div className="text-amber-700 mr-3">{item.icon}</div>
                        <span className="font-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20 bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-2/5">
                <div className="bg-white p-6 rounded-2xl shadow-xl">
                  <img
                    src={halalCertImage}
                    alt="Sertifikat Halal MUI Sore Coffee"
                    className="rounded-xl w- h-100 flex mx-auto "
                  />
                </div>
                <div className="mt-6 text-center">
                  <FaShieldAlt
                    size={48}
                    className="text-green-600 mx-auto mb-4"
                  />
                  <p className="text-green-700 font-bold">
                    No. Sertifikat: ID21110019080810524
                  </p>
                  <p className="text-gray-600">Berlaku hingga: Seumur Hidup</p>
                </div>
              </div>

              <div className="lg:w-3/5">
                <div className="flex items-center mb-6">
                  <div className="bg-green-600 text-white p-3 rounded-xl mr-4">
                    <FaShieldAlt size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-green-900">
                    Komitmen Kehalalan
                  </h2>
                </div>

                <p className="text-lg mb-6">
                  Sore Coffee dengan bangga telah mendapatkan sertifikasi halal
                  resmi dari Majelis Ulama Indonesia (MUI). Komitmen kami
                  terhadap kehalalan bukan hanya sekadar sertifikat, tetapi
                  bagian integral dari nilai-nilai perusahaan.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
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
                      className="bg-white p-5 rounded-xl shadow-sm border border-green-100"
                    >
                      <h4 className="font-bold text-green-800 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-green-100 border-l-4 border-green-600 p-5 rounded-r-xl">
                  <p className="text-green-800 font-medium">
                    "Kehalalan adalah hak dasar konsumen Muslim. Kami di Sore
                    Coffee berkomitmen penuh untuk menjamin setiap produk yang
                    kami sajikan memenuhi standar halal tertinggi."
                  </p>
                  <p className="text-green-700 mt-2">
                    - Tim Quality Assurance Sore Coffee
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">
              Journey of Our Coffee
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Biji Kopi Pilihan",
                  desc: "Kami memilih biji kopi berkualitas dari petani dan roastery lokal untuk menjaga cita rasa khas Sorecoffee.",
                  icon: <FaLeaf size={32} />,
                },
                {
                  step: "2",
                  title: "Proses Pracikan",
                  desc: "Setiap biji kopi diracik dengan proses sederhana dan penuh perhatian agar rasa tetap konsisten di setiap sajian.",
                  icon: <FaFire size={32} />,
                },
                {
                  step: "3",
                  title: "Kontrol Kualitas",
                  desc: "Setiap racikan diperiksa untuk memastikan kualitas, kebersihan, dan rasa sebelum disajikan kepada pelanggan.",
                  icon: <FaCheckCircle size={32} />,
                },
                {
                  step: "4",
                  title: "Diseduh Segar",
                  desc: "Kopi diseduh langsung di gerobak Sorecoffee dan disajikan hangat—menemani momen Anda dari pagi hingga malam.",
                  icon: <FaHeart size={32} />,
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="text-amber-700">{item.icon}</div>
                  </div>
                  <div className="bg-white p-2 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-4 font-bold text-amber-700">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-xl text-amber-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Tim Kami
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">
              Meet Our Team
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sari Dewi",
                  role: "Head Roaster",
                  desc: "Spesialis roasting dengan 8 tahun pengalaman",
                  specialty: "Single Origin Expert",
                  icon: <FaFire />,
                },
                {
                  name: "Budi Santoso",
                  role: "Quality Control Manager",
                  desc: "Bertanggung jawab atas standar kualitas dan kehalalan",
                  specialty: "Halal Assurance",
                  icon: <FaCheckCircle />,
                },
                {
                  name: "Maya Putri",
                  role: "Customer Experience",
                  desc: "Memastikan setiap pelanggan mendapatkan pengalaman terbaik",
                  specialty: "Community Building",
                  icon: <FaHandsHelping />,
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
                >
                  <div className="bg-amber-100 w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="text-amber-700 text-3xl">{member.icon}</div>
                  </div>
                  <h3 className="font-bold text-xl text-amber-900">
                    {member.name}
                  </h3>
                  <p className="text-amber-600 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-600 mb-4">{member.desc}</p>
                  <div className="bg-amber-50 px-4 py-2 rounded-full inline-block">
                    <span className="text-amber-700 text-sm font-medium">
                      {member.specialty}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section> */}

          <section className="bg-gradient-to-br from-amber-900 to-amber-800 text-white rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-12">
              Kunjungi Kami
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <FaMapMarkerAlt
                  size={48}
                  className="mx-auto mb-6 text-amber-300"
                />
                <h3 className="text-xl font-bold mb-4">Lokasi</h3>
                <p className="text-amber-200">
                  Jl. D.I. Panjaitan, Bintan Centre
                  <br />
                  Tanjungpinang
                </p>
              </div>

              <div className="text-center">
                <FaClock size={48} className="mx-auto mb-6 text-amber-300" />
                <h3 className="text-xl font-bold mb-4">Jam Operasional</h3>
                <div className="space-y-2 text-amber-200">
                  <p>Setiap Hari : 08:00 - 22:00</p>
                </div>
              </div>

              <div className="text-center">
                <FaUsers size={48} className="mx-auto mb-6 text-amber-300" />
                <h3 className="text-xl font-bold mb-4">Hubungi Kami</h3>
                <div className="space-y-2 text-amber-200">
                  <p className="flex justify-center gap-2">
                    <FaWhatsapp className="text-2xl" /> +62 852-2225-5234
                  </p>
                  <p className="flex justify-center gap-2">
                    <FaInstagram className="text-2xl" /> @sorecoffee
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
