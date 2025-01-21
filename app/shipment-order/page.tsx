// "use client"
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { v4 as uuidv4 } from 'uuid';

// function HectoDemo() {
//     const [cartItems, setCartItems] = useState<any[]>([]);
//     const [subtotal, setSubtotal] = useState<number>(0);
//     const [total, setTotal] = useState<number>(0);
//     const [shippingMethod, setShippingMethod] = useState<string>("selfPickup");
//     const [orderDetails, setOrderDetails] = useState<any | null>(null);
//     const shippingRate = 150;

//     useEffect(() => {
//         const savedCartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
//         setCartItems(savedCartItems);
//         calculateTotals(savedCartItems);
//         handlePlaceOrder(savedCartItems);
//     }, []);

//     const calculateTotals = (items: any[]) => {
//         const subtotal = items.reduce((acc, item) => {
//             const price = item.discountprice || 0;
//             const quantity = item.quantity || 0;
//             return acc + price * quantity;
//         }, 0);
//         setSubtotal(subtotal);
//         setTotal(shippingMethod === "delivery" ? subtotal + shippingRate : subtotal);
//         return { subtotal, total: shippingMethod === "delivery" ? subtotal + shippingRate : subtotal };
//     };

//     const handlePlaceOrder = (items: any[]) => {
//         const { subtotal, total } = calculateTotals(items); // Directly use returned totals
//         const order = {
//             orderNumber: uuidv4(),
//             date: new Date().toLocaleDateString(),
//             subtotal: subtotal.toFixed(2),
//             shipping: shippingMethod === "delivery" ? shippingRate : 0,
//             total: total.toFixed(2),
//             billingAddress: JSON.parse(localStorage.getItem("billingAddress") || "{}"),
//             items: items
//         };
//         setOrderDetails(order);
//         localStorage.setItem("orderDetails", JSON.stringify(order));
//     };

//     return (
//         <>
//             <div className="bg-gray-100 py-20">
//                 <div className="pl-5 sm:pl-5 md:pl-5 lg:pl-28">
//                     <h1 className="text-2xl sm:text-3xl font-semibold text-blue-950">Hekto Demo</h1>
//                 </div>
//             </div>

//             <div className="bg-white font-sans min-h-screen text-black pb-32 flex justify-end">
//                 <div className="max-w-4xl p-6 bg-white rounded shadow-lg">
//                     <h1 className="text-2xl font-bold text-blue-950 mb-2">Order Summary</h1>
//                     {orderDetails && (
//                         <div className="bg-white p-6 rounded">
//                             <h2 className="text-lg font-semibold text-blue-950">Order #{orderDetails.orderNumber}</h2>
//                             <p className="text-sm text-gray-500">Placed on: {orderDetails.date}</p>
//                             <div className="mt-4">
//                                 <h3 className="text-md font-medium">Order Details</h3>
//                                 {orderDetails.items.map((item: any) => (
//                                     <div key={item.id} className="flex justify-between items-center border-b py-2">
//                                         <div className="flex items-center space-x-4">
//                                             <Image src={item.image} alt={item.name} width={64} height={64} />
//                                             <p>{item.name} x {item.quantity}</p>
//                                         </div>
//                                         <p>${(item.discountprice * item.quantity).toFixed(2)}</p>
//                                     </div>
//                                 ))}
//                             </div>
//                             <div className="mt-4">
//                                 <p>Subtotal: ${orderDetails.subtotal}</p>
//                                 <p>Shipping: ${orderDetails.shipping}</p>
//                                 <p className="text-lg font-bold">Total: ${orderDetails.total}</p>
//                             </div>
//                             <div className="mt-4">
//                                 <h3 className="text-md font-medium">Billing Address</h3>
//                                 <p>{orderDetails.billingAddress.firstName} {orderDetails.billingAddress.lastName}</p>
//                                 <p>{orderDetails.billingAddress.address}</p>
//                                 <p>{orderDetails.billingAddress.city}, {orderDetails.billingAddress.postalCode}</p>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </>
//     );
// }

// export default HectoDemo;

// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";

// function ShipmentOrderPage() {
//   const [order, setOrder] = useState<any>(null);

//   useEffect(() => {
//     const savedOrder = JSON.parse(localStorage.getItem("orderData") || "{}");
//     if (Object.keys(savedOrder).length > 0) {
//       setOrder(savedOrder);
//     }
//   }, []);

//   if (!order) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-white">
//         <p className="text-lg font-semibold text-gray-700">
//           No order found. Please place an order first.
//         </p>
//       </div>
//     );
//   }

