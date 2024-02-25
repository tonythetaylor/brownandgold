import MenuItems from "./MenuItems";

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "hidden";

  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : "hidden"} py-2 text-sm text-gray-700 dark:text-gray-200 dark:bg-[#403122]`}>
      {submenus.map((submenu, index) => (
        <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
  );
};

export default Dropdown;
