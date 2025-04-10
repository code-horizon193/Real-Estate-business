import React from "react";
import SeactionHeader from "../../components/SeactionHeader";
import Button from "../../components/Button";
import TestimonialCard from "../../components/TestimonialCard";

import { testimonials } from "../../assets/data";
const Testimonilales = () => {
  return (
    <div className="text-white p-2 my-6">
      <div className="flex items-end justify-between gap-5">
        <SeactionHeader
          title="What Our Clients Say"
          subTiltle="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
        />

        <span className="hidden md:block">
          <Button id="view-testimonial" title="View All Testimonial" />
        </span>
      </div>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {testimonials.map((item, index) => (
          <TestimonialCard
            key={index}
            rate={item.rate}
            userImg={item.user.profile}
            userName={item.user.name}
            location={item.user.location}
            comment={item.comment}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonilales;
