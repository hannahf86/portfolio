import React from 'react';
import { Link } from 'react-scroll';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterSquare } from './react-icons/ai'

const Top = () => {

    return (
    <div className='bg-[#213251]'>
        
        {/* --- mobile background --- */ }
        <div id='mobileTop' className='lg:hidden'>
            <div className='px-16 '>
                <h2 className='pt-48 pb-4'>Hi, my name is</h2>
                <h1 className='pb-4'>HANNAH FEEHAN</h1>
                <p className='pb-24'>I'm a front-end developer with UI/UX 
                experience to help you with all your digital needs.</p>
            </div>

            <div className='text-center pb-52'>
                <Link activeClass="active" to="projects" spy={true} smooth={true} offset={20} duration={500} href='/projects'><h3 className='pb-4 text-md'>SEE MORE</h3></Link>
                <div className='flex justify-center'>
                <Link activeClass="active" to="projects" spy={true} smooth={true} offset={20} duration={500} href='/projects'><img src='/arrowDown.png'></img></Link>
                </div>
            </div>
        </div> 
        
   

        {/* --- desktop background --- */} 
        <div id='top' className='lg:block bg-[#213251] hidden'>
            <header className='pt-8 bg-[#213251]'>
                <img src='/websiteLogo.png' className='w-16 mx-12 inline'></img>
                <img src='/think_design_build.png' className='w-60 inline mx-12'></img>
            </header>

            <div className='px-52 '>
                <h2 className='pt-48 pb-4 text-2xl'>Hi, my name is</h2>
                <h1 className='pb-4 text-8xl'>HANNAH FEEHAN</h1>
                <p className='pt-4 pb-32 text-2xl w-3/4'>I'm a front-end developer with UI/UX experience who can help you with all your digital needs.</p>
            </div>

            <div className='text-center pb-40'>
                <a href='https://github.com/hannahf86'><AiFillGithub className='max-w-16 px-16 py-2 mt-12' /></a>
                <a href='https://www.linkedin.com/in/hannah-feehan/'><AiFillLinkedin className='max-w-16 px-16 py-2' /></a>
                <a href='https://twitter.com/HannahFDev'><AiFillTwitterSquare className='max-w-16 px-16 py-2' /></a>
            </div> 

        </div>

    </div>
  ) 
}

export default Top;
