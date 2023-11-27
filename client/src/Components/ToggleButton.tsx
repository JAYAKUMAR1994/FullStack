import React, { useState } from 'react';

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <button
      onClick={handleToggle}
      className={`${
        isToggled ? 'bg-blue-500' : 'bg-gray-500'
      } text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline`}
    >
      {isToggled ? 'ON' : 'OFF'}
    </button>
  );
};

export default ToggleButton;