//   return (
//     <>
//     <div className="bg-gray-100 py-20">
//     <div className="pl-5 sm:pl-5 md:pl-5 lg:pl-28">
//       <h1 className="text-2xl sm:text-3xl font-semibold text-blue-950">
//         Hekto Demo
//       </h1>
//     </div>
//   </div>
//   <div className="bg-white font-sans min-h-screen pb-32">
//     <div className="max-w-6xl mx-auto p-6">
//       <h1 className="text-2xl font-bold text-blue-950 mb-2">Hecto Demo</h1>
//       <p className="text-blue-950 mb-7">Cart/Information/Shipping/Payment</p>
//     <div className="bg-white min-h-screen py-10 px-5 sm:px-10">
//       <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
//         {/* Left Section */}
//         <div className="w-full lg:w-1/2  p-6 ">
//           <p className="mb-4 text-gray-700">
//             Please reach us with the order ID and Payment screenshot at{" "}
//             <span className="font-semibold">+92 331 8999222</span>
//           </p>
//           <h2 className="text-lg font-bold text-blue-950 mb-2">Our Bank Details</h2>
//           <p className="text-gray-700 mb-4">
//             <strong>Apna Furniture:</strong>
//             <br />
//             Bank: Meezan Bank Limited
//             <br />
//             Account Number: 0212 0105754477
//             <br />
//             IBAN: PK80 MEZN 0002 1201 0575 4477
//           </p>

//           <h2 className="text-lg font-bold text-blue-950 mb-4">Billing Details</h2>
//           <p className="text-gray-700">
//             <strong>Name:</strong> {order.billingDetails.firstName}{" "}
//             {order.billingDetails.lastName}
//           </p>
//           <p className="text-gray-700">
//             <strong>Address:</strong> {order.billingDetails.address},{" "}
//             {order.billingDetails.city}
//           </p>
//           <p className="text-gray-700">
//             <strong>Phone:</strong> {order.billingDetails.phone}
//           </p>
//           <p className="text-gray-700">
//             <strong>Email:</strong> {order.billingDetails.email}
//           </p>

//           <h2 className="text-lg font-bold text-blue-950 mt-6">Payment Method</h2>
//           <p className="text-gray-700">
//             {order.paymentMethod === "bankTransfer"
//               ? "Bank Transfer"
//               : "Cash on Delivery"}
//           </p>
//         </div>

//         {/* Right Section */}
//         <div className="w-full lg:w-1/3">
//           <div className="p-6 rounded-md ">
//             <h2 className="text-xl font-bold text-blue-950 mb-4">Products</h2>
//             <div>
//               {order.cartItems.map((item: any) => (
//                 <div key={item.id} className="flex items-center justify-between mb-4">
//                   <div className="flex items-center space-x-4">
//                     <Image
//                       src={item.image}
//                       alt={item.name}
//                       width={64}
//                       height={64}
//                       className="rounded-md object-cover"
//                     />
//                     <p className="text-sm font-medium text-gray-800">
//                       {item.name} <span className="text-gray-500">x {item.quantity}</span>
//                     </p>
//                   </div>
//                   <p className="text-sm font-semibold text-gray-800">
//                     ${parseFloat(
//                       (item.discountprice * item.quantity).toFixed(2)
//                     ).toLocaleString("en-US", {
//                       minimumFractionDigits: 2,
//                       maximumFractionDigits: 2,
//                     })}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="bg-gray-100 p-6 ">
//             <h2 className="text-xl font-bold text-blue-950 mb-4">Order Summary</h2>
//             <div className="flex justify-between items-center mb-2">
//               <p className="text-sm font-semibold text-gray-700">Subtotal:</p>
//               <p className="text-sm font-semibold text-gray-700">
//                 ${order.subtotal.toFixed(2)}
//               </p>
//             </div>
//             <div className="flex justify-between items-center mb-2">
//               <p className="text-sm font-semibold text-gray-700">Shipment:</p>
//               <p className="text-sm font-semibold text-gray-700">
//                 {order.shippingMethod === "delivery" ? "Delivery" : "Self Pickup"}
//               </p>
//             </div>
//             <div className="flex justify-between items-center">
//               <p className="text-lg font-bold text-gray-800">Total:</p>
//               <p className="text-lg font-bold text-gray-800">
//                 ${order.total.toFixed(2)}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//     </div>
//     </>
//   );
// }

// export default ShipmentOrderPage;

"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link"
import { useRouter } from "next/navigation";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

