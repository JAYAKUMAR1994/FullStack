import React from 'react';

const MenuBar = () => {
  return (
    <div className="bg-gray-700 text-white p-4">
      <nav>
        <ul className="flex justify-end">
          <li className="mr-4 hover:bg-gray-500 hover:cursor-pointer hover:p-2">Account</li>
          <li className="mr-4">Settings</li>
          <li className="mr-4">Security</li>
          
        </ul>
      </nav>
    </div>
  );
};

export default MenuBar;
