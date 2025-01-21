"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { FiChevronRight, FiHeart } from "react-icons/fi";

const ProductDetailPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const id = searchParams.get("id") || `${Date.now()}`;
  const name = searchParams.get("name");
  const discountprice = searchParams.get("discountprice");
  const actualamount = searchParams.get("actualamount");
  const color = searchParams.get("color");
  const image = searchParams.get("image");
  const description = searchParams.get("description");

  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);

    // Fetch related products from the API
    useEffect(() => {
      const fetchRelatedProducts = async () => {
        try {
          const response = await fetch("/data/products.json"); // Replace with your actual API URL
          const data = await response.json();
  
          // Assume related products are determined based on some logic, e.g., category or similar attribute
          const filteredRelatedProducts = data.filter(
            (product: any) => product.id !== id // Exclude the current product
          );
  
          setRelatedProducts(filteredRelatedProducts.slice(5, 9)); // Display up to 4 related products
        } catch (error) {
          console.error("Error fetching related products:", error);
        }
      };
  
      fetchRelatedProducts();
    }, [id]);
  

  const handleAddToCart = () => {
    const product = {
      id,
      name,
      discountprice,
      actualamount,
      color,
      image,
      description,
      quantity,
    };

    const existingCart = JSON.parse(localStorage.getItem("cartItems") || "[]");
    const updatedCart = [...existingCart, product];
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));

    router.push("/cart");
  };

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 px-4 sm:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Product Details Section */}
        <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-md p-6 gap-6">
          {/* Main Image */}
          <div className="flex-1 flex justify-center">
            <Image
              src={image || ""}
              alt={name || ""}
              width={300}
              height={300}
              className="object-cover rounded-lg"
            />
          </div>

          {/* Right Product Details */}
          <div className="flex-1">
            <h1 className="text-xl sm:text-2xl font-bold mb-4 text-blue-950">
              {name || "Product Name"}
            </h1>
            <div className="flex items-center mb-4">
              <AiFillStar className="text-yellow-500" />
              <AiFillStar className="text-yellow-500" />
              <AiFillStar className="text-yellow-500" />
              <AiFillStar className="text-yellow-500" />
              <AiFillStar className="text-yellow-500" />
              <span className="text-gray-600 text-sm ml-2">(28 Reviews)</span>
            </div>
            <div className="flex space-x-2 items-center mb-4">
              <p className="text-lg sm:text-xl font-semibold text-gray-500">
                ${discountprice}
              </p>
              <p className="text-lg sm:text-xl font-semibold text-pink-500 line-through">
                ${actualamount}
              </p>
            </div>
            <div className="mb-4">
              <p className="text-xs sm:text-sm font-semibold text-gray-500">
                Color: {color}
              </p>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <label className="text-gray-600">Quantity:</label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-16 border rounded p-1 text-center"
              />
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-4">
                {description || "A modern cantilever chair with a unique floating effect."}
              </p>
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-pink-500 text-white px-4 sm:px-6 py-2 rounded-md shadow-md mb-4 flex items-center space-x-2 hover:bg-pink-600 transition"
            >
              <span>Add to Cart</span>
              <FiHeart className="text-white" />
            </button>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-8 p-6">
          <div className="flex space-x-8 border-b pb-2">
            <button
              className={`${
                activeTab === "description"
                  ? "text-blue-950 font-bold border-b-2 border-blue-600"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
            <button
              className={`${
                activeTab === "additionalInfo"
                  ? "text-blue-950 font-bold border-b-2 border-blue-600"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("additionalInfo")}
            >
              Additional Info
            </button>
            <button
              className={`${
                activeTab === "reviews"
                  ? "text-blue-950 font-bold border-b-2 border-blue-600"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews
            </button>
          </div>

          <div className="mt-4">
            {activeTab === "description" && (
              <p className="text-blue-950 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
                consequatur nemo ipsa consequuntur suscipit quae maiores atque
                mollitia voluptatum laudantium.
              </p>
            )}
            {activeTab === "additionalInfo" && (
              <div>
                <h2 className="text-lg font-semibold mb-2">Product Details</h2>
                <p className="text-blue-950 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus culpa aliquid, laudantium esse corporis amet
                  blanditiis repudiandae odit consequatur porro illo nulla,
                  possimus expedita eveniet ab dolor ullam asperiores.
                  Accusamus!
                </p>
              </div>
            )}
            {activeTab === "reviews" && (
              <div>
                <div className="flex items-start gap-4 mb-4 p-4 bg-gray-100 rounded-md">
                  <Image
                    src="/blogpage/blog2.png"
                    alt="User Picture"
                    width={50}
                    height={50}
                    className=" w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-blue-950">John Doe</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, index) => (
                        <AiFillStar
                          key={index}
                          className={
                            index < 4 ? "text-yellow-500" : "text-yellow-500"
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4 mb-4 p-4 bg-gray-100 rounded-md">
                  <Image
                    src="/product/image1.png"
                    alt="User Picture"
                    width={50}
                    height={50}
                    className=" w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-blue-950">John Doe</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, index) => (
                        <AiFillStar
                          key={index}
                          className={
                            index < 4 ? "text-yellow-500" : "text-yellow-500"
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4 mb-4 p-4 bg-gray-100 rounded-md">
                  <Image
                    src="/product/image3.png"
                    alt="User Picture"
                    width={50}
                    height={50}
                    className=" w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-blue-950">John Doe</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, index) => (
                        <AiFillStar
                          key={index}
                          className={
                            index < 4 ? "text-yellow-500" : "text-gray-300"
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

        {/* Related Products */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Related Products</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedProducts.map((product) => (
              <div key={product.id} className="w-xl shadow-md p-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={1000}
                  height={1000}
                  className="mb-2"
                />
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-sm sm:text-md font-semibold">
                    {product.name}
                  </h3>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, starIndex) => (
                      <AiFillStar key={starIndex} />
                    ))}
                  </div>
                </div>
                <div className="flex justify-start gap-2 my-2">
                  <p className="text-lg text-blue-950">${product.discountprice}</p>
                  <p className="text-pink-500 line-through">${product.actualamount}</p>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
