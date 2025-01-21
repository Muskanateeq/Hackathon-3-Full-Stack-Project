import Image from "next/image";
import Link from "next/link"

export default function FullWidthBackground() {
  return (
    <div
      className="relative w-full h-[60vh] md:h-[60vh] bg-cover bg-center"
      style={{ backgroundImage: 'url("/Hero4/rectangle.png")' }}
    >
      {/* Overlay for better readability */}
      <div className="absolute"></div>

      {/* Centered Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        {/* Heading */}
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-950 bottom-6">
        Get Latest update By Subscribe Our Newslater
        </h1>
        {/* Button */}
        <Link href="/product">
        <button className="bg-pink-500 text-white px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-lg font-semibold shadow-lg hover:bg-pink-600 transition ">
          order Now
        </button>
        </Link>
      </div>
    </div>
  );
}

