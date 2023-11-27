import React from 'react';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Store from './Redux/Mobile/Store/Store';
import MobileView from './Redux/Mobile/MobileView';
import NavBar from './Redux/Mobile/Store/NavBar';
import NotFound from './Redux/Mobile/Store/NotFound';
import SideBar from './Redux/Mobile/Store/SideBar';
import CartView from './Redux/Mobile/Cart/CartView';
import Home from './Redux/Mobile/Home/HomeView';
import TvView from './Redux/Mobile/TvView';
import CycleView from './Redux/Mobile/CycleView';
import LaptopView from './Redux/Mobile/LaptopView';
import AboutView from './Redux/Mobile/AboutView';
import Admin from './Admin';

// import './Redux/Mobile/Css/Start.css'

import ImageComponent from '../ImageGallery';
import Dropdown from '../Components/Dropdown';
import Skills from '../knowledgeComponents/Skills';
import LandingPage from '../knowledgeComponents/LandingPage';
import AboutMe from '../knowledgeComponents/AboutMe';
import BookList from '../Table';
import GotoImage from '../Components/GotoImage';

function Start() {
  return (
    <div className="App">
      <Provider store={Store}>


{/* <LandingPage/>
<Skills/>
<AboutMe/>
   <Dropdown/>
      <ImageComponent/>
      <BookList/>
      
        <NavBar /> */}
       
        <Routes>
   
          <Route
            path="/product"
            element={<SideBar />}
          >
            <Route  path="/product"
            element={<MobileView />}/>
            
            {/* <Route path="admin" element={<Admin />} />
            <Route path="cart" element={<CartView />} /> */}

            <Route path="mobile" element={<MobileView />} />
            <Route path="tv" element={<TvView />} />
            <Route path="laptop" element={<LaptopView />} />
            <Route path="cycle" element={<CycleView />} />
          </Route>

          <Route path="*" element={<NotFound />} />
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<GotoImage />} />
          
          <Route path="/cart" element={<CartView />} />
          <Route path="/about" element={<AboutView />} />
          <Route path="/admin" element={<Admin />} />
          <Route path='/table' element={<BookList/>}/>
          <Route path="/ImageUpload" element={<ImageComponent />} />
          <Route path="/E-Comm" element={<Home />} />
          <Route path="/DataTable" element={<BookList />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default Start;
