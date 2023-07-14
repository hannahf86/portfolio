import React from "react";
import { Routes, Route } from "react-router-dom"; 

import Home from "./Components/Home";
import DBTApp from "./Components/caseStudies/DBTApp";



function App() {

  return (
    <div>     
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="dbtApp" element={ <DBTApp /> }/>
      </Routes> 
    </div>
  )
}

export default App;
