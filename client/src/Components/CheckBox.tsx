import React, { useState } from 'react';

const CheckboxExample = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div >

      <label className="inline-flex items-center">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="form-checkbox text-blue-500"
        />
        <span className="ml-2">Check me</span>
      </label>
   
    </div>
  );
};

export default CheckboxExample;
