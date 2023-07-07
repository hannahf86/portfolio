import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';

const MainNav = () => {

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    };

    const styles = {
        navSquare: 'absolute bg-[#F97316] w-16 h-16 right-0 fixed flex justify-center align-middle lg:hidden cursor-pointer z-0',
        squareLink: 'bg-[#F97316] cursor-pointer m-auto lg:hidden',
        navBackground: 'fixed w-full h-screen bg-[#213251]/90 flex flex-col justify-center items-center z-99',
        navBtn: 'w-[75%] flex justify-center items-center rounded-full shadow-sm bg-gray-100 shadow-gray-200 m-4 p-4 cursor-pointer',
    }

    return (
    <div id='home'> 


    {/* --- mobile nav --- */}
    <div onClick={handleNav} className={styles.navSquare}>
    <AiOutlineMenu color='white' onClick={handleNav} className={styles.squareLink} />
    </div>

    {
    nav ? ( // ternary operator for if statement
        
        <div className={styles.navBackground}>

            <Link activeClass="active" to="/" spy={true} smooth={true} offset={50} duration={500} className={styles.navBtn}>
            <button>HOME</button>
            </Link>

            <Link activeClass="active" to="projects" spy={true} smooth={true} offset={50} duration={500} className={styles.navBtn}>
            <button>PROJECTS</button>
            </Link>

            <Link activeClass="active" to="skills" spy={true} smooth={true} offset={50} duration={500} className={styles.navBtn}>
            <button>SKILLS</button>
            </Link>

            <Link activeClass="active" to="experience" spy={true} smooth={true} offset={50} duration={500} className={styles.navBtn}>
            <button>EXPERIENCE</button>
            </Link>

            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500} className={styles.navBtn}>
            <button>CONTACT</button>
            </Link>

        </div>
        )
        : ( // ternary operator for else 
            ''
        )}

        {/* --- Desktop/ Tablet Side Nav --- */}
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
