import React from 'react';

const Partner_with_us = () => {
  return (
    <div className="bg-black text-white py-20 px-4 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
        Why Partner with Us?
      </h2>

      <p className="max-w-3xl mx-auto text-lg leading-relaxed mb-12">
        Partnering with Gastronomic Arts Barcelona allows you to offer your clients world-class culinary experiences tailored to their preferences. 
        Whether they’re food lovers, cultural explorers, or corporate teams seeking bonding activities, our cooking classes and culinary events 
        are designed to inspire and delight.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-6 mb-10 px-4">
        {/* Box 1 */}
        <div className="border border-gray-600 rounded-lg p-6 w-full md:w-1/3 text-left bg-[#111] hover:border-yellow-400 transition">
          <h3 className="text-xl font-semibold mb-2">Authentic Culinary Classes:</h3>
          <p className="text-sm text-gray-300">
            From our iconic paella-making experience to tapas and baking workshops, we bring the true essence of Spanish cuisine to life.
          </p>
        </div>

        {/* Box 2 */}
        <div className="border border-gray-600 rounded-lg p-6 w-full md:w-1/3 text-left bg-[#111] hover:border-yellow-400 transition">
          <h3 className="text-xl font-semibold mb-2">Customized Experiences:</h3>
          <p className="text-sm text-gray-300">
            Personalize each class based on your clients’ needs, whether it’s for solo travelers, families, or corporate groups.
          </p>
        </div>

        {/* Box 3 */}
        <div className="border border-gray-600 rounded-lg p-6 w-full md:w-1/3 text-left bg-[#111] hover:border-yellow-400 transition">
          <h3 className="text-xl font-semibold mb-2">Cultural Immersion:</h3>
          <p className="text-sm text-gray-300">
            Our experiences aren’t just about food—they offer a deep dive into Spanish culture through hands-on learning and local market visits.
          </p>
        </div>
      </div>

      <button className="bg-[#111] flex  justify-end text-white border border-gray-500 hover:bg-yellow-400 hover:text-black px-6 py-3 rounded-md transition font-medium">
        Sign up for our Partnership Program
      </button>
    </div>
  );
};

export default Partner_with_us;
