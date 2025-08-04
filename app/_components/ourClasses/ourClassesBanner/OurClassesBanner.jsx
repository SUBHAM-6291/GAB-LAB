import React from "react";

const OurClassesBanner = () => {
  return (
    <div
      className="relative w-full h-[70vh] bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Home%20page/Banner/b35a91_edb1140c53e04abfb3f50d64bea6d744~mv2.avif')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content */}
      <div className="myContainer relative z-10 h-full flex items-center">
        <div>
          <h1 className="heding">
            Barcelona Cooking Classes
          </h1>
          <p className="desc max-w-2xl">
            Discover authentic Spanish cuisine through our hands-on cooking
            classes led by expert local chefs. Learn traditional recipes and
            techniques in the heart of Barcelona.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurClassesBanner;
