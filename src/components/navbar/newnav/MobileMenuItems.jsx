import { useState } from "react";
import { Link } from "react-router-dom";
import MobileDropdown from "./MobileDropdown";

const MobileMenuItems = ({ items, depthLevel, showMenu, setShowMenu }) => {
  const [dropdown, setDropdown] = useState(false);

  const closeDropdown = () => {
    dropdown && setDropdown(false);
    showMenu && setShowMenu(false);
  };

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setDropdown((prev) => !prev);
  };

  return (
    <li className="menu-items" onClick={closeDropdown}>
      {items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
          >
            <Link
              className="text-lg font-medium dark:hover:text-[#b58037] hover:text-[#b58037] py-2 hover:border-b-2 hover:border-[#b58037] transition-all duration-300"
              to={items.url}
              onClick={closeDropdown}
            >
              {items.title}
            </Link>
            <div onClick={(e) => toggleDropdown(e)}>
              {dropdown ? (
                <span className="arrow-close" />
              ) : (
                <span className="arrow" />
              )}
            </div>
          </button>
          <MobileDropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : !items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
          >
            {items.title}{" "}
            <div onClick={(e) => toggleDropdown(e)}>
              {dropdown ? (
                <span className="arrow-close" />
              ) : (
                <span className="arrow" />
              )}
            </div>
          </button>
          <MobileDropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <Link
          className="text-lg font-medium hover:text-[#b58037] py-2 hover:border-b-2 hover:border-[#b58037] dark:hover:text-[#b58037] transition-all duration-300"
          to={items.url}
        >
          {items.title}
        </Link>
      )}
    </li>
  );
};

export default MobileMenuItems;
