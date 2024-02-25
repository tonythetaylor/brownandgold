import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import History from "./pages/history/History";
import Leadership from "./pages/leadership/Leadership";
import ChapterLocator from "./pages/membership/ChapterLocator";
import Navbar from "./components/navbar/newnav/Navbar";
import './App.css'
import Header from "./components/navbar/newnav/Header";
import Foundations from "./pages/programs-services/Foundations";
import ContactUs from "./pages/contact/ContactUs";
const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="overflow-x-hidden bg-[#fffff4] dark:bg-[#403122] dark:text-white text-[#403122]">
      {/* <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden"> */}

      {/* <Navbar /> */}

      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/chapter-locator" element={<ChapterLocator />} />
          <Route path="/foundations" element={<Foundations />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
