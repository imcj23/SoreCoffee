import ownerImage from '../assets/photo/aboutpict.png'; 

export default function AboutUs () {
  return (
    <section id="about" className="py-16 bg-amber-50 text-gray-800">
      <div className="container mx-auto px-4 md:px-8"  data-aos='fade-in  '>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">Tentang Kami</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/3">
            <div className="relative">
              <img 
                src={ownerImage} 
                alt="Owner Sore Coffee" 
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
              <div className="absolute -bottom-4 -right-4 bg-amber-700 text-white p-4 rounded-xl shadow-lg">
                <p className="font-bold text-lg">Bagus Permadi</p>
                <p className="text-sm">Owner Sore Coffee</p>
              </div>
            </div>
            
            <div className="mt-10 p-6 bg-white rounded-xl shadow-lg border-l-4 border-amber-600">
              <p className="text-gray-700 italic text-lg">"Kopi bukan sekadar minuman, tapi cerita yang diseduh dengan ketulusan. Di Sore Coffee, kami menghadirkan pengalaman sore yang hangat untuk setiap pelanggan."</p>
            </div>
          </div>

          <div className="lg:w-2/3">
            <h3 className="text-3xl font-bold text-amber-900 mb-6">Cerita Sore Coffee</h3>
            
            <div className="space-y-6 text-gray-700 text-lg">
              <p>
                Sore Coffee didirikan pada tahun 2025 dengan visi sederhana: menjadi tempat nyaman di sore hari di mana orang bisa bersantai, berkumpul, dan menikmati kopi berkualitas. Bermula dari kedai kecil di sudut jalan, kini kami telah berkembang menjadi kafe yang dikenal dengan suasana hangat dan kopi istimewa.
              </p>
              
              <p>
                Kami dengan hati-hati memilih biji kopi terbaik dari berbagai daerah di Indonesia, dipanggang dengan teknik yang tepat untuk mengekstrak rasa yang otentik. Setiap cangkir yang kami sajikan adalah hasil dari proses yang penuh perhatian, dari biji hingga cangkir.
              </p>
            </div>

            {/* Nilai-nilai */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="text-amber-700 text-3xl mb-4">🌱</div>
                <h4 className="text-xl font-bold text-amber-900 mb-2">Bahan Berkualitas</h4>
                <p className="text-gray-600">Hanya menggunakan biji kopi pilihan dari petani lokal dengan standar kualitas tertinggi.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="text-amber-700 text-3xl mb-4">🔥</div>
                <h4 className="text-xl font-bold text-amber-900 mb-2">Roasting Profesional</h4>
                <p className="text-gray-600">Proses roasting yang presisi untuk mengeluarkan karakter terbaik dari setiap varietas kopi.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="text-amber-700 text-3xl mb-4">❤️</div>
                <h4 className="text-xl font-bold text-amber-900 mb-2">Disajikan dengan Hati</h4>
                <p className="text-gray-600">Setiap minuman dibuat dengan perhatian penuh dan pelayanan yang tulus.</p>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <p className="text-4xl font-bold text-amber-700">1+</p>
                <p className="text-gray-600 mt-2">Tahun Berdiri</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-amber-700">7+</p>
                <p className="text-gray-600 mt-2">Varietas Menu</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-amber-700">237K</p>
                <p className="text-gray-600 mt-2">Pelanggan Setia</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-amber-700">7</p>
                <p className="text-gray-600 mt-2">Cabang</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-amber-900 mb-8">Suasana Sore Coffee</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-xl overflow-hidden shadow-md h-48">
              <div className="bg-amber-200 h-full flex items-center justify-center">
                <span className="text-amber-700">[Gambar Interior Kafe]</span>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md h-48">
              <div className="bg-amber-300 h-full flex items-center justify-center">
                <span className="text-amber-800">[Gambar Proses Brewing]</span>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md h-48">
              <div className="bg-amber-400 h-full flex items-center justify-center">
                <span className="text-amber-900">[Gambar Menu Andalan]</span>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md h-48">
              <div className="bg-amber-500 h-full flex items-center justify-center">
                <span className="text-white">[Gambar Pelanggan]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}