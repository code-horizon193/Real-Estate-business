import React from "react";
import SeactionHeader from "./SeactionHeader";
import Button from "./Button";
import FeatureCard from "./FeatureCard";

import { features } from "../assets/data";

const FeaturePropites = ({
  sectionTitle,
  sectionSubTitle,
  sectionId,
  btnContent,
}) => {
  return (
    <div className="mt-7 text-white px-2">
      <div className="flex items-end justify-between gap-5">
        <SeactionHeader title={sectionTitle} subTiltle={sectionSubTitle} />
        {sectionId && (
        <span className="hidden md:block">
          <Button id={sectionId} title={btnContent} />
        </span>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {features.map((item, index) => (
          <FeatureCard
            key={index}
            image={item.image}
            name={item.featName}
            caption={item.caption}
            bedroom={item.bedRoom}
            bathroom={item.bathRoom}
            villa={item.villa}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturePropites;
