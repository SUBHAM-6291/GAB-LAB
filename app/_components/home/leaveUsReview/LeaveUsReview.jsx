"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoStar } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { OutlineBtn } from "../../Utilites/BtnComponent/MyBtn";

const Rivew = [
  {
    name: "Colin Mallee",
    quote:
      "Teressa was so fun and knowledgable. Her and Maria were very accommodating for my wife and I’s dietary preferences. We had such a fun time learning the technique and culture surrounding paella.",
    image:
      "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Home%20page/What%20Our%20Guests%20Say/Francisco%20.avif",
    date: "2025-07-27",
  },
  {
    name: "Colin Mallee",
    quote:
      "Teressa was so fun and knowledgable. Her and Maria were very accommodating for my wife and I’s dietary preferences. We had such a fun time learning the technique and culture surrounding paella.",
    image:
      "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Home%20page/What%20Our%20Guests%20Say/Francisco%20.avif",
    date: "2025-07-27",
  },
  {
    name: "Colin Mallee",
    quote:
      "Teressa was so fun and knowledgable. Her and Maria were very accommodating for my wife and I’s dietary preferences. We had such a fun time learning the technique and culture surrounding paella.",
    image:
      "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Home%20page/What%20Our%20Guests%20Say/Francisco%20.avif",
    date: "2025-07-27",
  },
  {
    name: "Colin Mallee",
    quote:
      "Teressa was so fun and knowledgable. Her and Maria were very accommodating for my wife and I’s dietary preferences. We had such a fun time learning the technique and culture surrounding paella.",
    image:
      "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Home%20page/What%20Our%20Guests%20Say/Francisco%20.avif",
    date: "2025-07-27",
  },
  {
    name: "Colin Mallee",
    quote:
      "Teressa was so fun and knowledgable. Her and Maria were very accommodating for my wife and I’s dietary preferences. We had such a fun time learning the technique and culture surrounding paella.",
    image:
      "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Home%20page/What%20Our%20Guests%20Say/Francisco%20.avif",
    date: "2025-07-27",
  },
];

const LeaveUsReview = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section className="topContainer">
      <div className="myContainer">
        <div className="">
          <Slider {...settings}>
            {Rivew.map((item, index) => (
              <div className="relative mb-26" key={index}>
                <div className="md:mx-4 bg-gradient-to-t from-[#303030] to-[#000000] h-[200px] flex flex-col items-center">
                  <div className="p-5 text-center">
                    <div className="flex justify-center gap-1 mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <IoStar key={i} className="text-yellow-400 w-5 h-5" />
                      ))}
                    </div>
                    <p className="desc line-clamp-4">{item.quote}</p>
                    <FcGoogle size={24} className="mt-4" />
                  </div>
                </div>

                
                <div className="w-[90%] h-1 mx-auto mt-0 relative overflow-hidden custom-rgb-bar"></div>

                <div className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 z-50">
                  <div className="flex flex-col items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-full"
                    />

                    <div className="text-center">
                      <h3 className="text-white font-bold text-2xl">
                        {item.name}
                      </h3>
                      <p className="text-gray-400">{item.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
                   
          </Slider>
          <div className="flex justify-center mt-8">
            <Link
              href="https://www.mango-digital.com/google-reviews-slider-wix-app"
              target="_blank"
            >
              <OutlineBtn label="Verified Reviews" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaveUsReview;
