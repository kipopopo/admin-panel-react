import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationPin from "./LocationPin";
import "./map.css";

const Map = () => {
  const defaultZoom = 18;
  const [center, setCenter] = useState([2.483653, 102.851613]);
  const [zoom, setZoom] = useState(defaultZoom);
  const vehicleName = useFormInput("");

  const handleChange = ({ center, zoom }) => {
    setCenter(center);
    setZoom(zoom);
  };

  let sizeDiff = (defaultZoom - zoom) / 12.5;

  return (
    <div className="map">
      <SearchVehicle vehicleName={vehicleName} />
      {console.log(vehicleName)}

      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
          onChange={handleChange}
          center={center}
          zoom={zoom}
        >
          <LocationPin
            lat={2.483653}
            lng={102.851613}
            text="Car 1"
            sizeDiff={sizeDiff}
          />
          <LocationPin
            lat={2.473653}
            lng={102.751613}
            text="Car 2"
            sizeDiff={sizeDiff}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

const SearchVehicle = ({ vehicleName }) => {
  return (
    <div
      className="
          absolute m-2 p-3
          z-10 rounded-md
          bg-black bg-opacity-50
          text-white"
    >
      <div className="flex justify-center">
        <p className="mr-2">Search vehicle: </p>
        <input
          className="
              appearance-none bg-transparent h-6 w-24
              outline-none border-none
            "
          type="text"
          id="vehicleName"
          name="vehicleName"
          placeholder="Car 1"
          {...vehicleName}
        />
      </div>
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

export default Map;
