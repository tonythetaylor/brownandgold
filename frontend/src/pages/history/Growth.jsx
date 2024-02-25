import React from "react";
import HeroImg from "../../assets/founders.png";
import { Link } from "react-router-dom";

const Growth = () => {
  return (
    <>
      <main className="dark:bg-[#403122] dark:text-white  text-[#403122] duration-300">
        <div className="container min-h-[620px] flex mt-0 sm:mt-0">
          <div className="flex flex-col sm:grid-cols-2 gap-5 place-items-center ">
            {/* Image section   */}

            {/* Text content section   */}
            <div className="space-y-5 order-2 sm:order-1 xl:pr-40 ">
              <p data-aos="fade-up" data-aos-delay="300">
                The Fraternity functioned as a local entity until the first
                interest groups were established in 1967 at Hampton Institute
                (Beta Chapter) and Delaware State College (Gamma Chapter).
                Further expansion took place in 1968 with chapters being formed
                at Norfolk State College (Delta Chapter) and Jersey City State
                College (Epsilon Chapter). The Fraternity was officially and
                legally incorporated on November 1, 1968, as a National
                Fraternity under the laws of the State of Maryland. Today, Iota
                Phi Theta consists of over 300 chapters located in 40 States as
                well Japan, Korea, and the Bahamas.{" "}
              </p>

              <p data-aos="fade-up" data-aos-delay="300">
                The first steps toward moving the Fraternity from a regional to
                a more national scope were taken with the creation of Upsilon
                Chapter (Southern Illinois University) in 1974. It was also
                during this period that the Fraternity's first 4 Graduate
                chapters were formed: Alpha Omega (Baltimore, MD, 1965), Beta
                Omega (Washington, DC, 1970), Gamma Omega (Hampton, VA, 1973),
                and Delta Omega (Boston, MA, 1973).{" "}
              </p>

              <p data-aos="fade-up" data-aos-delay="300">
                These chapters created the framework for the growth and
                development of the organization in the Northeast, Southeast,
                Mid-Atlantic, and Midwest Regions of the country. The next
                regional expansion occurred in 1983 with the establishment of
                the Alpha Chi (San Francisco State University) and Xi Omega (San
                Francisco Alumni) chapters in California.
                <br />
                Today, Iota Phi Theta® consists of over 300 chapters located in
                40 States, the District of Columbia and internationally in the
                Republic of Korea, Japan and Colombia, South America. The scope
                of the organization extends throughout the nation, from
                California to New York; from Wyoming to Florida; and from
                Wisconsin to our international chapters.
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

export default Growth;
