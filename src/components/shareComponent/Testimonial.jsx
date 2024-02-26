import React from "react";
import TestimonialCard from "../HomeComponents/TestimonialCard";
import Headline from "../HomeComponents/Headline";
import Sologan from "../HomeComponents/Sologan";
import client_1 from "../../images/home/client_1.jpg";
import client_2 from "../../images/home/client_2.jpg";

const Testimonial = () => {
  return (
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
          author={"Taylor Mitchell"}
          profession={"Client"}
        />
        <TestimonialCard
          profile={client_2}
          says={
            "Lorem ipsum dolor sit amet conset atetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip occaecat cupidatat non proident."
          }
          author={"Riley Foster"}
          profession={"Client"}
        />
      </div>
    </section>
  );
};

export default Testimonial;
