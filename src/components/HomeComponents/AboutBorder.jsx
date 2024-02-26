import React from "react";

const AboutBorder = ({ img, title, simpleText }) => {
  return (
    <section className="border-[1px] border-[#767472] p-[20px] mt-[20px]">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h3 className="text-[#5c5a58] text-[20px]">{title}</h3>
        <p className="text-[#767472]">{simpleText}</p>
      </div>
    </section>
  );
};

export default AboutBorder;
