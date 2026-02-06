import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sore from "../assets/photo/section.png";

export default function Hero() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const handleMenuClick = () => {
    navigate("/Catalog"); 
  };
  
  const handleLocationClick = () => {
    const locationSection = document.getElementById('location-section')
    
    if(locationSection){
      locationSection.scrollIntoView({
        behavior:'smooth',
        block:'start'
      })
    } else {
      window.scrollTo({
        top:document.body.scrollHeight,
        behavior:'smooth'
      });
      setTimeout(()=> {
        const retrySection = document.getElementById('location-section');
        if(retrySection){
          retrySection.scrollIntoView({
            behavior:'smooth',
            block:'start'
          })
        }
      },500)
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-amber-50 py-8 sm:py-12 lg:py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row lg:grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div
            className={`transition-all duration-700 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} w-full order-1`}
          >
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-amber-900 leading-tight">
              Kami datang,
              <br />
              <span className="text-amber-600">Kamu yang menikmati</span>
            </h1>

            <p className="mt-4 sm:mt-6 text-base xs:text-lg sm:text-xl text-amber-800/80 max-w-lg">
              Kopi keliling dengan berbagai varian spesial, rasa nikmat dan
              harga bersahabat. Siap menemani aktivitas kamu di berbagai sudut
              kota.
            </p>

            <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col xs:flex-row gap-3 sm:gap-4">
              <button
                onClick={handleMenuClick}
                className="bg-linear-to-r from-amber-600 to-orange-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 font-semibold text-base sm:text-lg flex items-center justify-center"
              >
                Lihat Menu
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
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
                className="border-2 border-amber-600 text-amber-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl hover:bg-amber-50 hover:border-amber-700 hover:text-amber-700 active:bg-amber-100 transition-all duration-300 font-semibold text-base sm:text-lg"
              >
                Cari Lokasi Kami
              </button>
            </div>  
          </div>

          <div className="flex justify-center w-full mt-10 sm:mt-14 md:mt-20 lg:mt-0 order-2">
            <div className="relative w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-full">
              <div className="absolute -inset-4 bg-linear-to-r from-amber-200 to-orange-200 rounded-3xl blur-lg opacity-50 -z-10"></div>
              <img
                src={Sore}
                alt="Sore Coffee"
                className="w-full rounded-2xl sm:rounded-3xl shadow-xl transform lg:hover:scale-105 transition-transform duration-500"
                loading="eager"
              />
              
              <div className="hidden lg:block absolute -bottom-4 -right-4 w-20 h-20 bg-amber-500/10 rounded-full -z-10"></div>
              <div className="hidden lg:block absolute -top-4 -left-4 w-16 h-16 bg-orange-400/10 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}