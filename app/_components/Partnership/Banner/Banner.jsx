'use client';

import React from 'react';
import { FaHandshake } from 'react-icons/fa6';
import SectionContent from '../../Utilites/SectionContent/SectionContent'; // Adjust the import path as needed
import { OutlineBtn } from '../../Utilites/BtnComponent/MyBtn'; // Adjust the import path as needed

const Banner = () => {
  return (
    <div className="bg-black text-white myContainer mt-8 sm:mt-12 lg:flex lg:items-center lg:justify-between lg:gap-x-12">
      {/* Text Section */}
      <div className="lg:w-1/2">
        <SectionContent
          tooltrip="Partnership Program"
          tooltripClass="yellow-desc"
          heading="Together, We Make Culinary Magic Happen!"
          hedingClass="heding leading-tight"
          desCription="Collaborate with Gastronomic Arts Barcelona to deliver immersive, high-quality cooking classes and cultural experiences designed to enhance any travel itinerary or corporate event with our Partnership Program!"
          desCriptionClass="desc mb-6"
          icon={FaHandshake}
        />
        <OutlineBtn
          label={
            <div className="flex items-center gap-2">
              <FaHandshake className="text-amber-400" />
              <span>Partner With Us</span>
            </div>
          }
          type="button"
          onClick={() => console.log("Partner With Us clicked")}
        />
      </div>

      {/* Image Section */}
      <div className="mt-10 lg:mt-0 lg:w-[80vh] flex justify-center">
        <img
          src="https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/our%20story/partnership/parthnershitp-banner.avif"
          alt="Partnership Banner"
          className="rounded-xl shadow-lg max-w-full"
        />
      </div>
    </div>
  );
};

export default Banner;