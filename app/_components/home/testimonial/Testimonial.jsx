"use client";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import {
  FaQuoteLeft,
  FaArrowRightLong,
  FaArrowLeftLong,
} from "react-icons/fa6";
import { IoStar } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionContent from "../../Utilites/SectionContent/SectionContent";
import { RiArrowRightDoubleFill } from "react-icons/ri";

const testimonials = [
  {
    name: "Francisco",
    quote:
      "Highly recommended! Paella is not a trivial dish to prepare. Chef Gabriel and his associates made everyone feel welcome, encouraged everyone to actively participate in cooking, demonstrated the basics and nuances of preparing seafood and vegetarian versions of the dish, fed us delightfully, and sent us on our way with recipes and a fresh appreciation for the culinary arts. We would cheerfully take this class again.",
    image:
      "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Home%20page/What%20Our%20Guests%20Say/Francisco%20.avif",
    date: "July 2024",
  },
  {
    name: "Bruce Girton",
    quote:
      "Highly recommended! Paella is not a trivial dish to prepare. Chef Gabriel and his associates made everyone feel welcome, encouraged everyone to actively participate in cooking, demonstrated the basics and nuances of preparing seafood and vegetarian versions of the dish, fed us delightfully, and sent us on our way with recipes and a fresh appreciation for the culinary arts. We would cheerfully take this class again.",
    image:
      "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Home%20page/What%20Our%20Guests%20Say/Bruce%20Girton.avif",
    date: "June 2024",
  },
  {
    name: "Robin",
    quote:
      "My friends and I came to Barcelona and decided to do this for our friend's 40th birthday. We learned so many neat and exciting things, which I won't spoil here – check it out for yourself! If you're looking for something exclusive and different from the many other tourist activities you can find in Barcelona, this is worth checking out!",
    image:
      "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Home%20page/What%20Our%20Guests%20Say/Robin%20.avif",
    date: "May 2024",
  },
  {
    name: "Ximena",
    quote:
      "Highly recommended! Paella is not a trivial dish to prepare. Chef Gabriel and his associates made everyone feel welcome, encouraged everyone to actively participate in cooking, demonstrated the basics and nuances of preparing seafood and vegetarian versions of the dish, fed us delightfully, and sent us on our way with recipes and a fresh appreciation for the culinary arts. We would cheerfully take this class again.",
    image:
      "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Home%20page/What%20Our%20Guests%20Say/Ximena%20M.avif",
    date: "April 2024",
  },
];

const Testimonial = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    arrows: false,
    beforeChange: (_, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1224,
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
    ],
  };

  return (
    <section className="topContainer">
      <div className="myContainer">
        {/* Heading */}
        <div className="flex justify-center mb-6">
          <div className="lg:text-center">
            <SectionContent
              icon={RiArrowRightDoubleFill}
              tooltrip={"Testimonials"}
              tooltripClass={
                "bg-yellow-300 text-black border border-yellow-300"
              }
              heading={"What Our Guests Say"}
              hedingClass={
                "text-white drop-shadow-[0_2px_10px_rgba(255,215,0,0.4)]"
              }
              desCription={
                "Discover the culinary experiences that have delighted our guests. From cooking classes to private events, hear firsthand how our passion for gastronomy has created unforgettable memories."
              }
              desCriptionClass={"text-white max-w-4xl mx-auto"}
            />
          </div>
        </div>

        {/* Slider */}
        <Slider {...settings} ref={sliderRef}>
          {testimonials.map((item, idx) => (
            <div key={idx} className="lg:px-3">
              <div
                className={`mbg rounded-xl shadow-lg p-6 lg:h-[330px] h-1024-1370 border border-gray-600 transition-all duration-500 ${
                  currentSlide === idx
                    ? "scale-100 opacity-100"
                    : "scale-85 opacity-60"
                }`}
              >
                {/* Header Row: Avatar + Name/Date + Rating */}
                <div className="flex flex-col md:flex-row justify-between lg:items-center mb-4">
                  <div className="flex items-center  gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-xl text-gray-200 font-semibold">
                        {item.name}
                      </h4>
                      <p className="text-sm text-gray-300">{item.date}</p>
                    </div>
                  </div>
                  <div className="flex text-yellow-400 gap-1 text-lg pt-6 md:pt-0">
                    {[...Array(5)].map((_, i) => (
                      <IoStar key={i} />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <div className="text-gray-100 text-sm mb-4">
                  <FaQuoteLeft className="inline-block text-yellow-400 mr-2" />
                  {item.quote}
                </div>

                <a
                  href="#"
                  className="text-sm text-yellow-500 font-medium hover:underline"
                >
                  Read more →
                </a>
              </div>
            </div>
          ))}
        </Slider>

        {/* Centered Arrows Below Slider */}
        <div className="hidden lg:flex justify-center items-center mt-8 gap-8">
          <button onClick={() => sliderRef.current?.slickPrev()}>
            <FaArrowLeftLong className="text-gray-300  text-lg hover:text-yellow-400  transition cursor-pointer" />
          </button>
          <button onClick={() => sliderRef.current?.slickNext()}>
            <FaArrowRightLong className="text-gray-300  text-lg hover:text-yellow-400 transition cursor-pointer" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
