import React from "react";
import Headline from "../HomeComponents/Headline";

const Signatura = () => {
  return (
    <section className="flex flex-col items-center pt-[100px] pb-[50px]">
      <Headline text={"THE TEXTILIA MISSION"} />
      <p className="font-poppins text-[28px] px-[40px] my-[50px] text-[#767472]">
        "Seamlessly blend Style and Comfort, offering a curated collection of
        garments that empower individuals to express their Unique Identity. Our
        mission extends beyond clothing – We Envision a World where each thread
        tells a story of Ethical Production, environmental responsibility, and
        the Celebration Of Individuality."
      </p>
      <p className="font-poppins text-[24px]">Rakib Hossen</p>
      <p className="font-poppins text-[14px] text-[#767472]">
        CEO Founder Textilia
      </p>
    </section>
  );
};

export default Signatura;
