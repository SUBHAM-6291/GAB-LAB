"use client";

import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/public/Gastronmic_Arts_Barcelona_Logo.avif";
import { OutlineBtn } from "../BtnComponent/MyBtn";

// Menu items as object
const navData = {
  menu: [
    { label: "Home", href: "/" },
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
  const pathname = usePathname();

  const isActive = (href) => pathname === href;

  return (
    <header className="bg-[#111]">
      {/* Top Nav */}
      <div className="myContainer py-4 md:py-6 flex justify-between items-center">
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
        <nav className="hidden xl:flex gap-10 text-white text-[16px] font-medium">
          {navData.menu.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className={`relative group transition-colors duration-200 ${
                isActive(item.href)
                  ? "text-yellow-300"
                  : "hover:text-yellow-300"
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1 left-0 h-[2px] bg-yellow-300 transition-all duration-300 ${
                  isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Desktop Contact Us Button */}
        <Link href="/contact-us" className="hidden xl:block">
          <OutlineBtn label="Contact Us" type="button" />
        </Link>

        {/* Mobile Menu Icon */}
        <button
          className="xl:hidden text-3xl text-white"
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
        className={`fixed top-0 left-0 h-full w-full md:w-[50%] bg-black/60 backdrop-blur-md text-white p-6 z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Top Bar in Menu */}
        <div className="mb-6">
          <div className="flex justify-between items-center">
            <Image src={logo} alt="Logo" width={100} height={0} priority />
            <button onClick={() => setMenuOpen(false)} className="text-2xl">
              <HiX />
            </button>
          </div>
          <div className="mt-4 border-b border-yellow-300/50" />
        </div>

        {/* Mobile Links */}
        <ul className="space-y-4 text-lg">
          {navData.menu.map((item, idx) => (
            <li key={idx}>
              <Link
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`relative block group py-1 ${
                  isActive(item.href)
                    ? "text-yellow-300"
                    : "hover:text-yellow-300"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-yellow-300 transition-all duration-300 ${
                    isActive(item.href) ? "w-10" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
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
