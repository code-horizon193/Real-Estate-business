import React, { useState } from "react";
import { Link, NavLink } from "react-router";

import { links } from "../assets/data";

import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
  const [isOpen, setisOpen] = useState(false);

  const activeLink =
    "px-3 py-1 bg-black rounded-md text-base font-medium text-white";
  const normalLink = "px-3 py-1 rounded-md text-base font-medium text-gray-60";
  const mobileNormalLink =
    "whitespace-nowrap px-3 py-1 rounded-md text-base font-medium text-gray-60";

  return (
    <div className="w-screen bg-gray-10">
      <div className="max-container">
        <div className="flex items-center justify-between ">
          <div>
            <Link
              to="/"
              className="flex items-center gap-2 cursor-pointer select-none"
            >
              <img
                src="public/icon.svg"
                alt="logo"
                className="size-6 md:size-9 lg:size-10"
              />
              <span className="font-semibold text-lg md:text-xl lg:text-2xl text-white">
                Estatein
              </span>
            </Link>
          </div>

          <button
            type="button"
            className="size-9 grid place-items-center md:hidden text-gray-60 text-xl active:text-gray-300 cursor-pointer hover:bg-black transition rounded-sm"
            onClick={() => setisOpen((prev) => !prev)}
          >
            {isOpen ? <IoMdClose /> : <AiOutlineMenu />}
          </button>

          <div className="hidden md:block">
            <div className="flex items-center gap-2">
              {links.map((link, index) => (
                <NavLink
                  key={index}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                  to={`/${link.to}`}
                >
                  {link.link}
                </NavLink>
              ))}
            </div>
          </div>

          <div
            className={`fixed ${
              isOpen ? "left-0" : "-left-full"
            } transition-all duration-300 ease-in-out top-0 w-52 bg-gray-10 h-dvh`}
            style={{ zIndex: "1000" }}
          >
            <div className="size-full py-7 px-2 flex flex-col gap-3">
              <div className="mb-3 border-b pb-2 border-b-gray-60">
                <p className="text-xl font-semibold text-gray-300 uppercase">
                  Menu
                </p>
              </div>
              {links.map((link, index) => (
                <NavLink
                  key={index}
                  className={({ isActive }) =>
                    isActive ? activeLink : mobileNormalLink
                  }
                  to={`/${link.to}`}
                  onClick={() => setisOpen(false)}
                >
                  {link.link}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
