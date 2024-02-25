import React from "react";
import Hero from "../../components/hero/Hero";
import BrandLogo from "../../components/brands/BrandLogo";
import Services from "../../components/service/Service";
import Testimonial from "../../components/testimonial/Testimonial";
import BlogsComp from "../../components/blogs/BlogsComp";

const Home = () => {
  return (
    <>
      <Hero />
      <BrandLogo />
      <Services />
      <Testimonial />
      <BlogsComp />
    </>
  );
};

export default Home;
