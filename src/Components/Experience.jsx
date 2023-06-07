import React from 'react'
import ExperienceItems from './ExperienceItems'

const Experience = () => {
  return (
    <div id='experience' className='bg-white w-full'>
      <h1 className='text-center py-8 sm:py-12 md:py-12 lg:py-20'>EXPERIENCE</h1>

      {/* --- mobile --- */}
      <div className='lg:hidden md:hidden mx-20'>
      <div className='grid grid-cols-1 gap-20'>
        <ExperienceItems 
            dates={'September 2022 - present'}
            company={'PF Publications'} 
            title={'Digital Designer and Full-stack Developer'} 
            responsibilities={'Full brand design, including printed and digital products. My responsibilities extended to web design and implementation, which involved building a fully operational e-commerce website.'} 
            contact={'contact@pfpublishing.com'}/>

        <ExperienceItems 
          dates={'February 2021 to April 2021'}
          company={'Miricyl'}
          title={'UI Designer'} 
          responsibilities={'Working along side a graphic designer, designing the user flow, LoFi and HiFi prototypes for the new Self-Care section of the product. Working to several briefs and within the design of the current product. Preparing files to hand over to developers.'} 
          contact={'alexconway@miricyl.org'}/>
        
        <ExperienceItems 
          dates={'February 2021 to May 2021'}
          company={'Caredial'} 
          title={'UI/UX and Web Designer'} 
          responsibilities={'I was responsible for a complete redesign of the website, including its internal systems, adapting and optimising five different user journeys, designing icons whilst working within their brand guidelines, using personas to reinforce suggestions on improvements to some elements.'} 
          contact={'hello@caredial.co.uk'}/>

        <ExperienceItems 
            dates={'April 2020'}
            company={'South London & Maudsley NHS Foundation Trust'} 
            title={'Graphic Designer'} 
            responsibilities={'Designing for print the In-patient, Outpatient and Staff leaflets for safety measures and various tasks during the pandemic.'} 
            contact={'sarah.feehan@slam.nhs.uk'}/>
      
      </div>
      </div>


      {/* --- tablet --- */}
      <div className='hidden lg:hidden sm:hidden '>
      <div className='grid grid-cols-2 gap-20 mx-20'>
        <ExperienceItems 
          dates={'September 2022 - present'}
          company={'PF Publications'} 
          title={'Digital Designer and Full-stack Developer'} 
          responsibilities={'Full brand design, including printed and digital products. My responsibilities extended to web design and implementation, which involved building a fully operational e-commerce website.'} 
          contact={'contact@pfpublishing.com'}/>
        
        <ExperienceItems 
          dates={'February 2021 to April 2021'}
          company={'Miricyl'}
          title={'UI Designer'} 
          responsibilities={'Working along side a graphic designer, designing the user flow, LoFi and HiFi prototypes for the new Self-Care section of the product. Working to several briefs and within the design of the current product. Preparing files to hand over to developers.'} 
          contact={'alexconway@miricyl.org'}/>

        <ExperienceItems 
          dates={'February 2021 to May 2021'}
          company={'Caredial'} 
          title={'UI/UX and Web Designer'} 
          responsibilities={'I was responsible for a complete redesign of the website, including its internal systems, adapting and optimising five different user journeys, designing icons whilst working within their brand guidelines, using personas to reinforce suggestions on improvements to some elements.'} 
          contact={'hello@caredial.co.uk'}/>

        <ExperienceItems 
            dates={'April 2020'}
            company={'South London & Maudsley NHS Foundation Trust'} 
            title={'Graphic Designer'} 
            responsibilities={'Designing for print the In-patient, Outpatient and Staff leaflets for safety measures and various tasks during the pandemic.'} 
            contact={'sarah.feehan@slam.nhs.uk'}/>
      </div> 
        <div className='text-center pb-20'></div>
      </div>




      {/* --- desktop --- */}
      <div className='hidden lg:block sm:hidden'>
      <div className='grid grid-cols-2'>
        <div className='ml-32 mr-20 mb-20'>
          <ExperienceItems 
            dates={'September 2022 - present'}
            company={'PF Publications'} 
            title={'Digital Designer and Full-stack Developer'} 
            responsibilities={'Full brand design, including printed and digital products. My responsibilities extended to web design and implementation, which involved building a fully operational e-commerce website.'} 
            contact={'contact@pfpublishing.com'}/></div>
        
        <div className='mr-32 ml-20 mb-20' >
          <ExperienceItems 
            dates={'February 2021 to April 2021'}
            company={'Miricyl'}
            title={'UI Designer'} 
            responsibilities={'Working along side a graphic designer, designing the user flow, LoFi and HiFi prototypes for the new Self-Care section of the product. Working to several briefs and within the design of the current product. Preparing files to hand over to developers.'} 
            contact={'alexconway@miricyl.org'}/></div>

        <div className='ml-32 mr-20 mb-20'>
          <ExperienceItems 
            dates={'February 2021 to May 2021'}
            company={'Caredial'} 
            title={'UI/UX and Web Designer'} 
            responsibilities={'I was responsible for a complete redesign of the website, including its internal systems, adapting and optimising five different user journeys, designing icons whilst working within their brand guidelines, using personas to reinforce suggestions on improvements to some elements.'} 
            contact={'hello@caredial.co.uk'}/></div>

        <div className='mr-32 ml-20 mb-20'>
          <ExperienceItems 
            dates={'April 2020'}
            company={'South London & Maudsley NHS Foundation Trust'} 
            title={'Graphic Designer'} 
            responsibilities={'Designing for print the In-patient, Outpatient and Staff leaflets for safety measures and various tasks during the pandemic.'} 
            contact={'sarah.feehan@slam.nhs.uk'}/></div>
      </div>
      </div>

      <div className='text-center pb-20'></div>
    </div>
  )
}

export default Experience
