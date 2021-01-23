import React from "react";
import MenuMask from "./MenuMask.js";

function Menu() {
  return (
    <div>
      <MenuMask />
      <div className="bg-white w-4/5 shadow h-full fixed left-0 top-0"></div>
    </div>
  );
}

export default Menu;
