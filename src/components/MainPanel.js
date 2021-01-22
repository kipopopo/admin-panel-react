import React, { useEffect } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import Nav from "./Nav";
import MapSection from "./GoogleMap/Map";
import VehicleRoute from './VehicleRoute'

import { useDispatch } from "react-redux";
import { isBgGradientOff } from "../redux/actions";

// import { getUser } from "../utils/Common";

const MainPanel = (props) => {
  let { path } = useRouteMatch();

  // changing state of background gradient to false
  const dispatch = useDispatch();

  useEffect(() => {
    const PrevTitle = document.title;
    document.title = `Dashboard`;
    dispatch(isBgGradientOff());
    return () => {
      document.title = PrevTitle;
    };
  });

  // const user = getUser();

  return (
    <div className="MainPanel">
      <Nav history={props.history} location={props.location} />
      <div className="content">
        <Switch>
          <Route path={`${path}`} exact>
            <MapSection />
          </Route>
          <Route path={`${path}/route`}>
              <VehicleRoute/>
          </Route>
          <Route path={`${path}/menu-3`}>
            <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
              <div>menu 3</div>
            </div>
          </Route>
        </Switch>
      </div>
    </div>
  );
};
export default MainPanel;
