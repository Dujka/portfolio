import React from "react";
import ProfileImage from "./ProfileImage.js";
import CircleText from "./CircleText.js";

function Circle() {
  return (
    <div className="relative z-5 text-center block w-full pb-full rounded-full bg-gradient-to-br from-purple-400 to-blue-400 justify-self-center col-span-6">
      <ProfileImage />
      <CircleText />
    </div>
  );
}

export default Circle;
