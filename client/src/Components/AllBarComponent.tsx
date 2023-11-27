import React from 'react';
import Sidebar from './Sidebar';
import MenuBar from './MenuBar';
import Toolbar from './Toolbar';

const AllBarComponent = () => {
  return (

   <div className="flex">
     
      <div className="flex-1">
        <MenuBar />
        <Sidebar/>
        {/* Add main content */}
        <div className="p-4 h-4/5">
          <h1 className="text-2xl font-semibold">Main Content</h1>
          {/* Add main content here */}
        </div>

      </div>
    </div>
    
 
  );
};

export default AllBarComponent;
