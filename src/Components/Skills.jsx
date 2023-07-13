import React from 'react'
import SkillsItem from './SkillsItem'

import html from '../assets/icons/HTML.png'
import css from '../assets/icons/CSS.png'
import js from '../assets/icons/JS.png'
import json from '../assets/icons/JSON.png'
import adobe from '../assets/icons/Adobe.png'
import bootstrap from '../assets/icons/Bootstrap.png'
import mysql from '../assets/icons/MySQL.png'
import nodejs from '../assets/icons/NodeJs.png'
import php from '../assets/icons/PHP.png'
import react from '../assets/icons/React.png'
import tailwind from '../assets/icons/Tailwind.png'
import unity from '../assets/icons/Unity_1.png'
import zeplin from '../assets/icons/Zeplin.png'

const Skills = () => {
  
  const styles = {
    title: 'text-center py-16 sm:py-8 md:py-8 lg:py-16',
    description: 'text-white text-center text-md mb-8 mx-16 sm:mx-12 md:text-center lg:text-center',
    skillsItem: 'bg-white mx-20 lg:mx-40 grid grid-cols-3 lg:grid-cols-8 md:grid-cols-4 sm:grid-cols',
  }
  
  return (
    <div id='skills' className='bg-[#213251] w-full'>
      <h1 className={styles.title}>SKILLS</h1>
      <h4 className={styles.description}>I believe in expanding on my existing skills and learning new ones in order to be a successful developer. 
      <br /> <br /> Below is a list of the main languages, frameworks and databases I work in.</h4>
    
      <div className={styles.skillsItem}>
        <SkillsItem img={html}/>
        <SkillsItem img={css}/>
        <SkillsItem img={js}/>
        <SkillsItem img={react}/>
        <SkillsItem img={tailwind}/>
        <SkillsItem img={bootstrap}/>
        {/* --- TO ADD NEXT, VITE, TYPESCRIPT, REDUX --- */ }


        <SkillsItem img={json}/>
        <SkillsItem img={mysql}/>
        <SkillsItem img={nodejs}/>
        <SkillsItem img={php}/>
        {/* --- TO ADD MONGO DB, PostgresSQL, MOCHA/CHAI --- */ }

        <SkillsItem img={adobe}/>
        <SkillsItem img={unity}/>
        <SkillsItem img={zeplin} />
      </div> {/* --- TO ADD FIGMA --- */ }

      {/* --- DROP DOWN CERTIFICATE SECTION (TBC) --- */ }

      {/* --- PDF OF RESUME --- */ }


      <div className='text-center pb-20 lg:pb-32'></div>
    </div>
  )
}

export default Skills
