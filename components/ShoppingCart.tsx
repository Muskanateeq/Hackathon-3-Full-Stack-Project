// "use client";
// import React, { useState } from "react";

// type CartItem = {
//   id: number;
//   name: string;
//   color: string;
//   size: string;
//   price: number;
//   quantity: number;
//   image: string;
// };

// type ShippingDetails = {
//   country: string;
//   city: string;
//   postalCode: string;
// };

// const CartPage = () => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([
//     {
//       id: 1,
//       name: "Ur diam consequat",
//       color: "Brown",
//       size: "XL",
//       price: 32.0,
//       quantity: 2,
//       image: "Shopping cart/cart1.png",
//     },
//     {
//       id: 2,
//       name: "Vel faucibus posuere",
//       color: "Brown",
//       size: "XL",
//       price: 32.0,
//       quantity: 1,
//       image: "Shopping cart/cart2.png",
//     },
//     {
//       id: 3,
//       name: "Ac vitae vestibulum",
//       color: "Brown",
//       size: "XL",
//       price: 32.0,
//       quantity: 3,
//       image: "Shopping cart/cart3.png",
//     },
//     {
//       id: 4,
//       name: "Lorem ipsum dolor",
//       color: "Black",
//       size: "L",
//       price: 45.0,
//       quantity: 1,
//       image: "Shopping cart/cart4.png",
//     },
//     {
//       id: 5,
//       name: "Sit amet consectetur",
//       color: "White",
//       size: "M",
//       price: 25.0,
//       quantity: 2,
//       image: "Shopping cart/cart5.png",
//     },
//   ]);

//   const [shippingDetails, setShippingDetails] = useState<ShippingDetails>({
//     country: "",
//     city: "",
//     postalCode: "",
//   });

//   const handleQuantityChange = (id: number, value: number) => {
//     setCartItems((prev) =>
//       prev.map((item) =>
//         item.id === id ? { ...item, quantity: Math.max(value, 0) } : item
//       )
//     );
//   };

//   const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setShippingDetails((prev) => ({ ...prev, [name]: value }));
//   };

//   const calculateTotal = () =>
//     cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   const clearCart = () => setCartItems([]);

//   return (
//     <>
//       <div className="bg-gray-100 py-8">
//         <div className="pl-4 sm:pl-10 md:pl-32">
//           <h1 className="text-[clamp(1.5rem,4vw,2rem)] font-semibold text-blue-950">
//             Shopping Cart
//           </h1>
//           <p className="mt-2 text-[clamp(0.75rem,2vw,1rem)] text-black">
//             Home
//             <span className="mx-1 text-black">.</span>Pages
//             <span className="mx-1 text-pink-500">.</span>
//             <span className="text-pink-500">Shopping Cart</span>
//           </p>
//         </div>
//       </div>

