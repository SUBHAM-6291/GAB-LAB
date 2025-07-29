"use client";

import React, { useState } from "react";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import Image from "next/image";
import logo from "@/public/Gastronmic_Arts_Barcelona_Logo.avif";
import { OutlineBtn } from "../BtnComponent/MyBtn";
import Link from "next/link";

// Menu items as object
const navData = {
  menu: [
    { label: "Our Classes", href: "/our-class" },
    { label: "Private Group", href: "/private-group" },
    { label: "Our Story", href: "/our-story" },
    { label: "Partnership", href: "/partnership" },
    { label: "Blog", href: "/blog" },
    { label: "Faq", href: "/faq" },
    { label: "Gift Cards", href: "/gift-cards" },
  ],
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black shadow-md">
      <div className="myContainer pt-6 md:pt-8 pb-2 flex justify-between items-center ">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image src={logo} alt="Logo" width={100} height={0} priority className="cursor-pointer" />
          </Link>
        </div>

        {/* Center: Menu (Desktop) */}
        <nav className="hidden lg:flex gap-10 text-white text-[16px] font-medium">
          {navData.menu.map((item, idx) => (
            <a key={idx} href={item.href} className="hover:text-yellow-400">
              {item.label}
            </a>
          ))}
        </nav>

        {/* Contact Us Button */}
        <Link href="/contact">
          <OutlineBtn label="Contact Us" type="button" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-3xl text-white"
          onClick={() => setMenuOpen(true)}
        >
          <HiMenu />
        </button>
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
