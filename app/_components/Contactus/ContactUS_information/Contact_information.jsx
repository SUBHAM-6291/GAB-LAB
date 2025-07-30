"use client";

import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { OutlineBtn } from "../../Utilites/BtnComponent/MyBtn";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function ContactSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
      className="bg-[#0f0f0f] myContainer text-white py-20"
    >
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Info */}
        <motion.div
          variants={staggerContainer}
          className="space-y-10"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-5xl heding font-bold text-yellow-400"
          >
            Contact Information
          </motion.h2>

          {[
            {
              Icon: FaMapMarkerAlt,
              label: "Address",
              content:
                "Gastronomic Arts Barcelona\nCarrer de Lancaster, 10, Bajo 1a, Barcelona, Spain, 08001",
            },
            {
              Icon: FaPhoneAlt,
              label: "Phone",
              content: "+34 946 41 53 99",
            },
            {
              Icon: FaEnvelope,
              label: "Email",
              content: "hello@gastronomicartsbarcelona.com",
            },
          ].map(({ Icon, label, content }, i) => (
            <motion.div
              key={label}
              custom={i + 1}
              variants={fadeInUp}
              className="flex items-start gap-4 group"
            >
              <Icon className="text-yellow-400 text-2xl mt-1 group-hover:scale-110 transition-transform duration-200" />
              <div>
                <h4 className="font-semibold uppercase text-white mb-1">
                  {label}:
                </h4>
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {content}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Map */}
          <motion.div variants={fadeInUp} custom={4} className="pt-4">
            <div className="rounded-lg border border-yellow-500 overflow-hidden shadow-[0_0_30px_#fde68a40] w-full max-w-md hover:scale-[1.01] transition-transform duration-300">
              <iframe
                title="Gastronomic Arts Barcelona Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.3743674089844!2d2.1715833760901487!3d41.37829219763254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f446ccf3d9%3A0x7e5c2802a518bb73!2sCarrer%20de%20Lancaster%2C%2010%2C%20Ciutat%20Vella%2C%2008001%20Barcelona%2C%20Spain!5e0!3m2!1sen!2sin!4v1695919468643!5m2!1sen!2sin"
                width="100%"
                height="300"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[300px]"
              ></iframe>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Form */}
        <motion.div
          variants={staggerContainer}
          className="space-y-8"
        >
          <motion.h2
            variants={fadeInUp}
            custom={5}
            className="text-3xl font-bold heding text-white"
          >
            Contact Us
          </motion.h2>

          <motion.form
            className="space-y-6"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.input
                type="text"
                placeholder="First name"
                className="bg-[#1a1a1a] border border-gray-600 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-400"
                variants={fadeInUp}
                custom={6}
              />
              <motion.input
                type="text"
                placeholder="Last name"
                className="bg-[#1a1a1a] border border-gray-600 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-400"
                variants={fadeInUp}
                custom={7}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.input
                type="email"
                placeholder="Email"
                required
                className="bg-[#1a1a1a] border border-gray-600 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-400"
                variants={fadeInUp}
                custom={8}
              />
              <motion.input
                type="tel"
                placeholder="Phone"
                className="bg-[#1a1a1a] border border-gray-600 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-400"
                variants={fadeInUp}
                custom={9}
              />
            </div>

            <motion.textarea
              rows="5"
              placeholder="Message"
              required
              className="w-full bg-[#1a1a1a] border border-gray-600 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-400"
              variants={fadeInUp}
              custom={10}
            ></motion.textarea>

            <motion.div
              variants={fadeInUp}
              custom={11}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <OutlineBtn
                label="Request a Quote"
                type="button"
                onClick={() => console.log("button clicked")}
              />
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </motion.section>
  );
}
