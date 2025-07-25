"use client";

import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const team = [
  {
    name: "Emma Davis",
    role: "Founder",
    description:
      "Emma has built PageDone from the ground up, leading strategy and vision with unmatched passion.",
    image:
      "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/our%20story/Why%20Choose/why%20choose%20us.avif",
  },
  {
    name: "John Smith",
    role: "Designer",
    description:
      "A creative mind crafting intuitive UI/UX that elevates user experience.",
    image:
      "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/our%20story/Why%20Choose/why%20choose%20us.avif",
  },
  {
    name: "Sophia Miller",
    role: "Engineer",
    description:
      "Bridging logic and art, she’s the architecture behind every line of code.",
    image:
      "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/our%20story/Why%20Choose/why%20choose%20us.avif",
  },
  {
    name: "Liam Jones",
    role: "Marketing",
    description:
      "Master of storytelling, brand voice, and digital growth strategies.",
    image:
      "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/our%20story/Why%20Choose/why%20choose%20us.avif",
  },
];

export default function OurTeam() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="bg-black px-6 py-16 md:px-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-white text-4xl md:text-5xl font-semibold leading-tight">
          Partnered with most of the{" "}
          <span className="text-indigo-400 italic">
            top people at each industry
          </span>
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {team.map((member, index) => {
          const isHovered = hovered === index;

          return (
            <motion.div
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.4 }}
              className="relative w-[250px] h-[380px] rounded-2xl overflow-hidden shadow-xl border border-white/10 group"
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />

              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-black/70 backdrop-blur-md text-white flex flex-col justify-end p-4 z-10"
              >
                <motion.h3
                  className="text-lg font-semibold"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {member.name}
                </motion.h3>
                <motion.p
                  className="text-sm text-indigo-300"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                  transition={{ delay: 0.15 }}
                >
                  {member.role}
                </motion.p>
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
                  <FaXTwitter className="text-lg hover:text-gray-300 cursor-pointer" />
                  <FaLinkedinIn className="text-lg hover:text-blue-500 cursor-pointer" />
                </motion.div>
              </motion.div>

              {/* Always visible name & role */}
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
