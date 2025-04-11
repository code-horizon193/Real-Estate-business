import React from "react";
import { values } from "../../assets/data";
import ValueCard from "../../components/ValueCard";
import SeactionHeader from "../../components/SeactionHeader";

const Values = () => {
  return (
    <div className="mt-7 md:mt-20">
      <div className="flex md:items-center md:justify-between flex-col md:flex-row gap-5">
        <div className="md:mb-5">
          <SeactionHeader
            title="Our Values"
            subTiltle="We are dedicated to providing you with the highest level of service, professionalism, and support."
          />
        </div>

        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 mt-2">
            {values.map((value) => (
                <ValueCard 
                  key={value.vName}
                  imgSrc={value.image}
                  valueName={value.vName}
                  valueCaption={value.vSubTitle}
                />
            ))}
        </div>

      </div>
    </div>
  );
};

export default Values;
