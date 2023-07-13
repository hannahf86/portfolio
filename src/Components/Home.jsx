import React from 'react';

import MainNav from "./MainNav";
import Top from './Top'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'

const Home = () => {
  return (
    <div>
        <div id='/'></div>
        <MainNav />
        <div id='top'><Top /></div>
        <div id='projects'><Projects /></div>
        <div id='skills'><Skills /></div>
        <div id='contact'><Contact /></div>
    </div>
  )
}

export default Home;
