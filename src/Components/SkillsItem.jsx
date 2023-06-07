import React from 'react';

const SkillsItem = ({img}) => {
  return (
    <div id='projectBox' className='relative flex items-center justify-center h-auto w-100% p-2 hover:scale-110 ease-in duration-100 drop-shadow-lg my-4'>
        <img src={img} alt='/' className=''/>
    </div>
  )
}

export default SkillsItem;
