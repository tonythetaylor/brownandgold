import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
  const defaultProps = {
    // 39.3438° N, 76.5844° W
    center: {
      lat:  39.346027,
      lng: -76.582777,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "40vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCrbmch8EYZaKW1wJNGdmv3Jc1t2CVDKMI" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={39.346027} lng={-76.582777} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}
