"use client";

import { motion } from "framer-motion";
import { GiChefToque, GiMeal, GiCookingPot } from "react-icons/gi";

// Feature data
const features = [
  {
    icon: <GiChefToque size={40} />,
    title: "Chef-Guided Sessions",
    description:
      "Cook alongside seasoned chefs and learn authentic techniques passed down through generations.",
  },
  {
    icon: <GiCookingPot size={40} />,
    title: "Live & On-Demand Classes",
    description:
      "Attend real-time sessions or cook at your own pace with detailed video tutorials anytime.",
  },
  {
    icon: <GiMeal size={40} />,
    title: "Interactive Recipes & Notes",
    description:
      "Download printable recipe cards, track your progress, and take kitchen notes like a pro.",
  },
];

// Animation Variants
const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const fadeInDown = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Explore () {
  return (
    <section className="bg-[#0b0b0b] text-white py-20 px-4 md:px-20">
      <div className="text-center mb-14">
        {/* Subtitle Animation */}
        <motion.p
          variants={fadeInDown}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-sm md:text-base text-yellow-200 uppercase tracking-widest mb-3 font-medium"
        >
          Designed For Food Lovers
        </motion.p>

        {/* Heading Animation */}
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-yellow-400 drop-shadow-[0_2px_10px_rgba(255,215,0,0.4)]"
        >
          Explore Our Flavor-Packed Features
        </motion.h2>

        {/* Description Animation */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-300 mt-4 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          From live masterclasses to printable recipes, our platform brings the world of cooking right to your kitchen with hands-on guidance and unforgettable flavors.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariant}
            className="group bg-[#1a1a1a] rounded-2xl p-6 border border-yellow-800/30 hover:border-yellow-500 shadow-md hover:shadow-[0_0_30px_#fde68a] transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="flex justify-center items-center w-16 h-16 mx-auto mb-6 bg-yellow-400 text-black rounded-full shadow-lg group-hover:rotate-12 transition-transform duration-300">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-center mb-4 text-yellow-100">
              {feature.title}
            </h3>
            <p className="text-center text-gray-300 text-sm leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
