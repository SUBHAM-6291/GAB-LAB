"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInfoCircle, FaMapMarkerAlt } from "react-icons/fa";
import { CiBookmarkCheck } from "react-icons/ci";
import courses from "./courseData";

const Course = ({ excludeSlug, showSearch = true, showSectionContent = true, fullWidth = false }) => {
  const [expandedCards, setExpandedCards] = useState([]);

  const toggleCard = (index) => {
    setExpandedCards((prev) => (prev[0] === index ? [] : [index]));
  };

  const filteredCourses = excludeSlug
    ? courses.filter((course) => course.slug !== excludeSlug)
    : courses;

  return (
    <section className={`topContainer py-16 ${fullWidth ? "w-full" : ""}`}>
      <div className="myContainer">
        {/* Optional Section Heading */}
        {showSectionContent && (
          <div className="flex justify-center md:text-center mb-12">
            <div>
              <div className="flex justify-center items-center border border-yellow-300 bg-yellow-300 text-black rounded-full px-4 py-2 mb-4 text-sm font-medium w-fit mx-auto">
                Cooking Courses
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center max-w-5xl mx-auto drop-shadow-[0_2px_10px_rgba(255,215,0,0.4)]">
                Discover Our Cooking Courses
              </h2>
              <p className="text-white text-center max-w-4xl mx-auto mt-4">
                Dive into the world of Spanish cuisine with our interactive and immersive cooking classes. From sangria to paella, each course is crafted for unforgettable memories.
              </p>
            </div>
          </div>
        )}

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-10">
          {filteredCourses.map((course, index) => {
            const isExpanded = expandedCards.includes(index);
            return (
              <div
                key={index}
                className={`bg-zinc-800 rounded-xl shadow-md hover:shadow-yellow-500/20 transition duration-300 overflow-hidden flex flex-col group ${
                  isExpanded ? "h-auto" : "h-[550px]"
                }`}
              >
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover transform group-hover:scale-110  transition duration-300"
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
                    <span className="text-yellow-400 font-semibold">
                      {course.price}
                    </span>
                  </div>

                  <div className="text-sm text-gray-300 mb-4">
                    {course.schedule}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 mt-auto">
                    <div className="w-full sm:flex-1">
                      <button className="flex items-center justify-center gap-2 bg-yellow-400 text-black border border-transparent hover:bg-transparent hover:border-yellow-300 hover:text-white text-sm font-semibold px-4 py-2 rounded-lg transition w-full cursor-pointer">
                        <CiBookmarkCheck className="text-base" />
                        Book Now
                      </button>
                    </div>
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
    </section>
  );
};

export default Course;
