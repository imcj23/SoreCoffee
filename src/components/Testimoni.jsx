import { useState } from "react";
import {
  FaStar,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
  FaInstagram,
  FaUser,
} from "react-icons/fa";
import { testimonials } from "../utils/testimoni";

export default function Testimoni() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <FaStar
        key={index}
        className={`${index < rating ? "text-yellow-400" : "text-gray-300"} inline-block mr-1`}
        size={16}
      />
    ));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };
  return (
    <>
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
              Kata Mereka tentang Sore Coffee
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lihat pengalaman nyata dari pelanggan setia yang sudah menikmati 7
              varian spesial kopi gerobakan kami
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-700">7</div>
              <div className="text-gray-600">Varian Minuman</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-700">4.8</div>
              <div className="text-gray-600">Rating Rata-rata</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-700">2K+</div>
              <div className="text-gray-600">Ulasan Instagram</div>
            </div>
          </div>

          <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 justify-center items-center mt-2">
                    <FaUser className="text-amber-500" size={24} />
                  </div>
                  <div className="ml-4">
                    <div className="flex items-center">
                      <h3 className="font-bold text-gray-800">
                        {testimonial.name}
                      </h3>
                      <div className="ml-2 flex items-center text-sm text-amber-600">
                        <FaInstagram size={12} className="mr-1" />
                        {testimonial.instagram}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    <div className="flex items-center mt-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <FaQuoteLeft
                    className="text-amber-200 absolute -top-2 -left-1"
                    size={24}
                  />
                  <p className="text-gray-700 pl-6 pt-2 italic">
                    "{testimonial.comment}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:hidden relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-2"
                  >
                    <div className="bg-white rounded-2xl shadow-lg p-6 mx-auto max-w-md">
                      <div className="flex items-start mb-4">
                        <div className="flex-shrink-0 mt-2">
                          <FaUser className="text-amber-500" size={24} />
                        </div>
                        <div className="ml-4">
                          <div className="flex items-center flex-wrap">
                            <h3 className="font-bold text-gray-800">
                              {testimonial.name}
                            </h3>
                            <div className="ml-2 flex items-center text-sm text-amber-600">
                              <FaInstagram size={12} className="mr-1" />
                              {testimonial.instagram}
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm">
                            {testimonial.role}
                          </p>
                          <div className="flex items-center mt-1">
                            {renderStars(testimonial.rating)}
                          </div>
                        </div>
                      </div>

                      <div className="relative">
                        <FaQuoteLeft
                          className="text-amber-200 absolute -top-2 -left-1"
                          size={24}
                        />
                        <p className="text-gray-700 pl-6 pt-2 italic">
                          "{testimonial.comment}"
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 bg-white rounded-full p-3 shadow-lg hover:bg-amber-50 transition-colors"
              aria-label="Testimonial sebelumnya"
            >
              <FaChevronLeft className="text-amber-700" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 bg-white rounded-full p-3 shadow-lg hover:bg-amber-50 transition-colors"
              aria-label="Testimonial berikutnya"
            >
              <FaChevronRight className="text-amber-700" />
            </button>

            <div className="flex justify-center mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full mx-1 transition-colors ${
                    index === currentIndex ? "bg-amber-600" : "bg-gray-300"
                  }`}
                  aria-label={`Pergi ke testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="mt-12 mb-8">
            <h3 className="text-xl font-bold text-center text-amber-800 mb-6">
              7 Varian Spesial yang Disukai Pelanggan
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Americano",
                "Spanish Latte",
                "Butterscotch",
                "Aren Latte",
                "Japanese Matcha",
                "Chocolate",
                "Pink Panther",
              ].map((menu) => (
                <span
                  key={menu}
                  className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium hover:bg-amber-200 transition-colors"
                >
                  {menu}
                </span>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-700 mb-4">
              Bagikan pengalamanmu dengan tag
              <span className="font-bold text-amber-700 ml-1">
                #SoreCoffeeExperience
              </span>
            </p>
            <a
              href="https://instagram.com/sorecoffee"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-amber-600 to-orange-500 text-white font-medium py-3 px-6 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <FaInstagram className="mr-2" />
              Follow kami di Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
