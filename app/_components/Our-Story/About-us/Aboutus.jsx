"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUsers } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
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
  const [showMore, setShowMore] = useState(false);
  const toggleShow = () => setShowMore(!showMore);

  return (
    <section className="myContainer topContainer">
      <div className="mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Image */}
        <motion.div
          className="w-full md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0}
        >
          <div className="w-full h-[320px] sm:h-[400px] md:h-[500px] lg:h-[550px] xl:h-[600px] 2xl:h-[650px] relative rounded-xl overflow-hidden shadow-lg border border-yellow-400/10">
            <Image
              src="https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/our%20story/about%20us/Gastronomic-Arts-Barcelona-Paella-Cooking-Experience-aprons.avif"
              alt="About Us Image"
              fill
              className="object-cover"
              priority
            />
          </div>
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
            hedingClass=" text-white drop-shadow-[0_2px_10px_rgba(255,215,0,0.4)] text-yellow-400"
            tooltrip={
              <>
                <FaUsers className="inline-block mr-1" /> About Us
              </>
            }
            tooltripClass="yellow-desc"
            desCription="  Discover Authentic Culinary Experiences in Barcelona"
            desCriptionClass="subHeding"
          />

          <motion.div className="space-y-4 text-gray-300" variants={fadeInUp} custom={2}>
            <div className="desc space-y-3">
              <p>
                Welcome to The GAB LAB – Gastronomic Arts Barcelona. Embark on a flavorful journey through the heart of Barcelona with The GAB LAB. We offer immersive food tours and culinary experiences that celebrate the rich traditions of Spanish cuisine.
              </p>
              <p className={`${!showMore && "hidden sm:block"} transition-all duration-300`}>
                From local food markets and hidden tapas bars to iconic Spanish dishes like paella and Jamón Ibérico, every experience is crafted to connect you with the culture, history, and soul of the city.
              </p>
              <p className={`${!showMore && "hidden sm:block"} transition-all duration-300`}>
                Led by passionate food experts and local guides, our tours go beyond tasting — you’ll discover the stories, people, and flavors that make Barcelona unforgettable. Perfect for foodies, travelers, and curious souls, our unique gastronomic adventures will leave you inspired and craving more.
              </p>
              <p className={`${!showMore && "hidden sm:block"} transition-all duration-300`}>
                📍 Taste the magic of Barcelona — one delicious bite at a time.
              </p>

              {/* See More / See Less Button for small devices */}
              <div className="sm:hidden">
                <button
                  onClick={toggleShow}
                  className="text-yellow-400 underline text-sm font-medium flex items-center gap-1"
                >
                  {showMore ? (
                    <>
                      See Less <MdKeyboardArrowUp />
                    </>
                  ) : (
                    <>
                      See More <MdKeyboardArrowDown />
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
