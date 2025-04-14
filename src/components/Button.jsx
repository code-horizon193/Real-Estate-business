import React from "react";

const Button = ({
  id,
  title,
  backgroudColor = "#262626",
  leftIcon,
  rightIcon,
}) => {
  return (
    <button
      id={id}
      className="px-4 py-2 text-white text-base font-medium active:opacity-80 rounded-md capitalize cursor-pointer group transition hover:opacity-95 border-none outline-none overflow-hidden relative"
      style={{ background: backgroudColor }}
    >
      <div className="flex-center gap-1.5 whitespace-nowrap">
        {leftIcon}
        <span>{title}</span>
        {rightIcon}
      </div>
    </button>
  );
};

export default Button;
