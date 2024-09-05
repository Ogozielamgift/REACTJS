import React from "react";
import Navbar from "../../componets/Navbar/Navbar";
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
import Rough from "../../componets/Roughjava/Rough";
import Product from "../../componets/Roughjava/product";
import Users from "../../screens/UserScreen/Users";
import Post from "../../screens/PostScreen/post";
import Postdetails from "../../screens/PostScreen/PostDetails";
import SignUp from "../../screens/Signup screen/SignUp";

const Home = () => {
  return (
    <div>
      {/* <Navbar />
      <Hero /> */}
      <Postdetails />
      <Post />
      {/* <Users /> */}
      {/* <Product /> */}
      {/* <Rough /> */}

      {/* <SeoFriendly />
      <PortfolioSec />
      <Parallax />
      <Limitless />
      <Project />
      <Testimonial />
      <Clients />
      <Faq />
      <Footer /> */}
    </div>
  );
};

export default Home;
