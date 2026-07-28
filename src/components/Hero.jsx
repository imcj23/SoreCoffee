// import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sore from "../assets/photo/section.png";

export default function Hero() {
  const navigate = useNavigate();
  // const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsVisible(true);
  //   }, 0);
  //   return () => clearTimeout(timer);
  // }, []);

  const handleMenuClick = () => {
    navigate("/Catalog");
  };

  const handleLocationClick = () => {
    const locationSection = document.getElementById("location-section");

    if (locationSection) {
      locationSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
      setTimeout(() => {
        const retrySection = document.getElementById("location-section");
        if (retrySection) {
          retrySection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 500);
    }
  };

  return (
    <section className="md:min-h-screen flex items-center justify-center bg-[#faebd7] py-6 xs:py-8 sm:py-12 lg:py-0">
  <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 w-full">
    <div className="flex flex-col md:flex-row gap-6 xs:gap-8 md:gap-12 lg:gap-16 md:items-center">
      
      <div className="w-full md:w-1/2 px-1 xs:px-0 flex flex-col justify-center h-full">
        <h1 className="font-bold text-amber-900 ">
          <span className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl ">
            Kami datang,
          </span>
          <br />
          <span className="text-amber-600 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl block ">
            Kamu yang menikmati
          </span>
        </h1>

        <p className="text-amber-800 mt-3 leading-none ">
          <span className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            Kopi keliling dengan berbagai varian spesial, rasa nikmat dan
            harga bersahabat. Siap menemani aktivitas kamu di berbagai sudut
            kota.
          </span>
        </p>
        <div className="w-full mt-8 xs:mt-10 sm:mt-12 flex flex-col xs:flex-col justify-center items-center gap-3">
          <button
            onClick={handleMenuClick}
            className="bg-linear-to-r from-amber-600 to-orange-500 text-white px-6 xs:px-8 sm:px-10 md:px-12 py-3 xs:py-3.5 sm:py-4 rounded-xl sm:rounded-xl hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 font-semibold text-sm xs:text-base sm:text-lg md:text-xl flex items-center justify-center w-full xs:w-auto min-w-50 xs:min-w-[220px] sm:min-w-60"
          >
            Lihat Menu
            <svg
              className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 ml-2 xs:ml-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <button
            onClick={handleLocationClick}
            className="border-2 border-amber-600 text-amber-600 px-6 xs:px-8 sm:px-10 md:px-12 py-3 xs:py-3.5 sm:py-4 rounded-lg sm:rounded-xl hover:bg-amber-50 hover:border-amber-700 hover:text-amber-700 active:bg-amber-100 transition-all duration-300 font-semibold text-sm xs:text-base sm:text-lg md:text-xl w-full xs:w-auto min-w-50 xs:min-w-[220px] sm:min-w-60"
          >
            Cari Lokasi Kami
          </button>
        </div>
      </div>

      <div className="w-full md:w-1/2 justify-center items-center hidden md:flex">
        <div className="relative max-w-xs md:max-w-md w-full">
          <div className="absolute -inset-2 xs:-inset-3 sm:-inset-4 bg-linear-to-r from-amber-200 to-orange-200 rounded-2xl xs:rounded-3xl blur-lg opacity-50 -z-10"></div>
          <img
            onClick={handleMenuClick}
            src={Sore}
            alt="Sore Coffee"
            className="w-full h-auto rounded-xl xs:rounded-2xl sm:rounded-3xl shadow-lg xs:shadow-xl transform md:hover:scale-105 transition-transform duration-500"
            loading="eager"
          />
        </div>
      </div>

    </div>
  </div>
</section>
  );
}
