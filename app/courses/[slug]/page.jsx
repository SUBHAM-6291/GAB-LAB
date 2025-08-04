"use client";

import { useParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import courses from "@/app/_components/home/course/courseData";
import Image from "next/image";
import { BgBtn } from "@/app/_components/Private_Group/Tell_us_More_Here/Tell_us_More_Here";
import Slider from "react-slick";
import { IoChatbubbleEllipsesSharp, IoStar } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { LuMoveLeft, LuMoveRight } from "react-icons/lu";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./outer.css";
import Course from "@/app/_components/home/course/Course";

const faqs = [
  {
    question: "Do I need cooking experience?",
    answer:
      "Not at all! This class is designed for all skill levels, from beginners to experienced home cooks. Our chef will guide you through every step of the process.",
  },
  {
    question: "Is the class vegetarian-friendly?",
    answer:
      "Yes! We offer vegetarian paella options. Please let us know your dietary preferences when booking.",
  },
  {
    question: "What if I have food allergies?",
    answer:
      "We can accommodate most food allergies and dietary restrictions. Please inform us in advance so we can prepare accordingly.",
  },
  {
    question: "How long is the class?",
    answer:
      "Absolutely! We offer group bookings and private sessions for families, friends, or corporate teams.",
  },
];

const loveItCards = [
  {
    title: "Learn traditional paella from a pro chef",
    description:
      "Our experienced local chefs will guide you through authentic techniques and share family secrets to create the perfect paella.",
  },
  {
    title: "Cultural Deep Dive",
    description:
      "More than just cooking, discover the history, traditions, and stories behind Spain's most iconic dish.",
  },
  {
    title: "Meet fellow food lovers from around the world",
    description:
      "The full experience lasts approximately 3 hours, including the market tour, cooking class, and meal time.",
  },
];

const reviews = [
  {
    name: "Maria T.",
    quote:
      "Amazing! Chef Marta was incredible and made us feel like family. The paella was the best I've had in Barcelona, and I can't wait to try making it at home with the recipes she shared.",
  },
  {
    name: "John D.",
    quote:
      "The market tour was a highlight - learning about local ingredients before cooking made the experience so much more meaningful. Highly recommend to anyone visiting Barcelona!",
  },
  {
    name: "Sara K.",
    quote:
      "Incredible experience. Loved every second of cooking, learning, and eating together!",
  },
];

const PrevArrow = () => (
  <button className="text-white text-2xl hover:text-yellow-300 transition cursor-pointer">
    <LuMoveLeft />
  </button>
);

const NextArrow = () => (
  <button className="text-white text-2xl hover:text-yellow-300 transition cursor-pointer">
    <LuMoveRight />
  </button>
);

const CourseDetail = () => {
  const params = useParams();
  const sliderRef = useRef(null);
  const [course, setCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  useEffect(() => {
    if (params.slug) {
      const foundCourse = courses.find((c) => c.slug === params.slug);
      setCourse(foundCourse);
      setIsLoading(false);
    }
  }, [params.slug]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  if (isLoading) {
    return <div className="myContainer py-16 text-white">Loading...</div>;
  }

  if (!course) {
    return <div className="myContainer py-16 text-white">Course not found</div>;
  }

  return (
    <section className="pt-15 slugSlider">
      <div className="myContainer">
        {/* Course Info */}
        <div className="flex flex-col lg:flex-row gap-8 border rounded-lg border-gray-700 p-8 items-start">
          <div className="w-full lg:w-1/2 h-[500px]">
            <Image
              src={course.image}
              alt={course.title}
              width={1200}
              height={600}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl font-bold text-white mb-4">{course.title}</h1>
            <p className="desc">{course.description}</p>
            <div className="text-gray-300 mb-2 text-xl">
              <span className="text-white font-bold">Location: </span>
              {course.location}
            </div>
            <div className="text-gray-300 mb-2 text-xl">
              <span className="text-white font-bold">Price: </span>
              {course.price}
            </div>
            <div className="text-gray-300 mb-4 text-xl">
              <span className="text-white font-bold">Schedule: </span>
              {course.schedule}
            </div>
            <BgBtn label="Book Now" />
          </div>
        </div>

        {/* Why You'll Love It & Reviews */}
        <div className="topContainer">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h1 className="text-4xl font-bold text-white mb-6">Why You'll Love It</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {loveItCards.map((item, index) => (
                  <div key={index} className="bg-gray-800 border border-gray-700 rounded-xl p-7 shadow-md hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h1 className="text-4xl font-bold text-white mb-6">What's Included</h1>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {["Market Tour", "Dessert", "Sangria", "Recipes", "Tapas", "Paella Class"].map((item, index) => (
                  <div key={index} className="bg-gray-800 border border-gray-700 rounded-xl p-4 text-white shadow-md hover:shadow-lg transition">
                    <h3 className="text-lg font-semibold text-white">{item}</h3>
                  </div>
                ))}
              </div>

              <h1 className="text-4xl font-bold text-white mb-4">Customer Reviews</h1>
              <div className="relative">
                <div className="absolute -bottom-12 left-6 z-10">
                  <button onClick={() => sliderRef.current?.slickPrev()}>
                    <PrevArrow />
                  </button>
                </div>
                <div className="absolute -bottom-12 right-6 z-10">
                  <button onClick={() => sliderRef.current?.slickNext()}>
                    <NextArrow />
                  </button>
                </div>
                <Slider ref={sliderRef} {...sliderSettings}>
                  {reviews.map((review, index) => (
                    <div key={index} className="p-2 h-[180px]">
                      <div className="h-full bg-gray-800 border border-gray-600 rounded-lg p-4 shadow-md flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2 text-white">
                              <IoChatbubbleEllipsesSharp className="text-2xl" />
                              <p className="font-semibold text-white">– {review.name}</p>
                            </div>
                            <div className="flex gap-1 text-white">
                              {[...Array(5)].map((_, i) => (
                                <IoStar key={i} className="text-lg" />
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-200 italic line-clamp-4">“{review.quote}”</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>

          {/* FAQ + Map */}
          <div className="flex flex-col lg:flex-row gap-8 my-16">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-800 border border-gray-600 rounded-lg shadow-md">
                    <button className="w-full text-left p-4 flex justify-between items-center text-white font-semibold" onClick={() => toggleFaq(index)}>
                      {faq.question}
                      <span className="text-xl">{activeIndex === index ? "−" : "+"}</span>
                    </button>
                    {activeIndex === index && (
                      <div className="px-4 pb-4 text-gray-200">{faq.answer}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold text-white mb-6">Find Us on the Map</h2>
              <div className="w-full h-70 rounded-lg overflow-hidden border border-gray-600 shadow-md">
                <iframe
                  title="Location Map"
                  src="https://www.google.com/maps/embed?pb=..."
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <h2 className="text-xl font-bold text-white mt-6 flex items-center gap-2">
                <MdLocationOn className="text-yellow-300 text-2xl" />
                Cooking School Barcelona
              </h2>
              <p className="text-white text-lg">Carrer de la Boqueria, 25, 08002 Barcelona, Spain</p>
            </div>
          </div>
        </div>
      </div>

      {/* Other Courses */}
      <Course
        excludeSlug={params.slug}
        showSearch={false}
        showSectionContent={true}
        fullWidth={true}
        sectionHeading="Related Experiences"
      />
    </section>
  );
};

export default CourseDetail;
