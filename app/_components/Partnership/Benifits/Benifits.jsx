import React from 'react';
import {
  FaBox,
  FaGuitar,
  FaMoneyBillWave,
  FaCrown,
  FaHandsHelping
} from 'react-icons/fa';

const Benifits = () => {
  return (
    <div className="bg-black text-white py-20 px-4 text-center">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
        Partnership Benefits
      </h1>
      <p className="max-w-3xl mx-auto text-md md:text-lg leading-relaxed mb-12 text-gray-300">
        Perfect for solo travelers, couples, and private groups looking for a hands-on culinary adventure in the heart of Barcelona.
      </p>

      {/* First Row of Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-6 px-4">
        {/* Card 1 */}
        <div className="border border-gray-600 rounded-lg p-6 text-left bg-[#111] hover:border-yellow-400 transition">
          <div className="flex items-center gap-2 mb-2 text-yellow-400">
            <FaBox />
            <h3 className="text-lg font-semibold">Exclusive Culinary Packages:</h3>
          </div>
          <p className="text-sm text-gray-300">
            Offer your clients private classes and group sessions that can be customized based on their interests, dietary needs, and schedules.
          </p>
        </div>

        {/* Card 2 */}
        <div className="border border-gray-600 rounded-lg p-6 text-left bg-[#111] hover:border-yellow-400 transition">
          <div className="flex items-center gap-2 mb-2 text-yellow-400">
            <FaGuitar />
            <h3 className="text-lg font-semibold">Flexible Customization:</h3>
          </div>
          <p className="text-sm text-gray-300">
            Personalize every experience, including the option to add on Flamenco performances or cultural tours.
          </p>
        </div>

        {/* Card 3 */}
        <div className="border border-gray-600 rounded-lg p-6 text-left bg-[#111] hover:border-yellow-400 transition">
          <div className="flex items-center gap-2 mb-2 text-yellow-400">
            <FaMoneyBillWave />
            <h3 className="text-lg font-semibold">Attractive Commissions:</h3>
          </div>
          <p className="text-sm text-gray-300">
            Benefit from competitive commission rates while offering your clients unique, memorable experiences.
          </p>
        </div>
      </div>

      {/* Second Row of Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-10 px-4">
        {/* Card 4 */}
        <div className="border border-gray-600 rounded-lg p-6 text-left bg-[#111] hover:border-yellow-400 transition">
          <div className="flex items-center gap-2 mb-2 text-yellow-400">
            <FaCrown />
            <h3 className="text-lg font-semibold">VIP Treatment for Your Clients:</h3>
          </div>
          <p className="text-sm text-gray-300">
            We ensure every client receives personal attention and a high-quality experience.
          </p>
        </div>

        {/* Card 5 */}
        <div className="border border-gray-600 rounded-lg p-6 text-left bg-[#111] hover:border-yellow-400 transition">
          <div className="flex items-center gap-2 mb-2 text-yellow-400">
            <FaHandsHelping />
            <h3 className="text-lg font-semibold">Dedicated Support:</h3>
          </div>
          <p className="text-sm text-gray-300">
            Our team works closely with you to manage bookings, special requests, and logistics, making the process seamless for both you and your clients.
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <button className="bg-[#111] text-white border border-gray-500 hover:bg-yellow-400 hover:text-black px-6 py-3 rounded-md transition font-medium">
        Join Our Partnership Program
      </button>
    </div>
  );
};

export default Benifits;
