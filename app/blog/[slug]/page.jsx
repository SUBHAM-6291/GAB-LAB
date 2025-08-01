'use client';

import cardData from '@/app/_components/Blog/cards/cardData';
import { notFound } from 'next/navigation';
import Cards from '@/app/_components/Blog/cards/Cards'; // Adjust the import path based on your file structure

export default function BlogPost({ params }) {
  const { slug } = params;
  const card = cardData.find((card) => card.slug === slug);

  if (!card) {
    notFound();
  }

  return (
    <div>
      <article className="bg-black myContainer mt-16 text-white">
        <div>
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
          <section className="mt-6 prose prose-invert prose-lg">
            <p className="text-gray-200 leading-relaxed">{card.longDescription}</p>
          </section>
          <section className="mt-12">
            <h3 className="text-2xl sm:text-3xl  lg:text-4xl font-semibold text-yellow-300 mb-6">
              Suggested Posts
            </h3>
          </section>
        </div>
      </article>
      <div className="mb-15">
        <Cards excludeSlug={slug} showSearch={false} fullWidth={true} />
      </div>
    </div>
  );
}