"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaInfoCircle, FaMapMarkerAlt } from "react-icons/fa";
import { MdHotelClass } from "react-icons/md";
import SectionContent from "../../Utilites/SectionContent/SectionContent";
import { CiBookmarkCheck } from "react-icons/ci";

const sectionContentProps = {
  icon: MdHotelClass,
  tooltrip: "Cooking Courses",
  heading: "Discover Our Cooking Courses",
  description:
    "Dive into the world of Spanish cuisine with our interactive and immersive cooking classes. From sangria to paella, each course is crafted for unforgettable memories.",
};

const courses = [
  {
    image:
      "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Home%20page/Class%20photos/Hands-On%20Sangria%20%26%20Tapas%20Cooking%20Class.avif",
    title: "Hands-On Sangria & Tapas Cooking Class with Local Beer Tasting",
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
    description:
      "Our top-rated experience only more exclusive with private groups of 1-6 participants ",
    location: "Barcelona, Spain",
    price: "€129",
    schedule: "Classes offered at 10:00 and 17:00 and last about 3.5 hours.",
  },
  {
    image:
      "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Home%20page/Class%20photos/Rhythm%20%26%20Taste%20%20Paella%20Cooking%20Class%20%26%20Flamenco%20Show.avif",
    title: "Sweet Escape: Bake and Take Workshop",
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
    description:
      "Experience the Essence of Spain: Paella Cooking Class with Tapas, Sangria and Dessert followed by LIVE Flamenco Show",
    location: "Barcelona, Spain",
    price: "€144",
    schedule:
      "Classes start at 14:00 and the full experience takes 4.5 hours to complete.",
  },
];

const Course = () => {
  const [expandedCards, setExpandedCards] = useState([]);

  const toggleCard = (index) => {
    setExpandedCards((prev) => (prev[0] === index ? [] : [index]));
  };

  return (
    <section className="topContainer py-16">
      <div className="myContainer">
        {/* Heading Section */}
        <div className="flex justify-center md:text-center mb-12">
          <SectionContent
          icon={sectionContentProps.icon}
          tooltrip={sectionContentProps.tooltrip}
          tooltripClass={"border border-yellow-300 bg-yellow-300 text-black flex justify-center items-center"}
          heading={sectionContentProps.heading}
          hedingClass={"text-white max-w-5xl drop-shadow-[0_2px_10px_rgba(255,215,0,0.4)]"}
          desCription={sectionContentProps.description}
          desCriptionClass={"text-white max-w-4xl"}/>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course, index) => {
            const isExpanded = expandedCards.includes(index);
            return (
              <div
                key={index}
                className={`bg-zinc-800 rounded-xl shadow-md hover:shadow-yellow-500/20 transition duration-300 overflow-hidden flex flex-col group  ${
                  isExpanded ? "h-auto" : "h-[550px]"
                }`}
              >
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover transform group-hover:scale-110 group-hover:rotate-2 transition duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {course.title}
                  </h3>

                  <p
                    className={`text-base text-gray-300 mb-4 transition-all duration-300 ${
                      isExpanded ? "" : "line-clamp-2"
                    }`}
                  >
                    {course.description}
                  </p>
                  {course.description.length > 100 && (
                    <div>
                      <button
                        onClick={() => toggleCard(index)}
                        className="text-yellow-400 text-sm font-medium"
                      >
                        {isExpanded ? "Read less" : "Read more"}
                      </button>
                    </div>
                  )}
                  <div className="flex justify-between text-base text-gray-300 mb-2 mt-4">
                    <span className="flex items-center gap-1">
                      <FaMapMarkerAlt className="text-yellow-400" />
                      {course.location}
                    </span>
                    <span className=" text-yellow-400 font-semibold">
                      {course.price}
                    </span>
                  </div>

                  <div className="text-sm text-gray-300 mb-4">
                    {course.schedule}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 mt-auto">
                    {/* Book Now Button with Icon */}
                    <button className="flex items-center justify-center gap-2 bg-yellow-400 text-black border border-transparent hover:bg-transparent hover:border-yellow-300 hover:text-white text-sm font-semibold px-4 py-2 rounded-lg transition w-full cursor-pointer">
                      <CiBookmarkCheck className="text-base" />
                      Book Now
                    </button>

                    {/* Info Button with Icon */}
                    <button className="flex items-center justify-center gap-2 bg-transparent border border-yellow-300 hover:bg-white hover:border-white text-white hover:text-black text-sm font-semibold px-4 py-2 rounded-lg transition w-full cursor-pointer">
                      <FaInfoCircle className="text-base" />
                      Info
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Course;
