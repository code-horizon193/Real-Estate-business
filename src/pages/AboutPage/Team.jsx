import React from "react";
import SeactionHeader from "../../components/SeactionHeader";
import { team } from "../../assets/data";

import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

const media = [<FaXTwitter />, <FaFacebook />, <FaLinkedin />, <FaLink />];

const Team = () => {
  return (
    <div className="mt-6 md:mt-12">
      <div>
        <SeactionHeader
          title="Meet the Estatein Team"
          subTiltle="At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality."
        />
      </div>

      <div className="mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {team.map((member) => (
            <div
              key={member.name}
              className={`border border-white/10 bg-gray-10 p-4 rounded-lg shadow-lg ${member.shadow} transition duration-200 hover:bg-black hover:border-white/30`}
            >
              <div className="flex items-start">
                <div
                  className={`size-16 rounded-full p-1.5 bg-conic from-transparent ${member.gradient} border cursor-pointer`}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="size-full rounded-full object-cover object-center"
                  />
                </div>

                <div className="ml-4">
                  <h4
                    className={`${member.color} text-lg font-semibold cursor-pointer hover:underline capitalize`}
                  >
                    {member.name}
                  </h4>
                  <p className="text-gray-30 mt-1 font-medium ">
                    {member.position}
                  </p>
                </div>
              </div>
              <div className="mt-3 flex justify-center border-t border-t-white/20 pt-3">
                <div className="flex-center gap-4">
                    {media.map((icon ,index) => (
                        <button className="text-lg size-9 grid place-items-center bg-gray-30 rounded-full text-white cursor-pointer hover:bg-purple-60">
                            {icon}
                        </button>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
