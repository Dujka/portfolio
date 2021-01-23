import React, { useState, useContext } from "react";
import Menu from "./Menu.js";
import { MenuContext } from "./MenuContext";

function Nav() {
  const [showMenu, setShowMenu] = useContext(MenuContext);
  let menu;
  if (showMenu) {
    menu = <Menu />;
  }
  return (
    <div className="cursor-pointer select-none z-10">
      <button
        onClick={() => setShowMenu(!showMenu)}
        class="block cursor-pointer relative w-12 h-12 p-3"
      >
        <svg class="fill-current text-black" viewBox="0 0 20 20">
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </button>

      {menu}
    </div>
  );
}

export default Nav;
