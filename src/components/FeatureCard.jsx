import React from "react";

import { IoBed } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { MdVilla } from "react-icons/md";

import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import Button from "./Button";

const FeatureCard = ({
  image,
  name,
  caption,
  bedroom,
  bathroom,
  villa,
  price,
}) => {
  return (
    <div>
      <div className="featue-card">
        <div className="w-full h-64 rounded-lg">
          <img
            src={image}
            alt={name}
            className="size-full object-cover rounded-lg object-center"
            loading="lazy"
          />
        </div>

        <div className="my-3">
          <h3 className="text-lg text-white capitalize">{name}</h3>
          <p className="mt-1 text-sm text-gray-60">{caption}</p>

          <div className="my-2.5 flex-center flex-wrap gap-3">
            <div className="flex-center gap-2 text-white bg-gray-10 border border-gray-30 px-3 rounded-full py-1.5 text-sm">
              <IoBed className="text-lg" />
              <span>{bedroom}-BedRoom</span>
            </div>
            <div className="flex-center gap-2 text-white bg-gray-10 border border-gray-30 px-3 rounded-full py-1.5 text-sm">
              <FaBath className="text-lg" />
              <span>{bathroom}-BedRoom</span>
            </div>
            {villa && (
              <div className="flex-center gap-2 text-white bg-gray-10 border border-gray-30 px-3 rounded-full py-1.5 text-sm">
                <MdVilla className="text-lg" />
                <span>Villa</span>
              </div>
            )}
          </div>

          <div className="flex-center justify-between">
            <div className="flex flex-col gap-1 items-start p-1 text-white">
              <span className=" text-sm">Price</span>
              <span className="font-semibold text-lg">${price}</span>
            </div>

            <Button
              id="view-details"
              title="View Details"
              backgroudColor="#703bf7"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
