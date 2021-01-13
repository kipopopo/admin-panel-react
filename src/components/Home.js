import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { CSSTransition } from "react-transition-group";
import "../styles/transitionPage.css";

function Home() {
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowHome(true), 150);
  });

  const styles = {
    headingTitle: {
      fontFamily: "Roobert",
    },
    button: {
      fontFamily: "Roobert",
    },
    backgroundGradient: {
      backgroundSize: "400% 400%",
    },
  };

  return (
    <div
      className="
        min-h-screen
        flex items-center
        py-12 px-4
        sm:px-6 
        lg:px-8
        "
    >
      <CSSTransition
        in={showHome}
        timeout={300}
        unmountOnExit
        classNames="fade"
      >
        <div className="flex items-center justify-center max-w-2xl w-full h-96 space-y-8">
          <div className="flex items-center bg-white bg-opacity-30 rounded-3xl max-w-xl w-full h-full space-y-5 p-10">
            <div>
              <div className="flex items-center justify-center mb-10">
                <p className="text-left text-4xl" style={styles.headingTitle}>
                  Welcome to <br />
                  <span
                    className="font-bold text-6xl"
                    style={styles.headingTitle}
                  >
                    Flito Admin Panel
                  </span>
                </p>
              </div>
              <div className="flex items-center">
                <Link to="/login">
                  <div className="flex items-center justify-center transition-all duration-300 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-xl w-40 p-3 cursor-pointer">
                    <p className="text-2xl font-bold" style={styles.button}>
                      LOGIN
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}
export default Home;
