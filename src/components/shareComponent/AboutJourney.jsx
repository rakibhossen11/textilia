import React from "react";
import about1 from '../../images/about/about1.jpeg';
import about2 from '../../images/about/about2.jpeg';
import about3 from '../../images/about/about3.jpeg';
import Headline from "../HomeComponents/Headline";
import Sologan from "../HomeComponents/Sologan";
import AboutBorder from "../HomeComponents/AboutBorder";
import Button from "../HomeComponents/Button";

const AboutJourney = () => {
  return (
    <section className="grid grid-cols-2 justify-center gap-[30px] px-[60px] pb-[30px]">
      <div className="grid grid-cols-2 items-center justify-end gap-[16px]">
        <div>
          <img src={about1} alt="" />
          <img className="rounded-full mt-[10px]" src={about3} alt="" />
        </div>
        <img src={about2} alt="" />
      </div>
      <div>
        <Headline text={"ABOUT OUR JOURNEY"} />
        <Sologan text={"We Provide The Best Textile Industry Since 1998"} />
        <p>
          Lorem ipsum dolor sit amet, consecte adipiscing elit seddo eiusmod
          tempor dolore magna aliqua inventore veritatis et quasi.
        </p>
        <AboutBorder
          title={"Our Garment"}
          simpleText={"Hobirbari Bhaluka Mymensingh 2240"}
        />
        <AboutBorder
          title={"Our Contact"}
          simpleText={"help@textile.com | (+088) 1966366745"}
        />
        <Button text={"Learn More"} />
        <div></div>
      </div>
    </section>
  );
};

export default AboutJourney;
