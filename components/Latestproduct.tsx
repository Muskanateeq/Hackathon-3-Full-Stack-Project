"use client";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";

const FeaturedProduct = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="bg-white px-4 py-8">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Latest Products
      </h1>

      {/* Grid Container for Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mx-auto max-w-5xl">
        {[1, 2, 3, 4, 5, 6].map((product, index) => (
          <div
            key={index}
            className="relative w-full max-w-xs mx-auto bg-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl overflow-hidden"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Product Image */}
            <div className="bg-gray-200 h-56 flex items-center justify-center relative">
              <Image
                src={`/latest/product${product}.png`}
                alt={`Product ${product}`}
                className="h-36 w-auto object-contain transition-transform duration-300"
                width={400}
                height={400}
              />
              {/* Sale Badge */}
              {hovered === index && (
                <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
                  Sale
                </div>
              )}
            </div>

            {/* Hover Icons */}
            {hovered === index && (
              <div className="absolute left-3 top-16 flex flex-col gap-3">
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
              className={`p-4 flex justify-between items-center transition-colors duration-300`}
            >
              <h2 className={`text-lg text-blue-950`}>Cantilever Chair</h2>
              {/* Price Section */}
              <div className="flex gap-2 items-center">
                {/* Discount Price */}
                <p className="text-lg text-blue-950">$42.00</p>
                {/* Actual Price */}
                <p className="text-pink-500 line-through">$60.00</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;


