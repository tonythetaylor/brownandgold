import React from "react";
import HeroImg from "../../assets/founders.png";
import { Link } from "react-router-dom";

const FoundersContext = () => {
  return (
    <>
      <main className="dark:bg-[#403122] dark:text-white  text-[#403122] duration-300 mb-7 dark:mb-0">
        <div className="container min-h-[620px] flex mt-0 sm:mt-0">
          <div className="flex flex-col sm:grid-cols-2 gap-5 place-items-center">
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-5xl font-semibold"
              style={{ lineHeight: 1.2 }}
            >
              {/* ABOUT{" "}<span className=" text-yellow-500"> IOTA PHI THETA </span> */}
              Building a Tradition,{" "}
              <span className=" text-[#b58037]">Not Resting Upon One.</span>
            </h1>

            {/* Text content section   */}
            <div className="space-y-5 order-2 sm:order-1 xl:pr-40 ">
              <p data-aos="fade-up" data-aos-delay="300">
                Even more uniquely, many of these men were what are now referred
                to as "Non-Traditional Students" and were 3-5 years older than
                the average college student. Gregory, Willis, and Brown were all
                service veterans, and Brown, Hicks, and Briscoe were married
                with small children. Of this group of 12, several were also
                working full-time jobs and all were full-time students.
              </p>

              <p data-aos="fade-up" data-aos-delay="300">
                Based upon their ages, heightened responsibilities, and
                increased level of maturity, this group had a slightly different
                perspective than the norm for college students. It was this
                perspective from which they established the Fraternity's
                purpose, "The development and perpetuation of Scholarship,
                Leadership, Citizenship, Fidelity, and Brotherhood among Men."
                Additionally, they conceived the Fraternity's motto, "Building a
                Tradition, Not Resting Upon One!"
              </p>

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
              </p>

              <p data-aos="fade-up" data-aos-delay="300">
                Today, Iota Phi Theta® consists of over 300 chapters located in
                40 States, the District of Columbia and internationally in the
                Republic of Korea, Japan and Colombia, South America. The scope
                of the organization extends throughout the nation, from
                California to New York; from Wyoming to Florida; and from
                Wisconsin to our international chapters.
              </p>

              <p data-aos="fade-up" data-aos-delay="300">
                As Iota Phi Theta continues to grow and strengthen, so will its
                commitment to making meaningful contributions to society in
                general, with particular emphasis on the African-American
                community. Throughout America, Iota Phi Theta has come to
                represent excellence in all areas. The Fraternity is, and shall
                forever remain dedicated to its founders' vision of "Building a
                Tradition, Not Resting Upon One!"
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

export default FoundersContext;
