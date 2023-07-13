import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Player } from 'video-react'

const ChequeSplit = () => {
  
  return (
    <div id='chequesplit'>
      {/* --- MOBILE --- */} 


      {/* --- DESKTOP --- */} 
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

      <h1 className='text-5xl text-center pt-20'>CHEQUE SPLIT</h1>

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
          <p className='text-slate-800 col-start-3 col-end-5 p-2 pb-20'>Chque Splt are a new company who wish to develop an easy-to-use solution to splitting cheques and bills at the end of a social ocassion.
              They want their users to be able to send billing information to contacts, print and share invoices, pay using Google Pay, Apple Pay, 
              PayPal or in the venue itself. 
          </p>

          <h3 className='col-start-2 justify-start font-bold text-lg p-2'>Deliverables</h3>
          <p className='col-start-3 col-end-5 p-2 text-slate-800'>User and Product Research</p><break />
          <p className='col-start-3 col-end-5 p-2 text-slate-800'>Design System</p><break />
          <p className='col-start-3 col-end-5 p-2 text-slate-800 pb-20'>Hi-Fi Prototype</p><break />

          

          <h3 className='col-start-2 justify-start font-bold text-lg p-2'>Scope and Constraints</h3>
          <p className='text-slate-800 col-start-3 col-end-5 p-2'>The clients have asked for a basic Hi-Fi prototype of the Payee side of the app only, so they can get an idea of the user experience of the app quickly. 
            The timeline is as follows:
          </p>
          <p className='col-start-3 col-end-5 p-2 text-slate-800 p-2'>Three days - Research</p><break />
          <p className='col-start-3 col-end-5 p-2 text-slate-800'>Two days - Design system</p><break />
          <p className='col-start-3 col-end-5 p-2 text-slate-800 pb-20'>Two days - HiFi prototype and iterations</p><break />
          
          <h3 className='col-start-2 justify-start font-bold text-lg p-2'>Role and Responsibilities</h3>
          <p className='col-start-3 col-end-5 p-2 text-slate-800'>Writing the personas, user goals and user flow</p><break />
          <p className='col-start-3 col-end-5 p-2 text-slate-800'>Layout design</p><break />
          <p className='col-start-3 col-end-5 p-2 text-slate-800'>Design system</p><break />
          <p className='col-start-3 col-end-5 p-2 text-slate-800'>LoFi Wireframe prototype</p><break />
          <p className='col-start-3 col-end-5 p-2 text-slate-800'>HiFi prototype</p><break />
          <p className='col-start-3 col-end-5 p-2 text-slate-800 pb-20'>All prototyping and animation</p><break />
       

          <h3 className='col-start-2 justify-start font-bold text-lg p-2'>User Research</h3>
          <p className='text-slate-800 col-start-3 col-end-5 p-2'>The client wants to appeal to millennials and professionals. 
            To ensure future team members were on the same page, I created two very quick personas for these two distinctive user groups.
            The settings in which each would use the app are quite different, i.e. social vs professional, however, both wish to make the process of 
            paying simpler when out with friends, colleagues or clients.
          </p>
          <img src="src/assets/ChequeSplit/CS_Persona01.png" alt='User Persona for Millennial Eleanor' className='col-start-3 col-end-5 pt-8 px-2'></img>
          <img src="src/assets/ChequeSplit/CS_Persona02.png" alt='User Persona for Corporate Geoff' className='col-start-3 col-end-5 pb-8 pt-8 px-2'></img>

          <img src="src/assets/ChequeSplit/CS_UserGoals_Flow.png" alt='User goals' className='col-start-3 col-end-5 px-2'></img>
          <img src="src/assets/ChequeSplit/CS_UserFlow_HandDrawn_Wireframes.png" alt='User flow' className='col-start-3 col-end-5 pb-20 pt-8 px-2'></img>

          <h3 className='col-start-2 justify-start font-bold text-lg p-2'>Design Process</h3>
          <p className='text-slate-800 col-start-3 col-end-5 p-2'>Keeping the Lo-Fi wireframe down to the simplest steps meant I could deliver a somewhat extremely 
          basic user experience for them ASAP, which they had requested.
          </p>
          <img src="src/assets/ChequeSplit/CS_LoFiWireframe.png" alt='LoFi Wireframes' className='col-start-3 col-end-5 pb-20 pt-8 px-2'></img>

          <h3 className='col-start-2 justify-start font-bold text-lg p-2'>Design System</h3>
          <p className='text-slate-800 col-start-3 col-end-5 p-2'>The clients wanted a style that showed trust and reliability but was also trendy, warm and friendly. 
          The use of the navy blue with the brighter accent colours and soft secondary colours achieves this successfully. Similarly with the font choices of Roboto Slab 
          for the headers and various PT Sans Pro styles for all other fonts, a smart and professional yet design forward style is achieved.
          </p>
          <img src="src/assets/ChequeSplit/CS_DesignSystem.png" alt='LoFi Wireframes' className='col-start-3 col-end-5 pb-20 pt-8 px-2'></img>

          <h3 className='col-start-2 justify-start font-bold text-lg p-2'>Layout</h3>
          <p className='text-slate-800 col-start-3 col-end-5 p-2'>I found the use of cards, grids and stacking to be extremely well suited for this app. They help to keep 
          the information clear and easy to access.
          </p>
          <img src="src/assets/chqueSplt.png" alt='LoFi Wireframes' className='col-start-3 col-end-5 pb-20 pt-8 px-2'></img> {/* --- RESIZE IMAGE --- */}

          <h3 className='col-start-2 justify-start font-bold text-lg p-2'>HiFi Prototype</h3>
          <p className='text-slate-800 col-start-3 col-end-5 p-2'>Again, I kept the prototyping very simple to provide the quick turn around requested by the clients. 
          I was able to provide a very basic idea of how the app would look and feel.
          </p>

          <h3 className='col-start-2 justify-start font-bold text-lg p-2'>Outcome</h3>
          <p className='text-slate-800 col-start-3 col-end-5 p-2'>The clients were extremely happy with stage one of the app and have requested a complete prototype 
          and design documents to hand to their back-end developers. I did feel that only having to complete a basic prototype initially was a little off putting as 
          it threw my process off balance, however I am generally pleased with how the app turned out and am very excited to be filling in those holes.
          </p>

          <h3 className='col-start-2 justify-start font-bold text-lg p-2'>Moving Forward</h3>
          <p className='text-slate-800 col-start-3 col-end-5 p-2'>Further steps for this project would be to build a prototype for testing, leading to full production and release.
          </p>

          <div className='text-center pb-40'></div>
      </div>
         

    </div>
  )
}

export default ChequeSplit
