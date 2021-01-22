import React from "react";
import { Icon } from "@iconify/react";
import carIcon from "@iconify-icons/fa-solid/car";

export default function VehicleMenu() {
  const vehicleItems = ["Car", "Supercar", "Car", "Car", "Car"];

  const vehicleList = vehicleItems.map((item) => (
    <div
      className="
        w-full py-1 cursor-pointer
        transition-all duration
        hover:bg-white"
    >
      <div
        className="
        flex items-center justify-center
        h-12"
      >
        <Icon icon={carIcon} className="text-2xl" />
        <li className="w-32 ml-2 text-lg text-left">{item}</li>
      </div>
    </div>
  ));

  const styles = {
    title: {
      fontFamily: "Roobert",
    },
  };

  return (
    <div
      className="
          flex-none bg-yellow-500
          w-80 py-4"
    >
      <aside>
        <div>
          <h3
            style={styles.title}
            className="
              text-2xl text-center
              font-semibold"
          >
            Vehicles
          </h3>
        </div>
        <div
          className="
              py-2 my-2"
        >
          <ul
            className="
                flex flex-col items-center
                divide-y-2 divide-white divide-opacity-20"
          >
            {vehicleList}
          </ul>
        </div>
      </aside>
    </div>
  );
}
