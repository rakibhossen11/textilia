import React from "react";
import Headline from "../HomeComponents/Headline";
import Sologan from "../HomeComponents/Sologan";
import Button from "../HomeComponents/Button";

const Hero = ({hero, headline , sologan}) => {
  return (
    <div>
      {/* banner section */}
      <section className="grid grid-cols-2 bg-[#f6f6f1] px-[60px] py-[30px]">
        <div>
          <Headline text={sologan} />
          <Sologan text={headline} />
        </div>
        <div>
          <img src={hero} alt="" />
        </div>
      </section>
      {/* banner section */}
    </div>
  );
};

export default Hero;
