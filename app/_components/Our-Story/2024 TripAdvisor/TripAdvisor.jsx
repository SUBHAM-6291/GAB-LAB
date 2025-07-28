"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";

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
    <div
      className="relative w-full bg-black py-6 px-4 overflow-hidden"
      style={{ position: "relative" }}
    >
      <h2 className="text-center text-yellow-400 font-semibold text-3xl mb-20">
        ★★ 2024 TripAdvisor Travellers&apos; Choice Award Winner ★★
      </h2>

      {/* Left Gradient Overlay */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "80px",
          background: "linear-gradient(to right, black, transparent)",
          zIndex: 10,
          pointerEvents: "none",
          animation: "fadeInLeft 2s ease-in-out",
        }}
      />

      {/* Right Gradient Overlay */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "80px",
          background: "linear-gradient(to left, black, transparent)",
          zIndex: 10,
          pointerEvents: "none",
          animation: "fadeInRight 2s ease-in-out",
        }}
      />

      <style>{`
        @keyframes fadeInLeft {
          0% { opacity: 0; transform: translateX(-20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          0% { opacity: 0; transform: translateX(20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
      `}</style>

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
            className="mx-4 bg-white/5 p-4 rounded-xl flex items-center justify-center min-w-[120px] h-[80px] backdrop-blur-sm border border-white/10 shadow transition-transform duration-300"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={100}
              height={50}
              unoptimized
              className="object-contain max-h-full w-auto"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
