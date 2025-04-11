import React from "react";
import StaticCard from "../../components/StaticCard";
import { statics } from "../../assets/data";
import SeactionHeader from "../../components/SeactionHeader";

const Hero = () => {
  return (
    <div className="mt-5">
      <div className="flex items-start md:items-center justify-between gap-5 flex-col-reverse md:flex-row">
        <div>
          <SeactionHeader
            title="Our Journey"
            subTiltle="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients."
          />

          <div className="grid mt-5 grid-cols-2 sm:grid-cols-3 gap-2 md:mx-4">
            {statics.map((item, idx) => (
              <StaticCard key={idx} num={item.number} text={item.title} />
            ))}
          </div>
        </div>

        <div className="size-full lg:w-lg about relative z-[2] rounded-lg overflow-hidden border border-gray-30/50">
            <img src="public/about-bg.png" className="size-full object-cover object-center" alt="about img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
