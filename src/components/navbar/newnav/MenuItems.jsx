import Dropdown from "./Dropdown";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  const toggleDropdown = () => {
    setDropdown((prev) => !prev);
  };

  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };

  return (
    <li
      className="menu-items"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}
    >
      {items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            className="text-lg font-medium hover:text-[#b58037] py-2 hover:border-b-2 hover:border-[#b58037] transition-all duration-300"

            onClick={() => toggleDropdown()}
          >
            <Link
              className="text-lg font-medium hover:text-[#b58037] py-2 hover:border-b-2 hover:border-[#b58037] transition-all duration-300"
              to={items.url}
            >
              {items.title}
            </Link>
            {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
          </button>
          <Dropdown
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
            className="text-lg font-medium hover:text-[#b58037] py-2 hover:border-b-2 hover:border-[#b58037] transition-all duration-300"

          >
            {items.title}
            {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <Link
          className="text-lg font-medium hover:text-[#b58037] py-2 hover:border-b-2 hover:border-[#b58037] transition-all duration-300"
          to={items.url}
        >
          {items.title}
        </Link>
      )}
    </li>
  );
};

export default MenuItems;
