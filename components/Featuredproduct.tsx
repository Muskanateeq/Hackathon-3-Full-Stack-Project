"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { FaStar } from "react-icons/fa";

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
          (product: any) => product.id >= 13 && product.id <= 16
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
    <div className="bg-white min-h-screen px-4 py-8">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Featured Products
      </h1>

      {/* Grid Container for Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto max-w-5xl">
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
              <div className="absolute top-3 left-3 flex gap-2">
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
              className={`p-4 text-center transition-colors duration-300 ${
                hovered === index ? "bg-blue-600 text-white" : "bg-white"
              }`}
            >
              <h2
                className={`text-lg font-semibold ${
                  hovered === index ? "text-white" : "text-pink-500"
                }`}
              >
                {product.name}
              </h2>
                <div className="flex justify-center gap-1 my-2 text-yellow-500">
                  {Array(5)
                    .fill(null)
                    .map((_, i) => (
                      <FaStar key={i} size={16} />
                    ))}
                </div>              
              <div className="flex justify-center gap-2 my-2">
              <p className={`mt-1 ${hovered === index ? "text-white" : "text-blue-950"}`}>
                ${product.discountprice}
              </p>
              <p className={`mt-1 ${hovered === index ? "text-white" : "text-pink-500 "} line-through`}>
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

export default FeaturedProduct;
