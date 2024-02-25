import MobileNav from "./MobileNav";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

import Logo from "../../../assets/logo.png";
import DarkMode from "../DarkMode";

const Header = () => {
  return (
    <header className="text-[#403122] dark:bg-[#403122] dark:text-white h-[70px] bg-[#fffff4]">
      <div className="container md:py-2">
        <div className="flex justify-between items-center">
          {/* <div className="nav-area"> */}
          {/* Logo Section */}
          <div className="flex flex-col justify-center items-center">
            <a href="/" className="flex items-center gap-3">
              <img src={Logo} alt="Logo" className="w-11 sm:w-10" />
              {/* <span className="text-2xl sm:text-3xl font-semibold ">
                  Iota Phi Theta
                </span> */}
            </a>
          </div>

          {/* for large screens */}
          <Navbar />

          {/* for small screens */}
          <MobileNav />

          {/* </div> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
