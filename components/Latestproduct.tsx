"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineSearch,
} from "react-icons/ai";

const LatestProduct = () => {
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
          (product: any) => product.id >= 17 && product.id <= 22
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
    <div className="bg-white px-4 py-8">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Latest Products
      </h1>

      {/* Grid Container for Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mx-auto max-w-5xl">
        {featuredProducts.map((product, index) => (
          <div
            key={product.id}
            className="relative w-full max-w-xs mx-auto bg-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl overflow-hidden"
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
            {/* View Product Button */}
            {hovered === index && (
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
                <button className="px-2 py-1 bg-pink-500 text-white rounded text-sm font-medium">
                  View Product
                </button>
              </div>
            )}

            {/* Product Details */}
            <div
              className={`p-4 flex justify-between items-center transition-colors duration-300`}
            >
              <h2 className={`text-lg text-blue-950`}>{product.name}</h2>
              {/* Price Section */}
              <div className="flex gap-2 items-center">
                {/* Discount Price */}
                <p className="text-lg text-blue-950">
                  ${product.discountprice}
                </p>
                {/* Actual Price */}
                <p className="text-pink-500 line-through">
                  ${product.actualamount}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestProduct;