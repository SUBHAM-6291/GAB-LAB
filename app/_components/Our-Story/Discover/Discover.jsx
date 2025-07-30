"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import SectionContent from "../../Utilites/SectionContent/SectionContent";
import { OutlineBtn } from "../../Utilites/BtnComponent/MyBtn";
import { FaCompass } from "react-icons/fa";


const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Discover = () => {
  return (
    <section className="myContainer topContainer py-12 sm:py-16 md:py-20">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="space-y-6 text-left"
        >
          {/* Discover Badge Button */}
          <motion.button>
            <SectionContent
              hedingClass="hidden"
              heading="hidden"
              tooltrip={
                <span className="flex items-center gap-2">
                  <FaCompass className="text-base" /> Discover
                </span>
              }
              tooltripClass="bg-yellow-300 text-black border border-yellow-300"
              desCription="hidden"
              desCriptionClass="hidden"
            />
          </motion.button>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-400 drop-shadow-[0_2px_10px_rgba(255,215,0,0.4)] leading-tight">
            Discover The GAB LAB
          </h2>

          {/* Paragraphs */}
          <p className="subHeding text-base sm:text-lg text-gray-200">
            Welcome to the GAB LAB — an innovative culinary playground located
            just steps from La Rambla.
          </p>

          <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
            Featuring over 192sqm of gastronomic creativity, we offer dual
            sunlit kitchens, a sleek bar, intimate dining, and surprises at
            every corner.
          </p>

          <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
            Join a journey where food meets art, and Barcelona’s soul blends
            with global flavors.
          </p>

          {/* Button */}
          <motion.button className="pt-2">
            <OutlineBtn
              label="Request a Quote"
              type="button"
              onClick={() => console.log("button clicked")}
            />
          </motion.button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-xl border border-yellow-500/10 w-full"
        >
          <div
            className="
              relative w-full 
              h-[320px] sm:h-[400px] md:h-[480px] 
              lg:h-[540px] xl:h-[500px] 
              2xl:h-[500px]
            "
          >
            <Image
              src="https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/our%20story/discover/faketeamphoto.avif"
              alt="Team Cooking"
              fill
              priority
              className="object-cover object-center w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Discover;
