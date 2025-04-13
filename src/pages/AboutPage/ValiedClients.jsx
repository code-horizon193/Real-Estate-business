import React from "react";
import SeactionHeader from "../../components/SeactionHeader";

import { BsLightningCharge } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";

import { vaileds } from "../../assets/data";

const ValiedClients = () => {
  return (
    <div className="mt-6 lg:mt-12">
      <div className="mb-5">
        <div className="mb-6">
          <SeactionHeader
            title="Our Valued Clients"
            subTiltle="At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving"
          />
        </div>

        <div className="mt-6">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {vaileds.map((box, idx) => (
              <div
                key={idx}
                className="p-5 border border-white/20 rounded-md shadow-lg shadow-purple-60/20"
              >
                <div className="mb-3">
                  <p className="text-gray-60 text-sm md:text-base">
                    {box.year}
                  </p>
                  <p className="text-lg font-semibold text-white mt-1">
                    {box.box_title}
                  </p>
                </div>
                <div className="flex items-start gap-2 justify-between">
                  <div className="py-1 flex-1">
                    <p className="text-gray-60 flex-center gap-1.5">
                      <RxDashboard />
                      <span>Domain</span>
                    </p>
                    <p className="text-white cursor-pointer hover:underline hover:underline-offset-2 transition hover:text-slate-300">
                      {box.domain}
                    </p>
                  </div>
                  <div className="p-1 pl-2 flex-1 nth-[2]:border-l nth-[2]:border-l-white/20">
                    <p className="text-gray-60 flex-center gap-1.5">
                      <BsLightningCharge />
                      <span>Category</span>
                    </p>
                    <p className="text-white cursor-pointer hover:underline hover:underline-offset-2 transition hover:text-slate-300">
                      {box.category}
                    </p>
                  </div>
                </div>

                <div className="p-3 mt-3 border rounded-md border-white/25">
                  <p className="text-gray-60 mb-1.5 text-base">
                    What They Said 🤗
                  </p>
                  <p className="text-white">{box.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValiedClients;
