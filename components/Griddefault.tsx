"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { FiGrid } from "react-icons/fi";

const page = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <div className="bg-gray-50 text-gray-800">
        {/* Header Section */}
        <div className="bg-gray-100 py-8">
          <div className="pl-10 md:pl-32 sm:pl-10 lg:pl-32">
            <h1 className="text-3xl font-semibold text-blue-950">Shop Grid Default</h1>
            <p className="mt-2">
              Home<span className="mx-1 text-black">.</span>Pages
              <span className="mx-1 text-pink-500">.</span>
              <span className="text-pink-500">Shop Grid Default</span>
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Sidebar */}
        <aside className="lg:col-span-1">
          <h2 className="text-xl font-bold text-blue-950 mb-4">E-commerce Accessories & Fashion Item</h2>
          <p className="text-sm text-gray-600 mb-8">About 9,890 results (0.62 seconds)</p>
        </aside>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Top Filters */}
          <div className="flex flex-wrap justify-end items-center mb-8 gap-4">
            <div className="flex items-center space-x-4">
              <label htmlFor="per-page" className="hidden sm:inline-block text-gray-700">
                Per Page:
              </label>
              <input
                type="number"
                id="per-page"
                className="border rounded px-2 py-1 w-16 focus:ring-pink-500 focus:border-pink-500"
                placeholder="7"
              />
            </div>

            <div className="flex items-center space-x-4">
              <label htmlFor="sort-by" className="hidden sm:inline-block text-gray-700">
                Sort By:
              </label>
              <input
                type="text"
                id="sort-by"
                className="border rounded px-2 py-1 w-32 focus:ring-pink-500 focus:border-pink-500"
                placeholder="Popularity"
              />
            </div>

            <div className="flex items-center space-x-4">
              <span className="hidden sm:inline-block text-gray-700">View:</span>
              <FiGrid className="w-6 h-6 text-gray-600 cursor-pointer" />
              <input
                type="text"
                placeholder="Grid/List"
                className="border rounded px-2 py-1 w-24 focus:ring-pink-500 focus:border-pink-500"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white px-4 py-8">
        {/* Grid Container for Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mx-auto max-w-5xl">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((product, index) => (
            <div
              key={index}
              className="relative w-full max-w-xs mx-auto bg-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl overflow-hidden"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Product Image */}
              <div className="bg-gray-200 h-56 flex items-center justify-center relative">
                <Image
                  src={`/griddefault/product${product}.png`}
                  alt={`Product ${product}`}
                  className="h-36 w-auto object-contain transition-transform duration-300"
                  width={400}
                  height={400}
                />
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
              <div className={`p-4 text-center`}>
                <h2 className={`text-lg text-blue-950`}>Product</h2>
                <div className="flex justify-center gap-2 my-2">
                  <div className="w-2 h-2 rounded-full bg-green-300"></div>
                  <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                  <div className="w-2 h-2 rounded-full bg-blue-700"></div>
                </div>
                <div className="flex gap-2 items-center">
                  <p className="text-lg text-blue-950">$42.00</p>
                  <p className="text-pink-500 line-through">$60.00</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
