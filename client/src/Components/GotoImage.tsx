import React from 'react';
import { useNavigate } from 'react-router-dom';
import Dropdown from '../Components/Dropdown';
import Skills from '../knowledgeComponents/Skills';
import LandingPage from '../knowledgeComponents/LandingPage';
import AboutMe from '../knowledgeComponents/AboutMe';


const GotoImage = () => {
    const navigate = useNavigate();

    const handleImagePageLoad =()=>{
       navigate('/ImageUpload')
    }

    const handleECommPageLoad =()=>{
        navigate('/E-Comm')
     }

     const handleDataTablePageLoad =()=>{
      navigate('/DataTable')
   }

  return (
    <>
    <div>
    <LandingPage/>
    </div>

    <div>
    <Skills/>
    </div>

    <div>
    <AboutMe/>
    </div>

    <div>
    <Dropdown/>
    </div>
   
<div>

<div className="h-[100vh] grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5 justify-center place-items-center bg-[#fffce1]">
      {/* <div className="flex-grow flex  items-center justify-center"> */}
        <button
          className="  border border-blue-300 bg-blue-600 text-white rounded-full   text-xl font-bold h-64  "
          onClick={handleImagePageLoad}
        >
          GO TO IMAGE UPLOAD
        </button>

        <button
          className=" border border-blue-300 bg-blue-600 text-white rounded-full  text-xl font-bold h-64  "
          onClick={handleECommPageLoad}
        >
          GO TO ECOMMERCE 
        </button>

        <button
          className=" border border-blue-300 bg-blue-600 text-white rounded-full text-xl font-bold h-64 "
          onClick={handleDataTablePageLoad}
        >
          GO TO DATA TABLE
        </button>
      {/* </div> */}
    </div>

    </div>
    </>
  );
};

export default GotoImage;
