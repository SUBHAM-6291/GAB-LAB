"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    show && (
      <button
        onClick={handleClick}
        className="hidden lg:flex fixed bottom-6 right-6 z-50 bg-yellow-300 text-black p-3 rounded-full shadow-lg animate-zoom-in-out hover:scale-110 transition cursor-pointer"
      >
        <FaArrowUp size={20} />
      </button>
    )
  );
}
