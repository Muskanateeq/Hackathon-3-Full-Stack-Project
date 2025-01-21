"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import TopCategory from "@/components/TopCategory"
import Link from "next/link"

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
  const [featuredProducts, setFeaturedProducts] = useState<any[]>([]); // State to store filtered products
  const router = useRouter();

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://6786cd7af80b78923aa8323d.mockapi.io/products/Products"); // Replace with your actual API URL
        const data = await response.json();

        // Filter products with IDs between 13 and 16
        const filteredProducts = data.filter(
          (product: any) => product.id >= 5 && product.id <= 8
        );
        setFeaturedProducts(filteredProducts); // Set the filtered products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Handle product click to navigate
  const handleProductClick = (product: any) => {
    router.push(
      `/product-detail/${product.id}?name=${product.name}&discountprice=${product.discountprice}&actualamount=${product.actualamount}&color=${product.color}&image=${product.image}`
    );
  };
  

  return (
    <div className="bg-white min-h-screen px-4 py-8 ">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Tranding Products
      </h1>
      {/* Grid Container for Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto max-w-5xl rounded-full">
        {featuredProducts.map((product, index) => (
          <div
            key={product.id}
            className="relative w-full max-w-xs mx-auto bg-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl overflow-hidden"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => handleProductClick(product)} // Navigate on click
          >
            {/* Product Image */}
            <div className="bg-gray-200 h-56 flex items-center justify-center relative">
              <Image
                src={product.image}
                alt={product.name}
                className={`h-36 w-auto object-contain transition-all duration-300 ${
                  hovered === index ? "border-2 border-black" : ""
                }`}
                width={400}
                height={400}
              />
              {/* View Product Button */}
              {hovered === index && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                  <button className="px-2 py-1 bg-pink-500 text-white rounded text-sm font-medium">
                    View Product
                  </button>
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="p-4">
              {/* Product Title */}
              <h2 className="text-lg font-semibold text-center text-pink-500 mb-2">
                {product.name}
              </h2>
              {/* Price Section */}
              <div className="flex justify-center items-center space-x-2">
                {/* Discounted Price */}
                <p className="text-lg font-bold text-blue-950">
                  ${product.discountprice}
                </p>
                {/* Actual Price */}
                <p className="text-pink-500 text-lg font-bold line-through">
                  ${product.actualamount}
                </p>
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
                      {index === 0
                        ? "23% off all products"
                        : "23% off all products"}
                    </h2>
                    <Link href ="/product">
                    <button className=" flex justify-start text-pink-500 underline font-medium">
                      order Now
                    </button>
                    </Link>
                  </div>
                  {/* Right Side: Image */}
                  <div className="flex justify-center items-center flex-1">
                    <Image
                      src={`/Trandinghero/product${item}.png`}
                      alt={`Product ${item}`}
                      width={150}
                      height={150}
                      className="object-contain cursor-pointer"
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
                    <Link href ="/product">
                      <Image
                        src={`/chair/chair${item}.png`}
                        alt={`Chair ${item}`}
                        width={60}
                        height={60}
                        className="object-contain bg-gray-200 cursor-pointer"
                      />
                      </Link>
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
              <p className="text-pink-500 text-lg mb-6 font-bold">
                Eams Sofa Compact
              </p>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
                assumenda nisi corrupti expedita sint.
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
              <Link href="/product">
                <button className="bg-pink-500 text-white px-10 py-3 text-sm font-semibold shadow-lg hover:bg-pink-600 transition">
                  order Now
                </button>
                </Link>
              </div>
            </div>

            {/* Right Section: Image */}
            <div className="relative flex-1 flex justify-center lg:justify-end items-center mt-10 lg:mt-0">
              {/* Image */}
              <div className="relative w-full h-auto flex justify-center items-cent">
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
        <TopCategory/>
      </div>
      </div>
  );
};

export default FeaturedProduct;
