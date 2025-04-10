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
    <div className="featue-card">
      <div className="p-1 grid gap-3">
        <div className="flex-center gap-1">
          {Array(rate)
            .fill(1)
            .map((_, index) => (
              <span
                key={index}
                className="size-6 rounded-full border border-gray-30 text-yellow-400 grid place-items-center text-xl"
              >
                <RiStarSFill />
              </span>
            ))}
        </div>

        <div className="my-2">
          <h3 className="text-white text-lg font-semibold">{title}</h3>
          <p className="text-slate-300 text-sm mt-1">{comment}</p>
        </div>

        <div className="flex-center gap-3 pt-3 md:pt-0 border-t md:border-none border-t-gray-30">
          <img
            src={userImg}
            alt={userName}
            className="size-14 object-cover"
            loading="lazy"
          />
          <div>
            <p className="text-shadow-slate-200 font-semibold">{userName}</p>
            <p className="text-sm text-gray-60">{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
