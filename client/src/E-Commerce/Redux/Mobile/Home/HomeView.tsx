// import React, { useEffect, useRef, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { updateHome } from './Home';
// import back from '../ECom-Images/back.jpg';

// const HomeView: React.FC = () => {
//   useEffect(() => {
//     inputRef.current?.focus();
//   }, []);

//   const [input, setInput] = useState<string>("");
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const inputRef = useRef<HTMLInputElement>(null);

//   const add = (a: string, b: boolean) => {
//     if (inputRef.current?.value !== "") {
//       navigate("/product");
//       return {
//         a,
//         b,
//       };
//     } else {
//       inputRef.current?.focus();
//       return { a: "", b: false }; // Return default object when input is empty
//     }
//   };

//   return (
//     <div className='container-Home' style={{ backgroundImage: `url(${back})` }}>
//       <label style={{ color: "black" }}>
//         <i>UserName</i>
//       </label>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         ref={inputRef}
//         minLength={5}
//         maxLength={10}
//         required
//       />
//       <button className='home-button' onClick={() => dispatch(updateHome(add(input, true)))}>
//         <i>LogIn</i>
//       </button>
//     </div>
//   );
// };

// export default HomeView;


import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateHome } from './Home';
import back from '../ECom-Images/back.jpg';
import NavBar from '../Store/NavBar';


const HomeView: React.FC = () => {
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const [input, setInput] = useState<string>("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  const add = (a: string, b: boolean) => {
    if (inputRef.current?.value !== "") {
      navigate("/product");
      return {
        a,
        b,
      };
    } else {
      inputRef.current?.focus();
      return { a: "", b: false }; // Return default object when input is empty
    }
  };

  return (
    <>
    <div>
<NavBar/>
    </div>

    <div
      className=' min-h-screen flex items-center justify-start pl-4'
      style={{ backgroundImage: `url(${back})` }}
    >
      <div className='bg-white  p-8 rounded-md shadow-md'>
        <label className='block text-gray-700 text-sm font-bold mb-2'>
          <i>UserName</i>
        </label>
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          ref={inputRef}
          minLength={5}
          maxLength={10}
          required
          className='border border-black font-serif text-sm p-2 w-full mb-4 rounded-md text-black'
        />
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md'
          onClick={() => dispatch(updateHome(add(input, true)))}
        >
          <i>LogIn</i>
        </button>
      </div>
    </div>

    </>
  );
};

export default HomeView;
