import React from 'react';

const Headline = ({text}) => {
    return (
        <div className='bg-[#f0d3c6] absolute'>
            <p className='font-poppins relative'>{text}</p>
        </div>
    );
};

export default Headline;