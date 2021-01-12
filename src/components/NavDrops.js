import React from "react";

import { removeUserSession } from "../utils/Common";
import useVisible from "../utils/useVisible";

export const NavDropUser = (props) => {
  const { node, isVisible, setIsVisible } = useVisible(false);

  const handleLogout = () => {
    removeUserSession();
    props.history.push("/login");
  };

  return (
    <div className="ml-3 relative z-10" ref={node}>
      <div>
        <button
          className="bg-yellow-800 p-1 rounded-full text-gray-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-800 focus:ring-white"
          id="user-menu"
          aria-haspopup="true"
          onClick={(e) => setIsVisible(!isVisible)}
        >
          <span className="sr-only">Open user menu</span>
          <svg
            className="h-6 w-6 rounded-full"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeWidth="2"
              d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm8.127 19.41c-.282-.401-.772-.654-1.624-.85-3.848-.906-4.097-1.501-4.352-2.059-.259-.565-.19-1.23.205-1.977 1.726-3.257 2.09-6.024 1.027-7.79-.674-1.119-1.875-1.734-3.383-1.734-1.521 0-2.732.626-3.409 1.763-1.066 1.789-.693 4.544 1.049 7.757.402.742.476 1.406.22 1.974-.265.586-.611 1.19-4.365 2.066-.852.196-1.342.449-1.623.848 2.012 2.207 4.91 3.592 8.128 3.592s6.115-1.385 8.127-3.59zm.65-.782c1.395-1.844 2.223-4.14 2.223-6.628 0-6.071-4.929-11-11-11s-11 4.929-11 11c0 2.487.827 4.783 2.222 6.626.409-.452 1.049-.81 2.049-1.041 2.025-.462 3.376-.836 3.678-1.502.122-.272.061-.628-.188-1.087-1.917-3.535-2.282-6.641-1.03-8.745.853-1.431 2.408-2.251 4.269-2.251 1.845 0 3.391.808 4.24 2.218 1.251 2.079.896 5.195-1 8.774-.245.463-.304.821-.179 1.094.305.668 1.644 1.038 3.667 1.499 1 .23 1.64.59 2.049 1.043z"
            />
          </svg>
        </button>
      </div>
      {/* <!--
            Profile dropdown panel, show/hide based on dropdown state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
      --> */}
      {isVisible && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu"
        >
          <div
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-100 cursor-pointer"
            role="menuitem"
          >
            Your Profile
          </div>
          <div
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-100 cursor-pointer"
            role="menuitem"
          >
            Settings
          </div>
          <div
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-100 cursor-pointer"
            role="menuitem"
            onClick={handleLogout}
          >
            Sign out
          </div>
        </div>
      )}
    </div>
  );
};

export const NavDropNotification = () => {
  const { node, isVisible, setIsVisible } = useVisible(false);

  return (
    <div className="ml-3 relative z-10" ref={node}>
      <button
        className="bg-yellow-800 p-1 rounded-full text-gray-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-800 focus:ring-white"
        id="notification-menu"
        aria-haspopup="true"
        onClick={(e) => setIsVisible(!isVisible)}
      >
        <span className="sr-only">View notifications</span>
        {/* <!-- Heroicon name: bell --> */}
        <svg
          className="h-6 w-6"
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
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
      </button>
      {isVisible && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 h-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="notification-menu"
        >
          <div
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-100 cursor-pointer"
            role="menuitem"
          >
            Notification displays here
          </div>
        </div>
      )}
    </div>
  );
};
