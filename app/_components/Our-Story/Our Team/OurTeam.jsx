'use client';

import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const team = [
  {
    name: "Meet Maria",
   
    description:
      "A Culinary Artist with a Passion for Flavor.",
    image:
      " https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/our%20story/team/Meet%20Maria.avif",},
  {
    name: "Meet Simón",
  
    description:
      "A Culinary Explorer and Cultural Visionary",
    image:
      "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/our%20story/team/Meet%20Simo%CC%81n.avif",
  },
  {
    name: "Meet Raquel",
    
    description:
      "A Chef with Heart, Tradition, and a Sweet Tooth",
    image:
      " https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/our%20story/team/Meet%20Raquel.avif",
  },
  {
    name: "Meet Hugo",
   
    description:
      "Culinary Expert and Joyful Host",
    image:
      "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/our%20story/team/Meet%20Hugo.avif",
  },
  {
    name: 'Meet Paloma a.k.a. "Lola"',
    
    description:
      "A Culinary Artist with a Flair for Fusion",
    image:
      "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/our%20story/team/Paloma%20a.k.a%20Lola.avif",
  },
  {
    name: "Meet Alberto",
   
    description:
      "An Eclectic Chef with a Love for Cheese and Laughter",
    image:
      "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/our%20story/team/Meet%20Alberto.avif",
  },
  {
    name: "Meet the other Maria",
  
    description:
      "Your Go-To Expert for Everything",
    image:
      "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/our%20story/team/Maria.avif",
  },
  {
    name: "Meet Ryan",
    
    description:
      "The Visionary with a Flair for Fun",
    image:
      "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/our%20story/team/Meet%20Ryan.avif",
  },
];

export default function OurTeam() {
  const [hovered, setHovered] = useState(null); // ✅ FIXED (no TypeScript types in .jsx)

  return (
    <section className="bg-black px-6 py-16 md:px-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-white text-4xl md:text-5xl font-semibold leading-tight mb-4">
          OUR TEAM
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
          From culinary innovators to precision-focused engineers, our diverse team shares one goal — crafting the smartest, sleekest, and most reliable modern kitchen solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {team.map((member, index) => {
          const isHovered = hovered === index;

          return (
            <motion.div
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-[380px] rounded-2xl overflow-hidden shadow-xl border border-white/10 group"
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                priority
                className="object-cover z-0"
              />

              {/* Hover Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 z-10 bg-black/70 backdrop-blur-s text-white flex flex-col justify-end p-4 rounded-xl"
              >
                <motion.h3
                  className="text-lg   font-semibold"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {member.name}
                </motion.h3>
                
                <motion.p
                  className="text-sm mt-2 text-gray-300"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {member.description}
                </motion.p>
                <motion.div
                  className="flex gap-3 mt-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                  transition={{ delay: 0.25 }}
                >
             
                </motion.div>
              </motion.div>

              {/* Default Name & Role when not hovered */}
              {!isHovered && (
                <div className="absolute bottom-4 left-4 text-white z-0">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-indigo-300">{member.role}</p>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
