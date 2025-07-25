"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

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
    <section className="bg-black text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
        {/* Left Text Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Discover <span className="text-[#FFD700]">The GAB LAB</span>
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Welcome to the GAB LAB — an innovative culinary playground located just steps from La Rambla.
          </p>
          <p className="text-gray-400">
            Featuring over 192sqm of gastronomic creativity, we offer dual sunlit kitchens, a sleek bar, intimate dining, and surprises at every corner.
          </p>
          <p className="text-gray-400">
            Join a journey where food meets art, and Barcelona’s soul blends with global flavors.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold shadow-md transition"
          >
            Let&apos;s Talk
          </motion.button>
        </motion.div>

        {/* Center Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Image
            src="https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/our%20story/discover/faketeamphoto.avif"
            alt="Team Cooking"
            width={500}
            height={500}
            className="rounded-xl object-cover shadow-2xl"
          />
        </motion.div>

        {/* Right Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {[
            {
              icon: "📦",
              title: "Exclusive Culinary Packages",
              text: "Tailored sessions for groups or individuals based on taste and timing.",
            },
            {
              icon: "⚙️",
              title: "Flexible Customization",
              text: "Add-on cultural events like Flamenco or walking tours.",
            },
            {
              icon: "💰",
              title: "Attractive Commissions",
              text: "Partner perks for delivering unforgettable moments.",
            },
            {
              icon: "👑",
              title: "VIP Treatment",
              text: "White-glove service for your special guests.",
            },
            {
              icon: "🎧",
              title: "Dedicated Support",
              text: "Flawless coordination from booking to post-experience follow-up.",
              full: true,
            },
          ].map(({ icon, title, text, full }, index) => (
            <motion.div
              key={index}
              className={`bg-[#111] rounded-2xl p-5 border border-gray-700 backdrop-blur-sm bg-opacity-70 ${
                full ? "sm:col-span-2" : ""
              }`}
              custom={index + 1}
              variants={fadeUp}
            >
              <h4 className="text-lg font-bold mb-2">
                {icon} {title}
              </h4>
              <p className="text-gray-400">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Discover;
