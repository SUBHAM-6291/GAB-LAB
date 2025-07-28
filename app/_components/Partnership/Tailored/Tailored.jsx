'use client';
import React from 'react';

const CulinaryPartnershipSection = () => {
  return (
    <div className="bg-black text-white py-20 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch">
        
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <p className="text-yellow-400 uppercase text-sm font-semibold tracking-wider mb-3">
              Crafted Experiences
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              Culinary Journeys Designed for Your Clients
            </h2>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4">
              Unlock a variety of hands-on cooking adventures rooted in authentic Spanish and Mediterranean cuisine — all tailored to delight your clients.
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
              From the award-winning Paella Class to sweet baking escapes and vibrant market-to-plate experiences, every journey is chef-led and unforgettable.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold mb-2 text-white">
              📄 Download our FREE informational packets:
            </p>
            <div className="space-y-3">
              {[
                'Partnership Incentive Program – English Version (PDF)',
                'Programa de Incentivos para Asociaciones – Castillano (PDF)',
                'Ultimate Paella Class Experience Guide – English Version (PDF)',
                'Guía de Experiencias de Clases de Paella – Castillano (PDF)',
              ].map((text, i) => (
                <button
                  key={i}
                  className="w-full bg-[#111] border border-gray-600 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black text-left px-5 py-3 rounded-md text-sm md:text-base font-medium transition"
                >
                  {text}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <p className="text-yellow-400 uppercase text-sm font-semibold tracking-wider mb-2">
              Let’s Collaborate
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              Why Partner with Gastronomic Arts?
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-10">
              Offer your clients more than just a meal — deliver curated culinary moments they’ll never forget.
              Our partnerships help you create tailored, cultural, chef-led experiences.
            </p>

            <div className="space-y-8">
              {[
                {
                  title: 'Authentic Experiences',
                  desc: 'Each class captures the heart of Spanish gastronomy — from classic paella to traditional sweets.',
                },
                {
                  title: 'Fully Customized',
                  desc: 'Every session is tailored to match your audience — solo travelers, families, or corporate groups.',
                },
                {
                  title: 'Cultural Immersion',
                  desc: 'Local markets, chef stories, and hands-on cooking connect your clients deeply with Barcelona.',
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full border border-yellow-400 text-yellow-400 font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <button className="w-full md:w-auto bg-yellow-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-300 transition">
              Join Our Partner Program
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CulinaryPartnershipSection;
