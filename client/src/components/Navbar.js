import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-gray-800">ShopEase</h1>

        <ul className="hidden md:flex space-x-6 text-gray-600 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">Shop</li>
          <li className="hover:text-blue-600 cursor-pointer">About</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>

        <div className="flex items-center space-x-4">
          <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Login
          </button>
          <span className="material-icons text-gray-700 cursor-pointer">
            shopping_cart
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
