import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Player } from 'video-react'

const ChequeSplit = () => {
  
  return (
    <div id='chequesplit'>

      {/* --- header/nav --- */} 
       <header className='grid grid-cols-6 bg-[#213251] p-8'>
          <a href='/#projects' className='col-start-1 justify-center'>
            <AiOutlineArrowLeft size={30} color={'white'} className='m-auto cursor-pointer hover:scale-110 ease-in duration-200'/>
          </a>

          <a href='/' className='cursor-pointer hover:scale-110 ease-in duration-200 col-start-5 text-center'>
            <p className='text-lg hover:text-orange-400'>Home</p>
          </a>

          <a href='/#contact' className='cursor-pointer hover:scale-110 ease-in duration-200 col-start-6 text-center'>
            <p className='text-lg hover:text-orange-400'>Contact</p>
          </a>

      </header> 

      <h1 className='text-5xl text-center pt-20'>TITLE</h1>

      {/* --- hero image --- */} 
      <div>
        <img src="src/assets/ChequeSplit/chequeSplitHero.png" alt='Cheque Split hero image' className='m-auto pt-16 pb-4'></img>
      </div>

      {/* --- link to pdf --- */} 
      <div>
        <p className='text-gray-700 text-center'>Download a PDF version of the case study here</p>
      </div>

      {/* --- software used/links to code/pdf << fixed side nav?--- */} 

      {/* --- case study --- */} 
      <div id='caseStudy' className='m-20 grid grid-cols-5'> {/* --- sticky nav --- */} 

          <h3 className='col-start-2 justify-start font-bold text-lg p-2'>Brief</h3>
          <p className='text-slate-800 col-start-3 col-end-5 p-2 pb-20'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis minus nostrum reprehenderit nihil, ea mollitia!
          </p>

          <h3 className='col-start-2 justify-start font-bold text-lg p-2'>Deliverables</h3>
          <p className='col-start-3 col-end-5 p-2 text-slate-800'>LOREM IPSUM</p><break />
          <p className='col-start-3 col-end-5 p-2 text-slate-800'>LOREM IPSUM</p><break />
          <p className='col-start-3 col-end-5 p-2 text-slate-800 pb-20'>LOREM IPSUM</p><break />

          

          <h3 className='col-start-2 justify-start font-bold text-lg p-2'>Scope and Constraints</h3>
          <p className='text-slate-800 col-start-3 col-end-5 p-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi recusandae enim nemo culpa porro molestias corrupti earum aliquid sequi deleniti?
          </p>
          <p className='col-start-3 col-end-5 p-2 text-slate-800 p-2'>LOREM IPSUM</p><break />
          <p className='col-start-3 col-end-5 p-2 text-slate-800'>LOREM IPSUM</p><break />
          <p className='col-start-3 col-end-5 p-2 text-slate-800 pb-20'>LOREM IPSUM</p><break />
          
          <h3 className='col-start-2 justify-start font-bold text-lg p-2'>Role and Responsibilities</h3>
          <p className='col-start-3 col-end-5 p-2 text-slate-800'>LOREM IPSUM</p><break />
          <p className='col-start-3 col-end-5 p-2 text-slate-800'>LOREM IPSUM</p><break />
          <p className='col-start-3 col-end-5 p-2 text-slate-800'>LOREM IPSUM</p><break />
          <p className='col-start-3 col-end-5 p-2 text-slate-800'>LOREM IPSUM</p><break />
          <p className='col-start-3 col-end-5 p-2 text-slate-800'>LOREM IPSUM</p><break />
          <p className='col-start-3 col-end-5 p-2 text-slate-800 pb-20'>LOREM IPSUM</p><break />
       

          <h3 className='col-start-2 justify-start font-bold text-lg p-2'>User Research</h3>
          <p className='text-slate-800 col-start-3 col-end-5 p-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed deleniti amet ullam placeat at vel voluptate ipsum aliquam assumenda? Eum sit deleniti fugiat earum expedita veniam eaque esse quam mollitia.
          </p>
          <img src="src/assets/ChequeSplit/CS_Persona01.png" alt='User Persona for Millennial Eleanor' className='col-start-3 col-end-5 pt-8 px-2'></img>
          <img src="src/assets/ChequeSplit/CS_Persona02.png" alt='User Persona for Corporate Geoff' className='col-start-3 col-end-5 pb-8 pt-8 px-2'></img>

          <img src="src/assets/ChequeSplit/CS_UserGoals_Flow.png" alt='User goals' className='col-start-3 col-end-5 px-2'></img>
          <img src="src/assets/ChequeSplit/CS_UserFlow_HandDrawn_Wireframes.png" alt='User flow' className='col-start-3 col-end-5 pb-20 pt-8 px-2'></img>

          <h3 className='col-start-2 justify-start font-bold text-lg p-2'>Design Process</h3>
          <p className='text-slate-800 col-start-3 col-end-5 p-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam possimus quisquam ex ipsa dolore, autem ea! Deserunt vero numquam itaque!
          </p>
          <img src="src/assets/ChequeSplit/CS_LoFiWireframe.png" alt='LoFi Wireframes' className='col-start-3 col-end-5 pb-20 pt-8 px-2'></img>

          <h3 className='col-start-2 justify-start font-bold text-lg p-2'>Design System</h3>
          <p className='text-slate-800 col-start-3 col-end-5 p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A quia expedita ratione? Incidunt nisi laudantium tenetur quae! Eum eius at sequi nihil voluptate. Repellat fugiat minima nobis totam fuga quod consequuntur itaque aliquid explicabo deleniti veritatis, perferendis in, beatae sapiente eveniet! Labore, officia! Libero similique optio nobis dolore commodi voluptates.
          </p>
          <img src="src/assets/ChequeSplit/CS_DesignSystem.png" alt='LoFi Wireframes' className='col-start-3 col-end-5 pb-20 pt-8 px-2'></img>

          <h3 className='col-start-2 justify-start font-bold text-lg p-2'>Layout</h3>
          <p className='text-slate-800 col-start-3 col-end-5 p-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, fuga porro? Provident veniam accusamus, tenetur sed deleniti rerum hic illo.
          </p>
          <img src="src/assets/chqueSplt.png" alt='LoFi Wireframes' className='col-start-3 col-end-5 pb-20 pt-8 px-2'></img> {/* --- RESIZE IMAGE --- */}

          <h3 className='col-start-2 justify-start font-bold text-lg p-2'>HiFi Prototype</h3>
          <p className='text-slate-800 col-start-3 col-end-5 p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita natus pariatur libero incidunt placeat aspernatur dignissimos ipsam cupiditate quo facere?
          </p>
          <div className='col-start-3 col-end-5 pb-20 pt-8 px-2'>
            <Player src='https://www.youtube.com/watch?v=tkRejk8zFSA&t=23s' />
          </div>

          <h3 className='col-start-2 justify-start font-bold text-lg p-2'>Outcome</h3>
          <p className='text-slate-800 col-start-3 col-end-5 p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolore nisi nostrum, incidunt exercitationem qui eum maxime eveniet neque rem! Commodi delectus ab esse laborum incidunt accusantium provident pariatur aut distinctio beatae autem expedita, perspiciatis deserunt cumque corrupti dicta numquam sit atque eius animi veritatis exercitationem praesentium? Aliquam, ea quisquam?
          </p>

          <h3 className='col-start-2 justify-start font-bold text-lg p-2'>Moving Forward</h3>
          <p className='text-slate-800 col-start-3 col-end-5 p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolore nisi nostrum, incidunt exercitationem qui eum maxime eveniet neque rem! Commodi delectus ab esse laborum incidunt accusantium provident pariatur aut distinctio beatae autem expedita, perspiciatis deserunt cumque corrupti dicta numquam sit atque eius animi veritatis exercitationem praesentium? Aliquam, ea quisquam?
          </p>

          <div className='text-center pb-40'></div>
      </div>
         

    </div>
  )
}

export default ChequeSplit
