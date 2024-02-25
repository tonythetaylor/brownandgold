import React from "react";
import Testimonial from "../../components/testimonial/Testimonial";
import FoundersHero from "./FoundersHero";
import FoundersContext from "./FoundersContent";
import Founders from "./Founders";

const History = () => {
  return (
    <div className="">
      <Founders />
      <FoundersHero />
      <FoundersContext />
      {/* <Growth /> */}
    </div>
  );
};

export default History;
