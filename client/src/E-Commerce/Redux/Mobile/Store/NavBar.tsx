// import React from 'react';
// import { Link, Navigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { updateHome } from '../Home/Home';
// import profile from '../ECom-Images/profile.png';
// import { RootState } from './Store'; 

// const NavBar: React.FC = () => {
//   const dispatch = useDispatch();
//   const n = useSelector((state:RootState) => state.home);
//   const mobile = useSelector((state:RootState) => state.cart.items.mobile);
//   const laptop = useSelector((state:RootState) => state.cart.items.laptop);
//   const tv = useSelector((state:RootState) => state.cart.items.tv);
//   const cycle = useSelector((state:RootState) => state.cart.items.cycle);
//   let count = 0;
//   count = mobile.length + laptop.length + tv.length + cycle.length;

//   const add = (a: string, b: boolean) => {
//     return {
//       a,
//       b,
//     };
//   };

//   if (n.islogin === true) {
//     return (
//       <div className='Parrent-NavBar'>
//         <div className='left'>
//           <div
//             className='Circle'
//             style={{
//               backgroundImage: `url(${profile})`,
//               backgroundPosition: 'center',
//               backgroundSize: 'cover',
//               backgroundRepeat: 'no-repeat',
//             }}
//           ></div>

//           <div className='container-Name'>
//             <Link to='/product'>
//               <h3>
//                 <b>{n.name}</b>
//               </h3>
//             </Link>
//             <Link to='/' onClick={() => dispatch(updateHome(add('', false)))}>
//               <h5>Logout</h5>
//             </Link>
//           </div>
//         </div>

//         <div className='right'>
//           <ul  className='Container-NavBar'>
//             <Link to='/product'>
//               <li className='about'>Product</li>
//             </Link>
//             <Link to='/cart'>
//               <li className='cart'>cart</li>
//             </Link>
//             <span className='cart-circle'>{count}</span>
//           </ul>
//         </div>
//       </div>
//     );
//   } else {
//     return (
//       <div className='Parrent-NavBar'>
//         <div className='right'>
//           <ul  className='Container-NavBar'>
//             <Link to='/'>
//               <li className='home'>Home</li>
//             </Link>
//             <Link to='/about'>
//               <li className='about'>about</li>
//             </Link>
//           </ul>
//         </div>
//       </div>
//     );
//   }
// };

// export default NavBar;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateHome } from '../Home/Home';
import profile from '../ECom-Images/profile.png';
import { RootState } from './Store'; 

const NavBar: React.FC = () => {
  const[show,setShow] = useState<boolean>(false)
  const dispatch = useDispatch();
  const n = useSelector((state: RootState) => state.home);
  const mobile = useSelector((state: RootState) => state.cart.items.mobile);
  const laptop = useSelector((state: RootState) => state.cart.items.laptop);
  const tv = useSelector((state: RootState) => state.cart.items.tv);
  const cycle = useSelector((state: RootState) => state.cart.items.cycle);
  let count = 0;
  count = mobile.length + laptop.length + tv.length + cycle.length;

  const add = (a: string, b: boolean) => {
    return {
      a,
      b,
    };
  };

  const handleProducts =()=>{
    setShow(true)
  }

  return (
    <div className=' text-white p-4 bg-gradient-to-r from-[#5C8374] via-[#183D3D] to-[#040D12]'>
      <div className=' mx-auto flex justify-between items-center'>
        <div className='flex items-center'>
          {n.islogin && (
            <div
              className='w-12 h-12 rounded-full mr-2 opacity-75'
              style={{
                backgroundImage: `url(${profile})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            ></div>
          )}
          <div className='text-xl font-bold'>
            <Link to='/product'>{n.name}</Link>
          </div>
        </div>

        <div className='flex items-center space-x-4'>
          {n.islogin ? (
            <> <Link to='/product' onClick={()=>setShow(false)} className='hover:text-gray-300'>
            Products
          </Link> 

<Link to='/admin' onClick={()=>setShow(true)} className='relative hover:text-gray-300'>
                Admin
                
              </Link>
             
              <Link to='/cart' onClick={()=>handleProducts()} className='relative hover:text-gray-300'>
                Cart
                {count > 0 && (
                  <span  className='ml-1  absolute -top-1 -right-2 bg-white text-gray-800 rounded-full w-5 h-5 flex items-center justify-center opacity-75'>
                    {count}
                  </span>
                )}
              </Link>
              <button
                className='text-gray-300 hover:text-white'
                onClick={() => dispatch(updateHome(add('', false)))}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to='/E-Comm' className='hover:text-gray-300'>
                Home
              </Link>
              <Link to='/about' className='hover:text-gray-300'>
                About
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;

