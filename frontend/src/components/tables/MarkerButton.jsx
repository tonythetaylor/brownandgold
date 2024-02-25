import React from "react";
import { useMap } from "./map-context";

const MarkerButton = ({ pos })  => {
  const { map } = useMap();
  const handleClick = () => {
    //console.log(flying);

    map.flyTo(pos);
  }

  return (
    <div style={{ paddingTop: "8px" }}>
    <button onClick={() => handleClick()}>Locate</button>
    </div>
  );
}

export default MarkerButton;
