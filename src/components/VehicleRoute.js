import React from "react";

import VehicleMenu from "./VehicleTree/VehicleMenu";

export default function VehicleRoute() {
  return (
    <div
      className="
        min-h-screen flex"
    >
      <VehicleMenu />
      <div
        className="
          flex items-center justify-center "
      >
        <div
          className="
            p-6"
        >
          Route here <br /> Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Repudiandae necessitatibus odit in! Voluptatem, officiis
          corrupti ipsum debitis expedita quibusdam aperiam ut iste dolorum quo,
          magni voluptatibus iure. Eos, earum nam.
        </div>
      </div>
    </div>
  );
}
