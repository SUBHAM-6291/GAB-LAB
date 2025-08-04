'use client';

import React, { useState, useEffect } from 'react';
import { FaArrowsAltV, FaUtensils } from 'react-icons/fa';
import { OutlineBtn } from '@/app/_components/Utilites/BtnComponent/MyBtn';
import SectionContent from '@/app/_components/Utilites/SectionContent/SectionContent';
import cardData from './cardData';
import Link from 'next/link';

const Cards = ({
  showSearch = true,
  excludeSlug = null,
  showSectionContent = true,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [cardsToShow, setCardsToShow] = useState(4);

  const filteredCards = cardData
    .filter((card) => (excludeSlug ? card.slug !== excludeSlug : true))
    .sort((a, b) => a.id - b.id);

  // Dynamically determine how many cards to show by default
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1536) {
        setCardsToShow(4); // 2xl
      } else if (width >= 1024) {
        setCardsToShow(3); // lg and xl
      } else {
        setCardsToShow(4); // sm and md (show 4 in two rows of 2)
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const displayedCards = showAll ? filteredCards : filteredCards.slice(0, cardsToShow);

  const shortenDescription = (text) =>
    text.length > 100 ? `${text.slice(0, 100)}...` : text;

  return (
    <div className="bg-black text-white myContainer transition-all duration-300 mt-12">
      {/* Section Header */}
      {showSectionContent && (
        <div className="w-full text-left md:text-center">
          <SectionContent
            icon={FaUtensils}
            tooltrip="Explore Our Blog"
            tooltripClass="bg-yellow-300 text-black border border-yellow-300"
            heading="Discover Culinary Insights"
            hedingClass="text-4xl md:text-5xl font-bold mb-4 text-white"
            desCription="Dive into our collection of articles, tips, and stories about Spanish and Mediterranean cuisine, from paella secrets to market adventures."
            desCriptionClass="mx-auto text-md md:text-lg leading-relaxed text-gray-300 mb-10"
          />
        </div>
      )}

      {/* Search Filter UI */}
      {showSearch && (
        <div className="flex flex-col md:flex-row justify-start items-start gap-4 mb-16">
          <select className="bg-[#1a1a1a] text-white border cursor-pointer border-yellow-300 rounded-lg p-3 w-full md:w-64 focus:outline-none focus:ring-1 focus:ring-yellow-300 transition-all duration-300">
            <option value="All">All</option>
            {[...new Set(cardData.map((card) => card.category))].map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Search categories..."
            className="bg-[#1a1a1a] text-white border border-yellow-300 rounded-lg p-3 w-full md:w-64 focus:outline-none focus:ring-1 focus:ring-yellow-300 transition-all duration-300"
          />
        </div>
      )}

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6  items-stretch">
        {displayedCards.map((card) => (
          <Link key={card.id} href={`/blog/${card.slug}`} className="block">
            <div className="bg-[#0f0f0f] rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:border-yellow-300/50 transition-all duration-300 h-full flex flex-col justify-between">
              <div className="relative overflow-hidden">
                <img
                  src={card.image}
                  alt={card.category}
                  className="w-full h-60 object-cover rounded-t-xl transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div className="mb-2">
                  <h3 className="text-xl md:text-2xl font-semibold text-yellow-300">
                    {card.category}
                  </h3>
                </div>
                <p className="text-gray-200 text-sm font-medium leading-relaxed">
                  {card.title}
                </p>
                <p
                  className="text-gray-400 text-sm mt-2 overflow-hidden"
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {shortenDescription(card.shortDescription)}
                </p>
                <div className="text-right mt-2">
                  <Link
                    href={`/blog/${card.slug}`}
                    className="text-sm text-yellow-300 hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Show More / Show Less Button */}
      {filteredCards.length > cardsToShow && (
        <div className="flex justify-end mt-12">
          <OutlineBtn
            label={
              <>
                <FaArrowsAltV className="inline-block mr-2 text-amber-400 group-hover:text-black transition duration-300" />
                {showAll ? 'Show Less' : 'Show More'}
              </>
            }
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="group border-2 border-yellow-300 text-yellow-300 px-6 py-2 rounded-lg font-medium hover:bg-yellow-300 hover:text-black transition-all duration-300"
          />
        </div>
      )}
    </div>
  );
};

export default Cards;
