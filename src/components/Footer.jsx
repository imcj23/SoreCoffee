import Logo from "../assets/photo/Logo_sore.png";
import {
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  const instagramUsername = "sorecoffee";
  const phoneNumber = "6285222255234";
  const formattedPhone = "6285222255234";
  const email = "info@kopisore.com";

  const openInstagram = () => {
    const webUrl = `https://instagram.com/${instagramUsername}`;
    const appUrl = `https://www.instagram.com/${instagramUsername}`;
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = appUrl;
      setTimeout(() => {
        if (!document.hidden && !document.webkitHidden) {
          window.location.href = webUrl;
        }
      }, 500);
    } else {
      window.open(webUrl, "_blank", "noopener,noreferrer");
    }
  };

  const openWhatsApp = () => {
    const message =
      "Halo Kopi Sore, saya ingin bertanya tentang menu dan harga.";
    const webUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    const appUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = appUrl;
    } else {
      window.open(webUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <footer className="bg-gradient-to-b from-[#DC7331] to-[#c05d24] text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-4">
              <h3 className="text-3xl font-bold flex items-center">
                <img src={Logo} alt="SoreCoffee-Logo" className="h-30 w-30" />{" "}
                Kopi Sore
              </h3>
            <p className="text-sm leading-relaxed">
              Menyajikan kopi pilihan dengan cita rasa terbaik untuk menemani
              waktu santai dan produktifmu. Temukan kenikmatan dalam setiap
              tegukan.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-white/30 pb-2">
              Menu
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Coffee Based", desc: "Adanya kandungan biji kopi" },
                { name: "Non Coffee", desc: "Tanpa adanya kandungan biji kopi" },
                { name: "Best Seller", desc: "Laris Manisssss" },
              ].map((item) => (
                <li key={item.name}>
                  <p className="font-medium hover:text-amber-100 cursor-pointer transition-colors">
                    {item.name}
                  </p>
                  <p className="text-xs opacity-80">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-white/30 pb-2">
              Hubungi Kami
            </h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <button
                  onClick={openInstagram}
                  className="flex-1 flex flex-col items-center justify-center p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 group"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-xl mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-xs">Instagram</span>
                </button>

                <button
                  onClick={openWhatsApp}
                  className="flex-1 flex flex-col items-center justify-center p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 group"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="text-xl mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-xs">WhatsApp</span>
                </button>
              </div>

              <div className="space-y-3 text-sm bg-white/5 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-amber-200 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Alamat</p>
                    <p className="text-xs opacity-90">
                      Tanjungpinang, Bintan Centre
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaPhone className="text-amber-200 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Telepon/WhatsApp</p>
                    <p className="text-xs opacity-90">{formattedPhone}</p>
                  </div>
                </div>

                {email && (
                  <div className="flex items-start gap-3">
                    <FaEnvelope className="text-amber-200 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-xs opacity-90">{email}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 my-8"></div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="text-center lg:text-left">
            <p className="text-sm">
              © {new Date().getFullYear()} Kopi Sore. All rights reserved.
            </p>
            <p className="text-xs opacity-80 mt-1">
              Buka setiap hari 08:00 - 22:00
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={openWhatsApp}
              className="flex items-center gap-3 px-5 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl min-w-[200px] justify-center"
              aria-label="Pesan via WhatsApp"
            >
              <FaWhatsapp className="text-xl" />
              <div className="text-left">
                <p className="text-sm font-normal">Pesan Sekarang</p>
                <p className="text-xs">Via WhatsApp</p>
              </div>
            </button>

            {/* <div className="flex gap-2">
              <button
                onClick={openInstagram}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram />
              </button>
              <button
                onClick={openWhatsApp}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
