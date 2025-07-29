import React from 'react';

const Banner = () => {
  return (
    <div className="bg-black text-white px-6 py-16 md:px-16 lg:flex lg:items-center lg:justify-between">
      {/* Text Section */}
      <div className="lg:w-1/2">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Together, We Make Culinary <br /> Magic Happen!
        </h2>
        <p className="text-gray-300 mb-6">
          Collaborate with Gastronomic Arts Barcelona to deliver immersive, high-quality
          cooking classes and cultural experiences designed to enhance any travel itinerary
          or corporate event with our Partnership Program!
        </p>
        <button className="bg-white text-black px-6 py-3 rounded hover:bg-gray-200 transition">
          Partner With Us
        </button>
      </div>

      {/* Image Section */}
      <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center">
        <img
          src="https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/our%20story/partnership/parthnershitp-banner.avif"
          alt="Partnership Banner"
          className="rounded-xl shadow-lg max-w-full"
        />
      </div>
    </div>
  );
};

export default Banner;
