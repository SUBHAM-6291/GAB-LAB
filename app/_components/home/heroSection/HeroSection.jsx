"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const gablab = [
    {
      id: 1,
      img: "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Home%20page/Banner/b35a91_edb1140c53e04abfb3f50d64bea6d744~mv2.avif",
      title: "Barcelona’s Best Paella Cooking Class & Culinary Experience",
      sublineText:
        "Join Barcelona’s top-rated paella cooking class with market tour & tapas tasting and much more.  Experience an authentic hands-on Spanish cooking class in the heart of Barcelona. Begin with a guided visit of La Boqueria market, followed by a sangria-making workshop, traditional tapas tasting, and step-by-step paella preparation led by expert local instructors. Perfect for food lovers seeking a unique culinary adventure in Barcelona.",
      bookBtn: "Book Now",
      eventBtn: "Plan a Group Event",
    },
    {
      id: 2,
      img: "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Home%20page/Banner/b35a91_edb1140c53e04abfb3f50d64bea6d744~mv2.avif",
      title: "",
      sublineText:
        "Join Barcelona’s top-rated paella cooking class with market tour & tapas tasting and much more.  Experience an authentic hands-on Spanish cooking class in the heart of Barcelona. Begin with a guided visit of La Boqueria market, followed by a sangria-making workshop, traditional tapas tasting, and step-by-step paella preparation led by expert local instructors. Perfect for food lovers seeking a unique culinary adventure in Barcelona.",
      bookBtn: "Book Now",
      eventBtn: "Plan a Group Event",
    },
    {
      id: 3,
      img: "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Home%20page/Banner/b35a91_edb1140c53e04abfb3f50d64bea6d744~mv2.avif",
      title: "",
      sublineText:
        "Join Barcelona’s top-rated paella cooking class with market tour & tapas tasting and much more.  Experience an authentic hands-on Spanish cooking class in the heart of Barcelona. Begin with a guided visit of La Boqueria market, followed by a sangria-making workshop, traditional tapas tasting, and step-by-step paella preparation led by expert local instructors. Perfect for food lovers seeking a unique culinary adventure in Barcelona.",
      bookBtn: "Book Now",
      eventBtn: "Plan a Group Event",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1536,
        settings: { slidesToShow: 1, centerPadding: "200px" },
      },
      {
        breakpoint: 1280,
        settings: { slidesToShow: 1, centerPadding: "160px" },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1, centerPadding: "80px" },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, centerPadding: "40px" },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, centerPadding: "20px" },
      },
    ],
  };

  return (
    <section className="w-full pt-[30px]">
      <div className="">
        <Slider {...settings}>
          {gablab.map((gablabBanner) => (
            <div key={gablabBanner.id} className="px-2">
              <div className="relative rounded-2xl overflow-hidden shadow-lg h-[580px]">
                <Image
                  src={gablabBanner.img}
                  alt={gablabBanner.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="absolute bottom-6 left-6 text-white max-w-[85%]">
                  <h2 className="heding">
                    {gablabBanner.title}
                  </h2>
                  <p className="desc">
                    {gablabBanner.sublineText}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <button className="bg-[#A5C663] text-black font-semibold px-6 py-2 rounded hover:bg-[#8bb54c] transition duration-300">
                      {gablabBanner.bookBtn}
                    </button>
                    <button className="border border-white text-white font-semibold px-6 py-2 rounded hover:bg-white hover:text-black transition duration-300">
                      {gablabBanner.eventBtn}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HeroSection;
