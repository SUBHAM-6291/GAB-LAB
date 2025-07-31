"use client";

import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import Image from "next/image";

// Animation Variant
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const logos = [
  {
    src: "https://static.wixstatic.com/media/45a33e_ae955a7e798a4b21b12e130a4f792457~mv2.png/v1/fill/w_83,h_51,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/image.png",
    alt: "Viator - Badge of Excellence",
  },
  {
    src: "https://static.wixstatic.com/media/45a33e_806ba572740e4239bb80a6f6b4768f33~mv2.png/v1/fill/w_101,h_51,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/tripadvisorfivestarrating.png",
    alt: "Tripadvisor - 5 Star Rating",
  },
  {
    src: "https://static.wixstatic.com/media/45a33e_1a35c79acf3643ff89ace00d3d981f87~mv2.png/v1/fill/w_140,h_51,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/image%20(1).png",
    alt: "Airbnb Superhost",
  },
  {
    src: "https://static.wixstatic.com/media/45a33e_5a5a024a8d2e43b2ae0032a0ba6a8ba6~mv2.webp/v1/fill/w_94,h_51,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5stargooglewhitemin.webp",
    alt: "Google - 5.0 Rating",
  },
  {
    src: "https://static.wixstatic.com/media/45a33e_3b2d2396d7a94f9a89b7ef0911bd8b39~mv2.png/v1/fill/w_59,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/6262a98fff0395479f4359ae_GYG_2021_Expressive_Logo_01_White__RGB_CC1.png",
    alt: "Get Your Guide Certified",
  },
  {
    src: "https://static.wixstatic.com/media/45a33e_cfe250a22210419cb0b6381a5e1c6ca1~mv2.png/v1/fill/w_184,h_51,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/idiYRZVir.png",
    alt: "Cookly Partner",
  },
  {
    src: "https://static.wixstatic.com/media/45a33e_b7dbf47a4fe14174971607423b7f3c63~mv2.png/v1/fill/w_48,h_51,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/TC_inverted_BFLogo_LL_2024_RGB.png",
    alt: "Tripadvisor Choice Award 2024",
  },
];

export default function TripAdvisor() {
  return (
<div className="relative w-full max-w-6xl mx-auto bg-black py-6 overflow-hidden">
  {/* Award Heading Animation */}
  <div className="myContainer ">
    <motion.h2
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center text-yellow-400 font-semibold text-2xl mb-4 drop-shadow-[0_2px_10px_rgba(255,215,0,0.4)]"
    >
      2024 TripAdvisor Travellers&apos; Choice Award Winner
    </motion.h2>

    {/* Short Description */}
    <motion.p
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center text-gray-300 max-w-2xl mx-auto mb-10 text-sm md:text-base leading-relaxed"
    >
      We’re proud to be recognized by global platforms like TripAdvisor, Airbnb, and Google for our commitment to excellence and unforgettable guest experiences.
    </motion.p>
  </div>




      {/* Left Gradient Overlay */}
      <div className="absolute left-0 top-0 bottom-0 w-[50px] z-10 pointer-events-none animate-fadeInLeft bg-gradient-to-r from-black to-transparent" />

      {/* Right Gradient Overlay */}
      <div className="absolute right-0 top-0 bottom-0 w-[50px] z-10 pointer-events-none animate-fadeInRight bg-gradient-to-l from-black to-transparent" />

      <style>{`
        @keyframes fadeInLeft {
          0% { opacity: 0; transform: translateX(-20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          0% { opacity: 0; transform: translateX(20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-fadeInLeft {
          animation: fadeInLeft 2s ease-in-out;
        }
        .animate-fadeInRight {
          animation: fadeInRight 2s ease-in-out;
        }
      `}</style>

      {/* Marquee Logos */}
      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={false}
        loop={0}
        autoFill={true}
        style={{ display: "flex", zIndex: 0 }}
      >
        {logos.map((logo, index) => (
          <div
            key={index}
            className="mx-2 bg-white/5 p-3 rounded-lg flex items-center justify-center min-w-[90px] h-[70px] backdrop-blur-sm border border-white/10 shadow transition-transform duration-300"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={100}
              height={40}
              unoptimized
              className="object-contain max-h-full w-full"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
