import React from "react";
import { Link, useRouteMatch, useLocation } from "react-router-dom";

const NavMenu = () => {
  const menuItems = [
    { name: "Route", path: "route" },
    { name: "Menu 3", path: "menu-3" },
  ];

  let { url } = useRouteMatch();
  let location = useLocation();

  const inFocus =
    "bg-yellow-900 text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer";
  const outFocus =
    "transition-all duration-150 text-gray-800 hover:bg-yellow-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer";

  let classItemFocus;
  const listItems = menuItems.map((item) => {
    if (location.pathname === (`${url}/${item.path}` || `${url}`)) {
      classItemFocus = inFocus;
    } else {
      classItemFocus = outFocus;
    }

    return (
      <Link key={item.path} to={`${url}/${item.path}`}>
        <div className={classItemFocus}>{item.name}</div>
      </Link>
    );
  });

  return (
    <div className="flex space-x-4">
      <Link to={url}>
        <div className={url === location.pathname ? inFocus : outFocus}>
          Dashboard
        </div>
      </Link>
      {listItems}
    </div>
  );
};

export default NavMenu;
