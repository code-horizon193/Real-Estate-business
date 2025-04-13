import React from "react";
import stars from "../../public/stars.png";

const SeactionHeader = ({ title, subTiltle }) => {
  return (
    <div className="relative pt-4 mt-10">
      <img
        src={stars}
        alt="starts"
        className="absolute select-none pointer-events-none z-0 -top-4.5 -left-4 h-7 w-14 object-contain"
        loading="lazy"
      />

      <div className="relative z-10">
        <h2 className="text-3xl md:text-2xl font-semibold text-white mb-3 capitalize">
          {title}
        </h2>

        <p className="text-sm max-w-2xl lg:max-w-full text-gray-60">{subTiltle}</p>
      </div>
    </div>
  );
};

export default SeactionHeader;