//       <div className="min-h-screen bg-white py-10 px-4 sm:px-6 md:px-10 text-black">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-center">
//           <div className="grid grid-cols-1 gap-6 w-full md:w-2/3 lg:grid-cols-3">
//             {/* Cart Items */}
//             <div className="col-span-2">
//               <table className="w-full text-left rounded-lg overflow-hidden">
//                 <thead>
//                   <tr className="text-gray-600 uppercase text-[clamp(0.75rem,1.5vw,0.875rem)]">
//                     <th className="p-4">Product</th>
//                     <th className="p-4">Price</th>
//                     <th className="p-4">Quantity</th>
//                     <th className="p-4">Total</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {cartItems.map((item) => (
//                     <tr key={item.id} className="border-b">
//                       <td className="p-4 flex items-center">
//                         <img
//                           src={item.image}
//                           alt={item.name}
//                           className="w-12 h-12 sm:w-16 sm:h-16 object-cover mr-4"
//                         />
//                         <div>
//                           <h3 className="font-semibold text-[clamp(0.75rem,1.5vw,0.875rem)]">
//                             {item.name}
//                           </h3>
//                           <p className="text-[clamp(0.75rem,1.5vw,0.875rem)] text-gray-500">
//                             Color: {item.color}, Size: {item.size}
//                           </p>
//                         </div>
//                       </td>
//                       <td className="p-4 text-[clamp(0.75rem,1.5vw,0.875rem)]">
//                         ${item.price.toFixed(2)}
//                       </td>
//                       <td className="p-4">
//                         <input
//                           type="number"
//                           value={item.quantity}
//                           min="0"
//                           onChange={(e) =>
//                             handleQuantityChange(item.id, parseInt(e.target.value))
//                           }
//                           className="w-12 sm:w-16 border rounded-md p-1 sm:p-2 text-[clamp(0.75rem,1.5vw,0.875rem)]"
//                         />
//                       </td>
//                       <td className="p-4 text-[clamp(0.75rem,1.5vw,0.875rem)]">
//                         ${(item.price * item.quantity).toFixed(2)}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               <div className="flex flex-wrap mt-4 gap-2 sm:gap-4">
//                 <button
//                   className="bg-pink-500 text-white px-2 sm:px-4 py-1 sm:py-2 text-[clamp(0.75rem,1.5vw,0.875rem)]"
//                   onClick={() => setCartItems([...cartItems])}
//                 >
//                   Update Cart
//                 </button>
//                 <button
//                   className="bg-pink-500 text-white px-2 sm:px-4 py-1 sm:py-2 text-[clamp(0.75rem,1.5vw,0.875rem)]"
//                   onClick={clearCart}
//                 >
//                   Clear Cart
//                 </button>
//               </div>
//             </div>

//             {/* Cart Totals */}
//             <div className="bg-white p-4 sm:p-6 ">
//               <h2 className="text-[clamp(1rem,2vw,1.25rem)] font-bold mb-2 sm:mb-4">
//                 Cart Totals
//               </h2>
//               <div className="mb-2 sm:mb-4 flex justify-between text-[clamp(0.75rem,1.5vw,0.875rem)]">
//                 <span className="text-gray-600">Subtotal:</span>
//                 <span>${calculateTotal().toFixed(2)}</span>
//               </div>
//               <div className="mb-2 sm:mb-4 flex justify-between text-[clamp(0.75rem,1.5vw,0.875rem)]">
//                 <span className="text-gray-600">Total:</span>
//                 <span>${calculateTotal().toFixed(2)}</span>
//               </div>
//               <button className="bg-green-600 text-white px-2 sm:px-4 py-1 sm:py-2 w-full text-[clamp(0.75rem,1.5vw,0.875rem)]">
//                 Proceed to Checkout
//               </button>
//               {/* Shipping Calculator */}
//               <div className="mt-4 sm:mt-6 border-t pt-2 sm:pt-4">
//                 <h3 className="text-[clamp(0.875rem,2vw,1rem)] font-bold mb-1 sm:mb-2">
//                   Calculate Shipping
//                 </h3>
//                 <div className="space-y-2 sm:space-y-4">
//                   <input
//                     type="text"
//                     name="country"
//                     value={shippingDetails.country}
//                     onChange={handleShippingChange}
//                     placeholder="Country"
//                     className="w-full border rounded-md p-1 sm:p-2 text-[clamp(0.75rem,1.5vw,0.875rem)]"
//                   />
//                   <input
//                     type="text"
//                     name="city"
//                     value={shippingDetails.city}
//                     onChange={handleShippingChange}
//                     placeholder="City"
//                     className="w-full border rounded-md p-1 sm:p-2 text-[clamp(0.75rem,1.5vw,0.875rem)]"
//                   />
//                   <input
//                     type="text"
//                     name="postalCode"
//                     value={shippingDetails.postalCode}
//                     onChange={handleShippingChange}
//                     placeholder="Postal Code"
//                     className="w-full border rounded-md p-1 sm:p-2 text-[clamp(0.75rem,1.5vw,0.875rem)]"
//                   />
//                   <button className="bg-pink-500 text-white px-2 sm:px-4 py-1 sm:py-2  w-full text-[clamp(0.75rem,1.5vw,0.875rem)]">
//                     Calculate Shipping
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CartPage;
