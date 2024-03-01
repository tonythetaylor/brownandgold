import React from "react";
import HeroImg from "../../assets/hero.png";
import { Link } from "react-router-dom";
import GoogleMapReact from 'google-map-react';
// AIzaSyCrbmch8EYZaKW1wJNGdmv3Jc1t2CVDKMI
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const HeroModal = ({name, title, role, email}) => {
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
  return (
    <> 
      <main className="bg-[#403122] dark:bg-[#403122] dark:text-white  text-[#403122] duration-300 rounded-lg">
        <div className="container flex flex-col mt-0 sm:mt-0 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 place-items-center">
            {/* Image section   */}
            {/* <div data-aos="zoom-in" className="order-2 sm:order-2 h-3/4 w-full sm:h-full"> */}


              {/* <img src={HeroImg} alt="HeroModal image" className="rounded-xl w-full" />
              <div  data-aos="slide-right" className=" bg-[#b58037] dark:bg-[#b58037] absolute -bottom-5 -right-5 sm:-right-4 px-4 py-2 rounded-xl shadow-md">
                <p className="text-white dark:text-white text-sm ">⭐️ 300+</p>
                <h3 className="font-bold text-white">
                  <span className=" font-normal">Chapters</span>
                </h3>
              </div> */}
            {/* </div> */}
            {/* Text content section   */}
            <div className=" space-y-5 order-1 sm:order-1 xl:pr-40 py-4">
            <h1
              data-aos="fade-up"
              className="text-sm sm:text-xl font-semibold text-[#fffff4]"
              style={{ lineHeight: 1.2 }}
            >
                Name: {" "}
                <span className=" text-[#b58037]">{name}</span>
              </h1>

              <h1
              data-aos="fade-up"
              className="text-sm sm:text-xl font-semibold text-[#fffff4]"
              style={{ lineHeight: 1.2 }}
            >
                Title: {" "}
                <span className=" text-[#b58037]">{title}</span>
              </h1>

              <h1
              data-aos="fade-up"
              className="text-sm sm:text-xl font-semibold text-[#fffff4]"
              style={{ lineHeight: 1.2 }}
            >
                {/* ABOUT{" "}<span className=" text-yellow-500"> IOTA PHI THETA </span> */}
                Role: {" "}
                <span className=" text-[#b58037]">{role}</span>
              </h1>

              <h1
              data-aos="fade-up"
              className="text-sm sm:text-xl font-semibold text-[#fffff4]"
              style={{ lineHeight: 1.2 }}
            >
                {/* ABOUT{" "}<span className=" text-yellow-500"> IOTA PHI THETA </span> */}
                Email: {" "}
                <span className=" text-[#b58037]">{email}</span>
              </h1>
              
              {/* <p data-aos="fade-up" data-aos-delay="300">
                On September 19, 1963, at Morgan State College (now Morgan State
                University), 12 students founded the Iota Phi Theta Fraternity,
                Incorporated®, and established the following purpose: “The
                development and perpetuation of Scholarship, Leadership,
                Citizenship, Fidelity, and Brotherhood among Men.”
              </p> */}
              {/* <Link to="/history">
              <button 
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-offset="0"
              className=" btn-primary">Read More</button>
              </Link> */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HeroModal;
