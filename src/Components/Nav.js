import React, { useContext } from "react";
import MenuMask from "./MenuMask.js";
import MenuContent from "./MenuContent.js";
import { MenuContext } from "./MenuContext";
import { useTransition, animated } from "react-spring";

function Nav() {
  const [showMenu, setShowMenu] = useContext(MenuContext);

  const menuMaskTransition = useTransition(showMenu, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  }); // Transition for the MenuMask

  const menuContentTransition = useTransition(showMenu, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  }); // Transition for the MenuContent

  // const menuContentTransition = useTransition(showMenu, null, {
  //   from: { opacity: 0, transform: "translateX(-100%)" },
  //   enter: { opacity: 1, transform: "translateX(0%)" },
  //   leave: { opacity: 0, transform: "translateX(-100%)" },
  // }); // Transition for the MenuContent

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

      {menuMaskTransition.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={props}>
              <MenuMask />
            </animated.div>
          )
      )}
      {menuContentTransition.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={props}>
              <MenuContent />
            </animated.div>
          )
      )}
    </div>
  );
}

export default Nav;
