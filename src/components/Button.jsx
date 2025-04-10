import React from "react";

const Button = ({ id, title, backgroudColor = "#262626" }) => {
  return (
    <button
      id={id}
      className="px-4 py-2 text-white text-base font-medium active:opacity-80 rounded-md capitalize cursor-pointer group transition hover:opacity-95 border-none outline-none overflow-hidden relative"
      style={{ background: backgroudColor }}
    >
      {title}
    </button>
  );
};

export default Button;
