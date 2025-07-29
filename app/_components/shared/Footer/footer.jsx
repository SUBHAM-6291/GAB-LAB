import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import Image from "next/image";
import logo from "@/public/Gastronmic_Arts_Barcelona_Logo.avif";
import "./footer.css"; 

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
    <footer className="myContainer topContainer footer-container">
      {/* Main Grid */}
      <div className="footer-grid">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center w-full mb-4">
            <Image src={logo} alt="Logo" width={220} height={0} priority />
          </div>
          <p className="text-gray-400 mb-4">
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
        <div className="pl-10">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
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
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400 mb-2">
            <strong>Address:</strong>
            <br />
            Carrer de Lancaster, 10, Bajo 1a,
            <br />
            08001, Barcelona
          </p>
          <p className="text-gray-400">
            <strong>Phone:</strong> +34 ‪936 41 53 99
          </p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-gray-400 mb-4">
            Stay updated with the latest classes and fitness tips.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-300 w-full"
            />
            <button
              type="submit"
              className="bg-yellow-300 text-black px-4 py-2 rounded-md hover:bg-yellow-400 transition-all font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-20 text-center text-gray-500 text-sm">
        © Gastronomic Arts Barcelona 2025 | Designed and Developed by{" "}
        <span className="text-yellow-300 font-semibold">Ethicaldan</span>
      </div>
    </footer>
  );
};

export default Footer;
