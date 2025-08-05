"use client";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { BgBtn, OutlineBtn } from "../../Utilites/BtnComponent/MyBtn";
import SectionContent from "../../Utilites/SectionContent/SectionContent";
import { FaUser } from "react-icons/fa";

const bannerData = [
  {
    heading: "Our Journey Through Flavor and Community",
    description:
      "From humble beginnings to a culinary destination in the heart of Barcelona, our story is built on a passion for food, culture, and connection. Every class, every dish, and every guest is part of the flavorful journey that defines who we are.",
    image:
      "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/our%20story/Why%20Choose/why%20choose%20us.avif",
  },
];

const socialLinks = [
  {
    id: 1,
    icon: <FaFacebookF size={28} />,
    href: "https://facebook.com",
    name: "Facebook",
  },
  {
    id: 2,
    icon: <FaInstagram size={28} />,
    href: "https://instagram.com",
    name: "Instagram",
  },
  {
    id: 3,
    icon: <FaYoutube size={28} />,
    href: "https://youtube.com",
    name: "YouTube",
  },
  {
    id: 4,
    icon: <FaLinkedinIn size={28} />,
    href: "https://linkedin.com",
    name: "LinkedIn",
  },
];

const OurStoryBanner = () => {
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
          <div className="myContainer relative z-10 h-full flex items-center">
            <div className="space-y-6">
              <SectionContent
                icon={FaUser}
                tooltrip={"Our Story"}
                tooltripClass={"bg-yellow-300 text-black"}
                heading={bannerData[0].heading}
                hedingClass={
                  "text-white drop-shadow-[0_2px_10px_rgba(255,215,0,0.4)] max-w-2xl"
                }
                desCription={bannerData[0].description}
                desCriptionClass={"text-gray-200 md:max-w-xl lg:max-w-2xl"}
              />
              <BgBtn
                icon={IoIosSend}
                label="Book Now"
                type="button"
                onClick={() => console.log("button clicked")}
              />
            </div>

            <div className="hidden md:flex w-[60px] h-[350px] backdrop-blur-2xl bg-yellow-300 flex-col justify-between items-center rounded-full absolute md:right-[40px]  lg:right-[60px] xl:right-[6.75rem] top-1/2 -translate-y-1/2 border border-white/20">
              <div className="rotate-90 whitespace-nowrap pl-[9rem] font-bold text-black text-[18px]">
                Follow now
              </div>
              <div className="flex flex-col items-center gap-5 py-4 ">
                {socialLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="text-black hover:text-black transition duration-300 hover:scale-110 hover:drop-shadow-[0_0_1px_#000000]"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default OurStoryBanner;
