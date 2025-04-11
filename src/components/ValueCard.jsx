import React from "react";

const ValueCard = ({ imgSrc, valueName, valueCaption }) => {
  return (
    <div className="featue-card shadow-lg shadow-purple-60/20 cursor-pointer">
        <div className="flex-center gap-2">
            <img src={imgSrc} alt={valueName} className="size-11" />
            <span className="text-white font-medium capitalize text-lg">{valueName}</span>
        </div>
        <p className="mt-2 text-sm text-gray-60">{valueCaption}</p>
    </div>
  );
};

export default ValueCard;
