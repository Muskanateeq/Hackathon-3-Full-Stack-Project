"use client";
import Logo from "@/components/Logo";

import React from "react";
import Image from "next/image";
import { FiChevronRight, FiHeart } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";

const ProductPage = () => {
  const relatedProducts = [
    {
      id: 1,
      image: "/product/image1.png",
      title: "Leather Handbag",
      price: "$120",
      rating: 4,
    },
    {
      id: 2,
      image: "/product/image2.png",
      title: "Modern Sunglasses",
      price: "$50",
      rating: 3,
    },
    {
      id: 3,
      image: "/product/image3.png",
      title: "Summer Hat",
      price: "$35",
      rating: 5,
    },
    {
      id: 4,
      image: "/product/image4.png",
      title: "Casual Shirt",
      price: "$60",
      rating: 4,
    },
  ];

  return (
    <>
      <div className="bg-gray-50 min-h-screen text-gray-800 px-4 sm:px-8 py-12">
        {/* Header Section */}
        <div className="bg-gray-100 py-8">
          <div className="pl-4 sm:pl-10 md:pl-32">
            <h1 className="text-2xl sm:text-3xl font-semibold text-blue-950">
              Product Details
            </h1>
            <p className="mt-2 text-sm sm:text-base">
              Home
              <span className="mx-1 text-black">.</span>Pages
              <span className="mx-1 text-pink-500">.</span>
              <span className="text-pink-500">Product Details</span>
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Product Details Section */}
          <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-md p-6 gap-6">
            {/* Left Images */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6 ">
              <div className="grid grid-cols-1 gap-2">
                <Image
                  src="/product/thumbnail2.png"
                  alt="Thumbnail 1"
                  width={70}
                  height={70}
                  className="object-cover"
                />
                <Image
                  src="/product/thubnail2.png"
                  alt="Thumbnail 2"
                  width={70}
                  height={70}
                  className="object-cover"
                />
                <Image
                  src="/product/thumbnail3.png"
                  alt="Thumbnail 3"
                  width={70}
                  height={70}
                  className="object-cover"
                />
              </div>
              <div className="w-full h-56 sm:h-80 lg:h-96">
                <Image
                  src="/product/bag.png"
                  alt="Main Product"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Right Product Details */}
            <div className="flex-1">
              <h1 className="text-xl sm:text-2xl font-bold mb-4">
                Playwood Arm Chair
              </h1>
              <div className="flex items-center mb-4">
                <AiFillStar className="text-yellow-500" />
                <AiFillStar className="text-yellow-500" />
                <AiFillStar className="text-yellow-500" />
                <AiFillStar className="text-yellow-500" />
                <AiFillStar className="text-gray-300" />
                <span className="text-gray-600 text-sm">(28 Reviews)</span>
              </div>
              <div className="flex space-x-2 items-center mb-4">
                <p className="text-lg sm:text-xl font-semibold text-gray-500">
                  $120.00
                </p>
                <p className="text-lg sm:text-xl font-semibold text-pink-500 line-through">
                  $32.00
                </p>
              </div>
              <p className="text-gray-600 text-sm mb-4">Color: Black</p>
              <p className="text-gray-400 text-sm mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam modi iusto pariatur, obcaecati molestias, dicta
                exercitationem commodi aperiam qui quisquam.
              </p>
              <button className="bg-blue-500 text-white px-4 sm:px-6 py-2 rounded-md shadow-md mb-4 flex items-center space-x-2">
                <span>Add to Cart</span>
                <FiHeart className="text-white" />
              </button>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="mt-8 p-6">
            <div className="flex space-x-8 border-b pb-2">
              <button className="text-blue-950 font-bold border-b-2 border-blue-600">
                Description
              </button>
              <button className="text-gray-600">Additional Info</button>
              <button className="text-gray-600">Reviews</button>
              <button className="text-gray-600">Videos</button>
            </div>
            <div className="mt-4">
              <h2 className="text-lg font-semibold mb-2">Various Temper</h2>
              <p className="text-blue-950 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
                consequatur nemo ipsa consequuntur suscipit quae maiores atque
                mollitia voluptatum laudantium.
              </p>
              <h3 className="text-md font-semibold mb-2">More Details</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FiChevronRight className="text-gray-500" />
                  <p className="ml-2 text-blue-950">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-4">Related Products</h2>
            <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:w-auto md:w-full lg:w-full">
              {relatedProducts.map((product) => (
                <div key={product.id} className="w-xl shadow-md p-4">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={1000}
                    height={1000}
                    className=" mb-2"
                  />
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-sm sm:text-md font-semibold">
                      {product.title}
                    </h3>
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, index) => (
                        <AiFillStar
                          key={index}
                          className={
                            index < product.rating
                              ? "text-yellow-500"
                              : "text-gray-300"
                          }
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-blue-950 font-bold">{product.price}</p>
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

export default ProductPage;

