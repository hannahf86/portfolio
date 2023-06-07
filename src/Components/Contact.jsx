import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='bg-[#213251] w-full'>
      <h1 className='text-center py-8 sm:py-12 md:py-12 lg:px-20'>CONTACT</h1>
      
      <div className='flex justify-center'>
      <form className='bg-white mx-12 px-8 py-12 lg:px-20'>
      <p className='text-gray-800 text-center mb-8'>Please do get in touch if you have any questions or would like to work together.</p>
        <input type='text' className='bg-gray-200 rounded-md w-full my-2 border-gray-300' 
        placeholder='Full Name'></input>

        <input type='email' className='bg-gray-200 rounded-md w-full my-2 border-gray-300' 
        placeholder='Email'></input>

        <textarea className='bg-gray-200 rounded-md w-full h-40 my-2 border-gray-300' 
        placeholder='Message'></textarea>

        <div className='flex justify-end mt-4'>
          <button className='border-2 bg-[#506995] text-white font-medium rounded-md px-12 py-4'>Send</button>
        </div>
        <p className='text-center text-gray-800 text-left my-8'>Alternatively, please feel free to contact me via email on hannahmfeehan@gmail.com</p>

        <div className='flex justify-center'>
                <li><a href='#'><img src='/facebook.png' className='max-w-16 mx-8'></img></a></li>
                <li><a href='#'><img src='/instagram.png' className='max-w-16 mx-8'></img></a></li>
                <li><a href='#'><img src='/linkedin.png' className='max-w-16 mx-8'></img></a></li>
            </div> 
      </form>
      </div>

    <div className='pb-12'></div>

    </div>
  )
}

export default Contact
