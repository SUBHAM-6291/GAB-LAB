import React from "react";


export const OutlineBtn = ({
  label = "Click Me",
  icon: Icon,
  onClick,
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`relative flex items-center justify-center gap-2 text-white text-[16px] font-medium px-6 py-3 rounded-md border border-yellow-300 hover:border-yellow-300 overflow-hidden group cursor-pointer ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2 transition duration-300 group-hover:text-black">
        {Icon && <Icon className="text-[18px]" />}
        {label}
      </span>
      <span className="absolute left-0 top-0 h-full w-0 bg-yellow-300 transition-all duration-300 group-hover:w-full z-0"></span>
    </button>
  );
};



export const BgBtn = ({
  icon: Icon,
  label = "Click Me",
  onClick,
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`relative flex items-center justify-center text-black text-[16px] font-medium px-6 py-3 rounded-md border border-yellow-300 overflow-hidden group cursor-pointer ${className}`}
    >
      <span className="relative z-10 flex items-center justify-center text-center gap-2 transition-colors duration-300 group-hover:text-white">
        {Icon && <Icon className="text-[18px]" />}
        {label}
      </span>
      <span className="absolute inset-0 w-full h-full bg-yellow-300 transition-all duration-300 group-hover:w-0 z-0"></span>
    </button>
  );
};
