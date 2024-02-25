import { menuItemsData } from "./menuItemsData";
import MenuItems from "./MenuItems";

import Logo from "../../../assets/logo.png";
import DarkMode from "../DarkMode";

const Navbar = () => {
  const depthLevel = 0;

  return (
    <nav className="desktop-nav">
      <ul className="flex items-center gap-8">
        {menuItemsData.map((menu, index) => {
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
            <a href='https://my.iotaphitheta.org/IotaMembers/System/Sign_In.aspx?LoginRedirect=true&returnurl=%2f' className="btn-primary sm:text-sm">Member Login</a>
                <DarkMode />
      </ul>
    </nav>
  );
};

export default Navbar;
