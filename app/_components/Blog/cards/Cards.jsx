// app/_components/Blog/cards/Cards.jsx
'use client';

import React, { useState } from 'react';
import { FaUtensils, FaArrowsAltV } from 'react-icons/fa';
import SectionContent from '@/app/_components/Utilites/SectionContent/SectionContent';
import { OutlineBtn } from '@/app/_components/Utilites/BtnComponent/MyBtn';
import cardData from './cardData';
import Link from 'next/link';

// Log cardData to verify import
console.log('cardData:', cardData);

const Cards = ({
  heading = 'Why Choose Gastronomic Arts Barcelona',
  subheading = 'Ranked among the top 1% of experiences worldwide by Tripadvisor’s 2025 Best of the Best.',
  icon = FaUtensils,
  slug = 'blog',
}) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAll, setShowAll] = useState(false);

  // Log component props
  console.log('Cards props:', { heading, subheading, slug });

  // Filter cards by category and search query
  const filteredCards = cardData.filter(
    (card) =>
      (selectedCategory === 'All' || card.category === selectedCategory) &&
      card.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Log filtered cards
  console.log('Filtered cards:', filteredCards);

  const displayedCards = showAll ? filteredCards : filteredCards.slice(0, 3);

  // Log displayed cards
  console.log('Displayed cards:', displayedCards);

  const shortenDescription = (text) => {
    return text.length > 100 ? `${text.slice(0, 100)}...` : text;
  };

  return (
    <div className="bg-black text-white myContainer topContainer transition-all duration-300">
      <div className="text-center mb-16">
        <SectionContent
          icon={icon}
          tooltrip="Why Choose Us"
          tooltripClass="border-yellow-300 bg-yellow-300 text-black"
          heading={heading}
          hedingClass="text-4xl md:text-5xl font-sans font-bold tracking-tight"
          desCription={shortenDescription(subheading)}
          desCriptionClass="text-lg md:text-xl text-gray-300 italic mt-3 max-w-2xl mx-auto"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-16 max-w-4xl mx-auto">
        <select
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            console.log('Selected category:', e.target.value);
          }}
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
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            console.log('Search query:', e.target.value);
          }}
          className="bg-[#1a1a1a] text-white border border-yellow-300 rounded-lg p-3 w-full md:w-64 focus:outline-none focus:ring-1 focus:ring-yellow-300 transition-all duration-300"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {displayedCards.map((card) => (
          <Link
            key={card.id}
            href={`/blog/${card.slug}`}
            className="block"
            onClick={() => console.log('Navigating to:', `/blog/${card.slug}`)}
          >
            <div className="bg-[#0f0f0f] rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:border-yellow-300/50 transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={card.image}
                  alt={card.category}
                  className="w-full cursor-pointer h-60 object-cover rounded-t-xl transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
              </div>
              <div className="p-5">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl md:text-2xl font-semibold text-yellow-300">
                    {card.category}
                  </h3>
                  <Link
                    href={`/blog/${card.slug}`}
                    className="text-sm text-yellow-300 hover:underline"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent card click from triggering
                      console.log('Read More clicked for:', `/blog/${card.slug}`);
                    }}
                  >
                    Read More
                  </Link>
                </div>
                <p className="text-gray-200 text-sm leading-relaxed">{card.title}</p>
                <p
                  className="text-gray-400 text-sm mt-2 overflow-hidden"
                  style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}
                >
                  {card.shortDescription}
                </p>
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
                <FaArrowsAltV className="inline-block mr-2 text-amber-400" />{' '}
                {showAll ? 'Show Less' : 'Show All Reasons'}
              </>
            }
            type="button"
            onClick={() => {
              setShowAll(!showAll);
              console.log('Show all toggled, showAll:', !showAll);
              console.log(`Navigated to slug: ${slug}`);
            }}
            className="border-2 border-yellow-300 text-yellow-300 px-6 py-2 rounded-lg font-medium hover:bg-yellow-300 hover:text-black transition-all duration-300"
          />
        </div>
      )}
      <p className="text-center text-gray-400 italic mt-10 text-sm">
        Discover what sets us apart
      </p>
    </div>
  );
};

export default Cards;