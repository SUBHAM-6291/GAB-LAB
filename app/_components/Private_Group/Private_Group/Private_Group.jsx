import React from "react";
import './private.css';

const PrivateGroup = () => {
  return (
    <div className="bg-[#121212] text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-10 2xl:px-24 flex flex-col md:flex-row items-center gap-8 sm:gap-6 lg:gap-6 2xl:gap-12">
      {/* Left Side - Images */}
      <div className="relative w-full md:w-1/2 h-auto md:h-[550px] lg:h-[380px] xl:h-[500px] 2xl:h-[580px]">
        {/* sm and below (including 320px): stacked, full-width */}
        <div className="md:flex md:gap-4 md:mb-4 lg:hidden">
          <img
            src="https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Private%20%20group/paellaand_sangria_private_group_event_gastronomic_arts_barcelona.avif"
            alt="Paella Event"
            className="w-full md:w-1/2 h-48 sm:h-52 md:h-64 object-contain rounded-xl shadow-lg mb-4 md:mb-0"
          />
          <img
            src="https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Private%20%20group/guests_on_rooftop_party_gastronomic_arts_barcelona_overlooking_city.avif"
            alt="Rooftop Party"
            className="w-full md:w-1/2 h-48 sm:h-52 md:h-64 object-contain rounded-xl shadow-lg mb-4 md:mb-0"
          />
        </div>
        <img
          src="https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Private%20%20group/GabLab_BCN_Dec2023_1907.avif"
          alt="Group Cooking"
          className="w-full h-48 sm:h-52 md:h-64 object-contain rounded-xl shadow-lg lg:hidden"
        />
        {/* lg layout: smaller overlapping images */}
        <img
          src="https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Private%20%20group/paellaand_sangria_private_group_event_gastronomic_arts_barcelona.avif"
          alt="Paella Event"
          className="hidden lg:block xl:hidden w-full lg:w-36 h-48 lg:h-44 object-contain rounded-xl shadow-lg mb-4 lg:mb-0 lg:absolute lg:top-0 lg:left-0 lg:z-30"
        />
        <img
          src="https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Private%20%20group/guests_on_rooftop_party_gastronomic_arts_barcelona_overlooking_city.avif"
          alt="Rooftop Party"
          className="hidden lg:block xl:hidden w-full lg:w-36 h-48 lg:h-44 object-contain rounded-xl shadow-lg mb-4 lg:mb-0 lg:absolute lg:top-28 lg:left-40 lg:z-20"
        />
        <img
          src="https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Private%20%20group/GabLab_BCN_Dec2023_1907.avif"
          alt="Group Cooking"
          className="hidden lg:block xl:hidden w-full lg:w-36 h-48 lg:h-44 object-contain rounded-xl shadow-lg mb-4 lg:mb-0 lg:absolute lg:top-56 lg:left-80 lg:z-10"
        />
        {/* xl and 2xl layout: larger overlapping images */}
        <img
          src="https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Private%20%20group/paellaand_sangria_private_group_event_gastronomic_arts_barcelona.avif"
          alt="Paella Event"
          className="hidden xl:block w-full xl:w-44 2xl:w-56 h-48 xl:h-52 2xl:h-64 object-contain rounded-xl shadow-lg mb-4 xl:mb-0 xl:absolute xl:top-0 xl:left-0 xl:z-30"
        />
        <img
          src="https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Private%20%20group/guests_on_rooftop_party_gastronomic_arts_barcelona_overlooking_city.avif"
          alt="Rooftop Party"
          className="hidden xl:block w-full xl:w-44 2xl:w-56 h-48 xl:h-52 2xl:h-64 object-contain rounded-xl shadow-lg mb-4 xl:mb-0 xl:absolute xl:top-36 xl:left-48 2xl:top-40 2xl:left-56 xl:z-20"
        />
        <img
          src="https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Private%20%20group/GabLab_BCN_Dec2023_1907.avif"
          alt="Group Cooking"
          className="hidden xl:block w-full xl:w-44 2xl:w-56 h-48 xl:h-52 2xl:h-64 object-contain rounded-xl shadow-lg mb-4 xl:mb-0 xl:absolute xl:top-72 xl:left-96 2xl:top-80 2xl:left-112 xl:z-10"
        />
      </div>

      {/* Right Side - Text */}
      <div className="text-center md:text-left w-full md:w-1/2">
        <p className="text-sm sm:text-base md:text-2xl lg:text-sm xl:text-base">
          Unforgettable Events, Perfectly Crafted
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-3xl xl:text-5xl font-bold mb-4 leading-tight">
          Experience Matters – And <br /> We’ve Got Plenty
        </h2>
        <p className="text-gray-400 mb-6 text-base sm:text-lg lg:text-base xl:text-lg 2xl:text-2xl">
          We've done this more than once, and we know exactly how to put on an
          exceptional event. From start to finish, our team ensures every detail
          is expertly managed, leaving you free to enjoy the experience. Let us
          make your next event truly unforgettable!
        </p>
        <button className="bg-white text-black px-6 lg:px-5 xl:px-6 2xl:px-8 py-3 lg:py-2.5 xl:py-3 2xl:py-4 rounded-md font-medium hover:bg-gray-200 transition text-base lg:text-sm xl:text-base 2xl:text-xl">
          Request a Quote
        </button>
      </div>
    </div>
  );
};

export default PrivateGroup;