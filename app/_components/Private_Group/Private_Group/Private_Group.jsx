import React from "react";
import "./private.css";

const PrivateGroup = () => {
  return (
    <div className="bg-[#121212] text-white py-8 sm:py-12 px-4 sm:px-6  md:px-2 lg:px-10 2xl:px-24 flex flex-col md:flex-row items-center gap-8 sm:gap-6 lg:gap-6 2xl:gap-12 transition-all duration-300">
      
      {/* Left Side - Images */}
      <div className="relative w-full md:w-1/2 h-auto min-h-[320px] md:h-[550px] lg:h-[380px] xl:h-[500px] 2xl:h-[580px]">
        
        {/* Mobile & sm screens: stacked full-width images */}
        <div className="flex flex-col sm:flex-row sm:gap-4 md:hidden">
          <img
            src="https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Private%20%20group/paellaand_sangria_private_group_event_gastronomic_arts_barcelona.avif"
            alt="Paella Event"
            className="w-full h-60 sm:h-60   object-fill rounded-xl shadow-lg mb-4 sm:mb-0"
          />
          <img
            src="https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Private%20%20group/guests_on_rooftop_party_gastronomic_arts_barcelona_overlooking_city.avif"
            alt="Rooftop Party"
            className="w-full sm:w-1/2 h-60 sm:h-60 object-fill rounded-xl shadow-lg"
          />
        </div>

        {/* md layout: 2 images on top row, 1 full-width below */}
       <div className="hidden md:block lg:hidden w-full space-y-4">
  {/* Top Row: 1st and 2nd images */}
  <div className="flex gap-4">
    <div className="w-1/2">
      <img
        src="https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Private%20%20group/paellaand_sangria_private_group_event_gastronomic_arts_barcelona.avif"
        alt="Paella Event"
        className="h-60 w-full object-cover rounded-xl shadow-md"
      />
    </div>
    <div className="w-1/2">
      <img
        src="https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Private%20%20group/guests_on_rooftop_party_gastronomic_arts_barcelona_overlooking_city.avif"
        alt="Rooftop Party"
        className="h-60 w-full object-cover rounded-xl shadow-md"
      />
    </div>
  </div>

  {/* Bottom Row: 3rd image full width */}
  <div className="w-full">
    <img
      src="https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Private%20%20group/GabLab_BCN_Dec2023_1907.avif"
      alt="Group Cooking"
      className="h-60 w-full object-cover rounded-xl shadow-md"
    />
  </div>
</div>


        {/* Extra image for sm screens only */}
        <img
          src="https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Private%20%20group/GabLab_BCN_Dec2023_1907.avif"
          alt="Group Cooking"
          className="block md:hidden w-full h-60 sm:h-60 object-fill rounded-xl shadow-lg mt-4"
        />

        {/* lg layout: small overlapping images */}
        <div className="hidden lg:block xl:hidden">
          <img
            src="https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Private%20%20group/paellaand_sangria_private_group_event_gastronomic_arts_barcelona.avif"
            alt="Paella Event"
            className="absolute w-36 h-44 object-cover rounded-xl shadow-lg top-0 left-0 z-30"
          />
          <img
            src="https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Private%20%20group/guests_on_rooftop_party_gastronomic_arts_barcelona_overlooking_city.avif"
            alt="Rooftop Party"
            className="absolute w-36 h-44 object-cover rounded-xl shadow-lg top-28 left-40 z-20"
          />
          <img
            src="https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Private%20%20group/GabLab_BCN_Dec2023_1907.avif"
            alt="Group Cooking"
            className="absolute w-36 h-44 object-cover rounded-xl shadow-lg top-56 left-80 z-10"
          />
        </div>

        {/* xl & 2xl layout: larger overlapping images */}
        <div className="hidden xl:block">
          <img
            src="https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Private%20%20group/paellaand_sangria_private_group_event_gastronomic_arts_barcelona.avif"
            alt="Paella Event"
            className="absolute w-44 2xl:w-53 h-52 2xl:h-64 object-cover rounded-xl shadow-lg top-0 left-0 z-30"
          />
          <img
            src="https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Private%20%20group/guests_on_rooftop_party_gastronomic_arts_barcelona_overlooking_city.avif"
            alt="Rooftop Party"
            className="absolute w-44 2xl:w-53 h-52 2xl:h-64 object-cover rounded-xl shadow-lg top-36 left-48 2xl:top-40 2xl:left-56 z-20"
          />
          <img
            src="https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Private%20%20group/GabLab_BCN_Dec2023_1907.avif"
            alt="Group Cooking"
            className="absolute w-44 2xl:w-53 h-52 2xl:h-64 object-cover rounded-xl shadow-lg top-72 left-96 2xl:top-80 2xl:left-[28rem] z-10"
          />
        </div>
      </div>

      {/* Right Side - Text */}
      <div className="text-center md:text-left w-full md:w-1/2">
        <p className="text-sm sm:text-base md:text-2xl lg:text-sm xl:text-2xl">
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
