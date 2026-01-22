// import Logo from '../assets/photo/Logo_sore.png'
export default function Footer() {
  return (
    <footer className="bg-[#DC7331] text-white mt-16 items-center justify-around">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className='flex flex-col'>
          <h3 className="text-2xl font-bold text-white mb-3">Kopi Sore</h3>
          <p className="text-sm leading-relaxed">
            Menyajikan kopi pilihan dengan cita rasa terbaik untuk menemani
            waktu santai dan produktifmu.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Menu</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#DC7331] cursor-pointer">
              Coffee Based
            </li>
            <li className="hover:text-[#DC7331] cursor-pointer">Non Coffee</li>
            <li className="hover:text-[#DC7331] cursor-pointer">Best Seller</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Kontak</h4>
          <ul className="space-y-2 text-sm">
            <li>📍 Jl. Sore Hari No. 10</li>
            <li>📞 0812-3456-7890</li>
            <li>✉️ kopisore@email.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white py-4 text-center text-sm">
        © {new Date().getFullYear()} Kopi Sore. All rights reserved.
      </div>
    </footer>
  );
}