function ShipmentOrderPage() {
  const [order, setOrder] = useState<any>(null);
  const [orderNumber, setOrderNumber] = useState<string | null>(null);
  const [orderDate, setOrderDate] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const savedOrder = JSON.parse(localStorage.getItem("orderData") || "{}");

    // Generate a unique order number on every page render
    const newOrderNumber = uuidv4(); // Using uuid to generate a unique order number
    setOrderNumber(newOrderNumber);

    // Get today's date on every page render
    const currentDate = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setOrderDate(currentDate);

    if (Object.keys(savedOrder).length > 0) {
      setOrder(savedOrder);
    }
  }, []);

  const handleConfirmOrder = () => {
    // Logic for order confirmation can be added here
    router.push("/order-completed");
  };

  if (!order) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <p className="text-lg font-semibold text-gray-700">
          No order found. Please place an order first.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="bg-gray-100 py-10">
        <div className="pl-5 sm:pl-5 md:pl-5 lg:pl-28">
          <h1 className="text-2xl sm:text-3xl font-semibold text-blue-950">
            Shipment
          </h1>
            <Link href="/"><span className="mx-1 text-black">Home</span></Link>
            <span className="mx-1 text-black">.</span>
            <Link href="/product"><span className="mx-1 text-black">Products List</span></Link>
            <span className="mx-1 text-black">.</span>
            <Link href="/cart"><span className="mx-1 text-black">Cart</span></Link>
            <span className="mx-1 text-black">.</span>
            <Link href="/shipment-detail"><span className="text-black">Billing Information</span></Link>
            <span className="mx-1 text-black">.</span>
            <Link href="/payment"><span className="text-black">Payment Gatway</span></Link>
            <span className="mx-1 text-pink-500">.</span>
            <Link href="/shipment-order"><span className="text-pink-500">Shipment</span></Link>
        </div>
      </div>
      <div className="bg-white font-sans min-h-screen pb-32">
        <div className="max-w-6xl mx-auto p-6">
          <h1 className="text-2xl font-bold text-blue-950 mb-2">Shipment</h1>
          <p className="text-blue-950 mb-7">Cart/Information/payment/Shipping</p>

          {/* Main Layout */}
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Section */}
            <div className="w-full lg:w-2/3 bg-white shadow-md rounded-lg p-8">
              <h2 className="text-xl font-bold text-blue-950 mb-4">Order Details</h2>
              <div className="overflow-auto border border-gray-200 rounded-md mb-6 text-blue-950">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-3 px-4 text-sm font-semibold text-gray-600">Product</th>
                      <th className="py-3 px-4 text-sm font-semibold text-gray-600 text-right">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.cartItems.map((item: any) => (
                      <tr key={item.id} className="border-b">
                        <td className="py-3 px-4 flex items-center">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={50}
                            height={50}
                            className="rounded-md object-cover mr-4"
                          />
                          <span>
                            {item.name} <span className="text-gray-500">x {item.quantity}</span>
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          ${(item.discountprice * item.quantity).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td className="py-3 px-4 font-semibold">Subtotal</td>
                      <td className="py-3 px-4 text-right font-semibold">
                        ${order.subtotal.toLocaleString()}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Shipping Method</td>
                      <td className="py-3 px-4 text-right">
                        {order.shippingMethod === "delivery" ? "Delivery" : "Self Pickup"}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Payment Method</td>
                      <td className="py-3 px-4 text-right">
                        {order.paymentMethod === "bankTransfer"
                          ? "Direct Bank Transfer"
                          : "Cash on Delivery"}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-blue-950">Total</td>
                      <td className="py-3 px-4 text-right font-bold text-blue-950">
                        ${order.total.toLocaleString()}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h2 className="text-xl font-bold text-blue-950 mb-4">Billing Address</h2>
              <p className="text-gray-700">
                <strong>Name:</strong> {order.billingDetails.firstName}{" "}
                {order.billingDetails.lastName}
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> {order.billingDetails.address},{" "}
                {order.billingDetails.city}
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> {order.billingDetails.phone}
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong> {order.billingDetails.email}
              </p>
            </div>

            {/* Right Section */}
            <div className="w-full lg:w-1/3 bg-gray-50 p-6 rounded-md border border-gray-200 h-auto">
              <p className="text-pink-600 font-semibold mb-4">
                Thank you. Your order has been received.
              </p>
              <ul className="list-none text-gray-700 space-y-2">
                <li>
                  <strong>Order Number:</strong> {orderNumber}
                </li>
                <li>
                  <strong>Date:</strong> {orderDate}
                </li>
                <li>
                  <strong>Total:</strong> ${order.total.toLocaleString()}
                </li>
                <li>
                  <strong>Shipping Method:</strong>{" "}
                  {order.shippingMethod === "delivery" ? "Delivery" : "Self Pickup"}
                </li>
                <li>
                  <strong>Payment Method:</strong>{" "}
                  {order.paymentMethod === "bankTransfer"
                    ? "Direct Bank Transfer"
                    : "Cash on Delivery"}
                </li>
              </ul>
              <div className="mt-6 text-center">
                <button
                  onClick={() => router.push("/order-completed")}
                  className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600"
                >
                  Confirm Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShipmentOrderPage;
