import React from "react";
import Marquee from "react-fast-marquee";
import SectionContent from "../../Utilites/SectionContent/SectionContent";
import { MdGroupAdd } from "react-icons/md"; // Importing the icon for the cooking class
import { BgBtn } from "../../Utilites/BtnComponent/MyBtn";

const marqueeImages = [
  "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Home%20page/join%20cooking%20class/slide-one.jpg",
  "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Home%20page/join%20cooking%20class/slide-two.jpeg",
  "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Home%20page/join%20cooking%20class/slide-three.jpg",
  "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Home%20page/join%20cooking%20class/slide-four.jpg",
  "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Home%20page/join%20cooking%20class/slide-five.jpg",
  "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/Home%20page/join%20cooking%20class/slide-six.jpg",
  "https://pub-f2300dc39d77486db13ba83d33a85773.r2.dev/gab%20lab/our%20story/Why%20Choose/why%20choose%20us.avif",
];

const contentData = [
  {
    icon: MdGroupAdd, // ✅ Updated icon
    tooltrip: "Immerse Yourself in Barcelona's Premiere Culinary Experience",
    tooltripClass: "bg-yellow-300 text-black border border-yellow-300",
    heading: "Join Our Paella Hands-On Cooking Class",
    hedingClass: "text-white drop-shadow-[0_2px_10px_rgba(255,215,0,0.4)]",
    desCription:
      "Discover our most popular experience - The Ultimate Paella Cooking Class! Start with a visit to La Boqueria market, where our chef will pick the freshest ingredients for your paella. Then back to the kitchen to join our Sangria-Making Workshop to craft the perfect Traditional Spanish drink while enjoying our Tapas Tasting. Then grab your apron for our award-winning Paella Cooking Class. Finish with a family-style meal sharing stories, laughter, and dessert with fellow food enthusiasts. ",
    desCriptionClass: "text-white",
    desCription2: "Join us for three hours of exploration, discovery, and indulgence. Reserve your spot today and create lasting memories!",
  },
];
const PaellaCookingClass = () => {
  return (
    <div className="myContainer topContainer">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left - Marquee Section */}
        <div className="w-full lg:w-1/2">
          {[1, 2].map((_, idx) => (
            <Marquee
              key={idx}
              speed={30}
              autoFill
              pauseOnHover
              gradient={true}
              gradientColor="black"
              direction={idx % 2 === 0 ? "left" : "right"}
              className="mb-4"
            >
              {marqueeImages.map((src, index) => (
                <div
                  key={index}
                  className="w-[300px] h-[300px] mx-4 flex items-center justify-center border-4 border-white rounded-md shadow-md"
                >
                  <img
                    src={src}
                    alt={`cooking-class-${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </Marquee>
          ))}
        </div>

        {/* Right - Content Section using map */}
        <div className="w-full lg:w-1/2">
          {contentData.map((item, idx) => (
            <div key={idx}>
              <SectionContent
                icon={item.icon}
                tooltrip={item.tooltrip}
                tooltripClass={item.tooltripClass}
                heading={item.heading}
                hedingClass={item.hedingClass}
                desCription={item.desCription}
                desCriptionClass={item.desCriptionClass}
              />
              <p className="desc text-white mt-6">{item.desCription2}</p>
              <div className="mt-4">
                <BgBtn label="Learn More" type="button" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaellaCookingClass;
