// coursesData.js

const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

const courses = [
  {
    image:
      "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Home%20page/Class%20photos/Hands-On%20Sangria%20%26%20Tapas%20Cooking%20Class.avif",
    title: "Hands-On Sangria & Tapas Cooking Class with Local Beer Tasting",
    category: "Baking",

    slug: generateSlug(
      "Hands-On Sangria & Tapas Cooking Class with Local Beer Tasting"
    ),
    description:
      "Join our hands-on Sangria and Tapas cooking class, where you'll mix your own pitcher of Spain’s iconic drink, cook up delicious traditional tapas, and enjoy a curated tasting of local beers. This immersive 2.5 to 3-hour experience blends culinary skills, cultural insight, and plenty of fun, with recipes and memories to take home.",
    location: "Barcelona, Spain",
    price: "€54",
    schedule: "Select Afternoons at 15:00 / 2.5 to 3 hours",
  },
  {
    image:
      "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Home%20page/Class%20photos/La%20Boqueria%20Market%20Tour.avif",
    title: "La Boqueria Market Tour & Food Tasting Experience",
    category: "Baking",
    slug: generateSlug("La Boqueria Market Tour & Food Tasting Experience"),
    description:
      "Discover the heart of Barcelona through its most iconic market on this intimate La Boqueria Tour & Tasting experience. Led by expert local guides from the city’s top-rated culinary academy, you’ll sample over 5 traditional bites from freshly squeezed juice and Iberian ham to artisanal cheeses and olives while exploring the hidden stories, secrets, and flavors of this legendary market. With a maximum of 6 guests per tour, this immersive 2-hour experience is perfect for curious travelers who want to go beyond sightseeing and truly discover the world famous La Boqueria Market .",
    location: "Barcelona, Spain",
    price: "€65",
    schedule: "Classes offered at 10:30 and 15:30 and last about 2 hours.",
  },
  {
    image:
      "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Home%20page/Class%20photos/Premium%20Cocktail%20Experience%20%26%20Masterclass%20(presented%20by%20SACSEJAR).avif",
    title: "Ultimate Paella Cooking Class Experience",
    category: "Paella",
    slug: generateSlug("Ultimate Paella Cooking Class Experience"),
    description:
      "Discover the heart of Spanish cuisine in our most popular culinary adventure! Start with a guided visit to La Boqueria Market, followed by a fun sangria workshop and a delicious tapas tasting. Then, roll up your sleeves for a hands-on paella cooking class led by expert instructors. Wrap it all up with dessert, a farewell toast, and take home all the recipes plus unforgettable memories.",
    location: "Barcelona, Spain",
    price: "€115",
    schedule: "Classes offered daily at 10:00, 11:00, 14:00, 18:00 and 19:00",
  },
  {
    image:
      "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Home%20page/Class%20photos/Private%20Paella%20Cooking%20Class%20%26%20Market%20Tour.avif",
    title: "Private Paella Cooking Class & Market Tour with Personal Chef",
    category: "Paella",
    slug: generateSlug(
      "Private Paella Cooking Class & Market Tour with Personal Chef"
    ),
    description:
      "Our top-rated experience only more exclusive with private groups of 1-6 participants ",
    location: "Barcelona, Spain",
    price: "€129",
    schedule: "Classes offered at 10:00 and 17:00 and last about 3.5 hours.",
  },
  {
    image:
      "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Home%20page/Class%20photos/Private%20Paella%20Cooking%20Class%20%26%20Market%20Tour.avif",
    title: "Sweet Escape: Bake and Take Workshop",
    category: "Baking",
    slug: generateSlug("Sweet Escape: Bake and Take Workshop"),
    description:
      "Learn new desserts each month and take home your delicious creations in our small group workshops!",
    location: "Barcelona, Spain",
    price: "€44",
    schedule:
      "Classes offered regularly starting at 09:30 and take about 3 hours ti complete.",
  },
  {
    image:
      "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Home%20page/Class%20photos/Sweet%20Escape%20Bake%20and%20Take%20Workshops.avif",
    title:
      "Barcelona Nights: Premium Cocktail Experience & Masterclass (presented by SACSEJAR)",
    category: "Cocktails",
    slug: generateSlug(
      "Barcelona Nights: Premium Cocktail Experience & Masterclass (presented by SACSEJAR)"
    ),
    description:
      "Shake-up your night with a truly unique and hand's-on premium cocktail masterclass presented by SACSEJAR",
    location: "Barcelona, Spain",
    price: "€95",
    schedule: "Classes on-request starting at 21:00 and last about 2 hours",
  },
  {
    image:
      "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Home%20page/Class%20photos/Ultimate%20Paella%20Cooking%20Class%20Experience.avif",
    title: "Rhythm & Taste: Paella Cooking Class & Flamenco Show (14:00-18:30)",
    category: "paella",

    slug: generateSlug(
      "Rhythm & Taste: Paella Cooking Class & Flamenco Show (14:00-18:30)"
    ),
    description:
      "Experience the Essence of Spain: Paella Cooking Class with Tapas, Sangria and Dessert followed by LIVE Flamenco Show",
    location: "Barcelona, Spain",
    price: "€144",
    schedule:
      "Classes start at 14:00 and the full experience takes 4.5 hours to complete.",
  },
];

export default courses;
