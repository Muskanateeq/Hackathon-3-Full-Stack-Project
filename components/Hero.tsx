import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative bg-gray-200 py-16 px-6 sm:px-8 md:px-16 lg:px-24">
      {/* Lamp Image */}
      <div className="absolute top-0 left-6 sm:left-10 md:left-16 lg:left-20">
        <Image
          src="/lamp.png" // Replace with your lamp image path
          alt="Lamp"
          width={200}
          height={250}
          className="w-20 sm:w-24 md:w-32 lg:w-40 xl:w-48"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row justify-center items-center md:gap-10 lg:gap-16">
        {/* Text Content */}
        <div className="md:ml-28 lg:ml-40 space-y-6 md:w-1/2">
          <h4 className="text-sm text-pink-500 font-medium text-center md:text-left">
            Best Furniture For Your Castle...
          </h4>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 font-sans text-center md:text-left">
            New Furniture Collection <br /> Trends in 2020
          </h1>
          <p className="text-gray-600 text-base sm:text-lg md:text-lg text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-pink-500 text-white py-2 px-6 hover:bg-pink-600">
              Shop Now
            </button>
          </div>
        </div>

        {/* Chair and Circles */}
        <div className="relative md:w-1/2 mt-10 md:mt-0 flex justify-center">
          {/* Overlapping Circles */}
          <div
            className="absolute bg-pink-200 rounded-full -z-10"
            style={{
              width: "300px",
              height: "300px",
              top: "20px",
              left: "0px",
              opacity: 0.5,
            }}
          ></div>
          <div
            className="absolute bg-pink-100 rounded-full -z-20"
            style={{
              width: "200px",
              height: "200px",
              top: "60px",
              left: "40px",
              opacity: 0.5,
            }}
          ></div>

          {/* Chair Image */}
          <Image
            src="/sofa.png" // Replace with your chair image path
            alt="Chair"
            width={300}
            height={300}
            className="w-60 sm:w-80 md:w-96 lg:w-[400px] relative"
          />

          {/* Badge */}
          <div className="absolute top-6 sm:top-10 right-6 sm:right-10 bg-blue-500 text-white text-sm font-bold py-1 px-3 rounded-full">
            50% off
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;










