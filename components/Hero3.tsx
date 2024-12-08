import Image from "next/image";

export default function ProductShowcase() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white pt-0">
      <div className="flex flex-col lg:flex-row items-center lg:items-start w-full max-w-6xl px-6 lg:px-12">
        {/* Left Section: Content */}
        <div className="flex-1 flex flex-col justify-center items-start lg:pr-16 mt-10 lg:mt-0">
          {/* Heading */}
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-6 tracking-tight">
            20% Discount On All Products
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
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
                <p className="text-gray-700 text-sm">{item}</p>
              </div>
            ))}
          </div>

          {/* Add to Cart Section */}
          <div className="flex items-center space-x-6">
            <button className="bg-gray-800 text-white px-6 py-2 text-sm font-semibold shadow-lg hover:bg-gray-700 transition">
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
  );
}


