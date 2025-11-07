import React from "react";

const ProductDetails = () => {
  return (
    <div className="p-10 max-w-4xl mx-auto bg-white rounded-xl shadow">
      <img
        src="https://via.placeholder.com/600x400?text=Product+Image"
        alt="Product"
        className="rounded-md mb-6 w-full"
      />
      <h2 className="text-3xl font-bold mb-3">Product Title</h2>
      <p className="text-gray-600 mb-4">
        This is a detailed description of the product. It includes specifications,
        features, and other details that help customers make a decision.
      </p>
      <p className="text-2xl font-semibold mb-4">$49.99</p>
      <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
