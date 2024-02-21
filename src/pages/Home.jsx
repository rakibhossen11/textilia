import React from "react";
import Headline from "../components/Headline";
import about1 from "../images/about1.jpeg";
import about2 from "../images/about2.jpeg";
import about3 from "../images/about3.jpeg";
import hero from '../images/hero.jpg';
import Sologan from "../components/Sologan";
import AboutBorder from "../components/AboutBorder";
import Button from "../components/Button";
import Hero from '../images/hero.jpg';
import PTag from "../shared/footerComponents/PTag";

const Home = () => {
  return (
    <div className="max-w-[1240px] mx-auto">
      {/* banner section */}
      <section className="grid grid-cols-2 bg-[#f6f6f1]">
        <div>
          <Headline text={'MADE WITH LOVE BY TEXTILIA'} />
          <Sologan text={"Style in Every Strand Elegance in Every Stitch"} />
          <p className="text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua utenim ad
            minim veniam.
          </p>
          <Button text={"Get Started"} />
        </div>
        <div>
          <img src={Hero} alt="" />
        </div>
      </section>
      {/* banner section */}
      {/* Mission */}
      <section className="flex flex-col items-center pt-[100px] pb-[50px]">
        <Headline text={"THE TEXTILIA MISSION"} />
        <p className="font-poppins text-[28px] px-[40px] my-[50px] text-[#767472]">
          "Seamlessly blend Style and Comfort, offering a curated collection of
          garments that empower individuals to express their Unique Identity.
          Our mission extends beyond clothing – We Envision a World where each
          thread tells a story of Ethical Production, environmental
          responsibility, and the Celebration Of Individuality."
        </p>
        <p className="font-poppins text-[24px]">Rakib Hossen</p>
        <p className="font-poppins text-[14px] text-[#767472]">
          CEO Founder Textilia
        </p>
      </section>
      {/* Mission */}
      {/* about our journey */}
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
      {/* about our journey */}
      {/* our collection */}
      <section>
        <div className="bg-fixed bg-center h-screen flex items-center justify-center">
          <div className="w-full h-[50%] absolute bg-cover bg-no-repeat" style={{backgroundImage: `url(${hero})`}}></div>
          <div className="relative z-10 text-white text-center">
            <h1 className="text-4xl font-bold mb-4">Your Website Title</h1>
            <p className="text-lg">Your website content goes here...</p>
          </div>
        </div>
      </section>
      {/* our collection */}
      {/* our services */}
      <section className="grid grid-cols-2">
        <div>
          
        </div>
        <div>
          <Headline text={'Our services'} />
          <Sologan text={'Why Compromise On Style? Garments That Define You'} />
          <p className="font-poppins text-[14px] text-[#767472]">Lorem ipsum dolor sit amet, consecte adipiscing elit seddo eiusmod tempor dolore magna aliqua inventore veritatis et quasi.</p>
          <Button text={'Load More'} />
        </div>
      </section>
      {/* our services */}
    </div>
  );
};

export default Home;
