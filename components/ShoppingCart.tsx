"use client"
import React, { useState } from "react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Ur diam consequat",
      color: "Brown",
      size: "XL",
      price: 32.0,
      quantity: 2,
    },
    {
      id: 2,
      name: "Vel faucibus posuere",
      color: "Brown",
      size: "XL",
      price: 32.0,
      quantity: 1,
    },
    {
      id: 3,
      name: "Ac vitae vestibulum",
      color: "Brown",
      size: "XL",
      price: 32.0,
      quantity: 3,
    },
  ]);

  const [shippingDetails, setShippingDetails] = useState({
    country: "",
    address: "",
    postalCode: "",
  });

  const handleQuantityChange = (id: number, value: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(value, 0) } : item
      )
    );
  };

  const calculateTotal = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const clearCart = () => setCartItems([]);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="col-span-2">
            <table className="w-full text-left bg-white shadow-md rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100 text-gray-600 uppercase text-sm">
                  <th className="p-4">Product</th>
                  <th className="p-4">Price</th>
                  <th className="p-4">Quantity</th>
                  <th className="p-4">Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="p-4">
                      <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm text-gray-500">
                          Color: {item.color}, Size: {item.size}
                        </p>
                      </div>
                    </td>
                    <td className="p-4">${item.price.toFixed(2)}</td>
                    <td className="p-4">
                      <input
                        type="number"
                        value={item.quantity}
                        min="0"
                        onChange={(e) =>
                          handleQuantityChange(item.id, parseInt(e.target.value))
                        }
                        className="w-16 border rounded-md p-2"
                      />
                    </td>
                    <td className="p-4">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex mt-4">
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-md mr-4"
                onClick={() => setCartItems([...cartItems])}
              >
                Update Cart
              </button>
              <button
                className="bg-red-600 text-white px-4 py-2 rounded-md"
                onClick={clearCart}
              >
                Clear Cart
              </button>
            </div>
          </div>

          {/* Cart Totals */}
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">Cart Totals</h2>
            <div className="mb-4 flex justify-between">
              <span className="text-gray-600">Subtotal:</span>
              <span>${calculateTotal().toFixed(2)}</span>
            </div>
            <button className="bg-green-600 text-white px-4 py-2 w-full rounded-md">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
