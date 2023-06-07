import React from 'react'

const ProjectItem = ({img, title, skills, link}) => {
  
  const styles = {
    projectBox: 'relative flex items-center justify-center h-auto w-100% shadow-md shadow-gray-400 group hover:bg-gradient-to-r from-gray-300 to-[#506995] p-8 min-[1285px]:p-4 2xl:p-8 lg:mx-4 md:mx-2 sm:mx-0',
    hoverBox: 'group-hover:opacity-10',
    projectGradient: 'hidden group-hover:block absolute',
    title: 'text-xl lg:text-2xl font-bold text-white text-center md:text-xl',
    skills: 'text-md mt-8 mb-8 text-white text-center',
    button: 'text-center mx-8 py-4 px-2 bg-white text-gray-700 font-bold cursor-pointer text-lg md:text-md sm:-text-md'
  }
  
  return (
    <div id='projectBox' className={styles.projectBox}>

      <img src={img} alt="#" className={styles.hoverBox} />

      <div className={styles.projectGradient}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.skills}>{skills}</p>
        <a href={link}></a>
        <p className={styles.button}>More Info</p>
      </div>

    </div>
  )
}

export default ProjectItem;
