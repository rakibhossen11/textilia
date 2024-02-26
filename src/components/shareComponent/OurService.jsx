import React from "react";
import ServiceCard from "../HomeComponents/ServiceCard";
import Headline from "../HomeComponents/Headline";
import Sologan from "../HomeComponents/Sologan";
import Button from "../HomeComponents/Button";
import custom from "../../images/service/custom.png";
import textile from "../../images/service/textile.png";
import virtual from "../../images/service/virtual.png";
import linen from "../../images/service/linen.png";
import garment from "../../images/service/garment.png";

const OurService = () => {
  return (
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
  );
};

export default OurService;
