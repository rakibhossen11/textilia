import React from "react";
import Headline from "../HomeComponents/Headline";
import Sologan from "../HomeComponents/Sologan";
import Button from "../HomeComponents/Button";

const Hero = ({hero, headline , sologan}) => {
  return (
    <div>
      {/* banner section */}
      <section className="grid grid-cols-2 items-center gap-[30px] bg-[#f6f6f1] pl-[60px] py-[60px]">
        <div>
          <Headline text={headline} />
          <Sologan text={sologan} />
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
