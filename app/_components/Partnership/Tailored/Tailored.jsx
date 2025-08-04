'use client';

import React from 'react';
import { FaUtensils, FaHandshake, FaLink } from 'react-icons/fa';
import SectionContent from '../../Utilites/SectionContent/SectionContent';
import { OutlineBtn } from '../../Utilites/BtnComponent/MyBtn';

const CulinaryPartnershipSection = () => {
  const pdfLinks = [
    'https://www.gastronomicartsbarcelona.com/_files/ugd/b35a91_2332150d9ccb402797fb4a0e41b27b89.pdf',
    'https://www.gastronomicartsbarcelona.com/_files/ugd/b35a91_30c79d5edb7e444ab720891a43cb3ba6.pdf',
    'https://www.gastronomicartsbarcelona.com/_files/ugd/b35a91_27e3da2359cf42f4a43d387b75dc3312.pdf',
    'https://www.gastronomicartsbarcelona.com/_files/ugd/b35a91_4cc06932d921407db9607c1290fd6345.pdf',
  ];

  return (
    <div className="bg-black text-white myContainer topContainer">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch">
        <div className="flex flex-col justify-between h-full">
          <div>
            <SectionContent
              icon={FaUtensils}
              tooltrip="Crafted Experiences"
              tooltripClass="border-yellow-300 bg-yellow-300 text-black"
              heading="Culinary Journeys Designed for Your Clients"
              hedingClass="text-2xl md:text-3xl font-bold leading-tight mb-6"
              desCription="Unlock a variety of hands-on cooking adventures rooted in authentic Spanish and Mediterranean cuisine — all tailored to delight your clients.\nFrom the award-winning Paella Class to sweet baking escapes and vibrant market-to-plate experiences, every journey is chef-led and unforgettable."
              desCriptionClass="text-base md:text-lg text-gray-300 leading-relaxed mb-6"
            />
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
                  className="w-full bg-[#111] border border-gray-600 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black text-left px-5 py-3 rounded-md text-sm md:text-base font-medium transition cursor-pointer"
                  onClick={() => window.open(pdfLinks[i], '_blank')}
                >
                  {text}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between h-full">
          <div>
            <SectionContent
              icon={FaHandshake}
              tooltrip="Let’s Collaborate"
              tooltripClass="border-yellow-300 bg-yellow-300 text-black"
              heading="Why Partner with Gastronomic Arts?"
              hedingClass="text-2xl md:text-3xl font-bold leading-tight mb-6"
              desCription="Offer your clients more than just a meal — deliver curated culinary moments they’ll never forget. Our partnerships help you create tailored, cultural, chef-led experiences."
              desCriptionClass="text-gray-300 text-base md:text-lg leading-relaxed mb-10"
            />

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
                  <div className="w-10 h-10 flex items-center justify-center rounded-full border border-yellow-400 text-yellow-400 font-bold shrink-0">
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
            <OutlineBtn
              label={
                <div className="flex items-center gap-2">
                  <FaLink className="text-amber-400" />
                  <span>Join Our Partner Program</span>
                </div>
              }
              type="button"
              onClick={() => console.log("button clicked")}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CulinaryPartnershipSection;