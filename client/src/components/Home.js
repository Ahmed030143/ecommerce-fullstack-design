import React from "react";

const Home = () => {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section className="bg-gray-100 py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">Discover the Latest Trends</h1>
        <p className="text-lg mb-6">
          Shop the newest arrivals and enjoy exclusive deals on all products.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Shop Now
        </button>
      </section>

      {/* Product Grid Section */}
      <section className="py-10 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-4"
          >
            <img
              src={`https://via.placeholder.com/300x200?text=Product+${i + 1}`}
              alt={`Product ${i + 1}`}
              className="rounded-md mb-3 w-full"
            />
            <h3 className="font-semibold text-lg mb-1">Product {i + 1}</h3>
            <p className="text-gray-500 mb-2">$19.99</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
