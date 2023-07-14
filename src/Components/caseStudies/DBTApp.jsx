import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const DBTApp = () => {
  
    const stylesNav = {
      bar: 'grid grid-cols-6 bg-[#213251] p-8',
      back: 'col-start-1 justify-center',
      projectArrow: 'm-auto cursor-pointer hover:scale-110 ease-in duration-200',
      home: 'cursor-pointer hover:scale-110 ease-in duration-200 col-start-5 text-center',
      homeLink: 'text-lg hover:text-orange-400',
      contact: 'cursor-pointer hover:scale-110 ease-in duration-200 col-start-6 text-center',
      contactLink: 'text-lg hover:text-orange-400',
    }
  
    const stylesPage = {
      title: 'text-5xl text-center pt-20',
      heroImage: 'm-auto pt-16 pb-4',
      pdfLink: 'text-gray-700 text-center',
      caseStudy: 'm-20 grid grid-cols-5',
      sectionTitle: 'col-start-2 justify-start font-bold text-lg p-2',
      par: 'text-slate-800 col-start-3 col-end-5 p-2',
      parBottom: 'text-slate-800 col-start-3 col-end-5 p-2 pb-20',
      images: 'col-start-3 col-end-5 pt-8 px-2 pb-20',
    }
  
  
    return (
      <div id='casestudytemplate'>
  
       {/* --- NAV --- */} 
       <header className={stylesNav.bar}>
        <a href='/#projects' className={stylesNav.back}>
          <AiOutlineArrowLeft size={30} color={'white'} className={stylesNav.projectArrow}/>
        </a>

        <a href='/' className={stylesNav.home}>
          <p className={stylesNav.homeLink}>Home</p>
        </a>

        <a href='/#contact' className={stylesNav.contact}>
          <p className={stylesNav.contactLink}>Contact</p>
        </a>
      </header> 

    {/* --- PAGE DETAILS --- */} 

      <h1 className={stylesPage.title}>CASE STUDY TITLE</h1>

      <div>
        <img src="src/assets/ChequeSplit/chequeSplitHero.png" alt='Cheque Split hero image' className={stylesPage.heroImage}></img>
      </div>

      <div>
        <p className={stylesPage.pdfLink}>Download a PDF version of the case study here</p>
      </div>

      {/* --- software used/links to code/pdf << fixed side nav?--- */} 

      {/* --- case study --- */} 
      <div id='caseStudy' className={stylesPage.caseStudy}> {/* --- sticky nav --- */} 

          <h3 className={stylesPage.sectionTitle}>Identifying a problem</h3>
          <p className={stylesPage.parBottom}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis minus nostrum reprehenderit nihil, ea mollitia!
          </p>

          <h3 className={stylesPage.sectionTitle}>Deliverables</h3>
          <p className={stylesPage.par}>LOREM IPSUM</p><break />
          <p className={stylesPage.par}>LOREM IPSUM</p><break />
          <p className={stylesPage.parBottom}>LOREM IPSUM</p><break />

          

          <h3 className={stylesPage.sectionTitle}>Scope and Constraints</h3>
          <p className={stylesPage.par}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi recusandae enim nemo culpa porro molestias corrupti earum aliquid sequi deleniti?
          </p>
          <p className={stylesPage.par}>LOREM IPSUM</p><break />
          <p className={stylesPage.par}>LOREM IPSUM</p><break />
          <p className={stylesPage.parBottom}>LOREM IPSUM</p><break />
          
          <h3 className={stylesPage.sectionTitle}>Role and Responsibilities</h3>
          <p className={stylesPage.par}>LOREM IPSUM</p><break />
          <p className={stylesPage.par}>LOREM IPSUM</p><break />
          <p className={stylesPage.par}>LOREM IPSUM</p><break />
          <p className={stylesPage.par}>LOREM IPSUM</p><break />
          <p className={stylesPage.par}>LOREM IPSUM</p><break />
          <p className={stylesPage.parBottom}>LOREM IPSUM</p><break />
       

          <h3 className={stylesPage.sectionTitle}>User Research</h3>
          <p className={stylesPage.par}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed deleniti amet ullam placeat at vel voluptate ipsum aliquam assumenda? Eum sit deleniti fugiat earum expedita veniam eaque esse quam mollitia.
          </p>
          <img src="src/assets/ChequeSplit/CS_Persona01.png" alt='User Persona for Millennial Eleanor' className={stylesPage.images}></img>
          <img src="src/assets/ChequeSplit/CS_Persona02.png" alt='User Persona for Corporate Geoff' className={stylesPage.images}></img>

          <img src="src/assets/ChequeSplit/CS_UserGoals_Flow.png" alt='User goals' className={stylesPage.par}></img>
          <img src="src/assets/ChequeSplit/CS_UserFlow_HandDrawn_Wireframes.png" alt='User flow' className={stylesPage.parBottom}></img>

          <h3 className={stylesPage.sectionTitle}>Design Process</h3>
          <p className={stylesPage.par}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam possimus quisquam ex ipsa dolore, autem ea! Deserunt vero numquam itaque!
          </p>
          <img src="src/assets/ChequeSplit/CS_LoFiWireframe.png" alt='LoFi Wireframes' className={stylesPage.images}></img>

          <h3 className={stylesPage.sectionTitle}>Design System</h3>
          <p className={stylesPage.par}>Lorem ipsum dolor sit amet consectetur adipisicing elit. A quia expedita ratione? Incidunt nisi laudantium tenetur quae! Eum eius at sequi nihil voluptate. Repellat fugiat minima nobis totam fuga quod consequuntur itaque aliquid explicabo deleniti veritatis, perferendis in, beatae sapiente eveniet! Labore, officia! Libero similique optio nobis dolore commodi voluptates.
          </p>
          <img src="src/assets/ChequeSplit/CS_DesignSystem.png" alt='LoFi Wireframes' className={stylesPage.images}></img>

          <h3 className={stylesPage.sectionTitle}>Layout</h3>
          <p className={stylesPage.par}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, fuga porro? Provident veniam accusamus, tenetur sed deleniti rerum hic illo.
          </p>
          <img src="src/assets/chqueSplt.png" alt='LoFi Wireframes' className={stylesPage.images}></img> 

          <h3 className={stylesPage.sectionTitle}>HiFi Prototype</h3>
          <p className={stylesPage.par}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita natus pariatur libero incidunt placeat aspernatur dignissimos ipsam cupiditate quo facere?
          </p>

          <h3 className={stylesPage.sectionTitle}>Outcome</h3>
          <p className={stylesPage.par}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolore nisi nostrum, incidunt exercitationem qui eum maxime eveniet neque rem! Commodi delectus ab esse laborum incidunt accusantium provident pariatur aut distinctio beatae autem expedita, perspiciatis deserunt cumque corrupti dicta numquam sit atque eius animi veritatis exercitationem praesentium? Aliquam, ea quisquam?
          </p>

          <h3 className={stylesPage.sectionTitle}>Moving Forward</h3>
          <p className={stylesPage.par}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolore nisi nostrum, incidunt exercitationem qui eum maxime eveniet neque rem! Commodi delectus ab esse laborum incidunt accusantium provident pariatur aut distinctio beatae autem expedita, perspiciatis deserunt cumque corrupti dicta numquam sit atque eius animi veritatis exercitationem praesentium? Aliquam, ea quisquam?
          </p>

          <div className='text-center pb-40'></div>
      </div>
         
  
      </div>
    )
  }

export default DBTApp;
