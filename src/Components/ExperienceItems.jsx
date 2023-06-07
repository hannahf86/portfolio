import React from 'react'

const ExperienceItems = ({ dates, company, title, responsibilities, contact }) => {
  return (
    <div id='experienceItems' >
        <div> 
            <h4 className='underline'>{dates}</h4>
        </div>

        <div> 
            <h2 className='text-gray-700 text-[#213251] font-bold mt-2'>{company}</h2>
        </div>

        <div> 
            <h3 className='text-gray-700 text-[#506995] font-bold mt-2'>{title}</h3>
        </div>

        <div> 
            <p className='text-gray-800 font-medium mt-2'>{responsibilities}</p>
        </div>

        <div> 
            <p className='text-[#344460] font-semibold mt-2'>{contact}</p>
        </div>

    </div>
  )
}

export default ExperienceItems
