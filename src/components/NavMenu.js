import React from "react";
import { Link } from "react-router-dom";

const NavMenu = (props) => {
  const menuItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Menu 2", path: "/menu-2" },
    { name: "Menu 3", path: "/menu-3" },
  ];

  const inFocus =
    "bg-yellow-900 text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer";
  const outFocus =
    "text-gray-800 hover:bg-yellow-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer";

  const listItems = menuItems.map((item) => {
    let classItem;
    if (props.location.pathname === item.path) {
      classItem = inFocus;
    } else {
      classItem = outFocus;
    }
    return (
      <div key={item.path} className={classItem}>
        {item.name}
      </div>
    );
  });

  return <div className="flex space-x-4">{listItems}</div>;
};

export default NavMenu;
