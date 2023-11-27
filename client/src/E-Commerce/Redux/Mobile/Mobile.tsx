// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// // import one from './ECom-Images/one.jpg';
// // import two from './ECom-Images/four.jpg';
// // import three from "./ECom-Images/acertv.jpg";
// // import four from './ECom-Images/Mitv.jpg';
// // import five from './ECom-Images/acerlaptop.jpg';
// // import six from './ECom-Images/lenovo.jpg';
// // import seven from './ECom-Images/gladiator.jpg';
// // import eight from './ECom-Images/wolverine.jpg';



// // Assuming your existing state and types
// interface MobileItem {
//   id: number;
//   brand: string;
//   price: number;
//   img: string;
// }

// interface Category {
//   name: string;
//   products: MobileItem[];
// }

// interface MobileState {
//   categories: Category[];
// }

// // const initialState: MobileState = {
// //   categories: [],
// // };

// const initialState = Category{

// }

// const setImages :any =[]
//   //load
  
//   const fetchData = async () => {
//     try {
//       const response = await fetch('http://localhost:3001/Load_EComm');
//       if (response.ok) {
//         debugger
//         const data = await response.json();
//         setImages({ categories: data.categories });
//       } else {
//         console.error('Error fetching images:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error fetching images:', error);
//     }
//   };


//     fetchData();




// const initialState: MobileState = {
//   mobile: [
//     { id: 1, brand: "Nokia", price: 23000, img: two },
//     { id: 2, brand: "Samsung", price: 20000, img: one }
//   ],
//   tv: [
//     { id: 1, brand: "Acer", price: 23000, img: three },
//     { id: 2, brand: "Mi", price: 20000, img: four }
//   ],
//   laptop: [
//     { id: 1, brand: "Acer", price: 23000, img: five },
//     { id: 2, brand: "Lenovo", price: 20000, img: six }
//   ],
//   cycle: [
//     { id: 1, brand: "Gladiator", price: 23000, img: seven },
//     { id: 2, brand: "Wolverine", price: 20000, img: eight }
//   ]
// };

// const mobileSlice = createSlice({
//   name: "mobileSlice",
//   initialState,
//   reducers: {
//     addToMobile: (state, action: PayloadAction<MobileItem>) => {
//       // Your logic for adding to the mobile array goes here
//     }
//   }
// });

// export default mobileSlice.reducer;
// export const { addToMobile } = mobileSlice.actions;



import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from '../Mobile/Store/homeActions';

// Assuming your existing state and types
interface MobileItem {
  id: number;
  brand: string;
  price: number;
  img: string;
}

interface Category {
  name: string;
  products: MobileItem[];
}

interface MobileState {
  categories: Category[];
}

interface HomeState {
  categories: any[]; // Replace 'any' with the actual type of your categories
  // Other state properties...
}

const initialState: HomeState = {
  categories: [],
  // Other initial state properties...
};

// Define your initial state with an empty array for categories
// const initialState: MobileState = {
//   categories: [],
// };

// Define an async thunk for fetching data
// export const fetchData = createAsyncThunk('mobileSlice/fetchData', async () => {
//   try {
//     const response = await fetch('http://localhost:3001/Load_EComm');
//     if (response.ok) {
//       const data = await response.json();
//       return data.categories;
//     } else {
//       throw new Error('Error fetching images: ' + response.statusText);
//     }
//   } catch (error:any) {
//     throw new Error('Error fetching images: ' + error.message);
//   }
// });

const mobileSlice = createSlice({
  name: "mobileSlice",
  initialState,
  reducers: {
    addToMobile: (state, action: PayloadAction<MobileItem>) => {
      // Your logic for adding to the mobile array goes here
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action: PayloadAction<any[]>) => {
      // Update the categories in the state
      state.categories = action.payload;
    });
  },
  
});

export default mobileSlice.reducer;
export const { addToMobile } = mobileSlice.actions;

