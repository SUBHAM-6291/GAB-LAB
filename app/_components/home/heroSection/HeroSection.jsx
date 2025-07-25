"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const NextArrow = ({ onClick }) => (
  <div
    className="absolute bottom-5 xl:bottom-5 lg:right-15 xl:right-30 md:right-40 z-10 cursor-pointer text-white text-[22px] hidden lg:block"
    onClick={onClick}
  >
    <FaArrowRightLong />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute bottom-5 xl:bottom-5 lg:left-15 xl:left-30 md:left-40 z-10 cursor-pointer text-white text-[22px] hidden lg:block"
    onClick={onClick}
  >
    <FaArrowLeftLong />
  </div>
);

const HeroSection = () => {
  const gablab = [
    {
      id: 1,
      img: "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Home%20page/Banner/b35a91_edb1140c53e04abfb3f50d64bea6d744~mv2.avif",
      title: "Barcelona’s Best Paella Cooking Class & Culinary Experience",
      sublineText:
        "Join Barcelona’s top-rated paella cooking class with market tour & tapas tasting and much more. Experience an authentic hands-on Spanish cooking class in the heart of Barcelona. Begin with a guided visit of La Boqueria market, followed by a sangria-making workshop, traditional tapas tasting, and step-by-step paella preparation led by expert local instructors.",
      bookBtn: "Book Now",
      eventBtn: "Plan a Group Event",
    },
    {
      id: 2,
      img: "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Home%20page/Banner/b35a91_edb1140c53e04abfb3f50d64bea6d744~mv2.avif",
      title: "Hands-On Spanish Cooking in Barcelona",
      sublineText:
        "Join Barcelona’s top-rated paella cooking class with market tour & tapas tasting and much more. Experience an authentic hands-on Spanish cooking class in the heart of Barcelona. Begin with a guided visit of La Boqueria market, followed by a sangria-making workshop, traditional tapas tasting, and step-by-step paella preparation led by expert local instructors. Perfect for food lovers seeking a unique culinary adventure in Barcelona.",
      bookBtn: "Book Now",
      eventBtn: "Plan a Group Event",
    },
    {
      id: 3,
      img: "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Home%20page/Banner/b35a91_edb1140c53e04abfb3f50d64bea6d744~mv2.avif",
      title: "Cook. Eat. Celebrate.",
      sublineText:
        "Join Barcelona’s top-rated paella cooking class with market tour & tapas tasting and much more. Experience an authentic hands-on Spanish cooking class in the heart of Barcelona. Begin with a guided visit of La Boqueria market, followed by a sangria-making workshop, traditional tapas tasting, and step-by-step paella preparation led by expert local instructors. Perfect for food lovers seeking a unique culinary adventure in Barcelona.",
      bookBtn: "Book Now",
      eventBtn: "Plan a Group Event",
    },
  ];

  const socialLinks = [
    {
      id: 1,
      icon: <FaFacebookF size={28} />,
      href: "https://facebook.com",
      name: "Facebook",
    },
    {
      id: 2,
      icon: <FaInstagram size={28} />,
      href: "https://instagram.com",
      name: "Instagram",
    },
    {
      id: 3,
      icon: <FaYoutube size={28} />,
      href: "https://youtube.com",
      name: "YouTube",
    },
    {
      id: 4,
      icon: <FaLinkedinIn size={28} />,
      href: "https://linkedin.com",
      name: "LinkedIn",
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
    autoplay: true,
    autoplaySpeed: 6000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1536,
        settings: { slidesToShow: 1, centerPadding: "80px" },
      },
      {
        breakpoint: 1280,
        settings: { slidesToShow: 1, centerPadding: "160px" },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1, centerPadding: "0px" },
      },
    ],
  };

  return (
    <section className="w-full pt-4 lg:pt-8">
      <Slider {...settings}>
        {gablab.map((item) => (
          <div key={item.id} className="md:px-6">
            <div className="relative lg:rounded-2xl overflow-hidden shadow-lg h-[600px] md:h-[500px] lg:h-[580px]">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 z-0" />

              <div className="absolute inset-0 flex flex-col max-w-[1820px] mx-auto justify-center px-4 sm:px-6 md:px-10 text-white z-10">
                <div className="w-full md:max-w-md lg:max-w-3xl xl:max-w-4xl space-y-5 px-2 md:px-0 xl:px-8">
                  <h2 className="heding text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                    {item.title}
                  </h2>
                  <p className="desc text-sm sm:text-base md:text-lg">
                    {item.sublineText}
                  </p>
                  <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                    <button className="relative text-black text-[16px] font-medium px-6 py-3 rounded-md border border-yellow-300 hover:border-yellow-300 overflow-hidden group cursor-pointer">
                      <span className="relative z-10 transition duration-300 group-hover:text-white">
                        {item.bookBtn}
                      </span>
                      <span className="absolute left-0 top-0 h-full w-full bg-yellow-300 transition-all duration-300 group-hover:w-0 z-0"></span>
                    </button>

                    <button className="relative text-white text-[16px] font-medium px-6 py-3 rounded-md border border-yellow-300 hover:border-yellow-300 overflow-hidden group cursor-pointer">
                      <span className="relative z-10 transition duration-300 group-hover:text-black">
                        {item.eventBtn}
                      </span>
                      <span className="absolute left-0 top-0 h-full w-0 bg-yellow-300 transition-all duration-300 group-hover:w-full z-0"></span>
                    </button>
                  </div>
                </div>

                {/* Social Sidebar */}
                <div className="hidden md:flex w-[60px] h-[350px] backdrop-blur-2xl bg-black/40 flex-col justify-between items-center rounded-full absolute right-[20px] xl:right-[3.75rem] top-1/2 -translate-y-1/2 border border-white/20">
                  <div className="rotate-90 whitespace-nowrap pl-[9rem] font-bold text-white text-[18px]">
                    Follow now
                  </div>
                  <div className="flex flex-col items-center gap-5 py-4 ">
                    {socialLinks.map((link) => (
                      <a
                        key={link.id}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.name}
                        className="text-white hover:text-white transition duration-300 hover:scale-110 hover:drop-shadow-[0_0_5px_#000000]"
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSection;
