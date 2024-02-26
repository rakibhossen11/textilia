import React from 'react';
import ProcessCard from '../HomeComponents/ProcessCard';
import Headline from '../HomeComponents/Headline';
import Sologan from '../HomeComponents/Sologan';

const OurProcess = () => {
    return (
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
    );
};

export default OurProcess;