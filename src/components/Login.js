import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { isBgGradientOn } from "../redux/actions";

import axios from "axios";
import { setUserSession } from "../utils/Common";

import { CSSTransition } from "react-transition-group";
import "../styles/transitionPage.css";

import Logo from "../assets/logo-no-trace.png";

const Login = (props) => {
  const dispatch = useDispatch();
  dispatch(isBgGradientOn());

  const [showLogin, setShowLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const username = useFormInput("");
  const password = useFormInput("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = `Login`;
    setTimeout(() => setShowLogin(true), 150);
    return () => {
      document.title = prevTitle;
    };
  });

  // handle button click of login form
  const handleLogin = () => {
    // setError(null);
    setLoading(true);
    axios
      .post("http://localhost:4000/users/signin", {
        username: username.value,
        password: password.value,
      })
      .then((response) => {
        setLoading(false);
        setUserSession(response.data.token, response.data.user);
        props.history.push("/user");
        window.location.reload(false);
      })
      .catch((error) => {
        setLoading(false);
        if (error.response && error.response.status === 401)
          setError(error.response.data.message);
        else setError("Something went wrong. Please try again later.");
      });
  };

  const styles = {
    headingTitle: {
      fontFamily: "Roobert",
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <CSSTransition
        in={showLogin}
        unmountOnExit
        timeout={300}
        classNames="fade"
      >
        <div>
          <div>
            <img
              className="logo-login mx-auto h-20 w-auto"
              src={Logo}
              alt="Flito"
            />
            <h2
              className="mt-6 text-center text-4xl font-bold text-gray-900"
              style={styles.headingTitle}
            >
              Sign in to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6">
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  className="
                  appearance-none rounded-none relative 
                  block w-full px-3 py-2 mb-3
                  bg-transparent 
                  border-2 border-white border-opacity-50
                  placeholder-white placeholder-opacity-50 
                  text-white 
                  rounded-lg 
                  focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:border-opacity-100 focus:z-10 
                  sm:text-md md:text-xl lg:text-2xl"
                  type="text"
                  id="username"
                  name="username"
                  {...username}
                  autoComplete="new-password"
                  placeholder="Username"
                  autoFocus
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  className="
                  appearance-none rounded-none relative 
                  block w-full px-3 py-2 mb-3
                  bg-transparent 
                  border-2 border-white border-opacity-50
                  placeholder-white placeholder-opacity-50 
                  text-white 
                  rounded-lg 
                  focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:border-opacity-100 focus:z-10 
                  sm:text-md md:text-xl lg:text-2xl"
                  id="password"
                  name="password"
                  type="password"
                  {...password}
                  autoComplete="new-password"
                  placeholder="Password"
                />
              </div>
            </div>

            {/* <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember_me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>
          </div> */}

            <div
              className="
                flex justify-center"
            >
              {error && (
                <div
                  className="
              w-max rounded-md
              px-2 py-1
              bg-white bg-opacity-50
              transition-all duration-200
              hover:bg-opacity-100"
                >
                  <small style={{ color: "red" }}>{error}</small>
                  <br />
                </div>
              )}
            </div>

            <div className="flex justify-center">
              <button
                className="
                group relative w-1/3 flex justify-center py-3 px-20 
                bg-black bg-opacity-50 rounded-md border border-transparent 
                text-yellow-200 text-xl font-bold 
                transition-all duration-200
                hover:bg-yellow-800 hover:bg-opacity-100
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                onClick={handleLogin}
                disabled={loading}
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  {loading ? (
                    <svg
                      className="animate-spin h-5 w-5 text-yellow-500 
                  transition-all duration-200
                  group-hover:text-yellow-200"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      className="
                    h-5 w-5 text-yellow-500 
                    transition-all duration-200
                    group-hover:text-yellow-200"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </span>
                {loading ? "Loading" : "Login"}
              </button>
            </div>
          </form>
        </div>
      </CSSTransition>
      <Link to="/">
        <button
          className="
          absolute bottom-0 right-0 
          px-4 py-2 
          mr-4 mb-4
          transition-all duration-200
          bg-yellow-800 bg-opacity-50 rounded-md
          text-md font-bold text-yellow-200 
          hover:bg-yellow-700 hover:bg-opacity-100
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500
        "
        >
          Back to Home
        </button>
      </Link>
    </div>
  );
};

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
};

export default Login;
