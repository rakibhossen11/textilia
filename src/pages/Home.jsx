import React from "react";
import Headline from "../components/HomeComponents/Headline";
import about1 from "../images/about1.jpeg";
import about2 from "../images/about2.jpeg";
import about3 from "../images/about3.jpeg";
import hero from "../images/hero.jpg";
import Sologan from "../components/HomeComponents/Sologan";
import AboutBorder from "../components/HomeComponents/AboutBorder";
import Button from "../components/HomeComponents/Button";
import Hero from "../images/hero.jpg";
import ServiceCard from "../components/HomeComponents/ServiceCard";
import custom from "../images/custom.png";
import textile from "../images/textile.png";
import virtual from "../images/virtual.png";
import linen from "../images/linen.png";
import garment from "../images/garment.png";
import ProjectCard from "../components/HomeComponents/ProjectCard";
import project_img_1 from "../images/project_1.jpg";
import project_img_2 from "../images/project_2.jpg";
import project_img_3 from "../images/project_3.jpg";
import project_img_4 from "../images/project_4.jpg";
import ProcessCard from "../components/HomeComponents/ProcessCard";
import TestimonialCard from "../components/HomeComponents/TestimonialCard";
import client_1 from "../images/client_1.jpg";
import client_2 from "../images/client_2.jpg";

const Home = () => {
  return (
    <div className="max-w-[1240px] mx-auto">
      {/* banner section */}
      <section className="grid grid-cols-2 bg-[#f6f6f1] px-[60px] py-[30px]">
        <div>
          <Headline text={"MADE WITH LOVE BY TEXTILIA"} />
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
      <section className="px-[60px]">
        <div className="bg-fixed bg-center h-screen flex items-center justify-center">
          <div
            className="w-full h-[50%] absolute bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${hero})` }}
          ></div>
          <div className="relative z-10 text-white text-center">
            <h1 className="text-4xl font-bold mb-4">Your Website Title</h1>
            <p className="text-lg">Your website content goes here...</p>
          </div>
        </div>
      </section>
      {/* our collection */}
      {/* our services */}
      <section className="grid grid-cols-3 gap-[10px] px-[60px]">
        <div className="grid grid-cols-2 col-span-2 gap-[10px] pr-[25px]">
          <ServiceCard
            img={custom}
            text={"Custom Tailoring"}
            des={
              "Providing personalized tailoring services to create garments tailored to individual measurements and preferences."
            }
          />
          <ServiceCard
            img={textile}
            text={"Textile Sourcing"}
            des={
              "Assisting clients in sourcing high-quality fabrics and textiles for their garment needs to ensure a perfect fit."
            }
          />
          <ServiceCard
            img={virtual}
            text={"Virtual Fitting Rooms"}
            des={
              "Incorporating virtual fitting room technology to enhance the online shopping experience, showcase new collections and trends."
            }
          />
          <ServiceCard
            img={linen}
            text={"Linen Weaving"}
            des={
              "Enjoy the perfect fit with garments tailored specifically to your measurements. Our expert tailors ensure that every stitch aligns."
            }
          />
          <ServiceCard
            img={garment}
            text={"Garment Stitching"}
            des={
              "Your satisfaction is our priority. We offer alterations and refinements until your custom garment is a seamless reflection."
            }
          />
        </div>
        <div>
          <Headline text={"Our services"} />
          <Sologan text={"Why Compromise On Style? Garments That Define You"} />
          <p className="font-poppins text-[14px] text-[#767472]">
            Lorem ipsum dolor sit amet, consecte adipiscing elit seddo eiusmod
            tempor dolore magna aliqua inventore veritatis et quasi.
          </p>
          <Button text={"Load More"} />
        </div>
      </section>
      {/* our services */}
      {/* our products */}
      <section className="grid grid-cols-2 items-center mt-[100px] px-[60px]">
        <div>
          <Headline text={"Our Projects"} />
          <Sologan text={"Design to Delivery The Garment Project Unveiled"} />
          <p className="font-poppins text-[14px] text-[#767472]">
            Lorem ipsum dolor sit amet, consecte adipiscing elit seddo eiusmod
            tempor dolore magna aliqua inventore veritatis et quasi.
          </p>
          <ProjectCard
            img={project_img_1}
            head={"Couture Innovate Project"}
            para={"Sed ut perspiciatis unde."}
          />
        </div>
        <div>
          <ProjectCard
            img={project_img_2}
            head={"Couture Innovate Project"}
            para={"Sed ut perspiciatis unde."}
          />
          <ProjectCard
            img={project_img_3}
            head={"Couture Innovate Project"}
            para={"Sed ut perspiciatis unde."}
          />
          <ProjectCard
            img={project_img_4}
            head={"Couture Innovate Project"}
            para={"Sed ut perspiciatis unde."}
          />
        </div>
      </section>
      {/* our products */}

      {/* OUR PROCESS */}
      <section className="grid grid-cols-2 px-[60px] my-[40px]">
        <div></div>
        <div>
          <Headline text={"OUR PROCESS"} />
          <Sologan text={"Easy Steps To Get Our Services"} />
          <p className="font-poppins text-[14px] text-[#767472]">
            Lorem ipsum dolor sit amet, consecte adipiscing elit seddo eiusmod
            tempor dolore magna aliqua inventore veritatis et quasi.
          </p>
          <div className="grid grid-cols-2 gap-[20px] mt-[20px]">
            <ProcessCard
              number={"01"}
              head={"Identify Your Needs"}
              para={"Lorem ipsum dolor sit amet, consecte adipiscing elit."}
            />
            <ProcessCard
              number={"04"}
              head={"Discuss Your Needs"}
              para={"Lorem ipsum dolor sit amet, consecte adipiscing elit."}
            />
            <ProcessCard
              number={"03"}
              head={"Clarify Timelines"}
              para={"Lorem ipsum dolor sit amet, consecte adipiscing elit."}
            />
            <ProcessCard
              number={"04"}
              head={"Finalize Agreement"}
              para={"Lorem ipsum dolor sit amet, consecte adipiscing elit."}
            />
          </div>
        </div>
      </section>
      {/* our OUR PROCESS */}

      {/* Testimonial */}
      <section className="flex flex-col items-center mx-[60px] px-[30px] py-[60px] my-[40px] bg-[#eeeee7]">
        <Headline text={"TESTIMONIAL"} />
        <Sologan text={"What Our Clients Say"} />
        <p className="font-poppins text-[14px] text-[#767472]">
          Lorem ipsum dolor sit amet, consecte adipiscing elit seddo eiusmod
          tempor dolore magna aliqua inventore veritatis et quasi.
        </p>
        <div className="grid grid-cols-2 gap-[25px] mt-[40px]">
          <TestimonialCard
            profile={client_1}
            says={
              "Lorem ipsum dolor sit amet conset atetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip occaecat cupidatat non proident."
            }
            author={'Taylor Mitchell'}
            profession={'Client'}
          />
          <TestimonialCard
            profile={client_2}
            says={
              "Lorem ipsum dolor sit amet conset atetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip occaecat cupidatat non proident."
            }
            author={'Riley Foster'}
            profession={'Client'}
          />
        </div>
      </section>
      {/* Testimonial */}
    </div>
  );
};

export default Home;
