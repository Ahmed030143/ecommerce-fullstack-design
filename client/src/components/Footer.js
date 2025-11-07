import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h2 className="text-lg font-semibold mb-2">ShopEase</h2>
          <p className="text-gray-400 text-sm">
            Your one-stop shop for all your fashion needs. Fast delivery and great quality.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
          <ul className="text-gray-400 text-sm space-y-1">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
          <p className="text-gray-400 text-sm">Instagram | Facebook | Twitter</p>
        </div>
      </div>
      <div className="text-center text-gray-500 py-4 border-t border-gray-700 text-sm">
        © {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
