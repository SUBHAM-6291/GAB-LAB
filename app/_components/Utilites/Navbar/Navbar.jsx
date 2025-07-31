"use client";

import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/Gastronmic_Arts_Barcelona_Logo.avif";
import { OutlineBtn } from "../BtnComponent/MyBtn";

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
      {/* Top Nav */}
      <div className="myContainer pt-6 md:pt-8 pb-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={logo}
              alt="Logo"
              width={100}
              height={0}
              priority
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex gap-10 text-white text-[16px] font-medium">
          {navData.menu.map((item, idx) => (
            <a key={idx} href={item.href} className="hover:text-yellow-400">
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Contact Us Button */}
        <Link href="/contact-us" className="hidden xl:block">
          <OutlineBtn label="Contact Us" type="button" />
        </Link>

        {/* Mobile Menu Icon */}
        <button
          className="lg:hidden text-3xl text-white"
          onClick={() => setMenuOpen(true)}
        >
          <HiMenu />
        </button>
      </div>

      {/* Mobile Overlay */}
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
        {/* Top Bar in Menu */}
        <div className="flex justify-between items-center mb-6">
          <Image src={logo} alt="Logo" width={100} height={0} priority />
          <button onClick={() => setMenuOpen(false)} className="text-2xl">
            <HiX />
          </button>
        </div>

        {/* Mobile Links */}
        <ul className="space-y-4 text-lg">
          {navData.menu.map((item, idx) => (
            <li key={idx}>
              <a href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Contact Us Button */}
        <div className="mt-6">
          <Link href="/contact-us">
            <OutlineBtn
              label="Contact Us"
              type="button"
              className="w-full text-center"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
