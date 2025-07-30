"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import SectionContent from "../../Utilites/SectionContent/SectionContent";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const AboutUs = () => {
  return (
    <section className="myContainer topContainer">
      <div className=" mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Image */}
        <motion.div
          className="w-full md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0}
        >
          <Image
            src="https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/our%20story/about%20us/Gastronomic-Arts-Barcelona-Paella-Cooking-Experience-aprons.avif"
            alt="About Us Image"
            className="rounded-lg object-cover"
            width={800}
            height={600}
            priority
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          className="w-full md:w-1/2 space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={1}
        >
      
           
          <SectionContent
          heading="About Us"
          hedingClass="heding text-yellow-400"
          tooltrip="About Us"
          tooltripClass="yellow-desc"
          desCription="hidden"
          desCriptionClass="hidden"


          />

          {/* Description Text */}
          <motion.div
            className="space-y-4 text-gray-300"
            variants={fadeInUp}
            custom={2}
          >
            <h3 className="subHeding">
              Discover Authentic Culinary Experiences in Barcelona
            </h3>
            <div className="desc">
            <p>
              Welcome to The GAB LAB – Gastronomic Arts Barcelona. Embark on a
              flavorful journey through the heart of Barcelona with The GAB LAB.
              We offer immersive food tours and culinary experiences that
              celebrate the rich traditions of Spanish cuisine.
            </p>
            <p>
              From local food markets and hidden tapas bars to iconic Spanish
              dishes like paella and Jamón Ibérico, every experience is crafted
              to connect you with the culture, history, and soul of the city.
            </p>
            <p>
              Led by passionate food experts and local guides, our tours go
              beyond tasting — you’ll discover the stories, people, and flavors
              that make Barcelona unforgettable. Perfect for foodies, travelers,
              and curious souls, our unique gastronomic adventures will leave
              you inspired and craving more.
            </p>
            <p>📍 Taste the magic of Barcelona — one delicious bite at a time.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
