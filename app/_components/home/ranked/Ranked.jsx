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
          speed={30}
          gradient={true}
          gradientColor="black"
          autoFill={true}
          pauseOnHover={true}
        >
          <Link
            href="https://www.tripadvisor.com/"
            target="_blank"
            rel="noopener noreferrer"
            asChild
          >
            <img
              className="px-8 h-[60px]"
              src="/tripadvisorfivestarrating.avif"
              alt="tripadvisor"
            />
          </Link>

          <Link
            href="https://www.viator.com/"
            target="_blank"
            rel="noopener noreferrer"
            asChild
          >
            <img className="px-8 h-[60px]" src="/viator.avif" alt="viator" />
          </Link>

          <Link
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            asChild
          >
            <img
              className="px-8 h-[60px]"
              src="/5stargooglewhitemin.avif"
              alt="google reviews"
            />
          </Link>

          <Link
            href="https://www.airbnb.com/"
            target="_blank"
            rel="noopener noreferrer"
            asChild
          >
            <img className="px-8 h-[60px]" src="/aribnb.avif" alt="airbnb" />
          </Link>

          <Link
            href="https://www.cookly.me/"
            target="_blank"
            rel="noopener noreferrer"
            asChild
          >
            <img className="px-8 h-[60px]" src="/cookly.png" alt="cookly" />
          </Link>
        </Marquee>
      </div>
    </div>
  );
};

export default Ranked;
