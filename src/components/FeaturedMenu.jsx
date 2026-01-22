export default function FeaturedMenu (){
    const menus = [
      { name: "Kopi Susu Gula Aren", price: "Rp 12.000" },
      { name: "Americano", price: "Rp 10.000" },
      { name: "Cappuccino", price: "Rp 13.000" },
      { name: "Es Coklat", price: "Rp 12.000" },
    ];

    return (
        <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#3E2723]">
          Menu Favorit
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
          {menus.map((menu, index) => (
            <div
              key={index}
              className="border rounded-xl p-6 text-center hover:shadow-lg transition"
            >
              <div className="h-32 bg-[#F5F1EE] rounded-lg mb-4 flex items-center justify-center">
                ☕
              </div>
              <h3 className="font-semibold text-[#3E2723]">
                {menu.name}
              </h3>
              <p className="text-[#5D4037] mt-2">
                {menu.price}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-500 transition">
            Lihat Menu Lengkap
          </button>
        </div>
      </div>
    </section>
    )
}
