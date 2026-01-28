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
    <section className="min-h-screen flex items-center bg-gradient-to-b bg-amber-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div
            className={`transition-all duration-700 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            // data-aos="fade-up"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-amber-900 leading-tight">
              Kami datang,
              <br />
              <span className="text-amber-600">Kamu yang menikmati</span>
            </h1>

            <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-amber-800/80 max-w-lg">
              Kopi keliling dengan berbagai varian spesial, rasa nikmat dan
              harga bersahabat. Siap menemani aktivitas kamu di berbagai sudut
              kota.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleMenuClick}
                className="bg-gradient-to-r from-amber-600 to-orange-500 text-white px-8 py-4 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold text-lg flex items-center justify-center"
              >
                Lihat Menu
                <svg
                  className="w-5 h-5 ml-2"
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
              className="border-2 border-amber-600 text-amber-600 px-8 py-4 rounded-xl hover:bg-amber-50 hover:border-amber-700 hover:text-amber-700 transition-all duration-300 font-semibold text-lg">
                Cari Lokasi Kami
              </button>
            </div>
          </div>

           <div className="flex justify-center">
            <img
              src={Sore}
              alt="Sore Coffee"
              className="w-full max-w-md rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
