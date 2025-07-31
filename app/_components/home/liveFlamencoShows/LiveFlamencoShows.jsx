"use client";
import React from "react";
import Image from "next/image";
import { FiPlay } from "react-icons/fi";
import { MdLiveTv } from "react-icons/md";
import SectionContent from "../../Utilites/SectionContent/SectionContent";
import {OutlineBtn} from "../../Utilites/BtnComponent/MyBtn";

const LiveFlamencoShows = () => {
  return (
    <main className="myContainer topContainer">
      <div className="flex flex-col lg:flex-row gap-[20px] lg:gap-[60px] xl:gap-[80px]">
        <div className="flex-1 flex flex-col justify-between">

          <div className="flex justify-center md:text-center lg:text-left">
            <SectionContent
            tooltrip="Taste the Tradition"
            tooltripClass="bg-yellow-300 text-black border border-yellow-300"
            icon={MdLiveTv}
            heading="Paella Cooking Class & LIVE Flamenco Show"
            hedingClass="text-white drop-shadow-[0_2px_10px_rgba(255,215,0,0.4)]"
            desCriptionClass="hidden"
          />
          </div>

          <div className="w-full h-[250px] md:h-[300px] lg:h-[500px] xl:h-[400px] xl:mt-6 relative rounded-lg overflow-hidden">
            <Image
              src="https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Home%20page/join%20cooking%20class/slide-one.jpg"
              alt="Flamenco Show"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex flex-col">
          <div className="flex gap-2 md:gap-4">
            <div className="w-1/2 h-[140px] md:h-[250px] lg:h-[140px] xl:h-[250px] relative rounded-md overflow-hidden">
              <Image
                src="https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Home%20page/join%20cooking%20class/slide-one.jpg"
                alt="side image 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-1/2 h-[140px] md:h-[250px] lg:h-[140px] xl:h-[250px] relative rounded-md overflow-hidden">
              <Image
                src="https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Home%20page/join%20cooking%20class/slide-one.jpg"
                alt="side image 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <p className="desc mt-12">
            Experience the rich flavors and spirited atmosphere of Spain with an
            unforgettable evening that begins with a hands-on Paella cooking
            class. Learn the art of crafting this iconic dish alongside a
            Sangria-making workshop, a selection of traditional tapas, and a
            delectable dessert. The night culminates in a LIVE Flamenco
            performance at the city’s oldest Tablao, where the passion of
            Andalusia comes alive through dynamic dance and music. Dive into
            Spanish culture and create memories to savor!
          </p>

          {/* Stats */}
          <div className="my-6 text-white grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            <div>
              <h1 className="text-[24px] md:text-[36px] lg:text-[40px] font-bold text-yellow-300">
                1000+
              </h1>
              <p className="text-sm md:text-base text-gray-200">
                Happy Cooking Class
              </p>
            </div>

            <div>
              <h1 className="text-[24px] md:text-[36px] lg:text-[40px] font-bold text-yellow-300">
                20+
              </h1>
              <p className="text-sm md:text-base text-gray-200">
                Years of Experience
              </p>
            </div>

            <div>
              <h1 className="text-[24px] md:text-[36px] lg:text-[40px] font-bold text-yellow-300">
                100%
              </h1>
              <p className="text-sm md:text-base text-gray-200">
                Satisfaction Guaranteed
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-5 flex items-center gap-10 flex-wrap">
            {/* Check Availability */}
            <OutlineBtn label='Check Availability' type='button' onClick={() => console.log("Button clicked!")}/>

            {/* Play Video */}
            <button className="flex items-center gap-2 text-yellow-300 text-[16px] font-medium hover:text-white transition duration-300 group">
              <span className="w-10 h-10 flex items-center justify-center border border-yellow-300 rounded-full group-hover:bg-yellow-300 group-hover:text-black transition duration-300">
                <FiPlay className="text-xl" />
              </span>
              <span className="hidden sm:inline">Play Video</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LiveFlamencoShows;
