"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const missionData = [
    {
      id: 1,
      img: "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Home%20page/Banner/b35a91_edb1140c53e04abfb3f50d64bea6d744~mv2.avif",
      title: "",
      subtitle:
        "",
    },
    {
      id: 2,
      img: "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Home%20page/Banner/b35a91_edb1140c53e04abfb3f50d64bea6d744~mv2.avif",
      title: "",
      subtitle:
        "",
    },
    {
      id: 3,
      img: "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Home%20page/Banner/b35a91_edb1140c53e04abfb3f50d64bea6d744~mv2.avif",
      title: "",
      subtitle:
        "",
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
    <section className="w-full py-[100px]">
      <div className="">
        <Slider {...settings}>
          {missionData.map((mission) => (
            <div key={mission.id} className="px-2">
              <div className="relative rounded-2xl overflow-hidden shadow-lg h-[450px]">
                <Image
                  src={mission.img}
                  alt={mission.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>
                
                <div className="absolute bottom-6 left-6 text-white max-w-[85%]">
                  <h2 className="text-[28px] sm:text-[32px] font-bold text-[#A5C663] leading-[68px] capitalize">
                    {mission.title}
                  </h2>
                  <p className="text-sm sm:text-base leading-relaxed">
                    {mission.subtitle}
                  </p>
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