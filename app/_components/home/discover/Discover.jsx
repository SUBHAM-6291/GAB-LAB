"use client";
import React from "react";
import Image from "next/image";
import { BgBtn } from "../../Utilites/BtnComponent/MyBtn";
import SectionContent from "../../Utilites/SectionContent/SectionContent";
import { LiaCcDiscover } from "react-icons/lia";

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

          {/* Content */}
          <div className="relative z-10 grid place-items-center text-center py-4 lg:py-8 px-4 md:px-6 lg:px-10">
            <SectionContent
            icon={LiaCcDiscover}
              tooltrip="Discover Choice"
              tooltripClass="border border-yellow-300 text-yellow-300 flex justify-center inline-center"
              heading={item.heading}
              hedingClass="text-yellow-300 max-w-5xl drop-shadow-[0_2px_10px_rgba(255,215,0,0.4)]"
              desCription={item.description}
              desCriptionClass="text-white max-w-5xl"
            />

            <BgBtn
              label="Join Our Classes"
              type="button"
              onClick={() => console.log("Join Our Classes")}
              className="mt-8"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Discover;
