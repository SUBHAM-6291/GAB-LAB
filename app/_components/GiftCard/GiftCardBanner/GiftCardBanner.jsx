"use client";
import React from "react";
import SectionContent from "../../Utilites/SectionContent/SectionContent";
import { FaGift } from "react-icons/fa";

const bannerData = [
  {
    heading: "Gift Cards for Every Occasion",
    description:
      "Delight your loved ones with the taste of Spain — our cooking class gift cards make every celebration extra special.",
    image:
      "https://static.wixstatic.com/media/b35a91_0adaa57f06e147b4aec0fcdd5627b680~mv2.png/v1/fill/w_640,h_889,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/GIFTCARD%20header.png",
  },
];


const GiftCardBanner = () => {
  return (
    <>
      {bannerData.map((banner, index) => (
        <div
          key={index}
          className="relative w-full h-[80vh] bg-cover bg-center text-white"
          style={{
            backgroundImage: `url('${banner.image}')`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 z-0" />

          {/* Content */}
          <div className="myContainer relative z-10 h-full flex items-center justify-center text-center">
            <div className="space-y-6">
              <SectionContent
                icon={FaGift}
                tooltrip={"Gift Cards"}
                tooltripClass={"bg-yellow-300 text-black"}
                heading={banner.heading}
                hedingClass={
                  "text-white drop-shadow-[0_2px_10px_rgba(255,215,0,0.4)] "
                }
                desCription={banner.description}
                desCriptionClass={"text-gray-200 "}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default GiftCardBanner;
