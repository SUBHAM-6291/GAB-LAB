"use client";

import React from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { OutlineBtn } from "../../Utilites/BtnComponent/MyBtn";
import SectionContent from "../../Utilites/SectionContent/SectionContent";
import { TiGroup } from "react-icons/ti";

// Content data array
const bannerContent = [
  {
    heading: "Tailored Culinary Experiences for Private Group Events",
    description:
      "Discover personalized culinary experiences tailored for your private group. Enjoy hands-on cooking classes, market tours, and authentic Spanish cuisine in the heart of Barcelona. Perfect for team building, family gatherings, and special occasions.",
  },
];

// Image columns data
const columnImages = [
  [
    {
      src: "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Private%20%20group/Private%20Classes/ryanthomas001_as_students_standing_around_a_cooking_school_tabl_568506dfd8f44c2b98424f0a34.avif",
      height: "h-64",
    },
    {
      src: "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Private%20%20group/guests_on_rooftop_party_gastronomic_arts_barcelona_overlooking_city.avif",
      height: "h-40",
    },
  ],
  [
    {
      src: "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Private%20%20group/GabLab_BCN_Dec2023_1907.avif",
      height: "h-40",
    },
    {
      src: "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Private%20%20group/paellaand_sangria_private_group_event_gastronomic_arts_barcelona.avif",
      height: "h-64",
    },
  ],
  [
    {
      src: "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/our%20story/partnership/parthnership.avif",
      height: "h-64",
    },
    {
      src: "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/our%20story/about%20us/Gastronomic-Arts-Barcelona-Paella-Cooking-Experience-aprons.avif",
      height: "h-40",
    },
  ],
];

const Banner = () => {
  return (
    <div className="w-full pt-15 bg-black text-white">
      <div className="myContainer grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Text Content */}
        <div className="space-y-6">
          <SectionContent
          icon={TiGroup}
            tooltrip={"Privet Group"}
            tooltripClass={"bg-yellow-300 text-black"}
            heading={bannerContent[0].heading}
            hedingClass={"text-white drop-shadow-[0_2px_10px_rgba(255,215,0,0.4)]"         
            }
            desCription={bannerContent[0].description}
            desCriptionClass={"text-gray-200"}
          />
          <OutlineBtn
            icon={FaQuoteLeft}
            label={"Request a Quote"}
            type="button"
            onClick={() => console.log("button")}
          />
        </div>

        {/* Right Side Image Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {columnImages.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-4">
              {column.map((img, i) => (
                <div
                  key={i}
                  className={`relative overflow-hidden rounded-lg shadow-lg group ${img.height}`}
                >
                  <Image
                    src={img.src}
                    alt={`Gallery image ${colIndex}-${i}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
