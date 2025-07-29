'use client'
import React from 'react';
import SectionContent from '../../Utilites/SectionContent/SectionContent';
import './private.css';
import { OutlineBtn } from '../../Utilites/BtnComponent/MyBtn';

const privateGroupImages = [
  {
    id: 1,
    src: 'https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Private%20%20group/paellaand_sangria_private_group_event_gastronomic_arts_barcelona.avif',
    alt: 'Paella Event',
  },
  {
    id: 2,
    src: 'https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Private%20%20group/guests_on_rooftop_party_gastronomic_arts_barcelona_overlooking_city.avif',
    alt: 'Rooftop Party',
  },
  {
    id: 3,
    src: 'https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Private%20%20group/GabLab_BCN_Dec2023_1907.avif',
    alt: 'Group Cooking',
  },
];

const PrivateGroup = () => {
  return (
    <div className="bg-[#121212] text-white myContainer  py-8 sm:py-12 flex flex-col md:flex-row items-center gap-8 sm:gap-6 lg:gap-6 2xl:gap-20 transition-all duration-300">
      {/* Left Side - Images */}
      <div className="relative w-full md:w-1/2 h-auto min-h-[320px] md:h-[550px] lg:h-[380px] xl:h-[500px] 2xl:h-[580px]">
        {/* Mobile & sm screens: stacked full-width images */}
        <div className="flex flex-col sm:flex-row sm:gap-4 md:hidden">
          <img
            src={privateGroupImages[0].src}
            alt={privateGroupImages[0].alt}
            className="w-full h-60 sm:h-60 object-cover rounded-xl shadow-lg mb-4 sm:mb-0"
          />
          <img
            src={privateGroupImages[1].src}
            alt={privateGroupImages[1].alt}
            className="w-full sm:w-1/2 h-60 sm:h-60 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* md layout: 2 images on top row, 1 full-width below */}
        <div className="hidden md:block lg:hidden w-full space-y-4">
          <div className="flex gap-4">
            <div className="w-1/2">
              <img
                src={privateGroupImages[0].src}
                alt={privateGroupImages[0].alt}
                className="h-60 w-full object-cover rounded-xl shadow-md"
              />
            </div>
            <div className="w-1/2">
              <img
                src={privateGroupImages[1].src}
                alt={privateGroupImages[1].alt}
                className="h-60 w-full object-cover rounded-xl shadow-md"
              />
            </div>
          </div>
          <div className="w-full">
            <img
              src={privateGroupImages[2].src}
              alt={privateGroupImages[2].alt}
              className="h-62 w-full object-cover rounded-xl shadow-md"
            />
          </div>
        </div>

        {/* Extra image for sm screens only */}
        <img
          src={privateGroupImages[2].src}
          alt={privateGroupImages[2].alt}
          className="block md:hidden w-full h-60 sm:h-60 object-cover rounded-xl shadow-lg mt-4"
        />

      {/* lg layout: small overlapping images */}
<div className="hidden lg:block xl:hidden relative">
  <img
    src={privateGroupImages[0].src}
    alt={privateGroupImages[0].alt}
    className="absolute w-32 h-40 object-cover rounded-xl shadow-lg top-[-16px] left-0 z-30"
  />
  <img
    src={privateGroupImages[1].src}
    alt={privateGroupImages[1].alt}
    className="absolute w-32 h-40 object-cover rounded-xl shadow-lg top-18 left-36 z-20"
  />
  <img
    src={privateGroupImages[2].src}
    alt={privateGroupImages[2].alt}
    className="absolute w-32 h-40 object-cover rounded-xl shadow-lg top-44 left-72 z-10"
  />
</div>


        {/* xl & 2xl layout: larger overlapping images */}
        <div className="hidden xl:block">
          <img
            src={privateGroupImages[0].src}
            alt={privateGroupImages[0].alt}
            className="absolute w-44 2xl:w-53 h-52 2xl:h-64 object-cover rounded-xl shadow-lg top-0 left-0 z-30"
          />
          <img
            src={privateGroupImages[1].src}
            alt={privateGroupImages[1].alt}
            className="absolute w-44 2xl:w-53 h-52 2xl:h-64 object-cover rounded-xl shadow-lg top-36 left-48 2xl:top-40 2xl:left-56 z-20"
          />
          <img
            src={privateGroupImages[2].src}
            alt={privateGroupImages[2].alt}
            className="absolute w-44 2xl:w-53 h-52 2xl:h-64 object-cover rounded-xl shadow-lg top-72 left-96 2xl:top-80 2xl:left-[28rem] z-10"
          />
        </div>
      </div>

      {/* Right Side - Text */}
      <div className="text-left w-full md:w-1/2">
        <SectionContent
          tooltrip="Unforgettable Events"
          tooltripClass="yellow-desc"
          heading="Experience Matters – And We’ve Got Plenty"
          hedingClass="heding"
          desCription="We've done this more than once, and we know exactly how to put on an exceptional event. From start to finish, our team ensures every detail is expertly managed, leaving you free to enjoy the experience. Let us make your next event truly unforgettable!"
          desCriptionClass="desc mb-6"
        />
        <OutlineBtn
          label="Request a Quote"
          type="button"
          onClick={() => console.log("button")}
        />
      </div>
    </div>
  );
};

export default PrivateGroup;