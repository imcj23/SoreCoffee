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

  const renderStars = (rating) =>
    Array.from({ length: 5 }).map((_, index) => (
      <FaStar
        key={index}
        className={`${
          index < rating ? "text-yellow-400" : "text-gray-300"
        } inline-block mr-1`}
        size={14}
      />
    ));

  const nextSlide = () =>
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );

  const prevSlide = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );

  return (
    <section className="py-14 px-4 sm:px-6 md:px-8 lg:px-16 overflow-x-hidden bg-amber-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-900 mb-3">
            Kata Mereka <br />
            Tentang Sore Coffee
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Lihat pengalaman nyata dari pelanggan setia yang sudah menikmati 6
            varian spesial kopi kami
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-10 mb-10">
          <div className="text-center">
            <div className="text-4xl sm:text-3xl font-bold text-amber-700">
              6
            </div>
            <div className="text-gray-600 text-sm">Varian Minuman</div>
          </div>

          <div className="text-center">
            <div className="text-4xl sm:text-3xl font-bold text-amber-700">
              4.8
            </div>
            <div className="text-gray-600 text-sm">Rating Rata-rata</div>
          </div>

          <div className="text-center">
            <div className="text-4xl sm:text-3xl font-bold text-amber-700">
              2K+
            </div>
            <div className="text-gray-600 text-sm">Ulasan Instagram</div>
          </div>
        </div>

        <div className="hidden lg:grid grid-cols-3 gap-6 mb-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300"
            >
              <div className="flex items-start mb-4">
                <FaUser className="text-amber-500 mt-2" size={24} />
                <div className="ml-4">
                  <div className="flex items-center flex-wrap gap-2">
                    <h3 className="font-bold text-gray-800">
                      {testimonial.name}
                    </h3>
                    <div className="flex items-center text-sm text-amber-600 break-all">
                      <FaInstagram size={12} className="mr-1" />
                      {testimonial.instagram}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <div className="flex mt-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>

              <div className="relative">
                <FaQuoteLeft
                  className="text-amber-200 absolute -top-2 -left-1"
                  size={20}
                />
                <p className="text-gray-700 pl-6 pt-2 italic text-sm">
                  "{testimonial.comment}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE CAROUSEL */}
        <div className="lg:hidden w-full max-w-90 mx-auto">
          {/* SLIDER */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full shrink-0 px-1">
                  <div className="bg-white rounded-2xl shadow-lg p-5 w-full">
                    <div className="flex items-start mb-4">
                      <FaUser className="text-amber-500 mt-2" size={22} />
                      <div className="ml-3">
                        <div className="flex items-center flex-wrap gap-2">
                          <h3 className="font-bold text-gray-800 text-sm">
                            {testimonial.name}
                          </h3>
                          <div className="flex items-center text-xs text-amber-600 break-all">
                            <FaInstagram size={10} className="mr-1" />
                            {testimonial.instagram}
                          </div>
                        </div>
                        <p className="text-gray-600 text-xs">
                          {testimonial.role}
                        </p>
                        <div className="flex mt-1">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <FaQuoteLeft
                        className="text-amber-200 absolute -top-2 -left-1"
                        size={18}
                      />
                      <p className="text-gray-700 pl-6 pt-2 italic text-sm">
                        "{testimonial.comment}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center mt-6 gap-4">
            {/* NAVIGATION BUTTON */}
            <div className="flex items-center gap-6">
              <button
                onClick={prevSlide}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-amber-100 hover:bg-amber-200 transition"
              >
                <FaChevronLeft className="text-amber-700" size={14} />
              </button>

              <button
                onClick={nextSlide}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-amber-100 hover:bg-amber-200 transition"
              >
                <FaChevronRight className="text-amber-700" size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* MENU FAVORIT */}
        <div className="mt-12 mb-8 text-center">
          <h3 className="text-lg sm:text-xl font-bold text-amber-800 mb-6">
            6 Varian Rasa yang Ada di SoreCoffee
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Americano",
              "Spanish Latte",
              "Butterscotch",
              "Aren Latte",
              "Japanese Matcha",
              "Chocolate",
              // "Pink Panther",
            ].map((menu) => (
              <span
                key={menu}
                className="px-3 py-2 text-sm bg-amber-100 text-amber-800 rounded-full hover:bg-amber-200 transition"
              >
                {menu}
              </span>
            ))}
          </div>
        </div>

        {/* CTA INSTAGRAM */}
        <div className="text-center mt-12">
          <p className="text-gray-700 mb-4 text-sm sm:text-base">
            Bagikan pengalamanmu dengan tag
            <span className="font-bold text-amber-700 ml-1">
              #SoreCoffeeExperience
            </span>
          </p>

          <a
            href="https://instagram.com/sorecoffee"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-linear-to-r from-amber-600 to-orange-500 text-white text-sm sm:text-base font-medium py-3 px-6 rounded-full hover:shadow-lg hover:scale-105 transition duration-300"
          >
            <FaInstagram className="mr-2" />
            Follow kami di Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
