"use client";

import React from "react";
import Image from "next/image";
import SectionContent from "../../Utilites/SectionContent/SectionContent";
import { GiCampCookingPot } from "react-icons/gi";
import { BgBtn } from "../../Private_Group/Tell_us_More_Here/Tell_us_More_Here";

const DelightTheSenses = () => {
  const leftContent = {
    tooltrip: "Delight the Senses",
    heading: (
      <>
        Our Paella Cooking Class <br />
        <span className="text-yellow-300">Delights the Senses!</span>
      </>
    ),
    description: (
      <>
        From selecting the finest ingredients to mastering secret techniques,
        this immersive experience is a journey through flavors, aromas, and joy.
        <br /> <br />
        Relish vibrant colors, aromatic spices, and the art of sharing an
        iconic dish with fellow food enthusiasts.
      </>
    ),
    buttonText: "Make a Reservation",
  };

  const columnImages = [
    [
      {
        src: "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Private%20%20group/guests_on_rooftop_party_gastronomic_arts_barcelona_overlooking_city.avif",
        height: "h-64",
      },
      {
        src: "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Private%20%20group/GabLab_BCN_Dec2023_1907.avif",
        height: "h-40",
      },
    ],
    [
      {
        src: "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Private%20%20group/paellaand_sangria_private_group_event_gastronomic_arts_barcelona.avif",
        height: "h-40",
      },
      {
        src: "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Home%20page/join%20cooking%20class/slide-one.jpg",
        height: "h-64",
      },
    ],
    [
      {
        src: "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Private%20%20group/Private%20Classes/ryanthomas001_as_students_standing_around_a_cooking_school_tabl_568506dfd8f44c2b98424f0a34.avif",
        height: "h-64",
      },
      {
        src: "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/our%20story/about%20us/Gastronomic-Arts-Barcelona-Paella-Cooking-Experience-aprons.avif",
        height: "h-40",
      },
    ],
  ];

  return (
    <section className="topContainer">
      <div className="myContainer grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Text Content */}
        <div>
          <SectionContent
            icon={GiCampCookingPot}
            tooltrip={leftContent.tooltrip}
            tooltripClass={
              "border border-yellow-300 bg-yellow-300 text-black flex justify-center items-center"
            }
            heading={leftContent.heading}
            hedingClass={
              "text-white max-w-5xl drop-shadow-[0_2px_10px_rgba(255,215,0,0.4)]"
            }
            desCription={leftContent.description}
            desCriptionClass={"text-white max-w-5xl"}
          />

          <div className="mt-6">
            <BgBtn label={leftContent.buttonText} />
          </div>
        </div>

        {/* Right Gallery */}
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
    </section>
  );
};

export default DelightTheSenses;
