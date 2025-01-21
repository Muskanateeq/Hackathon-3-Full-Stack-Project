import React from "react";
import Image from "next/image";
import Vector from "@/components/Vactor";

const page = () => {
  return (
    <>
      {/* Header Section */}
      <div className="bg-gray-100 py-10">
        <div className="pl-10 md:pl-32 sm:pl-10 lg:pl-32">
          <h1 className="text-3xl font-semibold text-blue-950">About Us</h1>
          <p className="mt-2 text-black">
            Home
            <span className="mx-1 text-pink-500">.</span>
            <span className="text-pink-500">About Us</span>
          </p>
        </div>
      </div>

      {/* Main Section */}
      <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-white pt-8 px-4 lg:px-20 space-y-8 lg:space-y-0 lg:space-x-12 mb-0">
        {/* Image Section */}
        <div className="flex justify-center items-center">
          <Image
            src="/about-us/about.png"
            alt="about"
            width={250}
            height={250}
            className="z-10"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-lg space-y-6">
          {/* Heading */}
          <h1 className="text-xl sm:text-2xl font-bold text-blue-950">
            Know About Our Ecommerce Business, History
          </h1>

          {/* Paragraph */}
          <p className="text-gray-500 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quasi quidem nam
            aspernatur vel suscipit voluptas hic delectus, laborum dolorem? Dolorum in perferendis
            nemo officiis vel quis.
          </p>

          {/* Button */}
          <button className="bg-pink-500 text-white px-4 py-2 text-sm rounded shadow hover:bg-pink-600 transition">
            Contact us
          </button>
        </div>
      </section>

      {/* Vector Component */}
      <div className="mt-0 mb-0">
        <Vector />
      </div>

      {/* Our Client Say Section */}
      <section className="bg-gray-50 px-4 lg:px-20 flex flex-col items-center text-center pb-28">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-8">
          Our Client Say!
        </h2>

        {/* Images Row */}
        <div className="flex justify-center items-center space-x-6 mb-6">
          {/* Client 1 */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 relative">
            <Image
              src="/blogpage/blog1.png"
              alt="Client 1"
              className="object-cover"
              width={800}
              height={800}
            />
          </div>
          {/* Client 2 */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 relative">
            <Image
              src="/blogpage/sale3.png"
              alt="Client 2"
              className="object-cover"
              width={800}
              height={800}
            />
          </div>
          {/* Client 3 */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 relative">
            <Image
              src="/blogpage/blog2.png"
              alt="Client 3"
              className="object-cover"
              width={800}
              height={800}
            />
          </div>
        </div>

        {/* Client Description */}
        <h1 className="text-black text-2xl">Selina Gomes</h1>
        <p className="text-gray-400 text-xs mb-5">Ceo At Webecy Digital</p>
        <p className="text-gray-500 text-sm leading-relaxed text-center mx-auto max-w-lg ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dui ultrices quam vel
          sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed vulputate egestas ac nam.
          Tristique ultricies dolor aliquam lacus volutpat praesent.
        </p>
      </section>
    </>
  );
};

export default page;


