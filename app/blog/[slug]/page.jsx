'use client';

import cardData from '@/app/_components/Blog/cards/cardData';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { FaArrowsAltV } from 'react-icons/fa';
import { OutlineBtn } from '@/app/_components/Utilites/BtnComponent/MyBtn';

// Client-side component for Suggested Posts to handle state
function SuggestedPosts({ currentSlug }) {
  const [showAll, setShowAll] = useState(false);

  // Filter out the current card and sort suggested cards
  const suggestedCards = cardData
    .filter((c) => c.slug !== currentSlug)
    .sort((a, b) => a.id - b.id); // Sort by ID for consistent order
  const displayedCards = showAll ? suggestedCards : suggestedCards.slice(0, 3);

  const shortenDescription = (text) => {
    return text.length > 100 ? `${text.slice(0, 100)}...` : text;
  };

  return (
    <section className="mt-18">
      <h3 className="text-2xl sm:text-3xl font-semibold text-yellow-300 mb-6">
        Suggested Posts
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedCards.map((suggestedCard) => (
          <Link
            key={suggestedCard.id}
            href={`/blog/${suggestedCard.slug}`}
            className="block"
          >
            <div className="bg-[#0f0f0f] rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:border-yellow-300/50 transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={suggestedCard.image}
                  alt={`${suggestedCard.title} cover`}
                  className="w-full h-60 object-cover rounded-t-xl transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
              </div>
              <div className="p-5">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-xl md:text-2xl font-semibold text-yellow-300">
                    {suggestedCard.category}
                  </h4>
                  <Link
                    href={`/blog/${suggestedCard.slug}`}
                    className="text-sm text-yellow-300 hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Read More
                  </Link>
                </div>
                <p className="text-gray-200 text-sm leading-relaxed">{suggestedCard.title}</p>
                <p
                  className="text-gray-400 text-sm mt-2 overflow-hidden"
                  style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}
                >
                  {shortenDescription(suggestedCard.shortDescription)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {suggestedCards.length > 3 && (
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
    </section>
  );
}

export default function BlogPost({ params }) {
  const { slug } = params;
  const card = cardData.find((card) => card.slug === slug);

  if (!card) {
    notFound();
  }

  return (
    <article className="bg-black myContainer py-16 text-white">
      <div className="">
        <header className="space-y-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-300">
            {card.category}
          </h1>
          <img
            src={card.image}
            alt={`${card.title} cover`}
            className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg"
            loading="lazy"
          />
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-200">
            {card.title}
          </h2>
        </header>
        {card.shortDescription !== card.longDescription && (
          <section className="mt-6">
            <p className="text-gray-200 text-base leading-relaxed">{card.shortDescription}</p>
          </section>
        )}
        <section className="mt-6 prose prose-invert prose-lg max-w-none">
          <p className="text-gray-200 leading-relaxed">{card.longDescription}</p>
        </section>
        <SuggestedPosts currentSlug={slug} />
      </div>
    </article>
  );
}