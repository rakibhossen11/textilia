import React from "react";

const ServiceCard = ({ img, text, des }) => {
  return (
    <>
      <div className="border-[1px] border-[#2c2b2b] p-[12px]">
        <img className="w-[72px] h-[72px]" src={img} alt="" />
        <p className="font-poppins text-[24px] text-[#767472] mt-[25px] mb-[10px]">
          {text}
        </p>
        <p className="font-poppins text-[16px] text-[#767472]">{des}</p>
      </div>
      {/* ({text & des} ? (
      <div className="border-[1px] border-[#2c2b2b] p-[12px]">
        <p className="font-poppins text-[24px] text-[#767472] mt-[25px] mb-[10px]">
          {text}
        </p>
        <p className="font-poppins text-[16px] text-[#767472]">{des}</p>
      </div>
      ) : (<img className="w-[72px] h-[72px]" src={img} alt="" />) ) */}
    </>
  );
};

export default ServiceCard;
