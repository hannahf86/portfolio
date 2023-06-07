import React from 'react'
import ProjectItem from './ProjectItem';
import asdaCoffee from '../assets/asdaCoffee.png';
import caredial from '../assets/caredial.png';
import chequeSplt from '../assets/chqueSplt.png';
import music from '../assets/music.png';


function Projects() {
  
  return (
    <div id='projects' className='bg-white max-w-[1040] m-auto'>

      <div>
      <h1 className='text-center py-8 sm:py-12 md:py-12 lg:py-20'>PROJECTS</h1>
      <h4 className='text-gray-800 text-center text-md mb-8 mx-16 sm:mx-12 md:text-center lg:text-center'>Please feel free to browse my most recent projects. Get in touch for more info!</h4>

      <div className='grid min-[1285px]:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mx-20 sm:mx-20 md:mx-16 lg:mx-32 '>
          <a href='#' className='mb-12'>
            <ProjectItem 
              img={asdaCoffee} 
              title={'Indulgent Redesign for Coffee Selection'} 
              skills={'Adobe XD, Illustrator'}/>
          </a>

          <a href='#' className='mb-12'>
            <ProjectItem 
              img={caredial} 
              title={'Redesign for a Care provider'} 
              skills={'Adobe XD, Illustrator'}/>
          </a>

          <a href='/chequesplit' className='mb-12'>
            <ProjectItem 
              img={chequeSplt} 
              title={'Split resturant bills between friends'} 
              skills={'Adobe XD, Illustrator'}/>
          </a>

          <a href='#' >
            <ProjectItem 
              img={music} 
              title={'Music Practice Journal App'} 
              skills={'Adobe XD, Illustrator'}/>
          </a>
        </div>

        <div className='pb-20 lg:pb-60'></div>
      </div>

    </div>
  );
}

export default Projects
