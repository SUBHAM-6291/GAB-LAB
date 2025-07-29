import React from "react";


export const OutlineBtn = ({
  label = "Click Me",
  onClick,
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`relative text-white text-[16px] font-medium px-6 py-3 rounded-md border border-yellow-300 hover:border-yellow-300 overflow-hidden group cursor-pointer w-fit ${className}`}
    >
      <span className="relative z-10 transition duration-300 group-hover:text-black">
        {label}
      </span>
      <span className="absolute left-0 top-0 h-full w-0 bg-yellow-300 transition-all duration-300 group-hover:w-full z-0"></span>
    </button>
  );
};


export const BgBtn = ({
  label = "Click Me",
  onClick,
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`relative text-black text-[16px] font-medium px-6 py-3 rounded-md border border-yellow-300 hover:border-yellow-300 overflow-hidden group cursor-pointer w-fit ${className}`}
    >
      <span className="relative z-10 transition duration-300 group-hover:text-white">
        {label}
      </span>
      <span className="absolute left-0 top-0 h-full w-full bg-yellow-300 transition-all duration-300 group-hover:w-0 z-0"></span>
    </button>
  );
};
