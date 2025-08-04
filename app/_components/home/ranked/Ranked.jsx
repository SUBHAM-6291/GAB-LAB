"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa6";
import Marquee from "react-fast-marquee";

const awards = [
  "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Home%20page/Awards/award-one.avif",
  "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Home%20page/Awards/award-two.avif",
  "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Home%20page/Awards/awards-three.avif",
  "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Home%20page/Awards/awardsfour.avif",
  "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Home%20page/Awards/awards-five.avif",
  "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Home%20page/Awards/awards-five.avif",
];

const reviewLogos = [
  {
    href: "https://www.tripadvisor.com/",
    src: "/tripadvisorfivestarrating.avif",
    alt: "tripadvisor",
  },
  {
    href: "https://www.viator.com/",
    src: "/viator.avif",
    alt: "viator",
  },
  {
    href: "https://www.google.com/maps",
    src: "/5stargooglewhitemin.avif",
    alt: "google reviews",
  },
  {
    href: "https://www.airbnb.com/",
    src: "/aribnb.avif",
    alt: "airbnb",
  },
  {
    href: "https://www.cookly.me/",
    src: "/cookly.png",
    alt: "cookly",
  },
];
const StarRating = ({ rating = 5 }) => {
  return (
    <div className="flex items-center gap-2 lg:gap-6">
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={i <= rating ? "text-yellow-400" : "text-gray-400"}
        >
          <FaStar className="text-3xl" />
        </span>
      ))}
    </div>
  );
};

const Ranked = () => {
  const [current, setCurrent] = useState(0);

  const settings = {
    className: "center",
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    slidesToShow: 5,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    beforeChange: (_, next) => setCurrent(next),
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="myContainer mt-[100px]">
      <div className="flex flex-col items-center text-center gap-2">
        <StarRating rating={5} />
        <h2 className="subHeding">
          We are Barcelona’s #1 cooking class with more than 4,000 five-star
          reviews
          <br className="hidden xl:block" />
          and in 2025, ranked among the top 10 culinary experiences in Europe!
        </h2>
      </div>

      <div className="my-10">
        <Slider {...settings}>
          {awards.map((src, idx) => (
            <div key={idx} className="lg:px-2">
              <div
                className={`transition-transform duration-500 ease-in-out transform items-center ${
                  idx === current ? "scale-100" : "scale-70 opacity-50"
                }`}
              >
                <Image
                  src={src}
                  alt={`Award ${idx + 1}`}
                  width={600}
                  height={400}
                  className="rounded-xl object-cover w-full h-auto shadow-xl"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="">
        <Marquee
          gradient={true}
          gradientColor="black"
          speed={50}
          pauseOnHover={true}
          loop={0}
          autoFill={true}
          style={{ display: "flex", zIndex: 0 }}
        >
          {reviewLogos.map((logo, index) => (
            <div
              key={index}
              className="mx-2 bg-white/5 p-3 rounded-lg flex items-center justify-center min-w-[90px] h-[70px] backdrop-blur-sm border border-white/10 shadow transition-transform duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={40}
                unoptimized
                className="object-contain max-h-full w-full"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Ranked;
