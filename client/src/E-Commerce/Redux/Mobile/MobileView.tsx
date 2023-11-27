// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToCart, removeToCart } from './Cart/Cart';
// import { RootState } from './Store/Store'; // Replace 'path-to-your-root-reducer' with the actual path


// interface MobileProduct {
//   id: number;
//   mobile: string;
//   rate: number;

//   imagePath:string
//   // Add other properties as needed
// }


// const MobileView: React.FC = () => {
//   const [count, setCount] = useState(0);
//   const dispatch = useDispatch();
//   const n = useSelector((state: RootState) => state.mobile.categories);
//   const [loading, setLoading] = useState(true);


//   const add = (img: string, price: number, id: number, brand: string) => {
    
//     return {
//       img,
//       price,
//       id,
//       brand,
//       count: count + 1,
//       name: "mobile",
//       cartitem: 0,
//       check: "",
//     };
//   };

//   return (
// <div>
// {loading ? (
//         // Display the loading spinner component while data is being fetched
//   <div>Loading...</div>
//       ) : (

// <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-around'>
// {n.map((category) => (
//          category.name === 'Mobile' ? (
//           category.products.map((item:MobileProduct) => (
//         <div key={item.id} className='max-w-xs rounded overflow-hidden shadow-lg m-2 '>
//           {/* <img src={item.imagePath} alt="error" className="w-[100px] h-[100px]  "></img> */}
//           <img className='w-full h-32 object-fill' src={item.imagePath} alt="Error Mobile" />
//           <div className='px-4 py-2'>
//             <div className='font-bold text-sm mb-1'>{item.mobile}</div>
//             <p className='text-gray-700 text-xs'>Price: ${item.rate}</p>
//           </div>
//           <div className='px-4 py-2 flex justify-between'>
//             <button
//               className='bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded text-xs'
//               onClick={() => dispatch(addToCart(add(item.imagePath, item.rate, item.id, item.mobile)))}
//             >
//               Add
//             </button>
//             <button
//               className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-xs'
//               onClick={() => dispatch(removeToCart(add(item.imagePath, item.rate, item.id, item.mobile)))}
//             >
//               Remove
//             </button>
//           </div>
//         </div>
//       ))
//       ) : null
//   ))}
//     </div>
// )}

//     </div>
//   );
// };

// export default MobileView;

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeToCart } from './Cart/Cart';
import { RootState } from './Store/Store';

interface MobileProduct {
  id: number;
  mobile: string;
  rate: number;
  imagePath: string;
}

const MobileView: React.FC = () => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const n = useSelector((state: RootState) => state.mobile.categories);
  const [loading, setLoading] = useState(true);

  console.log(n)

  useEffect(() => {
    // Simulating data fetching
    const fetchData = async () => {
      // Your actual data fetching logic here
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating a delay
      setLoading(false); // Set loading to false once data is fetched
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  const add = (img: string, price: number, id: number, brand: string) => {
    return {
      img,
      price,
      id,
      brand,
      count: count + 1,
      name: "mobile",
      cartitem: 0,
      check: "",
    };
  };

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-around'>
          {n.map((category) =>
            category.name === 'Mobile'
              ? category.products.map((item: MobileProduct) => (
                  <div key={item.id} className='max-w-xs rounded overflow-hidden shadow-lg m-2 '>
                    <img className='w-full h-32 object-fill' src={item.imagePath} alt="Error Mobile" />
                    <div className='px-4 py-2'>
                      <div className='font-bold text-sm mb-1'>{item.mobile}</div>
                      <p className='text-gray-700 text-xs'>Price: ${item.rate}</p>
                    </div>
                    <div className='px-4 py-2 flex justify-between'>
                      <button
                        className='bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded text-xs'
                        onClick={() => dispatch(addToCart(add(item.imagePath, item.rate, item.id, item.mobile)))}
                      >
                        Add
                      </button>
                      <button
                        className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-xs'
                        onClick={() => dispatch(removeToCart(add(item.imagePath, item.rate, item.id, item.mobile)))}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              : null
          )}
        </div>
      )}
    </div>
  );
};

export default MobileView;

