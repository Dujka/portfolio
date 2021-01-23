import React, { useContext } from "react";
import { MenuContext } from "./MenuContext";

function MenuMask() {
  const [showMenu, setShowMenu] = useContext(MenuContext);
  return (
    <div
      onClick={() => setShowMenu(!showMenu)}
      className="bg-black opacity-50 fixed top-0 left-0 w-full h-full"
    ></div>
  );
}

export default MenuMask;
