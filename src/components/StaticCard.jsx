import React from "react";

const StaticCard = ({ num, text }) => {
  return (
    <div className="bg-gray-10 rounded-md p-3 last:col-span-2 lg:last:col-span-1">
      <p className="text-white text-2xl font-semibold">{num}</p>
      <p className="mt-1 text-gray-60 text-sm">{text}</p>
    </div>
  );
};

export default StaticCard;
