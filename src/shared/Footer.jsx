import React from "react";
import Headline from "../components/HomeComponents/Headline";
import textilia_logo from '../images/textilia_logo.png';
import footer_1 from "../images/footer_1.jpg";
import footer_2 from "../images/footer_2.jpg";
import footer_3 from "../images/footer_3.jpg";
import footer_4 from "../images/footer_4.jpg";
import FooterTItle from "./footerComponents/FooterTItle";
import PTag from "./footerComponents/PTag";
import Visit from "./footerComponents/Visit";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center bg-[#2c2b2b]">
        {/* footer sologan */}
      <section className="max-w-[1240px] mt-[180px] flex flex-col items-center px-[60px]">
        <Headline text={"Browse Our Gallery"} />
        <h3 className="text-[40px] text-[#f6f6f1] mt-[25px]">Browse Our Instragram</h3>
        <p className="text-[14px] text-[#f6f6f1]">Follow us @textilia.official and use #Textilia to share the love.</p>
        <div className="grid grid-cols-4 gap-[20px] my-[30px]">
          <img src={footer_1} alt="" />
          <img src={footer_2} alt="" />
          <img src={footer_3} alt="" />
          <img src={footer_4} alt="" />
        </div>
        <hr className="border-[2px] w-full border-[#f6f6f1]" />
      </section>
      {/* footer sologan */}
      {/* footer middle */}
      <section className="flex mt-[30px]">
        <div className="w-[30%] right-0">
            <img className="w-[72px]" src={textilia_logo} alt="" />
            <p className="text-[14px] text-[#f6f6f1] mt-[10px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>
        <div className="grid grid-cols-3">
            <div>
                <FooterTItle text={'Quick Links'} />
                <PTag text={'about'} />
                <PTag text={'Service'} />
                <PTag text={'Projects'} />
                <PTag text={'Pricing'} />
                <PTag text={'Team'} />
                <PTag text={'Blog'} />
            </div>
            <div>
                <FooterTItle text={'Support'} />
                <PTag text={'Privacy Policy'} />
                <PTag text={'Terms & Conditions'} />
                <PTag text={'Support'} />
                <PTag text={'Hel & FAQ'} />
                <PTag text={'Disclaimer'} />
                <PTag text={'Contact'} />
            </div>
            <div>
                <FooterTItle text={'Visit Us'} />
                <div>
                  <Visit color={"#f0d3c6"} size={'24'} icon={CiLocationOn} text={'Hobirbari bhaluka Mymensingh'} />
                  <Visit color={"#f0d3c6"} size={'24'} icon={CiMail} text={'help@support.com'} />
                  <Visit color={"#f0d3c6"} size={'24'} icon={IoIosCall} text={'(+088 01966366745)'} />
                </div>
            </div>
        </div>
      </section>
      {/* footer middle */}
      <section>
        <p className="text-center text-[#f6f6f1] py-[30px]">© 2023 · Textilia · Template Kit by Baliniz. All Right Reserved.</p>
      </section>
    </footer>
  );
};

export default Footer;
