export default function App() {
    return (
      <div className="flex justify-center items-center md:py-10 sm:px-10 bg-gray-100">
        {/* Background Image Container */}
        <div
          className="w-full max-w-5xl h-20 bg-no-repeat bg-center"
          style={{
            backgroundImage: `url('/logo/logo.png')`,
            backgroundSize: "contain",
          }}
        ></div>
      </div>
    );
  }
  