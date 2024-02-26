import React from "react";
import Hero from "../components/shareComponent/Hero";
import Signatura from "../components/shareComponent/Signatura";
import hero from '../images/home/hero (2).jpg';
import AboutJourney from "../components/shareComponent/AboutJourney";
import OurService from "../components/shareComponent/OurService";
import OurProduct from "../components/shareComponent/OurProduct";
import Testimonial from "../components/shareComponent/Testimonial";
import OurProcess from "../components/shareComponent/OurProcess";

const Home = () => {
  return (
    <section className="max-w-[1240px] mx-auto">
      <Hero hero={hero} headline={"MADE WITH LOVE BY TEXTILIA"} sologan={"Style in Every Strand Elegance in Every Stitch"} />
      <Signatura />
      <AboutJourney />
      <OurService />
      <OurProduct />
      <OurProcess />
      <Testimonial />
    </section>
  );
};

export default Home;
