import React from "react";
import FoundationImg1 from "../../assets/foundations/oneiota.png";
import FoundationImg2 from "../../assets/foundations/nif.webp";
import { Link } from "react-router-dom";

const Foundations = () => {
  return (
    <>
      <main className=" dark:text-[#fffff4]  text-[#403122] duration-300 mt-7">
      <h1 className="text-center text-3xl font-semibold sm:text-3xl text-[#b58037] dark:text-[#b58037] mb-7">
           Foundations
          </h1>
        <div className="container min-h-[800px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 place-items-center">
            {/* Image section   */}
            <div
              data-aos="zoom-in"
              className="space-y-5 order-1 sm:order-2 xl:pr-40"
            >
              <div
                data-aos="fade-up"
                className="text-4xl sm:text-5xl font-semibold"
                style={{ lineHeight: 1.2 }}
              >
                <img
                  src={FoundationImg1}
                  alt="Foundation image"
                  className="rounded-xl w-full"
                />
              </div>
              <p data-aos="fade-up" data-aos-delay="300">
                The National Iota Foundation (NIF) was formed by Iota Phi Theta
                Fraternity, Inc. in 1992 as a 501 (c) (3) tax-exempt non-profit
                foundation.
              </p>
            </div>
            {/* Text content section   */}
            <div className=" space-y-5 order-2 sm:order-1 xl:pr-40 ">
              <div
                data-aos="fade-up"
                className="text-4xl sm:text-5xl font-semibold"
                style={{ lineHeight: 1.2 }}
              >
                <img
                  src={FoundationImg2}
                  alt="Foundation image"
                  className="rounded-xl w-full"
                />
              </div>
              <p data-aos="fade-up" data-aos-delay="300">
                The ONE IOTA FOUNDATION was founded as a nonprofit in 2022 to
                promote the delivery of quality personal finance education,
                academic education, and healthcare initiatives.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Foundations;
