"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProductShowcase() {
  const router = useRouter();

  const handleAddToCart = () => {
    // Example product data
    const product = {
      id: "1", // Unique ID for the product
      name: "Italian Sofa",
      price: 1299.99,
      discountprice: 1299.99, // Add this if you have a discounted price
      image: "/Hero2/sofa2.png",
      quantity: 1, // Default quantity
    };

    // Get the existing cart data
    const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");

    // Check if the product is already in the cart
    const existingProductIndex = cartItems.findIndex((item: any) => item.id === product.id);

    if (existingProductIndex !== -1) {
      // If the product exists, increment its quantity
      cartItems[existingProductIndex].quantity += 1;
    } else {
      // Otherwise, add the new product to the cart
      cartItems.push(product);
    }

    // Save the updated cart data to localStorage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    // Navigate to the cart page
    router.push("/cart");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-200 pt-0 px-10">
      <div className="flex flex-col lg:flex-row items-center lg:items-start w-full max-w-6xl px-6 lg:px-12">
        <div className="relative flex-1 flex justify-center lg:justify-end items-center">
          <Image
            src="/Hero2/sofa2.png"
            alt="Italian Sofa"
            width={400}
            height={400}
            className="z-10"
          />
        </div>

        <div className="flex-1 flex flex-col justify-center items-start lg:pl-16 mt-10 lg:mt-0 pb-10 sm:pb-7">
          <h1 className="text-4xl font-bold text-blue-950 mb-6">
            Unique Features Of Latest & Trending Products
          </h1>

          <div className="flex flex-col space-y-4 mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 rounded-full bg-pink-400"></div>
              <p className="text-gray-400">
                All frames constructed with hardwood solids and laminates
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              <p className="text-gray-400">
                Reinforced with double wood dowels, glue, screws, and nails
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 rounded-full bg-green-300"></div>
              <p className="text-gray-400">Arms, backs, and seats are structurally reinforced</p>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={handleAddToCart}
              className="bg-pink-500 text-white px-6 py-3 shadow-lg hover:bg-pink-600 transition"
            >
              Add to Cart
            </button>
            <div>
              <p className="text-xl font-medium text-gray-800">Italian Sofa</p>
              <p className="text-lg text-gray-600">$1299.99</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
