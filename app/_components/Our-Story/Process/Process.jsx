"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import SectionContent from "../../Utilites/SectionContent/SectionContent";
import { FaCogs } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const stats = [
  {
    img: "https://static.wixstatic.com/media/45a33e_816b9c5dafab4712be322a33e967de96~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/box.png",
    label: "Exclusive Culinary Packages",
    desc: "Offer your clients private classes and group sessions customized to interests, dietary needs, and schedules.",
  },
  {
    img: "https://static.wixstatic.com/media/45a33e_deb63ab08f834cfdba247815c42161b7~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/adaptability.png",
    label: "Flexible Customization",
    desc: "Personalize every experience with optional Flamenco performances or cultural tours.",
  },
  {
    img: "https://static.wixstatic.com/media/45a33e_65fa249727f24013b2b4c3f58aad87a0~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/conversation.png",
    label: "Attractive Commissions",
    desc: "Earn competitive commission rates while offering unforgettable culinary adventures.",
  },
  {
    img: "https://static.wixstatic.com/media/45a33e_b45302b4a83e492eb70c33b48d59ff45~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/crown.png",
    label: "VIP Treatment for Clients",
    desc: "Your clients receive personal attention and premium quality every step of the way.",
  },
];

const Process = () => {
  return (
    <section className="myContainer topContainer">
      <div className="mx-auto flex flex-col-reverse lg:flex-row items-start justify-between gap-16">
        {/* Left Side: Cards */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="group bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-4 shadow transition-all duration-300 hover:scale-105 hover:ring-2 hover:ring-yellow-400/60 hover:shadow-[0_0_30px_#fde68a55] space-y-3"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i + 1}
            >
              <div className="w-14 h-14 mx-auto">
                <Image
                  src={stat.img}
                  alt={stat.label}
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>
              <h4 className="text-sm font-semibold text-white text-center">
                {stat.label}
              </h4>
              <p className="text-xs text-gray-300 text-center">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Right Side: Headings & Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={5}
          className="flex-1 space-y-6"
        >
         <motion.div variants={fadeUp} custom={6}>
  <SectionContent
    hedingClass="hidden"
    heading="hidden"
    desCription="hidden"
    desCriptionClass="hidden"
    tooltrip={
      <span className="flex items-center gap-2">
        <FaCogs className="text-base" /> Process
      </span>
    }
    tooltripClass="bg-yellow-300 text-black border border-yellow-300"
  />
</motion.div>



          <motion.h2
            variants={fadeUp}
            custom={7}
            className="text-4xl md:text-5xl font-extrabold text-yellow-400 drop-shadow-[0_2px_10px_rgba(255,215,0,0.5)]"
          >
            Process
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={8}
            className="text-base desc text-gray-200"
          >
            Follow these steps to explore your culinary creativity from home.
          </motion.p>

          <motion.p
            variants={fadeUp}
            custom={9}
            className="text-gray-300 text-base md:text-lg leading-relaxed"
          >
            Learn to cook from the comfort of your home. Choose your class,
            book a slot, and start your journey with expert chefs. Simple,
            fun, and delicious—our process makes learning easy, whether
            you're a beginner or a foodie.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
