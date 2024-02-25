import React from "react";
import HeroImg from "../../assets/hero.png";
import { Link } from "react-router-dom";
// import { testimonialData } from "../history/founders";

const LeadershipHero = () => {
  return (
    <>
      {/* <main className=" dark:text-white  text-[#403122] duration-300 mt-7 dark:mt-0 dark:p-7"> */}
      <main className="mt-7  dark:text-[#fffff4]  text-[#403122] duration-300">

        <div className="container">
          <h1 className="text-center text-3xl font-semibold sm:text-3xl text-[#b58037] dark:text-[#b58037] mb-7">
           Leadership
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 place-items-center ">
            <div
              data-aos="zoom-in"
              className="order-1 sm:order-2 xl:pr-40 relative"
            >
              <p>
                From its inception, Iota Phi Theta has always recognized the
                need for strong, effective leadership at every level of the
                organization. Iota Phi Theta's national governing body is The
                Grand Council. The Grand Council is responsible for the
                governance of the fraternity between National Conclaves, which
                occur biennially. There are two nationally-elected officers on
                the council as well as Regional Polari, which are elected by
                their respective regions. The Grand Polaris also appoints
                additional Grand Council members to serve in staff-related
                roles.
              </p>
            </div>
            {/* Text content section   */}
            <div className=" order-2 sm:order-2 xl:pr-40 ">
              <p data-aos="fade-up" data-aos-delay="300">
                The Fraternity also has a Board of Directors which consists of
                elected members from each region as well as Executive Members,
                who are individuals who have previously served in the capacity
                of either Grand or Grand Vice Polaris. The fraternity is divided
                into seven regions, each of which is administered by a Regional
                Polaris. Each Regional Polaris is elected by his respective
                region. The Regional Polari are also members of The Grand
                Council.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LeadershipHero;
