import React from "react";
import Circle from "./Circle.js";

function CircleWrapper() {
  return (
    <div className="relative grid grid-cols-8 lg:grid-cols-12 w-full mt-3">
      <div className="col-span-1 lg:col-span-3"></div>
      <Circle />
      <div className="col-span-1 lg:col-span-3"></div>
    </div>
  );
}

export default CircleWrapper;
