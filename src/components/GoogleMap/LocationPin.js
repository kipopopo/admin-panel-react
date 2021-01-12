import React from "react";
import { Icon } from "@iconify/react";
import carIcon from "@iconify-icons/fa-solid/car";

const LocationPin = ({ text, sizeDiff }) => {
  return (
    <div className="pin">
      <Icon icon={carIcon} className="icon-car" />
      <div>
        <p className="text">{text}</p>
      </div>
    </div>
  );
};

export default LocationPin;
