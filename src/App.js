import React from "react";
import './App.css'
import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';
import BgAnimation from './components/BgAnimation'


import { BrowserRouter as Router } from "react-router-dom";

import { motion } from  'framer-motion'; 

const App = () => {
  return(
    <>
    <Router>
      <Header/>
      <AnimRoutes/>
    </Router>
    
    </>
  );

};

export default App;