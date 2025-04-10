import React from "react";
import SeactionHeader from "../../components/SeactionHeader";
import Button from "../../components/Button";
import FeatureCard from "../../components/FeatureCard";

import { features } from "../../assets/data";

const FeaturePropites = () => {
  return (
    <div className="mt-7 text-white px-2">
      <div className="flex items-end justify-between gap-5">
        <SeactionHeader
          title="Featured Properties"
          subTiltle='Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.'
        />

        <span className="hidden md:block">
          <Button id="view-properties" title="View All Properties" />
        </span>
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
