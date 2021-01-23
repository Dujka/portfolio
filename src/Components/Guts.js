import React from "react";
import Circle from "./Circle.js";

function Guts() {
  return (
    <div className="relative grid grid-cols-8 w-full">
      <div className="col-span-1"></div>
      <Circle />
      <div className="col-span-1"></div>
    </div>
  );
}

export default Guts;
