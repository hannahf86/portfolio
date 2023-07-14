import React from 'react';
import ProjectItem from './ProjectItem';
import dbtApp from '../assets/dbtApp.png';
import fullStackRevision from '../assets/fullStackRevision.png';
import pfMusicPubs from '../assets/pfMusicPubs.png';
import chqueSplt from '../assets/chqueSplt.png';


function Projects() {
  
  const styles = {
    title: 'text-center py-16 sm:py-8 md:py-8 lg:py-16',
    description: 'text-gray-800 text-center text-md mb-16 mx-16 sm:mx-12 md:text-center lg:text-center',
    projectDisplay: 'grid min-[1285px]:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mx-20 sm:mx-20 md:mx-16 lg:mx-32 ',
  }

  return (
    <div id='projects' className='bg-white max-w-[1040] m-auto'>

      <div>
      <h1 className={styles.title}>PROJECTS</h1>
      <h4 className={styles.description}>Please feel free to browse my most recent projects. Get in touch for more info!</h4>

      <div className={styles.projectDisplay}>
          <a href='#dbtApp' className='mb-12'>
            <ProjectItem 
              img={dbtApp} 
              title={'Dialectical Behaviour Therapy App'} 
              skills={'React, Vite, Tailwind, PostgresSQL'}/>
          </a>

          <a href='#' className='mb-12'>
            <ProjectItem 
              img={fullStackRevision} 
              title={'Revision and reference tool for developers'} 
              skills={'React, Vite, Typescript, Tailwind'}/>
          </a>

          <a href='#' className='mb-12'>
            <ProjectItem 
              img={chqueSplt} 
              title={'Split resturant bills between friends'} 
              skills={'Adobe XD, Illustrator'}/>
          </a>

          <a href='#' >
            <ProjectItem 
              img={pfMusicPubs} 
              title={'Full-stack e-Commerce website for music publisher'} 
              skills={'React, Next.js, Typescript, Tailwind, PostgresSQL, Stripe'}/>
          </a>
        </div>

        <div className='pb-20 lg:pb-60'></div>
      </div>



    </div>
  );
}

export default Projects
