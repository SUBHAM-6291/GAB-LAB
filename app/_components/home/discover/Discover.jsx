'use client';
import React from "react";
import Image from "next/image";
import { OutlineBtn } from "../../Utilites/BtnComponent/MyBtn";

const content = [
  {
    heading: "Discover Why We're Barcelona's Premiere Choice",
    description: `Discover firsthand why we're hailed as Barcelona's top choice for culinary adventures! Immerse yourself in our real customer testimonials and join us in celebrating the exceptional moments we've crafted together. Each review is a testament to our unwavering commitment to excellence and the unparalleled experiences we offer. Consistently rated best in class across platforms like TripAdvisor, Google Business, Cookly, Viator, Airbnb Experiences, Get Your Guide, and more, our reputation speaks for itself. As a 2024 Tripadvisor Travellers' Choice Award winner, come and experience the difference for yourself and embark on a culinary journey unlike any other.`,
    buttonLabel: "Join Our Class",
    backgroundImage:
      "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Home%20page/CTA%20-july%20summer/summer-off.avif",
  },
];

const Discover = () => {
  return (
    <div className="topContainer myContainer relative w-full min-h-[400px] text-black overflow-hidden">
      {content.map((item, index) => (
        <div key={index} className="relative w-full h-full">
          {/* Background Image */}
          <Image
            src={item.backgroundImage}
            alt="Discover Background"
            fill
            className="object-cover grayscale-100 opacity-50 rounded-2xl "
            priority
          />

          {/* Top & Bottom Gradient Overlay */}
          {/* <div className="absolute top-0 left-0 w-full h-full z-[1] pointer-events-none">
            <div className="absolute top-0 w-full h-[600px] md:h-[100px] bg-gradient-to-b from-black via-transparent"></div>
            <div className="absolute bottom-0 w-full h-[600px] md:h-[100px] bg-gradient-to-t from-black via-transparent"></div>
          </div> */}

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center items-center md:text-center h-full py-4 lg:py-8 px-4 md:px-6 lg:px-10">
            <h2 className="text-[24px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-bold md:leading-[50px] lg:leading-[72px] pb-6 text-yellow-300 max-w-5xl">
              {item.heading}
            </h2>
            <p className="desc max-w-5xl">{item.description}</p>
            <OutlineBtn
              label="Join Our Classes"
              type="button"
              onClick={() => console.log("Join Our Classes")}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Discover;
