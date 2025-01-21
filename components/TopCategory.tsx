"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

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
          (product: any) => product.id >= 9 && product.id <= 12
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
    <div className="bg-white py-8">
      {/* Top Heading */}
      <h2 className="text-2xl font-bold text-blue-950 text-center mb-8">
        Top Categories
      </h2>

      {/* Product Cards */}
      <div className="flex justify-center items-center gap-8 flex-wrap">
        {featuredProducts.map((product, index) => (
          <div
            key={product.id}
            className="text-center"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => handleProductClick(product)} // Navigate on click
          >
            {/* Product Image */}
            <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-lg group flex items-center justify-center bg-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                className="w-24 h-24 object-contain"
                width={400}
                height={400}
              />
              <div className="absolute inset-0 bg-pink-500 bg-opacity-70 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                View Shop
              </div>
            </div>
            <h3 className="mt-4 text-sm font-bold text-blue-950">
              {product.name}
            </h3>
            <p className="text-blue-950 font-bold">${product.discountprice}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
