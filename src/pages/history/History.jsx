import React from "react";
import Founders from "./Founders";
import Testimonial from "../../components/testimonial/Testimonial";
import FoundersHero from "./FoundersHero";
import FoundersContext from "./FoundersContent";
import Growth from "./Growth";

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
