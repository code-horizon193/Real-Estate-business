import React from "react";
import Button from "../../components/Button";

import { FiSearch } from "react-icons/fi";

import { propertyOptions } from "../../assets/data";
import SectionTitle from "../../components/SectionTitle";

const LandPage = () => {
  return (
    <section>
      <SectionTitle
        id="find-property"
        title="Find Your Dream Property"
        discription="Welcome to Estatein, where your dream property awaits in every
              corner of our beautiful world. Explore our curated selection of
              properties, each offering a unique story and a chance to redefine
              your life. With categories to suit every dreamer, your journey"
      />

      <div className="max-container relative py-5 ">
        <div className="w-full flex-center justify-center ">
          <div className="flex-center gap-3 bg-gray-10 w-full md:w-2/3 p-2 rounded-md shadow-lg shadow-white/20 absolute pr-3">
            <input
              type="text"
              placeholder="search for a Property"
              className="w-[90%] border-none outline-none p-2 text-white"
            />
            <Button
              id="find-property"
              title="Find Property"
              backgroudColor="#703bf7"
              leftIcon={<FiSearch className="text-2xl" />}
            />
          </div>
        </div>

        <div className="mt-15">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
            {propertyOptions.map((field) => (
              <div
                key={field.label}
                className="p-3 rounded-md bg-gray-10 flex-center gap-1 transition duration-300 hover:opacity-90 cursor-pointer"
              >
                {<field.icon className="text-lg text-gray-60" />}
                <div className="w-full">
                  <select
                    name={field.label}
                    id={field.label}
                    className="py-3 px-4 pe-9 block w-full border-none rounded-lg text-sm  disabled:opacity-50 outline-none disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-gray-60  "
                  >
                    {field.options.map((opt, idx) => (
                      <option key={idx} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandPage;
