import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";
import { LiaHospitalSymbolSolid } from "react-icons/lia";
import { MdOutlineSchool } from "react-icons/md";
import { GiCrenulatedShield } from "react-icons/gi";

const skillsData = [
  {
    name: "I-S.H.I.E.L.D.",
    icon: <GiCrenulatedShield className="text-4xl text-[#b58037]" />,
    link: "#",
    description:
      `Our newest, comprehensive initiative (started Spring 2016) designed to address and end all forms of abuse, nationally and worldwide. I-S.H.I.E.L.D. is an acronym that stands for "IOTAS Saving, Healing, Improving, Empowering Lives Daily". We have 5 focus areas that address Human Trafficking, Sexual Abuse, Domestic Abuse, Elder Abuse and Child Abuse/Bullying. To view the comprehensive program, click here.`,
    aosDelay: "0",
  },
  {
    name: "St. Jude Children’s Research Hospital",
    icon: <LiaHospitalSymbolSolid className="text-4xl text-[#b58037]" />,
    link: "#",
    description:
      "Since 2012, the Fraternity has been supporting and raising funds for St. Jude, primarily through the annual “St. Jude Run/Walk to End Childhood Cancer. Iota Teams comprised of members of the IOTA Family (Brothers, Sweethearts and our families and supporters) run/walk in unity in major cities across the nation on a single day, while raising funds through the year for St. Jude. To view the Iota/St. Jude MOU, click here.",
    aosDelay: "300",
  },
  {
    name: "Iota Phi Theta Men’s Health Program",
    icon: <LiaHospitalSymbolSolid className="text-4xl text-[#b58037]" />,
    link: "#",
    description:
      "Established in Spring 2016, The purpose of Men’s Health is to heighten the awareness of preventable health problems and encourage early detection and treatment of disease among men and boys. Chapters of Iota Phi Theta fulfill this program’s purpose by sponsoring health awareness seminars and workshops and ‘hands-on’ support for Fraternity members, other African American males and men of color.",
    aosDelay: "500",
  },
  {
    name: "John D. Slade Virtual Private School",
    icon: <MdOutlineSchool className="text-4xl text-[#b58037]" />,
    link: "#",
    description:
      "is our newest comprehensive initiative to engage in systematic and sustained self-educating activities, it is our efforts to gain new forms of knowledge, skills, attitudes, and values in Adult Literacy, and dropout prevention in communities. Iota looks to help those adults acquire the basic skills they need including reading, writing, math, English language proficiency, and critical-thinking skills to be productive workers, family members, and citizens.",
    aosDelay: "700",
  },
];
const Services = () => {
  return (
    <>
      <span id="about"></span>
      <div className=" dark:bg-[#403122] dark:text-white py-12 sm:grid sm:place-items-center">
        <div className="container">
          {/* Header */}
          <div className="pb-12 text-center space-y-3">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-3xl text-[#b58037] dark:text-[#b58037]"
            >
              Explore Our Service Initiatives
            </h1>
            <p
              data-aos="fade-up"
              className="text-[#403122] dark:text-white text-sm"
            >
              From the beginning of it's existence, IOTA PHI THETA® has sought to "Make a Difference."
            </p>
          </div>

          {/* services cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4"
              >
                <div>{skill.icon}</div>
                <h1 className="text-lg font-semibold">{skill.name}</h1>
                <p className="text-[#403122] dark:text-white">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>

          {/* button */}
          <div
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-offset="0"
            className="text-center mt-4 sm:mt-8"
          >
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;