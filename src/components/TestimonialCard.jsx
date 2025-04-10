import React from "react";
import { RiStarSFill } from "react-icons/ri";

const TestimonialCard = ({
  title,
  comment,
  rate,
  userName,
  userImg,
  location,
}) => {
  return (
    <div className="featue-card shadow-lg shadow-gray-60/30 transition hover:shadow-sm">
      <div className="p-1 grid gap-3">
        <div className="flex-center gap-1">
          {Array(rate)
            .fill(1)
            .map((_, index) => (
              <span
                key={index}
                className="size-6 rounded-full border border-gray-30/60 text-yellow-400 grid place-items-center text-xl"
              >
                <RiStarSFill />
              </span>
            ))}
        </div>

        <div className="my-2">
          <h3 className="text-white text-lg font-semibold hover:underline transition-all duration-200 hover:underline-offset-2 hover:text-gray-60">{title}</h3>
          <p className="text-slate-300 text-sm mt-1">{comment}</p>
        </div>

        <div className="flex-center gap-3 pt-3 md:pt-0 border-t md:border-none border-t-gray-30">
          <img
            src={userImg}
            alt={userName}
            className="size-12 object-cover cursor-pointer"
            loading="lazy"
          />
          <div>
            <p className="text-shadow-slate-200 font-meduim cursor-pointer transition duration-200 hover:text-indigo-500">{userName}</p>
            <p className="text-sm text-gray-60 font-normal">{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
