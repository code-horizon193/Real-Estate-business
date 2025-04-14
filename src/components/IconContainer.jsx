import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const IconContainer = ({ icon, description }) => {
  return (
    <div className="bg-gray-10 relative p-4 pb-5 rounded-md border border-transparent group hover:border-slate-600 transition-all duration-200">
      <span className="absolute top-4 right-6 text-2xl text-gray-30 cursor-pointer group-hover:text-green-500 transition">
        <GoArrowUpRight />
      </span>
      <div className="flex flex-col items-center justify-center gap-3.5">
        <img
          src={icon}
          alt={icon}
          className="size-14 lg:size-15"
          loading="lazy"
        />

        <p className="text-gray-60 mt-2 text-sm lg:text-base text-center font-normal">
          {description}
        </p>
      </div>
    </div>
  );
};

export default IconContainer;
