import Sore from '../assets/photo/section.png'

export default function Hero() {
  

  return (
    <section className="min-h-screen flex items-center bg-amber-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div data-aos="fade-up">
            <h1 className="hero text-4xl md:text-5xl font-bold text-[#3E2723] leading-tight">
              kami datang <br />kamu yang menikmati
            </h1>

            <p className=" mt-4 text-lg text-[#5D4037]">
              kopi keliling dengan rasa nikmat dan harga bersahabat, siap
              menemani aktivitas kamu di berbagai sudut kota.
            </p>

            <div className="mt-6 flex gap-4">
              <button className="border border-[#3E2723] text-[#3E2723] px-6 py-3 rounded-lg hover:bg-[#3E2723] hover:text-white transition cursor-pointer  ">
                Lihat Menu
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
