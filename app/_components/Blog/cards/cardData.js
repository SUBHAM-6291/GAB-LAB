// cardData.js

const cardData = [
  {
    id: 1,
    category: 'Gastronomic Arts Barcelona Named Tripadvisor’s Best of the Best 2025',
    title: 'Ranked Among the Top 1% of Experiences Worldwide',
    description:
      'Our team of culinary masters brings unparalleled expertise, having trained in top kitchens worldwide. Each chef is dedicated to crafting dishes that blend tradition with innovation, ensuring every bite is a masterpiece.',
    image: 'https://static.wixstatic.com/media/b35a91_811cd05e9a964f4489df3abbb464afa7~mv2.webp/v1/fill/w_684,h_511,al_c,lg_1,q_90,enc_avif,quality_auto/b35a91_811cd05e9a964f4489df3abbb464afa7~mv2.webp', // Chef in kitchen
  },
  {
    id: 2,
    category: 'Custom Events',
    title: 'Tailored events for any occasion, big or small.',
    description:
      'Whether it’s an intimate dinner or a grand celebration, we design bespoke events that reflect your vision. From venue selection to menu curation, every detail is personalized to create unforgettable moments.',
    image: 'https://static.wixstatic.com/media/45a33e_0cb7776e2196460b9676b1dc3b767a8a~mv2.jpg/v1/fill/w_964,h_720,fp_0.50_0.50,q_90,enc_avif,quality_auto/45a33e_0cb7776e2196460b9676b1dc3b767a8a~mv2.jpg', // Elegant event setup
  },
  {
    id: 3,
    category: 'Unique Venues',
    title: 'Stunning locations with breathtaking views.',
    description:
      'We partner with exclusive venues across Barcelona, offering scenic backdrops from coastal cliffs to historic estates. Each location is chosen to elevate your dining experience with ambiance and charm.',
    image: 'https://static.wixstatic.com/media/45a33e_c59e1332d37b41c0967c960c9a495af4~mv2.png/v1/fill/w_960,h_720,fp_0.50_0.50,q_95,enc_avif,quality_auto/45a33e_c59e1332d37b41c0967c960c9a495af4~mv2.png', // Scenic restaurant venue
  },
  {
    id: 4,
    category: 'Personalized Menus',
    title: 'Curated dishes to match your preferences.',
    description:
      'Our menus are crafted to suit your tastes, dietary needs, and event theme. From classic Spanish tapas to avant-garde creations, we ensure every dish is tailored to delight your palate.',
    image: 'https://static.wixstatic.com/media/45a33e_c42fda7ffd23455c803a1f95f35f7be5~mv2.png/v1/fill/w_964,h_720,fp_0.50_0.50,q_95,enc_avif,quality_auto/45a33e_c42fda7ffd23455c803a1f95f35f7be5~mv2.png', // Plated dish
  },
  {
    id: 5,
    category: 'Authentic Ingredients',
    title: 'Sourced locally for true Spanish flavors.',
    description:
      'We prioritize fresh, locally-sourced ingredients from Catalonia’s markets and farms. This commitment ensures vibrant, authentic flavors that celebrate Spain’s rich culinary heritage in every dish.',
    image: 'https://static.wixstatic.com/media/45a33e_26a2e544772d4be49e8a694a594c2067~mv2.png/v1/fill/w_955,h_713,fp_0.50_0.50,q_95,enc_avif,quality_auto/45a33e_26a2e544772d4be49e8a694a594c2067~mv2.png', // Fresh ingredients
  },
  {
    id: 6,
    category: 'Exceptional Service',
    title: 'Dedicated team for a flawless experience.',
    description:
      'Our professional staff is trained to anticipate your needs, providing seamless service from start to finish. We strive to make every moment of your event effortless and extraordinary.',
    image: 'https://static.wixstatic.com/media/45a33e_7d37ce3c140a4033b6c26626616c02f0~mv2.png/v1/fill/w_332,h_252,fp_0.50_0.50,lg_1,q_95,enc_avif,quality_auto/45a33e_7d37ce3c140a4033b6c26626616c02f0~mv2.png', // Waitstaff serving
  },
  {
    id: 7,
    category: 'Signature Cocktails',
    title: 'Crafted drinks to complement your meal.',
    description:
      'Our mixologists create innovative cocktails using premium spirits and fresh ingredients, designed to pair perfectly with our dishes. From classic sangrias to modern creations, elevate your dining experience.',
    image: 'https://static.wixstatic.com/media/45a33e_f9991126619f4a5bbcc19f46ccdd93b6~mv2.jpg/v1/fill/w_964,h_720,fp_0.50_0.50,q_90,enc_avif,quality_auto/45a33e_f9991126619f4a5bbcc19f46ccdd93b6~mv2.jpg', // Cocktail
  },
  {
    id: 8,
    category: 'Private Dining',
    title: 'Exclusive spaces for intimate gatherings.',
    description:
      'Enjoy privacy and elegance in our curated private dining rooms, perfect for special occasions or business meetings. Each space is designed to offer comfort and sophistication for your group.',
    image: 'https://static.wixstatic.com/media/45a33e_3d2d4844ae584586b7d18253c0d952a9~mv2.jpg/v1/fill/w_771,h_576,fp_0.50_0.50,lg_1,q_90,enc_avif,quality_auto/45a33e_3d2d4844ae584586b7d18253c0d952a9~mv2.jpg', // Private dining room
  },
  {
    id: 9,
    category: 'Culinary Workshops',
    title: 'Learn from the best in hands-on classes.',
    description:
      'Join our interactive cooking workshops led by our expert chefs. Discover the secrets of Spanish cuisine, from paella to patatas bravas, and take home skills to impress your guests.',
    image: 'https://static.wixstatic.com/media/45a33e_68245a8b980d4a7bac2db0eb61b65252~mv2.webp/v1/fill/w_960,h_720,al_c,q_90,enc_avif,quality_auto/45a33e_68245a8b980d4a7bac2db0eb61b65252~mv2.webp', // Cooking class
  },
  {
    id: 10,
    category: 'Sustainable Practices',
    title: 'Eco-conscious dining for a better planet.',
    description:
      'We are committed to sustainability, using eco-friendly practices and reducing waste. From biodegradable packaging to energy-efficient kitchens, we prioritize the environment without compromising quality.',
    image: 'https://static.wixstatic.com/media/45a33e_a2a7acd076e14a1c9a37efa4c4281b7f~mv2.jpg/v1/fill/w_964,h_720,fp_0.50_0.50,q_90,enc_avif,quality_auto/45a33e_a2a7acd076e14a1c9a37efa4c4281b7f~mv2.jpg', // Sustainable ingredients
  },
  {
    id: 11,
    category: 'Wine Selection',
    title: 'Curated wines from Spain’s finest vineyards.',
    description:
      'Our sommeliers handpick exceptional wines from Catalonia and beyond, offering perfect pairings for every dish. Explore our extensive collection, from bold reds to crisp whites, for a complete sensory experience.',
    image: 'https://static.wixstatic.com/media/45a33e_97af61ac93f94a8c96a3e3f12a896b8f~mv2.webp/v1/fill/w_964,h_720,al_c,q_90,enc_avif,quality_auto/45a33e_97af61ac93f94a8c96a3e3f12a896b8f~mv2.webp', // Wine bottles
  },
  {
    id: 12,
    category: 'Live Culinary Shows',
    title: 'Experience cooking as performance art.',
    description:
      'Our live culinary shows turn dining into a spectacle, with chefs preparing dishes tableside or in open kitchens. Enjoy the theater of gastronomy while savoring every moment of your meal.',
    image: 'https://static.wixstatic.com/media/45a33e_08b4fdc86dd44c43b501e2d7bb0b8df1~mv2.avif/v1/fill/w_960,h_720,al_c,q_90,enc_avif,quality_auto/45a33e_08b4fdc86dd44c43b501e2d7bb0b8df1~mv2.avif', // Chef cooking live
  },
  {
    id: 13,
    category: 'Live Culinary Shows',
    title: 'Experience cooking as performance art.',
    description:
      'Our live culinary shows turn dining into a spectacle, with chefs preparing dishes tableside or in open kitchens. Enjoy the theater of gastronomy while savoring every moment of your meal.',
    image: 'https://static.wixstatic.com/media/45a33e_8a7bc44d71394abf90a561d9f26c1f38~mv2.png/v1/fill/w_964,h_720,fp_0.50_0.50,q_95,enc_avif,quality_auto/45a33e_8a7bc44d71394abf90a561d9f26c1f38~mv2.png', // Chef cooking live
  },{
    id: 14,
    category: 'Live Culinary Shows',
    title: 'Experience cooking as performance art.',
    description:
      'Our live culinary shows turn dining into a spectacle, with chefs preparing dishes tableside or in open kitchens. Enjoy the theater of gastronomy while savoring every moment of your meal.',
    image: 'https://static.wixstatic.com/media/45a33e_506c6978e7c94f0497dcf5a2c7cd07b9~mv2.png/v1/fill/w_858,h_641,fp_0.50_0.50,q_95,enc_avif,quality_auto/45a33e_506c6978e7c94f0497dcf5a2c7cd07b9~mv2.png', // Chef cooking live
  },{
    id: 15,
    category: 'Live Culinary Shows',
    title: 'Experience cooking as performance art.',
    description:
      'Our live culinary shows turn dining into a spectacle, with chefs preparing dishes tableside or in open kitchens. Enjoy the theater of gastronomy while savoring every moment of your meal.',
    image: 'https://static.wixstatic.com/media/45a33e_99104ffdb3d44a978d8180905b433fa3~mv2.png/v1/fill/w_960,h_720,fp_0.50_0.50,q_95,enc_avif,quality_auto/45a33e_99104ffdb3d44a978d8180905b433fa3~mv2.png', // Chef cooking live
  },{
    id: 16,
    category: 'Live Culinary Shows',
    title: 'Experience cooking as performance art.',
    description:
      'Our live culinary shows turn dining into a spectacle, with chefs preparing dishes tableside or in open kitchens. Enjoy the theater of gastronomy while savoring every moment of your meal.',
    image: 'https://static.wixstatic.com/media/45a33e_db2802f83bad4381a0fe31a958a29e4e~mv2.png/v1/fill/w_964,h_720,fp_0.50_0.50,q_95,enc_avif,quality_auto/45a33e_db2802f83bad4381a0fe31a958a29e4e~mv2.png', // Chef cooking live
  },{
    id: 17,
    category: 'Live Culinary Shows',
    title: 'Experience cooking as performance art.',
    description:
      'Our live culinary shows turn dining into a spectacle, with chefs preparing dishes tableside or in open kitchens. Enjoy the theater of gastronomy while savoring every moment of your meal.',
    image: 'https://static.wixstatic.com/media/45a33e_89efcaf6d363461e89914bee43e3b082~mv2.webp/v1/fill/w_964,h_720,al_c,q_90,enc_avif,quality_auto/45a33e_89efcaf6d363461e89914bee43e3b082~mv2.webp', // Chef cooking live
  },
];

export default cardData;