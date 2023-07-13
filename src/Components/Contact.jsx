import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai'



const Contact = () => {

  const styles = {
    title: 'text-center py-16 sm:py-8 md:py-8 lg:py-16',

  }

  return (
    <div id='contact' className='bg-white w-full'>
      <h1 className={styles.title}>CONTACT</h1>
      
      <div className='flex justify-center'>
      <form className='bg[#213251] mx-12 px-8  lg:px-20'>
      <p className='text-gray-800 text-center mb-8'>Please do get in touch if you have any questions or would like to work together.</p>
        <input type='text' className='bg-gray-200 rounded-md w-full my-2 border-gray-300' 
        placeholder='Full Name'></input>

        <input type='email' className='bg-gray-200 rounded-md w-full my-2 border-gray-300' 
        placeholder='Email'></input>

        <textarea className='bg-gray-200 rounded-md w-full h-40 my-2 border-gray-300' 
        placeholder='Message'></textarea>

        <div className='flex justify-end mt-4'>
          <button type='submit' className='border-2 bg-[#506995] text-white font-medium rounded-md px-12 py-4'>Send</button>
        </div>

        <div className='flex justify-center mt-8'>
                <li><a href='https://github.com/hannahf86' target="_blank"><AiFillGithub size={50} color='#213251' className='my-12 mx-6'/></a></li>
                <li><a href='https://www.linkedin.com/in/hannah-feehan/' target="_blank"><AiFillLinkedin size={50}color='#213251' className='my-12 mx-6'/></a></li>
                <li><a href='https://twitter.com/HannahFDev' target="_blank"><AiFillTwitterSquare size={50} color='#213251' className='my-12 mx-6'/></a></li>
            </div> 
      </form>
      </div>

    <div className='pb-32'></div>

    </div>
  )
}

export default Contact
