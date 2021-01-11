import React from "react";
import Nav from "./Nav";
import MapSection from "./GoogleMap/Map";

import { useDispatch } from "react-redux";
import { isBgGradientOff } from "../redux/actions";

import { getUser } from "../utils/Common";

const MainPanel = (props) => {
  // changing state of background gradient to false
  const dispatch = useDispatch();
  dispatch(isBgGradientOff());

  const user = getUser();

  return (
    <div className="MainPanel">
      <Nav history={props.history} />
      <div className="content">
        <MapSection />
      </div>
    </div>
  );
};
export default MainPanel;
