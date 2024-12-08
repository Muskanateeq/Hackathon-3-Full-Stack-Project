"use client";
import Image from "next/image";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Mini LCW Chair",
    price: "$56.00",
    image: "/categories/product1.png", // Replace with your image path
  },
  {
    id: 2,
    name: "Mini LCW Chair",
    price: "$56.00",
    image: "/categories/product2.png", // Replace with your image path
  },
  {
    id: 3,
    name: "Mini LCW Chair",
    price: "$56.00",
    image: "/categories/product3.png", // Replace with your image path
  },
  {
    id: 4,
    name: "Mini LCW Chair",
    price: "$56.00",
    image: "/categories/product4.png", // Replace with your image path
  },
];

const FeaturedProduct = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="bg-white min-h-screen px-4 py-8">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Tranding Products
      </h1>

      {/* Grid Container for Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto max-w-5xl rounded-full">
        {[1, 2, 3, 4].map((product, index) => (
          <div
            key={index}
            className="relative w-full max-w-xs mx-auto bg-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl overflow-hidden"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Product Image */}
            <div className="bg-gray-200 h-56 flex items-center justify-center relative group">
              <Image
                src={`/Tranding/product${product}.png`}
                alt={`Product ${product}`}
                className={`h-36 w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${
                  hovered === index ? "group-hover:border group-hover:border-black" : ""
                }`}
                width={400}
                height={400}
              />
            </div>

            {/* Product Details */}
            <div className="p-4">
              {/* Product Title */}
              <h2 className="text-lg font-semibold text-center text-blue-950 mb-2">
                Cantilever Chair
              </h2>
              {/* Price Section */}
              <div className="flex justify-center items-center space-x-2">
                {/* Discounted Price */}
                <p className="text-lg font-bold text-blue-950">$42.00</p>
                {/* Actual Price */}
                <p className="text-gray-400 text-sm line-through">$60.00</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white min-h-screen px-4 py-8">
      {/* First Row: Two Main Containers */}
      <div className="bg-gray-50 px-4 py-8 flex justify-center items-center">
        <div className="w-full max-w-6xl">
          <div className="flex flex-wrap gap-4 mb-8">
            {[1, 2].map((item, index) => (
              <div
                key={index}
                className={`flex shadow-md overflow-hidden flex-1 max-w-[48%] min-w-[250px] ${
                  index === 0 ? "bg-pink-100" : "bg-gray-200"
                }`}
                style={{ height: "250px" }}
              >
                {/* Left Side: Text */}
                <div className="flex flex-col justify-start p-4">
                  <h2 className="text-lg font-bold text-blue-950 mb-2">
                    {index === 0 ? "23% off all products" : "23% off all products"}
                  </h2>
                  <button className=" flex justify-start text-pink-500 underline font-medium">
                    Shop Now
                  </button>
                </div>
                {/* Right Side: Image */}
                <div className="flex justify-center items-center flex-1">
                  <Image
                    src={`/Trandinghero/product${item}.png`}
                    alt={`Product ${item}`}
                    width={150}
                    height={150}
                    className="object-contain"
                  />
                </div>
              </div>
            ))}

            {/* Right Side: Stacked Containers */}
            <div className="flex flex-col flex-1 max-w-[40%] min-w-[50px]">
              {[1, 2, 3].map((item, index) => (
                <div
                  key={index}
                  className="flex w-full h-[87px] items-center"
                >
                  {/* Image */}
                  <div className="flex justify-center items-center p-2 w-24">
                    <Image
                      src={`/chair/chair${item}.png`}
                      alt={`Chair ${item}`}
                      width={60}
                      height={60}
                      className="object-contain bg-gray-200"
                    />
                  </div>
                  {/* Text */}
                  <div className="flex flex-col justify-center pl-4">
                    <h3 className="text-sm font-semibold text-blue-950 mb-1">
                      Executive Seat Chair
                    </h3>
                    <p className="text-gray-500 text-sm">$120.00</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <section className="min-h-screen flex items-center justify-center bg-white pt-0">
      <div className="flex flex-col lg:flex-row items-center lg:items-start w-full max-w-6xl px-6 lg:px-12">
        {/* Left Section: Content */}
        <div className="flex-1 flex flex-col justify-center items-start lg:pr-16 mt-10 lg:mt-0">
          {/* Heading */}
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-6 tracking-tight">
            20% Discount On All Products
          </h1>

          {/* Description */}
          <p className="text-pink-500 text-lg mb-6 font-bold">Eams Sofa Compact</p>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo assumenda
            nisi corrupti expedita sint.
          </p>

          {/* Feature List with Check Icons */}
          <div className="space-y-4 mb-6">
            {[
              "Material expose like metals",
              "Clear lines and geometric figures",
              "Material expose like metals",
              "Simple neutral colours",
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                {/* Check Icon */}
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="gray"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                {/* Text */}
                <p className="text-gray-400 text-sm">{item}</p>
              </div>
            ))}
          </div>

          {/* Add to Cart Section */}
          <div className="flex items-center space-x-6">
            <button className="bg-pink-500 text-white px-10 py-3 text-sm font-semibold shadow-lg hover:bg-pink-600 transition">
              Shop Now
            </button>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="relative flex-1 flex justify-center lg:justify-end items-center mt-10 lg:mt-0">
          {/* Image */}
          <div className="relative w-[400px] h-[400px] flex justify-center items-center bg-pink-100 rounded-full">
            <Image
              src="/Hero3/sofa1.png"
              alt="Italian Sofa"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>

    <div className="bg-white py-8">
        {/* Top Heading */}
        <h2 className="text-2xl font-bold text-blue-950 text-center mb-8">
          Top Categories
        </h2>
        
        {/* Product Cards */}
        <div className="flex justify-center items-center gap-8 flex-wrap">
          {products.map((product) => (
            <div key={product.id} className="text-center">
              {/* Circular Container */}
              <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-lg group flex items-center justify-center bg-gray-100">
                {/* Centered Smaller Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-24 object-contain"
                />
                <div className="absolute inset-0 bg-blue-500 bg-opacity-70 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Shop
                </div>
              </div>
              <h3 className="mt-4 text-sm font-bold text-blue-950">{product.name}</h3>
              <p className="text-blue-950 font-bold">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    
    </div>
    </div>
  );
};

export default FeaturedProduct;
