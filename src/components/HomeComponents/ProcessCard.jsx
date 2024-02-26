import React from 'react';

const ProcessCard = ({number, head, para}) => {
    return (
        <div className='bg-[#f0d3c6] p-[15px] '>
            <p className='font-poppins text-[16px] text-[#767472]'>{number}</p>
            <h2 className='text-[#2c2b2b] text-[24px]'>{head}</h2>
            <p className='font-poppins text-[16px] text-[#767472]'>{para}</p>
        </div>
    );
};

export default ProcessCard;