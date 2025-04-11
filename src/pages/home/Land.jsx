import React from "react";
import Button from "../../components/Button";
import IconContainer from "../../components/IconContainer";
import StaticCard from "../../components/StaticCard";
import { statics, iconBoxs } from "../../assets/data";
import img from "../../assets/landpage.png";
import discoverimg from "../../assets/discover.png";

const Land = () => {
  return (
    <>
      <div className="min-h-auto mt-4 flex justify-center lg:justify-between gap-4 flex-col-reverse items-start md:items-center md:flex-row px-2">
        <div className="mb-4 mt-10 md:mt-0">
          <h1 className="text-white text-2xl font-semibold lg:text-4xl">
            Discover Your Dream <br />
            Property with Estatein
          </h1>

          <p className="md:text-base text-sm text-gray-60 max-w-md my-3">
            Your journey to finding the perfect property begins here. <br />{" "}
            Explore our listings to find the home that matches <br /> your
            dreams.
          </p>

          <div className="flex-center gap-2 my-5">
            <Button id="learn-more" title="learn more" />
            <Button
              id="browse-properties"
              title="Browse Properties"
              backgroudColor="#703bf7"
            />
          </div>

          <div className="grid mt-5 grid-cols-2 sm:grid-cols-3 gap-2 md:mx-4 mx-0">
            {statics.map((item, index) => (
              <StaticCard key={index} num={item.number} text={item.title} />
            ))}
          </div>
        </div>

        <div className="relative size-full lg:w-[570px]">
          <img
            src={img}
            alt="land-img"
            className="size-full object-cover object-center w-[800px] rounded-md"
            loading="lazy"
          />

          <div className="size-[100px] md:size-[129px] lg:size-[155px] absolute -bottom-10 -left-2 md:top-8 lg:top-1/4 md:-left-[13%]">
            <img
              src={discoverimg}
              alt="discover"
              className="size-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-5 pr-2">
        {iconBoxs.map((box, i) => (
          <IconContainer
            key={i}
            icon={box.icon}
            description={box.description}
          />
        ))}
      </div>
    </>
  );
};

export default Land;