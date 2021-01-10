import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import axios from "axios";

import Home from "./components/Home";
import Login from "./components/Login";
import MainPanel from "./components/MainPanel";

import PrivateRoute from "./utils/PrivateRoute";
import PublicRoute from "./utils/PublicRoute";
import { getToken, removeUserSession, setUserSession } from "./utils/Common";

function App() {
  const isBgGradient = useSelector((state) => state.isBgGradientReducer);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }
    axios
      .get(`http://localhost:4000/verifyToken?token=${token}`)
      .then((response) => {
        setUserSession(response.data.token, response.data.user);
        setAuthLoading(false);
      })
      .catch((error) => {
        removeUserSession();
        setAuthLoading(false);
      });
  }, []);

  if (authLoading && getToken()) {
    return <div className="content">Checking authentication...</div>;
  }

  return (
    <Router basename="/admin-panel-react/">
      <div className="App">
        <div
          className={
            isBgGradient
              ? `
            animate-gradient-color
            bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500
            bg-400%`
              : null
          }
        >
          <Switch>
            <Route path="/" exact component={Home} />
            <PublicRoute path="/login" component={Login} />
            <PrivateRoute path="/dashboard" component={MainPanel} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
export default App;
