export default function About() {
  const features = [
    { icon: "☕", title: "Kopi Berkualitas" },
    { icon: "🚚", title: "Datang ke Lokasimu" },
    { icon: "💰", title: "Harga Bersahabat" },
    { icon: "⭐", title: "Rasa Konsisten" },
  ];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-[#3E2723]">
          Tentang Sore Coffee
        </h2>

        <p className="mt-4 text-lg text-[#5D4037]">
          Sore Coffee adalah kopi keliling lokal yang hadir langsung ke
          tempatmu. Kami menyajikan kopi dengan rasa nikmat, harga bersahabat,
          dan proses penyeduhan yang konsisten.
        </p>
      </div>

      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#3E2723]">
            Kenapa Memilih Kami
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10 text-center">
            {features.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow">
                <div className="text-4xl">{item.icon}</div>
                <h3 className="mt-3 font-semibold text-[#3E2723]">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
