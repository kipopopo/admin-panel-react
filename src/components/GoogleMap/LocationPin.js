import React from "react";
import { Icon } from "@iconify/react";
import carIcon from "@iconify-icons/fa-solid/car";

const LocationPin = ({ text, sizeDiff }) => {
  const styles = {
    pin: {
      width: `${4 - sizeDiff}rem`,
    },
    iconCar: {
      width: `${4 - sizeDiff}rem`,
      fontSize: `${3 - sizeDiff * 0.75}rem`,
    },
  };

  return (
    <div className="pin" style={styles.pin}>
      <Icon icon={carIcon} className="icon-car" style={styles.iconCar} />
      <div>
        <p className="text">{text}</p>
      </div>
    </div>
  );
};

export default LocationPin;
