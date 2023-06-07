import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';
import { Link } from 'react-scroll';

const MainNav = () => {

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    };

    return (
    <div id='home'> {/* --- mobile nav --- */} 

      <div onClick={handleNav} className='bg-[#F97316] w-16 h-16 right-0 fixed flex justify-center align-middle lg:hidden cursor-pointer'>
        <AiOutlineMenu color='white' onClick={handleNav} className='bg-[#F97316] cursor-pointer m-auto lg:hidden' />
      </div>

      {
        nav ? ( // ternary operator for if statement
            
            <div className='fixed w-full h-screen bg-[#213251]/90 flex flex-col justify-center items-center z-20'>

                <a href='/' className='w-[75%] flex justify-center items-center rounded-full shadow-sm 
                bg-gray-100 shadow-gray-200 m-4 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <span>HOME</span>
                </a>

                <a href='#projects' className='w-[75%] flex justify-center items-center rounded-full shadow-sm 
                bg-gray-100 shadow-gray-200 m-4 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <span>PROJECTS</span>
                </a>

                <a href='#skills' className='w-[75%] flex justify-center items-center rounded-full shadow-sm 
                bg-gray-100 shadow-gray-200 m-4 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <span>SKILLS</span>
                </a>

                <a href='#experience' className='w-[75%] flex justify-center items-center rounded-full shadow-sm 
                bg-gray-100 shadow-gray-200 m-4 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <span>EXPERIENCE</span>
                </a>

                <a href='#contact' className='w-[75%] flex justify-center items-center rounded-full shadow-sm 
                bg-gray-100 shadow-gray-200 m-4 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <span>CONTACT</span>
                </a>

            </div>
        )
        : ( // ternary operator for else 
            ''
        )}

        {/* --- side nav --- */}
        <div className='lg:block hidden fixed top-[25%] z-10 right-0'>
            <div className='flex flex-col'>

                <Link activeClass="active" to="/" spy={true} smooth={true} offset={50} duration={500} href='/' className='bg-[#344460] border-2 border-[#cf7922]
                scroll-smooth m-2 py-1 pl-3 pr-6 cursor-pointer hover:scale-110 ease-in duration-150 text-left text-white'>
                HOME
                </Link>

                <Link activeClass="active" to="projects" spy={true} smooth={true} offset={50} duration={500} href='#projects' className='bg-[#344460] border-2 border-[#cf7922]
                scroll-smooth m-2 py-1 pl-3 pr-6 cursor-pointer hover:scale-110 ease-in duration-150 text-left text-white'>
                PROJECTS
                </Link>
                
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={50} duration={500} href='#skills' className='bg-[#344460] border-2 border-[#cf7922]
                scroll-smooth m-2 py-1 pl-3 pr-6 cursor-pointer hover:scale-110 ease-in duration-150 text-left text-white'>
                SKILLS
                </Link>
                
                <Link activeClass="active" to="experience" spy={true} smooth={true} offset={50} duration={500} href='#experience' className='bg-[#344460] border-2 border-[#cf7922]
                scroll-smooth m-2 py-1 pl-3 pr-6 cursor-pointer hover:scale-110 ease-in duration-150 text-left text-white'>
                EXPERIENCE
                </Link>

                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500} href='#contact' className='bg-[#344460] border-2 border-[#cf7922]
                scroll-smooth m-2 py-1 pl-3 pr-6 cursor-pointer hover:scale-110 ease-in duration-150 text-left text-white'>
                CONTACT
                </Link>

            </div>
        </div>

    </div>
  )
}

export default MainNav;
