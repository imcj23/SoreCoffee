export default function Location () {
    return(
    <section className="py-20 bg-[#3E2723] text-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold">
          Lokasi Hari Ini
        </h2>

        <p className="mt-4 text-lg">
          Kami hadir di berbagai titik Tanjungpinang dan Bintan.
        </p>

        <div className="mt-6">
          <p className="text-xl font-semibold">
            📍 Taman Gurindam
          </p>
          <p className="mt-2">
            🕒 Mulai 16.00 – Habis
          </p>
        </div>

        <button className="mt-8 bg-amber-600 px-6 py-3 rounded-lg hover:bg-amber-500 transition">
          Pesan via WhatsApp
        </button>
      </div>
    </section>

    )
}