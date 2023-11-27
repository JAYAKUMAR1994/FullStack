import React, { useState } from 'react';

const NightMode : React.FC= () => {
  const [isNightMode, setNightMode] = useState(false);

  const handleToggleNightMode = () => {
    setNightMode(!isNightMode);
  };

  return (
    <div className={`h-screen flex flex-col justify-center items-center ${isNightMode ? 'bg-gray-900 text-white' : 'bg-[#fffce1] text-black'}`}>
      <div className="flex-grow flex flex-col items-center justify-center">
        <button
          className={`border border-${isNightMode ? 'gray' : 'blue'}-300 bg-${isNightMode ? 'gray' : 'blue'}-600 text-white rounded-full py-6 px-12 mb-6 text-xl font-bold`}
          onClick={handleToggleNightMode}
        >
          {isNightMode ? 'Turn Off Night Mode' : 'Turn On Night Mode'}
        </button>

        {/* Other content here */}
      </div>
    </div>
  );
};

export default NightMode;
