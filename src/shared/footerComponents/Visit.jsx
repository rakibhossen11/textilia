import React from 'react';

const Visit = ({icon,size = 24, color = 'black', text}) => {
    const IconComponent = icon;
    return (
        <div className='flex items-center mt-[10px] gap-[10px]'>
            <IconComponent size={size} color={color}/>
            <p className='text-[#f6f6f1] text-[16px] mt-[10px]'>{text}</p>
        </div>
    );
};

export default Visit;