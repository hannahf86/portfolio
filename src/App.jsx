import React from "react";
import { Routes, Route } from "react-router-dom"; 

import Home from "./Components/Home";
import DBTApp from "./Components/caseStudies/dbtApp";



function App() {

  return (
    <div>     
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="./Components/caseStudies/dbtApp" element={ <DBTApp /> }/>
      </Routes> 
    </div>
  )
}

export default App;
