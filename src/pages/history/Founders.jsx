import React from "react";
import Slider from "react-slick";
import { data }  from './foundersData';

const Founders = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <div className="py-10">
        <div className="container">
          {/* testimonial section */}
          <h1 className='text-center text-3xl font-semibold sm:text-3xl text-[#b58037]'>The Honorable Founders of Iota Phi Theta</h1>
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 max-w-screen-xl mx-auto gap-6"
          >
            <Slider {...settings}>
              {data.map(({ id, name, text, img }) => {
                return (
                  <div key={id} className="my-6">
                    {/* card */}
                    <div className="flex sm:flex-row gap-5 md:gap-14 p-4 mx-4 rounded-xl dark:bg-[#fffff4] bg-[#403122] relative">
                    {/* <div className="flex flex-col sm:flex-row gap-5 md:gap-14 p-4 mx-4 rounded-xl dark:bg-[#403122] bg-[#403122] relative"> */}
                      <img
                        src={img}
                        alt=""
                        className="block mx-auto h-[100px] w-full sm:w-[200px] object-cover"
                      />
                      <div className="space-y-4">
                        <p className="text-[#fffff4] dark:text-[#403122] xl:pr-40">
                          “{text}”
                        </p>
                        <h1 className="text-xl font-bold  text-[#b58037]">{name}</h1>
                      </div>
                      <p className="text-[#b58037]/10 text-[12rem] font-serif absolute bottom-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Founders;