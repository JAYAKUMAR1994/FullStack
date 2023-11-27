import React, { useState } from 'react';

const RadioButton = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e:any) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div >
     
      <div>
        <label className="inline-flex items-center">
          <input
            type="radio"
            value="option1"
            checked={selectedOption === 'option1'}
            onChange={handleOptionChange}
            className="form-radio text-blue-500"
          />
          <span className="ml-2">Option 1</span>
        </label>
      </div>
      <div>
        <label className="inline-flex items-center">
          <input
            type="radio"
            value="option2"
            checked={selectedOption === 'option2'}
            onChange={handleOptionChange}
            className="form-radio text-blue-500"
          />
          <span className="ml-2">Option 2</span>
        </label>
      </div>
      <div>
        <label className="inline-flex items-center">
          <input
            type="radio"
            value="option3"
            checked={selectedOption === 'option3'}
            onChange={handleOptionChange}
            className="form-radio text-blue-500"
          />
          <span className="ml-2">Option 3</span>
        </label>
      </div>
     
    </div>
  );
};

export default RadioButton;
