import { locations } from "../utils/location";
import { IoLocationSharp } from "react-icons/io5";

export default function Location() {
  return (
    <>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Lokasi Sore Coffee          
            </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location) => (
              <div
                key={location.id}
                className={`p-6 rounded-lg shadow-md ${
                  location.status === "Baru"
                    ? "bg-green-100 border-green-300"
                    : "bg-white border-gray-200"
                } border`}
              >
                <div className="flex items-center mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {location.name}
                  </h3>
                </div>
                <div className="flex gap-2">
                  <IoLocationSharp className="mt-1"/>
                  <p className="text-gray-600 mb-4">{location.address}</p>
                </div>
                {/* <span
                className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
                  location.status === 'Baru' ? 'bg-green-200 text-green-800' : 'bg-blue-200 text-blue-800'
                }`}
              >
                {location.status}
              </span> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
