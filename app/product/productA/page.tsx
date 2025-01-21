"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { FiGrid } from "react-icons/fi";
import Link from "next/link";

const page = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [filter, setFilter] = useState("all");
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://6786cd7af80b78923aa8323d.mockapi.io/products/Products");
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
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

  const handleProductClick = (product: any) => {
    router.push(`/product-cart/${product.id}?name=${product.name}&discountprice=${product.discountprice}&actualamount=${product.actualamount}&image=${product.image}`);
  };

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <div className="bg-gray-100 py-20">
        <div className="pl-10 md:pl-32">
          <h1 className="text-3xl font-semibold text-blue-950">Products</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1">
          <h2 className="text-xl font-bold mb-4">Filter by Price</h2>
          <select
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
            className="border rounded px-4 py-2 w-full focus:ring-pink-500 focus:border-pink-500"
          >
            <option value="all">All</option>
            <option value="high">High</option>
            <option value="low">Low</option>
          </select>
        </aside>

        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => handleProductClick(product)}
              >
                <div className="bg-gray-200 h-56 flex items-center justify-center relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="h-36 w-auto object-contain"
                    width={1000}
                    height={1000}
                  />
                </div>
                {hovered === index && (
                  <div className="absolute left-3 top-16 flex flex-col gap-3">
                    <span className="w-8 h-8 bg-gray-300 rounded-full flex justify-center items-center">
                      <AiOutlineHeart size={20} />
                    </span>
                    <span className="w-8 h-8 bg-gray-300 rounded-full flex justify-center items-center">
                      <AiOutlineShoppingCart size={20} />
                    </span>
                    <span className="w-8 h-8 bg-gray-300 rounded-full flex justify-center items-center">
                      <AiOutlineSearch size={20} />
                    </span>
                  </div>
                )}
                <div className="p-4 text-center">
                  <h2 className="text-lg">{product.name}</h2>
                  <div className="flex justify-center gap-2">
                    <p className="text-lg">${product.discountprice}</p>
                    <p className="text-pink-500 line-through">${product.actualamount}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
