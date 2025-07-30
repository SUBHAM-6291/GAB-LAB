"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionContent from "../../Utilites/SectionContent/SectionContent";
import { FaUtensils } from "react-icons/fa";


const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cards = [
  {
    title: "RESERVATIONS:",
    desc: "Reserve your spot with a click. Flexible slots and expert chefs await.",
  },
  {
    title: "Join Live Session",
    desc: "Connect live with chefs in interactive, fun-filled cooking sessions.",
  },
  {
    title: "Enjoy & Learn",
    desc: "Cook along, ask questions, and taste your own delicious creations.",
  },
  {
    title: "Get Certified",
    desc: "Earn a digital certificate after completing your course successfully.",
  },
  {
    title: "Global Cuisines",
    desc: "Learn recipes from Italian, Thai, Indian, and more cuisines worldwide.",
  },
  {
    title: "Personal Guidance",
    desc: "Receive one-on-one tips and tricks from seasoned culinary experts.",
  },
];

export default function CookingHeroSection() {
  return (
    <section className="bg-gradient-to-b from-[#0f0f0f] to-[#1c1c1c] myContainer   text-white   py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[60vw] h-[60vw] bg-yellow-400/10 rounded-full blur-[150px] z-0"></div>

      <div className="relative  mx-auto grid grid-cols-1 xl:grid-cols-2  gap-16 items-center z-10">
        {/* Left Side */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="space-y-6"
        >
          <motion.button>
            <SectionContent
  hedingClass="hidden"
  heading="hidden"
  tooltrip={
    <>
      <FaUtensils className="inline-block mr-1" />
      Learn Cooking
    </>
  }
  tooltripClass="bg-yellow-300 text-black border border-yellow-300"
  desCription="hidden"
  desCriptionClass="hidden"
/>


          </motion.button>

          <motion.h2
            className="text-4xl md:text-5xl heding  font-bold leading-tight tracking-tight"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Learn to Cook <br className="hidden md:block" />
            from the Comfort of Your Home
          </motion.h2>

          <motion.p
            className="text-gray-200 desc max-w-md"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Choose your class, book a slot, and start your journey with expert
            chefs. Simple, fun, and delicious—our process makes learning easy,
            whether you're a beginner or a foodie.
          </motion.p>
        </motion.div>

        {/* Right Side Cards */}
     {/* Right Side Cards */}
<motion.div
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-6 w-full max-w-6xl mx-auto mt-10"
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {cards.map((card, i) => (
    <motion.div
      key={i}
      variants={fadeUp}
      className="group bg-[#1a1a1a] rounded-2xl p-6 border border-yellow-800/30 hover:border-yellow-500 shadow-md hover:shadow-[0_0_30px_#fde68a] transition-all duration-300 hover:scale-[1.03]"
    >
      <h3 className="text-xl font-semibold mb-2 text-yellow-400">
        {card.title}
      </h3>
      <p className="text-gray-400 text-sm">{card.desc}</p>
    </motion.div>
  ))}
</motion.div>

      </div>
    </section>
  );
}
