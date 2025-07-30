"use client";

import React, { useState } from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { BgBtn } from "../../Utilites/BtnComponent/MyBtn";
import SectionContent from "../../Utilites/SectionContent/SectionContent";

const ContactUs = () => {
  const [phone, setPhone] = useState("");

  return (
    <section className="myContainer topContainer">
      <div className="grid lg:grid-cols-2 gap-[20px] lg:gap-[60px] xl:gap-[80px]">
        {/* Left Side: Contact Form */}
        <div className="mbg rounded-xl p-4 md:p-10">
          <SectionContent
            icon={RiArrowRightDoubleFill}
            tooltrip="Contact us"
            tooltripClass="border border-yellow-300 bg-yellow-300 text-black"
            heading="Get In Touch"
            hedingClass="text-white"
            desCriptionClass='hidden'
          />
          <form className="space-y-4 mt-6">
            <div>
              <label className="formLabel">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="formInput"
              />
            </div>

            <div>
              <label className="formLabel">Email Address</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="formInput"
              />
            </div>

            <div className="no-flag-tooltip">
              <label className="formLabel">Phone Number</label>
              <PhoneInput
                country={"us"}
                value={phone}
                onChange={setPhone}
                containerClass="!w-full"
                inputClass="!bg-[#484848] !text-white !w-full !rounded-lg !pl-12 !h-12 !border-1 !border-gray-400 !outline-none !shadow-none focus:!outline-none focus:!ring-0"
                buttonClass="!bg-yellow-300 !rounded-l-lg !border-none !outline-none  !hover:bg-yellow-300 !focus:outline-none"
              />
            </div>

            <div>
              <label className="formLabel">Message</label>
              <textarea
                rows={4}
                placeholder="Write your message here..."
                className="formInput"
              ></textarea>
            </div>

            <BgBtn type="submit" label="Send Now" className="w-full" />
          </form>
        </div>

        {/* Right Side: Contact Info + Map */}
        <div className="flex flex-col gap-6 my-6">
          <p className="text-gray-200 text-lg">
            We'd love to hear from you! Reach out to us through any of the
            methods below or visit our office.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-6">
            {/* Phone */}
            <div
              className="flex flex-col items-center text-center gap-2 mbg p-4 rounded-lg shadow transition-shadow duration-300 hover:shadow-md hover:shadow-yellow-300 cursor-pointer"
              onClick={() => (window.location.href = "tel:+1234567890")}
            >
              <FiPhone className="text-yellow-500 text-[32px]" />
              <div>
                <h5 className="font-semibold text-white text-xl">
                  Phone Number
                </h5>
                <p className="text-gray-400 text-lg">+1 234 567 890</p>
              </div>
            </div>

            {/* Email */}
            <div
              className="flex flex-col items-center text-center gap-2 mbg p-4 rounded-lg shadow transition-shadow duration-300 hover:shadow-md hover:shadow-yellow-300 cursor-pointer"
              onClick={() =>
                (window.location.href = "mailto:contact@example.com")
              }
            >
              <FiMail className="text-yellow-500 text-[32px]" />
              <div>
                <h5 className="font-semibold text-white text-xl">
                  Email Address
                </h5>
                <p className="text-gray-400 text-lg">contact@example.com</p>
              </div>
            </div>

            {/* WhatsApp */}
            <div
              className="flex flex-col items-center text-center gap-2 mbg p-4 rounded-lg shadow transition-shadow duration-300 hover:shadow-md hover:shadow-yellow-300 cursor-pointer"
              onClick={() =>
                (window.location.href = "https://wa.me/19876543210")
              }
            >
              <FaWhatsapp className="text-yellow-500 text-[32px]" />
              <div>
                <h5 className="font-semibold text-white text-xl">WhatsApp</h5>
                <p className="text-gray-400 text-lg">+1 987 654 3210</p>
              </div>
            </div>

            {/* Office */}
            <div className="flex flex-col items-center text-center gap-2 mbg p-4 rounded-lg shadow transition-shadow duration-300 hover:shadow-md hover:shadow-yellow-300">
              <FiMapPin className="text-yellow-500 text-[32px]" />
              <div>
                <h5 className="font-semibold text-white text-xl">Our Office</h5>
                <p className="text-gray-400 text-lg">
                  123 Barcelona Street, Spain
                </p>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="w-full h-[300px] lg:h-[200px] xl:h-[300px] mt-4 rounded-md overflow-hidden">
            <iframe
              title="Google Map"
              className="w-full h-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.105007114509!2d2.1652402154132216!3d41.38506327926371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f3a6b3a773%3A0xe84881e1ef229c87!2sBarcelona%2C%20Spain!5e0!3m2!1sen!2sin!4v1698245180298!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
