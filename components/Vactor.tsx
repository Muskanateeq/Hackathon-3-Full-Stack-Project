"use client";
import Image from "next/image";
import { useState } from "react";

const FeaturedProduct = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="bg-white min-h-screen px-4 py-8">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Featured Products
      </h1>

      {/* Grid Container for Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto max-w-5xl">
        {[1, 2, 3, 4].map((product, index) => (
          <div
            key={index}
            className="relative w-full max-w-xs mx-auto bg-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl overflow-hidden"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Product Image */}
            <div className="py-8 flex items-center justify-center">
              <Image
                src={`/vector/vector${product}.png`}
                alt={`Product ${product}`}
                className="h-16 w-auto object-contain transition-transform duration-300"
                width={400}
                height={400}
              />
            </div>
            {/* Product Details */}
            <div className="text-center p-4">
              <p className="text-lg text-blue-950 font-semibold">
                24/7 Support
              </p>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatem, quas.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;

