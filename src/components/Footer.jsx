import React from "react";
import { Link } from "react-router";
import SeactionHeader from "./SeactionHeader";
import Button from "./Button";
import { footerLinks } from "../assets/data";

import { RiFacebookFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { LuSend } from "react-icons/lu";
const icons = [
  <RiFacebookFill />,
  <FaLinkedin />,
  <FaXTwitter />,
  <FaYoutube />,
];

const Footer = () => {
  return (
    <div className="mt-10">
      <div className="cta py-12">
        <div className="max-container ">
          <div className="flex items-center md:items-end justify-center md:justify-between gap-5 flex-col md:flex-row">
            <SeactionHeader
              title="Start Your Real Estate Journey Today"
              subTiltle="Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance."
            />

            <span className="">
              <Button
                id="explore-properties"
                title="Explore Properties"
                backgroudColor="#703bf7"
              />
            </span>
          </div>
        </div>
      </div>

      <div className="max-container">
        <footer className="bg-black w-full py-10">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5 pr-2">
            <div>
              <Link
                to="/"
                className="flex items-center gap-2 cursor-pointer select-none"
              >
                <img
                  src="icon.svg"
                  alt="logo"
                  className="size-6 md:size-9 lg:size-10"
                />
                <span className="font-semibold text-lg md:text-xl lg:text-2xl text-white">
                  Estatein
                </span>
              </Link>

              <div className="mt-3.5">
                <div className="flex-center border rounded-md border-gray-30 p-2">
                  <div className="flex-center w-full">
                    <span className="size-6 grid place-items-center text-lg text-gray-30">
                      <MdOutlineMarkEmailUnread />
                    </span>
                    <input
                      type="text"
                      name="message"
                      id="message"
                      className="border-none outline-none text-gray-60 text-sm w-full ml-1"
                      placeholder="Enter Your Email"
                    />
                  </div>
                  <button className="text-slate-300 size-6 grid place-items-center text-lg cursor-pointer p-1 transition md:hover:text-white active:text-purple-60">
                    <LuSend />
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {footerLinks.map((col) => (
                <div className="p-2" key={col.title}>
                  <h4 className="font-semibold text-gray-60 text-lg capitalize">
                    {col.title}
                  </h4>

                  <ul className="mt-3 border-l border-l-gray-30 md:border-none grid gap-0.5">
                    {col.links.map((i) => (
                      <li
                        className="p-1 px-2 capitalize cursor-pointer hover:text-slate-300 text-gray-30 transition font-normal active:text-purple-60 hover:bg-gray-10 rounded-sm"
                        key={i}
                      >
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-center justify-between gap-4 mt-8 flex-col md:flex-row">
            <div className="flex-center gap-4">
              <span className="text-gray-60 hover:text-white font-normal cursor-pointer text-sm md:text-base transition">
                @2023 Estatein. All Rights Reserved.
              </span>
              <span className="text-gray-60 hover:text-white font-normal cursor-pointer text-sm md:text-base transition">
                Terms & Conditions
              </span>
            </div>

            <div className="flex-center gap-2">
              {icons.map((icon, idx) => (
                <button
                  key={idx}
                  className="size-9 rounded-full grid place-items-center cursor-pointer text-lg transition duration-200 hover:text-white border border-transparent hover:border-gray-30/50 bg-gray-10 text-gray-60"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
