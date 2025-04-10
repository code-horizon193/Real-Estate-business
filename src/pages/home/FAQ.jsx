import React from "react";
import SeactionHeader from "../../components/SeactionHeader";
import Button from "../../components/Button";
import { questions } from "../../assets/data";
import QuestionCard from "../../components/QuestionCard";

const FAQ = () => {
  return (
    <div className="mt-5">
      <div className="flex items-end justify-between gap-5">
        <SeactionHeader
          title="Frequently Asked Questions"
          subTiltle="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
        />

        <span className="hidden md:block">
          <Button id="view-fqa" title="View All FAQ's" />
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 mt-5">
        {questions.map((item, idx) => (
          <QuestionCard key={idx} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;