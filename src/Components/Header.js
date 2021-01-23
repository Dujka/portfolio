import React, { Component } from "react";
import Portfolio from "./Portfolio.js";
import Nav from "./Nav.js";
import { MenuProvider } from "./MenuContext.js";

function Header() {
  return (
    <div className="p-3 border-b flex w-full justify-between text-center">
      <Portfolio />
      <MenuProvider>
        <Nav />
      </MenuProvider>
    </div>
  );
}

export default Header;
