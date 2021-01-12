import React from "react";
import NavMenu from "./NavMenu";
import { NavDropNotification, NavDropUser } from "./NavDrops";
import Logo from "../assets/logo-no-trace.png";

const Nav = (props) => {
  const style = {
    navTitle: {
      fontFamily: "Roobert",
    },
  };

  return (
    <nav className="bg-yellow-500">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-100 hover:text-white hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* <!-- Icon when menu is closed. -->
          <!--
            Heroicon name: menu

            Menu open: "hidden", Menu closed: "block"
          --> */}
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* <!-- Icon when menu is open. -->
          <!--
            Heroicon name: x

            Menu open: "block", Menu closed: "hidden"
          --> */}
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="block lg:hidden h-8 w-auto"
                src={Logo}
                alt="Flito"
              />
              <div className="flex items-center justify-center">
                <img
                  className="hidden lg:block h-8 w-auto pr-2"
                  src={Logo}
                  alt="Flito"
                />
                <h1 className="text-2xl font-bold pl-2" style={style.navTitle}>
                  Flito
                </h1>
              </div>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <NavMenu location={props.location} />
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Notification dropdown */}
            <NavDropNotification />

            {/* Profile dropdown */}
            <NavDropUser history={props.history} />
          </div>
        </div>
      </div>

      {/* <!--
    Mobile menu, toggle classNamees based on menu state.

    Menu open: "block", Menu closed: "hidden"
  --> */}
      <div className="hidden sm:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {/* <!-- Current: "bg-yellow-900 text-white", Default: "text-gray-800 hover:bg-yellow-700 hover:text-white" --> */}
          <div className="bg-yellow-900 text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">
            Dashboard
          </div>
          <div className="text-gray-800 hover:bg-yellow-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">
            Team
          </div>
          <div className="text-gray-800 hover:bg-yellow-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">
            Projects
          </div>
          <div className="text-gray-800 hover:bg-yellow-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">
            Calendar
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
