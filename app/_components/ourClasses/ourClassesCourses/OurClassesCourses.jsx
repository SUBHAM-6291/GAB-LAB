"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdHotelClass } from "react-icons/md";
import { FaInfoCircle, FaMapMarkerAlt } from "react-icons/fa";
import { CiBookmarkCheck } from "react-icons/ci";
import courses from "../../home/course/courseData";
import SectionContent from "../../Utilites/SectionContent/SectionContent";

const sectionContentProps = {
  icon: MdHotelClass,
  tooltrip: "Our Classes",
  heading: "Discover Our Cooking Classes",
  description:
    "Dive into the world of Spanish cuisine with our interactive and immersive cooking classes. From sangria to paella, each course is crafted for unforgettable memories.",
};

const OurClassesCourses = () => {
  const [category, setCategory] = useState("All");
  const [expandedCards, setExpandedCards] = useState([]);
  const coursedata = courses;

  const filtered =
    category === "All"
      ? coursedata
      : coursedata.filter((p) => p.category === category);

  console.log("Filtered Courses:", filtered);

  const toggleCard = (index) => {
    setExpandedCards((prev) => (prev[0] === index ? [] : [index]));
  };
  return (
    <div className="topContainer ">
      <div className="myContainer">
        <div className="flex justify-center md:text-center mb-12">
          <SectionContent
            icon={sectionContentProps.icon}
            tooltrip={sectionContentProps.tooltrip}
            tooltripClass={
              "border border-yellow-300 bg-yellow-300 text-black flex justify-center items-center"
            }
            heading={sectionContentProps.heading}
            hedingClass={
              "text-white max-w-5xl drop-shadow-[0_2px_10px_rgba(255,215,0,0.4)]"
            }
            desCription={sectionContentProps.description}
            desCriptionClass={"text-white max-w-4xl"}
          />
        </div>
        <div className="text-white pt-5 pb-8 flex flex-wrap gap-3 sm:space-x-4 sm:flex-nowrap">
          {["All", "Paella", "Baking", "Cocktails"].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-md font-medium border transition duration-300 cursor-pointer
      ${
        category.toLowerCase() === cat.toLowerCase()
          ? "bg-yellow-300 text-black border-transparent"
          : "bg-transparent text-yellow-300 border-yellow-300 hover:bg-yellow-300 hover:text-black"
      }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.map((course, index) => {
            const isExpanded = expandedCards.includes(index);
            return (
              <div
                key={index}
                className={`bg-zinc-800 rounded-xl shadow-md hover:shadow-yellow-500/20 transition duration-300 overflow-hidden flex flex-col group  ${
                  isExpanded ? "h-auto" : "h-[550px]"
                }`}
              >
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {course.title}
                  </h3>

                  <p
                    className={`text-base text-gray-300 mb-4 transition-all duration-300 ${
                      isExpanded ? "" : "line-clamp-2"
                    }`}
                  >
                    {course.description}
                  </p>
                  {course.description.length > 100 && (
                    <div>
                      <button
                        onClick={() => toggleCard(index)}
                        className="text-yellow-400 text-sm font-medium"
                      >
                        {isExpanded ? "Read less" : "Read more"}
                      </button>
                    </div>
                  )}
                  <div className="flex justify-between text-base text-gray-300 mb-2 mt-4">
                    <span className="flex items-center gap-1">
                      <FaMapMarkerAlt className="text-yellow-400" />
                      {course.location}
                    </span>
                    <span className=" text-yellow-400 font-semibold">
                      {course.price}
                    </span>
                  </div>

                  <div className="text-sm text-gray-300 mb-4">
                    {course.schedule}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 mt-auto">
                    {/* Book Now Button with Icon */}
                    <div className="w-full sm:flex-1">
                      <button className="flex items-center justify-center gap-2 bg-yellow-400 text-black border border-transparent hover:bg-transparent hover:border-yellow-300 hover:text-white text-sm font-semibold px-4 py-2 rounded-lg transition w-full cursor-pointer">
                        <CiBookmarkCheck className="text-base" />
                        Book Now
                      </button>
                    </div>

                    {/* Info Button with Icon */}
                    <div className="w-full sm:flex-1">
                      <Link href={`/courses/${course.slug}`}>
                        <button className="flex items-center justify-center gap-2 bg-transparent border border-yellow-300 hover:bg-white hover:border-white text-white hover:text-black text-sm font-semibold px-4 py-2 rounded-lg transition w-full cursor-pointer">
                          <FaInfoCircle className="text-base" />
                          Info
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurClassesCourses;
