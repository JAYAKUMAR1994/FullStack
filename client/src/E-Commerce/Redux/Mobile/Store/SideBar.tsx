import React,{useEffect} from 'react';
import { Link, Navigate, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './Store'; // Replace 'path-to-your-root-reducer' with the actual path
import { fetchData } from '../Store/homeActions';
import { ThunkDispatch } from 'redux-thunk';
import NavBar from './NavBar';

const SideBar: React.FC = () => {
  const n = useSelector((state: RootState) => state.home);
  const dispatch = useDispatch<ThunkDispatch<RootState, any, any>>();
 
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);


  if (n.islogin === true) {
    return (
      <>
      <div>
<NavBar/>
      </div>

        <div className='flex '>
        <div className='w-[200px] bg-gray-800 h-screen text-white'>
          <ul className='p-4'>
            <Link to="mobile">
              <li className='py-2 hover:bg-gray-700 cursor-pointer'>Mobiles</li>
            </Link>
            <Link to="tv">
              <li className='py-2 hover:bg-gray-700 cursor-pointer'>Tv</li>
            </Link>
            <Link to="laptop">
              <li className='py-2 hover:bg-gray-700 cursor-pointer'>Laptop</li>
            </Link>
            <Link to="cycle">
              <li className='py-2 hover:bg-gray-700 cursor-pointer'>Cycles</li>
            </Link>
          
          </ul>
        </div>

        <div className='w-screen child2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>
          <Outlet />
        </div>
      </div>
      </>
    );
  } else {
    return (
      <Navigate to="/" />
    );
  }
};

export default SideBar;
