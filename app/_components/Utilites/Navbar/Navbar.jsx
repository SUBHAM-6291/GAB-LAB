"use client";

import React, { useState } from "react";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import Image from "next/image";
import logo from "@/public/Gastronmic_Arts_Barcelona_Logo.avif";

// Menu items as object
const navData = {
  menu: [
    { label: "Our Classes", href: "#" },
    { label: "Private Group", href: "#" },
    { label: "Our Story", href: "#" },
    { label: "Blog", href: "#" },
    { label: "F.A.Q.", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "Partnership", href: "#" },
    { label: "Gift Cards", href: "#" },
  ],
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-black shadow-md z-50">
      <div className="px-4 md:px-6 lg:px-[60px] py-4 flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Image src={logo} alt="Logo" width={100} height={0} priority />
        </div>

        {/* Center: Menu (Desktop) */}
        <nav className="hidden lg:flex gap-8 text-white text-[14px] font-medium">
          {navData.menu.map((item, idx) => (
            <a key={idx} href={item.href} className="hover:text-yellow-400">
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-4">
          {/* Country Select with custom arrow */}
          <div className="relative">
            <select className="appearance-none px-6 pr-8 py-1 rounded text-xl text-white bg-black cursor-pointer focus:outline-none focus:ring-0 focus:border-transparent">
              <option>🇺🇸</option>
              <option>🇮🇳</option>
              <option>🇫🇷</option>
            </select>

            <div className="pointer-events-none absolute inset-y-0 right-2 top-2 flex items-center text-white">
              <HiChevronDown className="w-5 h-5" />
            </div>
          </div>

          {/* Contact Us Button */}
          <button className="hidden lg:inline-block text-white text-[16px] font-medium px-5 py-2 rounded-md border-1 cursor-pointer hover:bg-yellow-300 hover:border-yellow-300 hover:text-black transition duration-300">
            Paella Classes
          </button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-3xl text-white"
            onClick={() => setMenuOpen(true)}
          >
            <HiMenu />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          menuOpen ? "bg-black/60 visible" : "invisible opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Slide-out Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 sm:w-1/2 bg-black text-white p-6 z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <Image src={logo} alt="Logo" width={100} height={0} priority />
          </div>
          <button onClick={() => setMenuOpen(false)} className="text-2xl">
            <HiX />
          </button>
        </div>
        <ul className="space-y-4 text-lg">
          {navData.menu.map((item, idx) => (
            <li key={idx}>
              <a href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
