'use client'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const privateClassesData = [
  {
    id: 1,
    title: "Special Events",
    description:
      "Celebrate life’s special moments with a customized event at Gastronomic Arts Barcelona. From anniversaries to reunions, we offer unique and memorable experiences that your guests will cherish.",
    bookingText: "Perfect for up to 6 guests – book your moment now.",
    image:
      "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Private%20%20group/Private%20Classes/ryanthomas001_as_students_standing_around_a_cooking_school_tabl_568506dfd8f44c2b98424f0a34.avif",
  },
  {
    id: 2,
    title: "Private Culinary Workshops",
    description:
      "Our private classes provide an intimate setting for you and your group to explore new culinary techniques and enjoy quality time with our expert chefs.",
    bookingText: "Ideal for team-building, birthdays, and more.",
    image:
      "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Private%20%20group/Private%20Classes/ryanthomas001_as_students_standing_around_a_cooking_school_tabl_568506dfd8f44c2b98424f0a34.avif",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
};

const Private_Classes = () => {
  return (
    <div className="bg-black text-white px-6 py-10 lg:px-20 lg:py-20 transition-all duration-300">
      {/* Title & Description */}
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 ">
          A Unique and Memorable Experience for Any Occasion
        </h2>
        <p className="max-w-4xl mx-auto text-sm sm:text-base text-gray-300 leading-relaxed group relative">
          At Gastronomic Arts Barcelona, we understand that every event is different. That’s why we offer customizable options to meet your
          specific needs. Whether you’re celebrating a birthday, planning a team building activity, or looking for a pre-wedding event,
          we can tailor our offerings to fit your occasion. Want to add premium tapas or participate in dessert making? We’ve got you covered.
          We want to make sure your event is exactly how you envision it.
        </p>
      </div>

      {/* Shared Layout Across All Devices */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-6 lg:gap-10">
        {/* Left Side - Text Slider */}
        <div className="w-full lg:w-1/2">
          <Slider {...settings}>
            {privateClassesData.map((item) => (
              <div key={item.id}>
                <div className="bg-[#0f0f0f] border border-[#2a2a2a] p-6 sm:p-8 rounded-xl shadow-sm transition-all duration-300 mt-4">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-2">
                    {item.description}
                  </p>
                  <p className="text-gray-400 text-xs sm:text-sm">{item.bookingText}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Right Side - Always Static Image */}
        <div className="w-full lg:w-1/2 overflow-hidden rounded-lg">
          <img
            src={privateClassesData[0].image}
            alt="Private Class"
            className="rounded-lg w-full h-auto object-cover transition-all duration-300 hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Private_Classes;
