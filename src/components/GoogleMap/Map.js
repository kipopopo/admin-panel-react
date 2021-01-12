import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationPin from "./LocationPin";
import "./map.css";

const Map = () => {
  const [center, setCenter] = useState([2.483653, 102.851613]);
  const [zoom, setZoom] = useState(17);

  const handleChange = ({ center, zoom }) => {
    setCenter(center);
    setZoom(zoom);
  };

  return (
    <div className="map">
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
          onChange={handleChange}
          center={center}
          zoom={zoom}
        >
          <LocationPin lat={2.483653} lng={102.851613} text="Your location." />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
