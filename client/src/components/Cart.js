import React from "react";

const Cart = () => {
  const cartItems = [
    { id: 1, name: "Product 1", price: 19.99 },
    { id: 2, name: "Product 2", price: 29.99 },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-10 max-w-3xl mx-auto bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between items-center mb-4 border-b pb-2">
          <p>{item.name}</p>
          <p className="text-gray-600">${item.price.toFixed(2)}</p>
        </div>
      ))}

      <div className="mt-6 text-right">
        <p className="text-xl font-semibold">Total: ${total.toFixed(2)}</p>
        <button className="bg-green-600 text-white px-6 py-2 rounded mt-4 hover:bg-green-700">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
