import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const FooterLinks = [
  {
    title: "History",
    link: "/#history",
  },
  {
    title: "Membership",
    link: "/#membership",
  },
  {
    title: "Member Login",
    link: "/#login",
  },
  {
    title: "Careers",
    link: "/#career",
  },
];
const HelpLinks = [
  {
    title: "Support",
    link: "/#support",
  },
  {
    title: "Delivery Details",
    link: "/#delivery-details",
  },
  {
    title: "Terms & Conditions",
    link: "/#terms",
  },
  {
    title: "Privacy Policy",
    link: "/#policy",
  },
];
const ResourcesLinks = [
  {
    title: "Free Ebooks",
    link: "/#ebooks",
  },
  {
    title: "How To Blog",
    link: "/#blogs",
  },
  {
    title: "Subscribe IPT",
    link: "https://youtube.com/@IPT1963?si=9gbWUU8DkXLYtFBI",
  },
];
const Footer = () => {
  return (
    <div className="bg-[#fffff4] dark:bg-[#403122] text-[#403122] dark:text-white backdrop-brightness-50">
      <section className="container py-10">
        <div className=" grid md:grid-cols-3 py-5">
          {/* company Details */}
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              Iota Phi Theta 
            </h1>
            <p className="text-sm">
              Iota Phi Theta® Fraternity Inc. 
              <br /> 1600 N. Calvert St
              <br /> Baltimore, MD 21202
              <br />Contact Us | 443-438-5691{" "}
            </p>
            <br />
            {/* Social Handle */}
            <div className="flex items-center gap-4 mt-6">
              <a href="https://www.instagram.com/ipt1963/">
                <FaInstagram className="text-2xl hover:text-[#b58037] duration-300" />
              </a>
              <a href="https://www.facebook.com/IPT1963/">
                <FaFacebook className="text-2xl hover:text-[#b58037] duration-300" />
              </a>
              <a href="https://www.linkedin.com/company/ipt1963">
                <FaLinkedin className="text-2xl hover:text-[#b58037] duration-300" />
              </a>
            </div>
          </div>
          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Brotherhood
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  {FooterLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-[#b58037] space-x-1 dark:text-[#b58037] text-[#b58037]"
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Help
                </h1>
                <ul className="flex flex-col gap-3">
                  {HelpLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-[#b58037] space-x-1 dark:text-[#b58037]   text-[#b58037]"
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Resources
                </h1>
                <ul className="flex flex-col gap-3">
                  {ResourcesLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-[#b58037] space-x-1 dark:text-[#b58037]  text-[#b58037]"
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
