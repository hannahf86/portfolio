import React from "react";
import { Routes, Route } from "react-router-dom"; 

import Home from "./Components/Home";
import ChequeSplit from "./Components/ChequeSplit";


function App() {

  return (
    <div>     
      <Routes>
        <Route path="/" element={<Home />}/>  
        <Route path="/chequesplit" element={<ChequeSplit />}/> {/* --- further case studies to be entered --- */} 
      </Routes> 
    </div>
  )
}

export default App;
