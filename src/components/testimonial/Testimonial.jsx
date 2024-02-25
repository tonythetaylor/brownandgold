import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "International Grand Polaris Bro./Dr. Sean D. Housen, Sr.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla malesuada pellentesque. Enim tortor at auctor urna nunc id cursus. ",
    img: "https://iotaphitheta.org/wp-content/uploads/2024/01/Grand-council-Sean-Housen-1-300x300.png",
  },
  {
    id: 1,
    name: "International Grand Vice Polaris Bro. Myron J. Covington",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla malesuada pellentesque. Enim tortor at auctor urna nunc id cursus. ",
    img: "https://iotaphitheta.org/wp-content/uploads/2024/01/Grand-council-Myron-Covington-300x300.png",
  },
  {
    id: 1,
    name: "International 2nd Grand Vice Polaris Bro. Justin Stephens",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla malesuada pellentesque. Enim tortor at auctor urna nunc id cursus. ",
    img: "https://iotaphitheta.org/wp-content/uploads/2024/01/Grand-council-Justin-Stephens-300x300.png",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <div className="py-10">
        <div className="container">
          {/* testimonial section */}
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 max-w-screen-xl mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map(({ id, name, text, img }) => {
                return (
                  <div key={id} className="my-6">
                    {/* card */}
                    <div className="flex flex-col sm:flex-row gap-5 md:gap-14 p-4 mx-4 rounded-xl dark:bg-[#403122] bg-[#403122] relative">
                      <img
                        src={img}
                        alt=""
                        className="block mx-auto h-[300px] w-full sm:w-[200px] object-cover"
                      />
                      <div className="space-y-4">
                        <p className="text-white dark:text-white/80 xl:pr-40">
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

export default Testimonial;