import React from 'react';
import logo from './logo.svg';


import ImageComponent from './ImageGallery';
import BookList from './Table';

import Dropdown from './Components/Dropdown';
import AllBarComponent from './Components/AllBarComponent';
import Skills from './knowledgeComponents/Skills';
import LandingPage from './knowledgeComponents/LandingPage';
import AboutMe from './knowledgeComponents/AboutMe';
import Start from './E-Commerce/Start';
import { BrowserRouter } from 'react-router-dom';
import GotoImage from './Components/GotoImage';


function App() {
  return (
    <div >
      {/* <header className="App-header"> */}
   
      {/* <AllBarComponent/> */}
   {/* <ImageGallery/> */}

{/* <LandingPage/>
<Skills/>
<AboutMe/>
   <Dropdown/> */}
      {/* <ImageComponent/> */}
    
      {/* </header> */}
      {/* <BookList/> */}
     
      <BrowserRouter>
      <Start/>
      {/* <GotoImage/> */}
      </BrowserRouter>
     

    </div>
  );
}

export default App;
