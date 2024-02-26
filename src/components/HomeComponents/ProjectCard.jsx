import React from 'react';

const ProjectCard = ({img, head, para, }) => {
    return (
        <div className='relative mt-[30px] mb-[60px]'>
            <img className='h-[720px] shadow-xl' src={img} alt="" />
            <div className='absolute bottom-0 left-0 bg-[#f6f6f1] p-[20px]'>
                <h2 className='text-[#3f3d3c] font-poppins text-[20px] mt-[10px]'>{head}</h2>
                <p className='text-[#767472] font-poppins text-[16px] mt-[10px]'>{para}</p>
            </div>
        </div>
    );
};

export default ProjectCard;