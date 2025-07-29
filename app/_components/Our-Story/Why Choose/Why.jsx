"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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

export default function WhyChooseUs() {
  return (
    <section className="bg-zinc-900 text-white py-20 px-6 md:px-12 xl:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-14">
        {/* Left Text Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="space-y-6"
        >
          {/* "Our Team" Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={fadeUp}
            custom={0}
            className="inline-block bg-[#1a1a1a] text-white px-6 py-2 rounded-full font-medium shadow hover:shadow-yellow-300/50 transition mb-2"
          >
            Our Team
          </motion.button>

          {/* Main Heading */}
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold"
            variants={fadeUp}
            custom={1}
          >
            Why Choose Us?
          </motion.h2>

          {/* Feature List */}
          <motion.ul
            className="space-y-4 text-lg leading-relaxed text-gray-300"
            variants={fadeUp}
            custom={2}
          >
            <li>
              <span className="font-semibold text-white">Central Location:</span>{" "}
              Conveniently located in the heart of Barcelona, our classes are
              easily accessible for locals and tourists alike.
            </li>
            <li>
              <span className="font-semibold text-white">Small Group Sizes:</span>{" "}
              Enjoy personalized attention and guidance in our intimate class
              settings.
            </li>
            <li>
              <span className="font-semibold text-white">Memorable Experience:</span>{" "}
              Create lasting memories as you bond with fellow food enthusiasts and
              savor the flavors of Spain.
            </li>
          </motion.ul>

          {/* Call to Action */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow hover:shadow-yellow-500/50 transition"
          >
            Become a Partner
          </motion.button>
        </motion.div>

        {/* Right Image with Animation */}
       <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.4 }}
  className="relative w-full max-w-md mx-auto overflow-hidden rounded-2xl"
>
  <div className="group">
    <Image
      src="https://static.wixstatic.com/media/45a33e_01684b958b2643d8a04f940d1b7c2c47~mv2.jpg/v1/fill/w_426,h_576,fp_0.46_0.41,lg_1,q_80,enc_avif,quality_auto/ryanthomas001_as_students_standing_around_a_cooking_school_tabl_568506dfd8f44c2b98424f0a34.jpg"
      alt="Cooking Class"
      width={500}
      height={600}
      className="w-full h-auto object-cover transition duration-500 ease-in-out group-hover:scale-105"
    />
  </div>
</motion.div>

      </div>
    </section>
  );
}
