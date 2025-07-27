import React from 'react';

const Tailored = () => {
  return (
    <div className="bg-black text-white py-20 px-4 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
        Tailored Culinary Adventures for Your Clients
      </h2>

      <p className="max-w-3xl mx-auto text-lg leading-relaxed mb-2">
        At Gastronomic Arts Barcelona, we offer a wide range of immersive and exclusive cooking classes that capture the essence of Spanish and Mediterranean cuisine.
      </p>
      <p className="max-w-3xl mx-auto text-lg leading-relaxed mb-8">
        From our Top-Rated Paella Cooking Class to our innovative Sweet Escape Baking Classes and our Exclusive Market-to-Plate Experiences,
        we ensure your clients have a memorable hands-on culinary adventure, led by expert chefs in the heart of Barcelona.
      </p>

      <p className="text-lg font-medium mb-4">Want more information?</p>
      <p className="text-md mb-8">Download our FREE informational packets below:</p>

      <div className="flex flex-col items-center gap-4">
        <button className="bg-[#111] text-white border border-gray-500 hover:bg-yellow-400 hover:text-black px-6 py-3 rounded-md transition font-medium w-[320px]">
          Partnership Incentive Program - English Version (PDF)
        </button>
        <button className="bg-[#111] text-white border border-gray-500 hover:bg-yellow-400 hover:text-black px-6 py-3 rounded-md transition font-medium w-[320px]">
          Programa de Incentivos para Asociaciones - Castillano (PDF)
        </button>
        <button className="bg-[#111] text-white border border-gray-500 hover:bg-yellow-400 hover:text-black px-6 py-3 rounded-md transition font-medium w-[320px]">
          Ultimate Paella Class Experience Guide - English Version (PDF)
        </button>
        <button className="bg-[#111] text-white border border-gray-500 hover:bg-yellow-400 hover:text-black px-6 py-3 rounded-md transition font-medium w-[320px]">
          Guía de Experiencias de Clases de Paella - Castillano (PDF)
        </button>
      </div>
    </div>
  );
};

export default Tailored;
