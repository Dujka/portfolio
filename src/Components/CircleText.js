import React from "react";
import Typical from "react-typical";
function CircleText() {
  return (
    <div className="absolute w-full top-1/2 text-white font-mono lg:text-7xl md:text-5xl sm:text-3xl text-xl select-none">
      Hi, I'm Alex and I am a
      <p className="">
        <Typical
          steps={[
            "web developer",
            1500,
            "software developer",
            1500,
            "guitar player",
            1500,
            "creative thinker",
            1500,
            "programmer",
            1500,
            "problem solver",
            1500,
          ]}
          loop={Infinity}
          wrapper="b"
        />
      </p>
    </div>
  );
}

export default CircleText;
