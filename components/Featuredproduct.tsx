"use client";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";

const FeaturedProduct = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="bg-white min-h-screen px-4 py-8">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Featured Products
      </h1>

      {/* Grid Container for Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto max-w-5xl">
        {[1, 2, 3, 4].map((product, index) => (
          <div
            key={index}
            className="relative w-full max-w-xs mx-auto bg-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl overflow-hidden"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Product Image */}
            <div className="bg-gray-200 h-56 flex items-center justify-center">
              <Image
                src={`/featured/product${product}.png`}
                alt={`Product ${product}`}
                className="h-36 w-auto object-contain transition-transform duration-300"
                width={400}
                height={400}
              />
              {/* View Product Button */}
              {hovered === index && (
                <div className="absolute bottom-36 left-1/2 transform -translate-x-1/2">
                  <button className="px-2 py-1 bg-green-500 text-white rounded text-sm font-medium">
                    View Product
                  </button>
                </div>
              )}
            </div>

            {/* Hover Icons */}
            {hovered === index && (
              <div className="absolute top-3 left-3 flex gap-2">
                <span className="w-8 h-8 bg-gray-300 rounded-full flex justify-center items-center text-gray-700 cursor-pointer">
                  <AiOutlineHeart size={20} />
                </span>
                <span className="w-8 h-8 bg-gray-300 rounded-full flex justify-center items-center text-gray-700 cursor-pointer">
                  <AiOutlineShoppingCart size={20} />
                </span>
                <span className="w-8 h-8 bg-gray-300 rounded-full flex justify-center items-center text-gray-700 cursor-pointer">
                  <AiOutlineSearch size={20} />
                </span>
              </div>
            )}

            {/* Product Details */}
            <div
              className={`p-4 text-center transition-colors duration-300 ${
                hovered === index ? "bg-blue-600 text-white" : "bg-white"
              }`}
            >
              <h2
                className={`text-lg font-semibold ${
                  hovered === index ? "text-white" : "text-pink-500"
                }`}
              >
                Cantilever Chair
              </h2>
              <div className="flex justify-center gap-2 my-2">
                {/* Color Indicators */}
                <div className="w-4 h-1 rounded-sm bg-green-300"></div>
                <div className="w-4 h-1 rounded-sm bg-pink-500"></div>
                <div className="w-4 h-1 rounded-sm bg-blue-700"></div>
              </div>
              <p className={`${hovered === index ? "text-white" : "text-blue-950"}`}>Code - Y523201</p>
              <p className={`mt-1 ${hovered === index ? "text-white" : "text-blue-950"}`}>$42.00</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;






