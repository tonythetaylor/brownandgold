import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import DarkMode from "./DarkMode";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import Dropdown from "./Dropdown";

const MenuLinks = [
  {
    id: 1,
    name: "History",
    link: "/history",
  },
  {
    id: 2,
    name: "Leadership",
    link: "/leadership",
  },
  {
    id: 3,
    name: "Membership",
    link: "/membership",
    submenu: [
      {
        name: "Chapter Locator",
        link: "chapter-locator",
      },
    ],
  },
  {
    id: 4,
    name: "Programs & Services",
    link: "/programs-services",
  },
  {
    id: 5,
    name: "Member Login",
    link: "/member-login",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className="text-white dark:bg-[#403122] dark:text-white duration-300 h-[70px] bg-[#403122] backdrop-brightness-50 ">
        <div className="container md:py-2">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex flex-col justify-center items-center">
              <a href="/" className="flex items-center gap-3">
                <img src={Logo} alt="Logo" className="w-11 sm:w-10" />
                <span className="text-2xl sm:text-3xl font-semibold ">
                  Iota Phi Theta
                </span>
              </a>
            </div>
            {/* Desktop NavLinks  Section */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-8">
                {MenuLinks.map(({ id, name, link, submenu }) => {
                  return (
                    <li key={id} className="cursor-pointer py-2">
                      {submenu ? (
                        <>
                          <a
                            href={link}
                            className="text-lg font-medium hover:text-[#b58037] py-2 hover:border-b-2 hover:border-[#b58037] transition-all duration-300"
                          >
                            {"name"}
                          </a>

                          <Dropdown submenus={submenu} />
                        </>
                      ) : (
                        <a
                          href={link}
                          className="text-lg font-medium hover:text-[#b58037] py-2 hover:border-b-2 hover:border-[#b58037] transition-all duration-300"
                        >
                          {name}
                        </a>
                      )}
                    </li>
                  );
                })}
                <button className="btn-primary sm:text-sm">Contact Us</button>
                <DarkMode />
              </ul>
            </div>
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
          </div>
        </div>
        {/* Mobile NavLinks Section */}
        <ResponsiveMenu showMenu={showMenu} />
      </nav>
    </>
  );
};

export default Navbar;
