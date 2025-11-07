import React from "react";

const ProductList = () => {
  return (
    <div className="py-10 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
          <img
            src={`https://via.placeholder.com/300x200?text=Product+${i + 1}`}
            alt={`Product ${i + 1}`}
            className="rounded-md mb-3 w-full"
          />
          <h3 className="font-semibold text-lg mb-1">Product {i + 1}</h3>
          <p className="text-gray-500 mb-2">$24.99</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            View Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
