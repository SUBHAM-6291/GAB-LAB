"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { OutlineBtn } from "../../Utilites/BtnComponent/MyBtn";
import SectionContent from "../../Utilites/SectionContent/SectionContent";
import { FaQuestionCircle } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

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
    <section className="myContainer topContainer">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-14">
        {/* Left Text Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="space-y-6"
        >
          {/* Tooltip */}
          <SectionContent
            hedingClass="hidden"
            heading="hidden"
            desCription="hidden"
            desCriptionClass="hidden"
            tooltrip={
              <span className="flex items-center gap-2">
                <FaQuestionCircle className="text-base" /> Why Choose Us
              </span>
            }
            tooltripClass="bg-yellow-300 text-black border border-yellow-300"
          />

          {/* Heading */}
          <motion.h2
            className="heding text-yellow-400"
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

          {/* Button with Icon */}
          <motion.button
            className="pt-2"
            variants={fadeUp}
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <OutlineBtn
              type="button"
              onClick={() => console.log("button clicked")}
              label={
                <span className="flex items-center gap-2">
                  <FiSend className="inline-block text-yellow-300" />
                  Request a Quote
                </span>
              }
            />
          </motion.button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative w-full mx-auto overflow-hidden rounded-2xl"
        >
          <div className="group w-full">
            <Image
              src="https://static.wixstatic.com/media/45a33e_01684b958b2643d8a04f940d1b7c2c47~mv2.jpg/v1/fill/w_426,h_576,fp_0.46_0.41,lg_1,q_80,enc_avif,quality_auto/ryanthomas001_as_students_standing_around_a_cooking_school_tabl_568506dfd8f44c2b98424f0a34.jpg"
              alt="Cooking Class"
              width={1000}
              height={600}
              className="w-full h-full max-h-[600px] sm:h-[50vh] md:h-[120vh] lg:h-[70vh] object-cover transition duration-500 ease-in-out group-hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
