import React from "react";

const Loader = () => {
  return (
    <div className="w-screen h-dvh flex items-center justify-center bg-black">
      <div class="loader">
        <span class="loader-text">loading</span>
        <span class="load"></span>
      </div>
    </div>
  );
};

export default Loader;