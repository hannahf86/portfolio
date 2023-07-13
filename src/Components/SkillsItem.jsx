import React from 'react';

const SkillsItem = ({img}) => {
  return (
    <div id='projectBox' className='relative flex items-center justify-center h-auto p-2 drop-shadow-lg my-4'>
        <img src={img} alt='/' className='max-h-32'/>
    </div>
  )
}

export default SkillsItem;
