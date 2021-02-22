import React from "react";
import Typical from "react-typical";
function CircleText() {
  return (
    <div className="absolute w-full px-2 mb-5 md:mb-10 lg:mb-5 bottom-1/4 text-white font-mono md:text-5xl sm:text-3xl text-xl select-none">
      Hi, I'm Alex and I am a
      <p className="">
        <Typical
          steps={[
            "web developer",
            2000,
            "software developer",
            2000,
            "guitar player",
            2000,
            "creative thinker",
            2000,
            "programmer",
            2000,
            "problem solver",
            2000,
          ]}
          loop={Infinity}
          wrapper="b"
        />
      </p>
    </div>
  );
}

export default CircleText;
