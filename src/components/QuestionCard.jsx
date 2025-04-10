import React from "react";
import Button from "./Button";

const QuestionCard = ({ question, answer }) => {
  return (
    <div className="featue-card">
      <div className="size-full">
        <p className="text-white font-semibold text-lg">{question}</p>
        <p className="my-3.5 text-sm text-gray-60">{answer}</p>
        <Button 
          id="read-more"
          title="Read More"
        />
      </div>
    </div>
  );
};

export default QuestionCard;
