import React from "react";
import Followus from "./bodyComponents/followus";
import Igposts from "./bodyComponents/igposts";
import Shoppics from "./bodyComponents/shoppics";
import Prices from "./bodyComponents/prices";
import BHours from "./bodyComponents/busnshours";
import GMaps from "./bodyComponents/gmaps";

export default function Body() {
  return (
    <React.Fragment>
      <Followus />
      <Igposts />
      <Shoppics />
      <Prices />
      <BHours />
      <GMaps />
    </React.Fragment>
  );
}
