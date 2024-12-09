"use client";

import React from "react";
import Image from "next/image";
import { FiGrid, FiHeart, FiSearch, FiZoomIn } from "react-icons/fi";
import Logo from "@/components/Logo";

const ShopPage = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      title: "Wireless Headphones",
      image: "/shop/shop1.png",
      discountPrice: "$50",
      actualPrice: "$70",
      description: "High-quality wireless headphones with noise cancellation.",
    },
    {
      id: 2,
      title: "Smart Watch",
      image: "/shop/shop2.png",
      discountPrice: "$120",
      actualPrice: "$200",
      description: "Track your fitness and stay connected on the go.",
    },
    {
      id: 3,
      title: "Portable Speaker",
      image: "/shop/shop3.png",
      discountPrice: "$40",
      actualPrice: "$60",
      description: "Loud and clear portable speaker with deep bass.",
    },
    {
      id: 4,
      title: "Wireless Headphones",
      image: "/shop/shop4.png",
      discountPrice: "$50",
      actualPrice: "$70",
      description: "High-quality wireless headphones with noise cancellation.",
    },
    {
      id: 5,
      title: "Smart Watch",
      image: "/shop/shop5.png",
      discountPrice: "$120",
      actualPrice: "$200",
      description: "Track your fitness and stay connected on the go.",
    },
    {
      id: 6,
      title: "Portable Speaker",
      image: "/shop/shop6.png",
      discountPrice: "$40",
      actualPrice: "$60",
      description: "Loud and clear portable speaker with deep bass.",
    },
  ];

  return (
    <>
      <div className="bg-gray-50 min-h-screen text-gray-800">
        <div className="bg-gray-50 text-gray-800">
          {/* Header Section */}
          <div className="bg-gray-100 py-8">
            <div className="pl-10 md:pl-32 sm:pl-10 lg:pl-32">
              {/* Contact Us Heading */}
              <h1 className="text-3xl font-semibold text-blue-950">Shop List</h1>
              {/* Paragraph with Home.Pages.Contact Us */}
              <p className="mt-2 ">
                Home<span className="mx-1 text-black">.</span>Pages
                <span className="mx-1 text-pink-500">.</span>
                <span className="text-pink-500">Shop List</span>
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar */}
          <aside className="lg:col-span-1">
            <h2 className="text-xl font-bold text-blue-950 mb-4 ">
              E-commerce Accessories & Fashion Item
            </h2>
            <p className="text-sm text-gray-600 mb-8">
              About 9,890 results (0.62 seconds)
            </p>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Top Filters */}
            <div className="flex justify-end items-center mb-8">
              <div className="flex space-x-4">
                {/* Title hidden on smaller screens */}
                <label
                  htmlFor="per-page"
                  className="text-gray-700 hidden sm:block"
                >
                  Per Page:
                </label>
                <input
                  type="number"
                  id="per-page"
                  className="border rounded px-2 py-1 w-16 focus:ring-pink-500 focus:border-pink-500"
                  placeholder="7"
                />

                <label
                  htmlFor="sort-by"
                  className="text-gray-700 hidden sm:block"
                >
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
                {/* Title hidden on smaller screens */}
                <span className="text-gray-700 hidden sm:block">View:</span>
                <FiGrid className="w-6 h-6 text-gray-600 cursor-pointer" />
                <input
                  type="text"
                  placeholder="Grid/List"
                  className="border rounded px-2 py-1 w-24 focus:ring-pink-500 focus:border-pink-500"
                />
              </div>
            </div>

            {/* Product Containers */}
            <div className="space-y-8 mt-4 max-w-3xl">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col lg:flex-row items-center bg-white shadow-md rounded-lg p-4 space-y-4 lg:space-y-4 lg:space-x-8"
                >
                  {/* Product Image */}
                  <div className="w-32">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={150}
                      height={150}
                      className="rounded-lg object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex flex-col space-y-2">
                    {/* Title and Circles */}
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-lg font-semibold text-gray-800">
                          {product.title}
                        </h3>
                        <div className="flex space-x-2">
                          <span className="w-4 h-4 rounded-full bg-yellow-600"></span>
                          <span className="w-4 h-4 rounded-full bg-pink-600"></span>
                          <span className="w-4 h-4 rounded-full bg-blue-600"></span>
                        </div>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="text-sm">
                      <span className="text-pink-500 font-bold">
                        {product.discountPrice}
                      </span>
                      <span className="text-gray-400 line-through ml-2">
                        {product.actualPrice}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm">{product.description}</p>

                    {/* Icons */}
                    <div className="flex space-x-4 text-gray-600">
                      <FiHeart className="w-5 h-5 cursor-pointer" />
                      <FiZoomIn className="w-5 h-5 cursor-pointer" />
                      <FiSearch className="w-5 h-5 cursor-pointer" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Logo />
    </>
  );
};

export default ShopPage;




