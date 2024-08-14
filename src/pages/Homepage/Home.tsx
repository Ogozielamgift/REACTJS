import React from "react";
import Navbar from "../../componets/Navbar/Navbar";
import About_Us from "../../componets/AboutUs/About_Us";
import Hero from "../../componets/HeroSection/Hero";
import SeoFriendly from "../../componets/SeoFriendlySection/SeoFriendly";
import PortfolioSec from "../../componets/Portfolio/PortfolioSec";
import Parallax from "../../componets/ParallaxSection/Parallax";
import Limitless from "../../componets/LimitlessPage/Limitless";
import Project from "../../componets/Project/Project";
import Testimonial from "../../componets/Testimonial/Testimonial";
import Clients from "../../componets/Clients/Clients";
import Faq from "../../componets/Faq/Faq";
import Footer from "../../componets/Footer/Footer";
import { Pagination } from "@mui/material";
import Roughsheet from "../../componets/Roughsheet/Roughsheet";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <SeoFriendly />
      <PortfolioSec />
      <Parallax />
      <Limitless />
      <Project />
      <Testimonial />
      <Clients />
      <Faq />
      <Footer />
      {/* <Roughsheet /> */}
    </div>
  );
};

export default Home;
