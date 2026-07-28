import Logo from "../assets/photo/Logo_sore.png";
import {
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

export default function Footer() {
  const instagramUsername = "sorecoffee";
  const whatsappNumber = "+6285222255234";
  // const formattedPhone = "6285222255234";

  const message = "Halo SoreCoffee, saya ingin bertanya";

  const openInstagram = () => {
    const instagramUrl = `https://instagram.com/${instagramUsername}`;
    window.open(instagramUrl, "_blank", "noopener,noreferrer");
  };

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <footer className="bg-linear-to-b from-[#DC7331] to-[#c05d24] text-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex gap-6 ">
              <img src={Logo} alt="SoreCoffee-Logo" className="h-20 w-20" />{" "}
              <h3 className="text-3xl font-bold flex items-center mt-3">
                Kopi Sore
              </h3>
            </div>
            <p className="text-sm leading-relaxed mt-10 ">
              Menyajikan kopi pilihan dengan cita rasa terbaik untuk menemani
              waktu santai dan produktifmu. Temukan kenikmatan dalam setiap
              tegukan.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-white/30 pb-2">
              Kategori
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Coffee Based", desc: "Dengan kandungan biji kopi" },
                {
                  name: "Non Coffee",
                  desc: "Tanpa kandungan biji kopi",
                },
                // { name: "Best Seller", desc: "Laris Manisssss" },
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
                  onClick={handleWhatsAppClick}
                  className="flex-1 flex flex-col items-center justify-center p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 group"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="text-xl mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-xs">WhatsApp</span>
                </button>
              </div>

              <div className="text-sm bg-white/5 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-amber-200 mt-1 shrink-0" />
                  <div>
                    <p className="font-medium">Alamat</p>
                    <p className="text-xs opacity-90">
                      Tanjungpinang, Bintan Centre
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 my-8"></div>

        <div className="flex flex-col justify-center items-center gap-6">
          <div className="text-center ">
            <p className="text-sm">
              © {new Date().getFullYear()} Kopi Sore. All rights reserved.
            </p>
            <p className="text-xs opacity-80 mt-1">
              Buka setiap hari 08:00 - 22:00
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}