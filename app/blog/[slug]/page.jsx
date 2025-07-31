// app/blog/[slug]/page.jsx
import cardData from '@/app/_components/Blog/cards/cardData';

export async function generateStaticParams() {
  const params = cardData.map((card) => ({
    slug: card.slug,
  }));
  console.log('Generated static params:', params);
  return params;
}

export default function BlogPost({ params }) {
  console.log('BlogPost params:', params);
  const { slug } = params;
  const card = cardData.find((card) => card.slug === slug);
  console.log('Found card:', card);

  if (!card) {
    console.log('Card not found for slug:', slug);
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <h1 className="text-2xl font-bold text-yellow-300">Post not found</h1>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-300 mb-4">{card.category}</h1>
        <img
          src={card.image}
          alt={card.category}
          className="w-full h-96 object-cover rounded-lg mb-6"
        />
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-4">{card.title}</h2>
        <p className="text-gray-300 text-lg leading-relaxed">{card.longDescription}</p>
        <p className="text-gray-400 text-sm mt-4">{card.shortDescription}</p>
      </div>
    </div>
  );
}