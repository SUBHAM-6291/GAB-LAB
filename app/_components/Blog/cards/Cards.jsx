'use client';

import React, { useState } from 'react';
import { FaArrowsAltV } from 'react-icons/fa';
import { OutlineBtn } from '@/app/_components/Utilites/BtnComponent/MyBtn';
import cardData from './cardData';
import Link from 'next/link';

const Cards = ({
  showSearch = true,
  excludeSlug = null,
}) => {
  const [showAll, setShowAll] = useState(false);

  const filteredCards = cardData
    .filter((card) => (excludeSlug ? card.slug !== excludeSlug : true))
    .sort((a, b) => a.id - b.id);

  const displayedCards = showAll ? filteredCards : filteredCards.slice(0, 3);

  const shortenDescription = (text) => {
    return text.length > 100 ? `${text.slice(0, 100)}...` : text;
  };

  return (
    <div className="bg-black text-white myContainer transition-all duration-300 mt-12">
      {showSearch && (
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-16  mx-auto">
          <select
            className="bg-[#1a1a1a] text-white border cursor-pointer border-yellow-300 rounded-lg p-3 w-full md:w-64 focus:outline-none focus:ring-1 focus:ring-yellow-300 transition-all duration-300"
          >
            <option value="All">All</option>
            {[...new Set(cardData.map((card) => card.category))].map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Search categories..."
            className="bg-[#1a1a1a] text-white border border-yellow-300 rounded-lg p-3 w-full md:w-64 focus:outline-none focus:ring-1 focus:ring-yellow-300 transition-all duration-300"
          />
        </div>
      )}

      {/* Grid with stretch for equal height */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto items-stretch">
        {displayedCards.map((card) => (
          <Link
            key={card.id}
            href={`/blog/${card.slug}`}
            className="block transform transition-transform duration-300 hover:scale-[1.02]"
          >
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
                  style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}
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

      {filteredCards.length > 3 && (
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
