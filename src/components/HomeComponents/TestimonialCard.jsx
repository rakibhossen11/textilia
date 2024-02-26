import React from 'react';

const TestimonialCard = ({profile, author, says, profession}) => {
    return (
        <div className='bg-[#f6f6f1] p-[20px]'>
            <img className='rounded-full w-20 h-20' src={profile} alt="" />
            <p className="font-poppins text-[14px] text-[#767472] mt-[20px]">{says}</p>
            <h3 className="font-poppins text-[18px] text-[#767472] mt-[20px]">{author}</h3>
            <p className="font-poppins text-[14px] text-[#767472] mt-[20px]">{profession}</p>
        </div>
    );
};

export default TestimonialCard;