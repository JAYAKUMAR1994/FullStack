import React, { useState, ChangeEvent } from 'react';
import ToggleButton from './ToggleButton';
import picture from '../images/picture1.jpeg'
import SignUpPage from './SignUpPage';
import RadioButton from './RadioButton';
import CheckboxExample from './CheckBox';
import Carousel from './Carousel';
import AllBarComponent from './AllBarComponent';
import TodoApp from './TodoList';
import NightMode from './NightMode';

interface DropdownProps {
  options: string[];
  onSelect: (selectedOption: string) => void;
}

const options = ['Option 1', 'Option 2', 'Option 3'];

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const [isNightMode, setNightMode] = useState(false);

  const handleToggleNightMode = () => {
    setNightMode(!isNightMode);
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);

  };

  return (
    <div className={` flex flex-col justify-center items-center ${isNightMode ? 'bg-gray-900 text-white' : 'bg-[#fffce1] text-black'}`}>
      <div className="flex-grow flex flex-col items-center justify-center">
        <button
          className={`border border-${isNightMode ? 'gray' : 'blue'}-300 bg-${isNightMode ? 'gray' : 'blue'}-600 text-white rounded-full py-6 px-12 mb-6 text-xl font-bold`}
          onClick={handleToggleNightMode}
        >
          {isNightMode ? 'Turn Off Night Mode' : 'Turn On Night Mode'}
        </button>

        {/* Other content here */}
   



    <div className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-5  w-full  bg-[#fffce1] ${isNightMode ? 'bg-gray-900 text-white' : 'bg-[#fffce1] text-black'}   p-2 `} >
       
       <div className="container mx-auto mt-8">
        <div className=' grid grid-cols-2 px-28 items-center justify-center'>
          <h1>DropDown</h1>
    <select
      value={selectedOption}
      onChange={handleSelectChange}
      className="p-2 border rounded-md text-black text-sm" 
    >
      {options.map((option) => (
        <option key={option} value={option} className="bg-white text-black text-sm p-5">
          {option}
        </option>
      ))}
    </select>
</div>
</div>

<div className=' flex items-center justify-center'>
<div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-96 mx-auto">
  <div className="animate-pulse flex space-x-4">
    <div className="rounded-full bg-slate-700 h-10 w-10"></div>
    <div className="flex-1 space-y-6 py-1">
      <div className="h-2 bg-slate-700 rounded"></div>
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-4">
          <div className="h-2 bg-slate-700 rounded col-span-2"></div>
          <div className="h-2 bg-slate-700 rounded col-span-1"></div>
        </div>
        <div className="h-2 bg-slate-700 rounded"></div>
      </div>
    </div>
  </div>
</div>

</div>

<div className='flex items-center justify-center'>
<div className="flex gap-2 max-w-md   bg-white p-8 border border-gray-300 rounded-md transform hover:scale-105 hover:rotate-6 transform-origin-top-right transition-transform duration-300 h-28">
    <div>
        <img src={picture} alt='error' className='h-14'/>
    </div>
<h2 className="text-xl font-semibold mb-4">Transformed Card</h2>
      
</div>
</div>

<div className=' flex items-center justify-center'>
<div className="container mx-auto">
    
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-2 px-4 text-left">ID</th>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">Role</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr>
              <td className="py-2 px-4">1</td>
              <td className="py-2 px-4">John Doe</td>
              <td className="py-2 px-4">john@example.com</td>
              <td className="py-2 px-4">Admin</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="py-2 px-4">2</td>
              <td className="py-2 px-4">Jane Doe</td>
              <td className="py-2 px-4">jane@example.com</td>
              <td className="py-2 px-4">User</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</div>



<div className=' flex items-center justify-center gap-5'>
<ToggleButton/>
<RadioButton/>
<CheckboxExample/>
</div>


<div className=' flex justify-center row-span-3 items-center'>
    <SignUpPage/>
</div>

<div className=' p-10'>
    <Carousel/>
</div>


<div>
    <AllBarComponent/>
</div>

<div>
 <TodoApp/>
</div>



</div>
    

</div>
    </div>

  );
};

export default Dropdown;
