export default function App() {
    return (
      <div className="flex justify-center items-center md:py-20 sm:px-20 bg-white">
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
  