import React from 'react';

const Button = ({text}) => {
    return (
        <button className='bg-[#5f5e5d] text-[#f6f6f1] hover:bg-[#3f3d3c] text-[18px] px-[20px] py-[10px] mt-[20px]'>{text}</button>
    );
};

export default Button;