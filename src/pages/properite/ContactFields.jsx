import React from "react";
import { labelsContact } from "../../assets/data";

import SeactionHeader from "../../components/SeactionHeader";
import Button from "../../components/Button";

const ContactFields = () => {
  return (
    <div className="mt-5">
      <div className="mb-5">
        <SeactionHeader
          title="Let's Make it Happen"
          subTiltle="Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together."
        />
      </div>

      <div className="mt-6">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4">
          {labelsContact.map((item) => (
            <div
              key={item.label}
              className={`md:last:col-span-4 md:nth-last-[2]:col-span-2 md:nth-last-[3]:col-span-2`}
            >
              <label className="text-white ml-2 text-base">{item.label}</label>

              <div className="p-2 rounded-md bg-gray-10 flex-center gap-2 border border-white/30 mt-1">
                {item.leftIcon && <item.leftIcon className="text-white" />}

                <input
                  type="text"
                  className={`text-white w-full placeholder:text-gray-30 border-none outline-none placeholder:text-sm`}
                  placeholder={item.placeholder}
                />

                {item.leftIcon && (
                  <item.rightIcon className="text-indigo-500 text-sm" />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex-center justify-between flex-col sm:flex-row gap-4 mt-4 px-2">
          <div className="flex-center">
            <input
              type="checkbox"
              name="agree"
              id="agree"
              className="cursor-pointerborder-gray-200 rounded-sm  focus:ring-purple-10 checked:border-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-purple-10 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800 size-4.5 cursor-pointer"
            />
            <label htmlFor="agree" className="text-gray-30 ml-2 cursor-pointer">
              I agree with Terms of Use and Privacy Policy
            </label>
          </div>

          <Button
            id="sen-message"
            title="Send Your Message"
            backgroudColor="#703BF7"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactFields;
