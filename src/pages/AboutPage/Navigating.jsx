import React from "react";
import SeactionHeader from "../../components/SeactionHeader";
import { navigating } from "../../assets/data";

const Navigating = () => {
  return (
    <div className="mt-6 lg:mt-12">
      <div className="mb-7">
        <div className="mb-6">
          <SeactionHeader
            title="Navigating the Estatein Experience"
            subTiltle="At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {navigating.map((item) => (
            <div
              key={item.title}
              className="border gradient relative border-white/20 overflow-hidden z-10"
            >
              <div className="py-2 px-3 text-slate-200 font-semibold border-b text-lg border-white/20 ">
                {item.header}
              </div>

              <div className="p-3">
                <p className="text-white text-base font-semibold">{item.title}</p>

                <p className="mt-2.5 text-sm text-gray-60">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigating;
