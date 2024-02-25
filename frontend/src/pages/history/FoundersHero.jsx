import React from "react";
import HeroImg from "../../assets/founders.png";
import { Link } from "react-router-dom";

const FoundersHero = () => {
  return (
    <>
      <main className="dark:bg-[#403122] dark:text-white  text-[#403122] duration-300">
        <div className="container min-h-[620px] flex mt-0 sm:mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 place-items-center ">
            {/* Image section   */}
            <div data-aos="zoom-in" className="order-1 sm:order-2 relative">
              <img
                src={HeroImg}
                alt="FoundersHero image"
                className="rounded-xl w-full"
              />
              {/* <div
                data-aos="slide-right"
                className=" bg-[#b58037] dark:bg-[#b58037] absolute -bottom-5 -right-5 sm:-right-4 px-4 py-2 rounded-xl shadow-md"
              >
                <p className="text-white dark:text-white text-sm ">⭐️ 300+</p>
                <h1 className="font-bold text-white">
                  <span className=" font-normal">Chapters</span>
                </h1>
              </div> */}
            </div>
            {/* Text content section   */}
            <div className=" space-y-5 order-2 sm:order-1 xl:pr-40 ">
              <h1
                data-aos="fade-up"
                className="text-4xl sm:text-5xl font-semibold"
                style={{ lineHeight: 1.2 }}
              >
                {/* ABOUT{" "}<span className=" text-yellow-500"> IOTA PHI THETA </span> */}
                On September 19, 1963,{" "}
                <span className=" text-[#b58037]">at Morgan State College</span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="300">
                (now Morgan State University), 12 students founded what is now one of the nation's largest,
                predominately African-American social service fraternities: Iota
                Phi Theta Fraternity, Incorporated.
              </p>
              <p data-aos="fade-up" data-aos-delay="300">
                This group of men was unique for several reasons. First of all,
                many were long-time friends. Spruill, Coakley, Dorsey, and
                Gregory had known one another since grade school, and Spruill
                and Coakley's friendship extended to when the two were
                pre-schoolers.
              </p>
              {/* <Link to="/history">
                <button
                  data-aos="fade-up"
                  data-aos-delay="500"
                  data-aos-offset="0"
                  className=" btn-primary"
                >
                  Read More
                </button>
              </Link> */}
            </div>
            
          </div>
        </div>
      </main>
    </>
  );
};

export default FoundersHero;
