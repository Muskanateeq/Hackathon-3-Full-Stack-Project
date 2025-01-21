"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import for navigation
import Image from "next/image";
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { FiGrid } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

const page = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [products, setProducts] = useState<any[]>([]); // State to store products
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [filter, setFilter] = useState("all");
  const router = useRouter(); // Router for navigation

  // Fetch products from API or local JSON file
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://6786cd7af80b78923aa8323d.mockapi.io/products/Products"); // Make sure the file is correctly served
        const data = await response.json();
        console.log(data);
        setProducts(data); // Set products data
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = products;
    if (filter === "high") {
      filtered = products.filter((product) => product.discountprice >= 100);
    } else if (filter === "low") {
      filtered = products.filter((product) => product.discountprice <= 50);
    }
    setFilteredProducts(filtered);
  }, [filter, products]);

  // Handle product click to navigate
  const handleProductClick = (product: any) => {
      router.push(
        `/product-detail/${product.id}?name=${product.name}&discountprice=${product.discountprice}&actualamount=${product.actualamount}&color=${product.color}&description=${product.description}&image=${product.image}`
      );
  };

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <div className="bg-gray-50 text-gray-800">
        {/* Header Section */}
        <div className="bg-gray-100 py-10">
          <div className="pl-10 md:pl-32 sm:pl-10 lg:pl-32">
            <h1 className="text-3xl font-semibold text-blue-950">Products List</h1>
            <p className="mt-2">
              Home
              <span className="mx-1 text-pink-500">.</span>
              <span className="text-pink-500">Products List</span>
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Sidebar */}
        <aside className="lg:col-span-1">
          <h2 className="text-xl font-bold text-blue-950 mb-4">Wooden Stylish Chairs</h2>
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
                className="border rounded px-2 py-1 w-12 focus:ring-pink-500 focus:border-pink-500"
                placeholder="0"
              />
            </div>

            <div className="flex items-center space-x-4">
              <label htmlFor="sort-by" className="hidden sm:inline-block text-gray-700">
                Sort By:
              </label>
              <select
                onChange={(e) => setFilter(e.target.value)}
                value={filter}
                className="border rounded px-2 py-1 w-20 focus:ring-pink-500 focus:border-pink-500"
              >
                <option value="all">All</option>
                <option value="high">High</option>
                <option value="low">Low</option>
              </select>
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

      {/* Product Grid */}
      <div className="bg-white px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto max-w-5xl">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => handleProductClick(product)} // Navigate on click
            >
              {/* Product Image */}
              <div className="bg-gray-200 h-56 flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="h-36 w-auto object-contain transition-transform duration-300"
                  width={1000}
                  height={1000}
                />
                              {/* View Product Button */}
              {hovered === index && (
                <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2">
                  <button className="px-2 py-1 bg-pink-500 text-white rounded text-sm font-medium">
                    View Product
                  </button>
                </div>
                )}
              </div>

              {/* Hover Icons */}
              {hovered === index && (
                <div className="absolute left-3 top-16 flex flex-col gap-3">
                  <span className="w-8 h-8 bg-gray-300 rounded-full flex justify-center items-center text-gray-700">
                    <AiOutlineHeart size={20} />
                  </span>
                  <span className="w-8 h-8 bg-gray-300 rounded-full flex justify-center items-center text-gray-700">
                    <AiOutlineShoppingCart size={20} />
                  </span>
                  <span className="w-8 h-8 bg-gray-300 rounded-full flex justify-center items-center text-gray-700">
                    <AiOutlineSearch size={20} />
                  </span>
                </div>
              )}

              {/* Product Details */}
              <div className="p-4 text-center">
                <h2 className="text-lg text-blue-950 font-bold">{product.name}</h2>
                <div className="flex justify-center gap-1 my-2 text-yellow-500">
                  {Array(5)
                    .fill(null)
                    .map((_, i) => (
                      <FaStar key={i} size={16} />
                    ))}
                </div>
                <div className="flex justify-center gap-2 my-2">
                  <p className="text-lg text-blue-950">${product.discountprice}</p>
                  <p className="text-pink-500 line-through">${product.actualamount}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center cursor-pointer bg-white pb-10">
        <div className="border border-gray-300 bg-white p-2 px-3 rounded-md shadow-md text-gray-400 hover:bg-pink-500 hover:text-white">
          <Link href="/product">
            <button>1</button>
          </Link>
        </div>
        <div className="border border-gray-300 bg-white p-2 px-3 rounded-md shadow-md ml-5 text-gray-400 hover:bg-pink-500 hover:text-white">
          <Link href="/product/productA">
            <button>2</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;




