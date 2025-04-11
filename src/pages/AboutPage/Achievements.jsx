import React from "react";
import SeactionHeader from "../../components/SeactionHeader";
import { achievement } from "../../assets/data";

const Achievements = () => {
  return (
    <div className="mt-8 md:mt-20">
      <div className="mb-6">
        <SeactionHeader
          title="Our Achievements"
          subTiltle="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
        />
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {achievement.map((item) => (
          <div
            className="featue-card shadow-lg shadow-purple-60/20"
            key={item.title}
          >
            <div className="space-y-2">
              <div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="size-11 rounded-full"
                />
              </div>

              <div className="mt-3">
                <h4 className="text-lg text-white font-medium">{item.title}</h4>
                <p className="text-sm text-gray-30 mt-2">{item.discription}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
