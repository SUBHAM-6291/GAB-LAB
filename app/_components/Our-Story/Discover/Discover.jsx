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
    <section className="bg-black text-white py-24 px-6 md:px-12 xl:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="space-y-6 text-left"
        >
          {/* Discover Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-[#1a1a1a] text-white px-6 py-2 rounded-full font-medium shadow hover:shadow-yellow-300/50 transition mb-2"
          >
            Discover
          </motion.button>

          <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-400 drop-shadow-[0_2px_10px_rgba(255,215,0,0.4)]">
            Discover The GAB LAB
          </h2>

          <p className="text-gray-300 text-base leading-relaxed">
            Welcome to the GAB LAB — an innovative culinary playground located
            just steps from La Rambla.
          </p>

          <p className="text-gray-400 text-base leading-relaxed">
            Featuring over 192sqm of gastronomic creativity, we offer dual
            sunlit kitchens, a sleek bar, intimate dining, and surprises at
            every corner.
          </p>

          <p className="text-gray-400 text-base leading-relaxed">
            Join a journey where food meets art, and Barcelona’s soul blends
            with global flavors.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 inline-block bg-gradient-to-r from-yellow-300 to-orange-400 text-black px-7 py-3 rounded-full font-semibold shadow-lg hover:shadow-yellow-400/50 transition"
          >
            Let&apos;s Talk
          </motion.button>
        </motion.div>

        {/* Right Image Only */}
        <div className="space-y-10 self-start text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-xl border border-yellow-500/10 w-full lg:w-[550px]"
          >
            <Image
              src="https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/our%20story/discover/faketeamphoto.avif"
              alt="Team Cooking"
              width={600}
              height={400}
              className="object-cover w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
