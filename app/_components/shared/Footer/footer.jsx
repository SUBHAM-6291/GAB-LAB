import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/Gastronmic_Arts_Barcelona_Logo.avif";
import "./footer.css";
import { BgBtn } from "../../Utilites/BtnComponent/MyBtn";
import { IoIosSend } from "react-icons/io";

// Quick Links Array
const quickLinks = [
  { label: "Our Classes", href: "#" },
  { label: "Private Group", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "Terms and Conditions", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

// Social Icons Array
const socialIcons = [
  { icon: FaFacebookF, href: "#" },
  { icon: FaInstagram, href: "#" },
  { icon: FaTwitter, href: "#" },
  { icon: FaLinkedinIn, href: "#" },
];

const Footer = () => {
  return (
    <footer className="topContainer bg-[#1a1a1a] pt-20">
      {/* Main Grid */}
      <div className="myContainer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-15 md:gap-10">
        {/* Logo & Description */}
        <div>
          <div className="relative w-full mb-4">
            <Link href="/">
              <Image src={logo} alt="Logo" width={180} height={0} priority className="object-cover" />
            </Link>
          </div>
          <p className="text-gray-300 text-base mb-4">
            Authentic cooking classes in the heart of Barcelona. Learn
            traditional Spanish recipes with our expert chefs.
          </p>
          <div className="flex gap-4 text-yellow-400 text-lg">
            {socialIcons.map(({ icon: Icon, href }, idx) => (
              <a
                href={href}
                key={idx}
                className="hover:text-yellow-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:pl-10">
          <h3 className="text-2xl font-semibold text-white mb-6">
            Quick Links
          </h3>
          <ul className="space-y-3 text-gray-300 text-base">
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <a href={link.href} className="hover:text-yellow-300">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-6">Contact Us</h3>
          <p className="text-gray-300 text-base mb-4">
            <strong>Address:</strong>
            <br />
            Carrer de Lancaster, 10, Bajo 1a,
            <br />
            08001, Barcelona
          </p>
          <p className="text-gray-300">
            <strong>Phone:</strong> +91 7797756092
          </p>
        </div>

        {/* Newsletter */}
        <div className="md:pl-10 lg:pl-0">
          <h3 className="text-2xl font-semibold text-white mb-6">
            Subscribe Newsletter
          </h3>
          <p className="text-gray-300 text-base mb-4">
            Stay updated with the latest classes and fitness tips.
          </p>
          <form className="flex flex-col gap-3 w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <BgBtn icon={IoIosSend} label="Subscribe" type="submit" className="w-full" />
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-15 pb-4 text-center text-gray-300 text-base border-t border-gray-700 pt-6">
        © Gastronomic Arts Barcelona 2025 | Designed and Developed by{" "}
        <span className="text-yellow-300 font-semibold">Ethicaldan</span>
      </div>
    </footer>
  );
};

export default Footer;
