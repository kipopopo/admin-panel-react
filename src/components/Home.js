import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const style = {
    headingTitle: {
      fontFamily: "Roobert",
    },
    button: {
      fontFamily: "Roobert",
    },
  };

  return (
    <div className="min-h-screen flex items-center bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-center max-w-2xl w-full h-96 space-y-8">
        <div className="flex items-center bg-white bg-opacity-30 rounded-3xl max-w-xl w-full h-full space-y-5 p-10">
          <div>
            <div className="flex items-center justify-center mb-10">
              <p className="text-left text-4xl" style={style.headingTitle}>
                Welcome to <br />
                <span className="font-bold text-6xl" style={style.headingTitle}>
                  Flito Admin Panel
                </span>
              </p>
            </div>
            <div className="flex items-center">
              <Link to="/login">
                <div className="flex items-center justify-center transition-all bg-white bg-opacity-70 hover:bg-opacity-100 rounded-xl w-40 p-3 cursor-pointer">
                  <p className="text-2xl font-bold" style={style.button}>
                    LOGIN
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
