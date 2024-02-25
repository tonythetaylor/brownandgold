import React, { useEffect, useRef, useState } from "react";
import { menuItemsData } from "./menuItemsData";
import MobileMenuItems from "./MobileMenuItems";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";

import DarkMode from "../DarkMode";

const MobileNav = () => {
  const depthLevel = 0;
  const [showMenu, setShowMenu] = useState(false);
  let ref = useRef();
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  useEffect(() => {
    const handler = (event) => {
      if (showMenu && ref.current && !ref.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [showMenu]);

  return (
    <nav className="mobile-nav">
{/* 
      <button
        className="mobile-nav__menu-button"
        type="button"
        onClick={() => setShowMenu((prev) => !prev)}
      >
        Menu
      </button>
      <DarkMode /> */}
      {/* Mobile View NavLinks  Section */}
      <div className="flex items-center gap-4 md:hidden">
              <DarkMode />
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className=" cursor-pointer text-2xl"
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className=" cursor-pointer text-2xl"
                />
              )}
            </div>

      {showMenu && (
        <ul className="menus dark:bg-[#403122]" ref={ref}>
          {menuItemsData.map((menu, index) => {
            return (
              <MobileMenuItems
                items={menu}
                key={index}
                depthLevel={depthLevel}
                showMenu={showMenu}
                setShowMenu={setShowMenu}
              />
            );
          })}
        </ul>
      )}
    </nav>
  );
};

export default MobileNav;
