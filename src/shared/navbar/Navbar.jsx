import React from 'react';
import logo from '../../images/nav_logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='flex justify-between px-[30px] pt-[20px]'>
            <div className='flex items-center gap-[20px]'>
                <img className='w-[10%]' src={logo} alt="" />
                <p className='text-[14px] text-[#2c2b2b] font-poppins'>help@support.com</p>
            </div>
            <div className='flex gap-[40px] text-[18px] text-[#2c2b2b] font-poppins'>
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
                <p>Services</p>
                <p>Pages</p>
                <p>Blog</p>
                <p>Contact</p>
            </div>
        </nav>
    );
};

export default Navbar;