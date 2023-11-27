import React from 'react';

const Toolbar = () => {
  return (
    <div className="bg-gray-600 text-white p-4">
      <div className="flex items-center justify-end">
        <button className="mr-4">Save</button>
        <button className="mr-4">Undo</button>
        <button>Redo</button>
      </div>
    </div>
  );
};

export default Toolbar;
