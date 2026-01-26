import React, { useState } from 'react';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight, FaInstagram } from 'react-icons/fa';

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Data testimoni
  const testimonials = [
    {
      id: 1,
      name: 'Rina Wijaya',
      role: 'Mahasiswa',
      comment: 'Kopinya authentic banget! Suka banget sama Americano-nya, ga perlu antri lama dan harganya worth it. Jadi langganan setiap pulang kampus.',
      rating: 5,
      date: '2 hari lalu',
      instagram: '@rinawjy',
      photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 2,
      name: 'Budi Santoso',
      role: 'Karyawan Kantoran',
      comment: 'Tempat nongkrong favorit setelah kerja. Latte-nya creamy dan ga bikin eneg. Konsep gerobaknya unik dan instagrammable!',
      rating: 4,
      date: '1 minggu lalu',
      instagram: '@budisant',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 3,
      name: 'Sari Dewi',
      role: 'Content Creator',
      comment: 'Selalu hunting foto di sini! Kopinya enak, tempatnya aesthetic, cocok buat konten. Pelayannya ramah dan cepat. Recommended!',
      rating: 5,
      date: '3 hari lalu',
      instagram: '@saridewicreator',
      photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 4,
      name: 'Agus Prabowo',
      role: 'Wirausaha',
      comment: 'Sebagai penikmat kopi, saya appreciate banget dengan kualitas biji kopi Sore Coffee. Roasting-nya pas, aroma khasnya terjaga.',
      rating: 5,
      date: '5 hari lalu',
      instagram: '@agusprab',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 5,
      name: 'Maya Fitriani',
      role: 'Freelancer',
      comment: 'Nongki sambil kerja remote dari sini, Wi-Fi kenceng dan suasana nyaman. Matcha Latte-nya juara! Sudah rekomendasiin ke teman-teman.',
      rating: 4,
      date: '1 minggu lalu',
      instagram: '@mayafitri',
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 6,
      name: 'Dimas Arya',
      role: 'Pelajar',
      comment: 'Tempatnya cozy buat nugas atau sekadar nongkrong. Kopi susu gula arennya legendaris! Harga student-friendly.',
      rating: 5,
      date: '4 hari lalu',
      instagram: '@dimasarya_',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    }
  ];

  // Render bintang
  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <FaStar
        key={index}
        className={`${index < rating ? 'text-yellow-400' : 'text-gray-300'} inline-block mr-1`}
        size={16}
      />
    ));
  };

  // Navigasi slider
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            Kata Mereka tentang Sore Coffee
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lihat pengalaman nyata dari pelanggan setia kami yang sudah menikmati kopi gerobakan trendi ini
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-700">500+</div>
            <div className="text-gray-600">Cangkir Per Hari</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-700">4.8</div>
            <div className="text-gray-600">Rating Rata-rata</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-700">2K+</div>
            <div className="text-gray-600">Ulasan di Instagram</div>
          </div>
        </div>

        {/* Desktop Grid View (3 kolom) */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0">
                  <img 
                    src={testimonial.photo} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <div className="flex items-center">
                    <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                    <div className="ml-2 flex items-center text-sm text-amber-600">
                      <FaInstagram size={12} className="mr-1" />
                      {testimonial.instagram}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <div className="flex items-center mt-1">
                    {renderStars(testimonial.rating)}
                    <span className="text-gray-500 text-sm ml-2">{testimonial.date}</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <FaQuoteLeft className="text-amber-200 absolute -top-2 -left-1" size={24} />
                <p className="text-gray-700 pl-6 pt-2 italic">
                  "{testimonial.comment}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Slider View */}
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
                      <div className="flex-shrink-0">
                        <img 
                          src={testimonial.photo} 
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="flex items-center flex-wrap">
                          <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                          <div className="ml-2 flex items-center text-sm text-amber-600">
                            <FaInstagram size={12} className="mr-1" />
                            {testimonial.instagram}
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                        <div className="flex items-center mt-1">
                          {renderStars(testimonial.rating)}
                          <span className="text-gray-500 text-sm ml-2">{testimonial.date}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <FaQuoteLeft className="text-amber-200 absolute -top-2 -left-1" size={24} />
                      <p className="text-gray-700 pl-6 pt-2 italic">
                        "{testimonial.comment}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
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

          {/* Slider Indicators */}
          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full mx-1 transition-colors ${
                  index === currentIndex ? 'bg-amber-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-700 mb-4">
            Bagikan pengalamanmu dengan tag 
            <span className="font-bold text-amber-700"> #SoreCoffeeExperience</span>
          </p>
          <a 
            href="https://instagram.com/sorecoffee" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-amber-600 to-orange-500 text-white font-medium py-3 px-6 rounded-full hover:shadow-lg transition-all duration-300"
          >
            <FaInstagram className="mr-2" />
            Lihat Semua Testimoni di Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;