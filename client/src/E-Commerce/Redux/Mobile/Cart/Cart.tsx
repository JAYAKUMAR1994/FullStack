import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Swal from 'sweetalert2';

const showSuccessAlert = (val:string) => {
  Swal.fire({
    icon: 'success',
    title: 'Success!',
    text: `${val} completed successfully.`,
    showClass: {
      popup: 'animate__animated animate__fadeInDown',
      icon: 'animate__animated animate__heartBeat'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp',
      icon: 'animate__animated animate__flipOutX'
    }
  });
};

const showFailedAlert = (val:string) => {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: `${val}!`,
    customClass: {
      popup: 'swal2-small', // Add this class for small size
    },
  });
};

interface CartItem {
  id: number;
  brand: string;
  price: number;
  img: string;
  count: number;
  cartitem: number;
  name:string;
  check:string;
}

interface CartItems {
  mobile: CartItem[];
  tv: CartItem[];
  laptop: CartItem[];
  cycle: CartItem[];
}

interface CartState {
  items: CartItems;
}

const initialState: CartState = {
  items: {
    mobile: [],
    tv: [],
    laptop: [],
    cycle: [],
  },
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      
      const { payload } = action;

      if (payload.name === "mobile") {
        showSuccessAlert('Create');
       
        const data = state.items.mobile.findIndex((val) => val.id === payload.id);
debugger
        if (data === 0) {
          showFailedAlert('Already Exit')
        }
    

        if (data === -1) {
        
          state.items.mobile = [...state.items.mobile, payload];
        } else {
          if (payload.check === "plus") {
            showSuccessAlert('Create');
            state.items.mobile = state.items.mobile.map((item) =>
              payload.id === item.id ? { ...item, count: payload.count, cartitem: payload.cartitem + 1 } : item
            );
          } else if (payload.check === "minus" && payload.cartitem >= 1) {
            showSuccessAlert('Remove');
            state.items.mobile = state.items.mobile.map((item) =>
              payload.id === item.id ? { ...item, count: payload.count, cartitem: payload.cartitem - 1 } : item
            );
          }
        }
      } else if (payload.name === "laptop") {
        showSuccessAlert('Create');

        const data = state.items.laptop.findIndex((val) => val.id === payload.id);

        if (data === 0) {
          showFailedAlert('Already Exit')
        }

        if (data === -1) {
          state.items.laptop = [...state.items.laptop, payload];
        } else {
          if (payload.check === "plus") {
            showSuccessAlert('Create');
            state.items.laptop = state.items.laptop.map((item) =>
              payload.id === item.id ? { ...item, count: payload.count, cartitem: payload.cartitem + 1 } : item
            );
          } else if (payload.check === "minus" && payload.cartitem >= 1) {
            showSuccessAlert('Remove');
            state.items.laptop = state.items.laptop.map((item) =>
              payload.id === item.id ? { ...item, count: payload.count, cartitem: payload.cartitem - 1 } : item
            );
          }
        }
      } else if (payload.name === "tv") {
        showSuccessAlert('Create');

        const data = state.items.tv.findIndex((val) => val.id === payload.id);

        if (data === 0) {
          showFailedAlert('Already Exit')
        }

        if (data === -1) {
          state.items.tv = [...state.items.tv, payload];
        } else {
          if (payload.check === "plus") {
            showSuccessAlert('Create');
            state.items.tv = state.items.tv.map((item) =>
              payload.id === item.id ? { ...item, count: payload.count, cartitem: payload.cartitem + 1 } : item
            );
          } else if (payload.check === "minus" && payload.cartitem >= 1) {
            showSuccessAlert('Remove');
            state.items.tv = state.items.tv.map((item) =>
              payload.id === item.id ? { ...item, count: payload.count, cartitem: payload.cartitem - 1 } : item
            );
          }
        }
      } else if (payload.name === "cycle") {
        showSuccessAlert('Create');

        const data = state.items.cycle.findIndex((val) => val.id === payload.id);

        // if (data === 0) {
        //   showFailedAlert('Already Exit')
        // }

        if (data === -1) {
          state.items.cycle = [...state.items.cycle, payload];
        } else {
          if (payload.check === "plus") {
            showSuccessAlert('Create');
            state.items.cycle = state.items.cycle.map((item) =>
              payload.id === item.id ? { ...item, count: payload.count, cartitem: payload.cartitem + 1 } : item
            );
          } else if (payload.check === "minus" && payload.cartitem >= 1) {
            showSuccessAlert('Remove');
            state.items.cycle = state.items.cycle.map((item) =>
              payload.id === item.id ? { ...item, count: payload.count, cartitem: payload.cartitem - 1 } : item
            );
          }
        }
      }
    },

    removeToCart: (state, action: PayloadAction<CartItem>) => {
      showSuccessAlert('Remove');
      const { payload } = action;

      if (payload.name === "mobile") {
        state.items.mobile = state.items.mobile.filter((item) => item.id !== payload.id);
      } else if (payload.name === "laptop") {
        state.items.laptop = state.items.laptop.filter((item) => item.id !== payload.id);
      } else if (payload.name === "tv") {
        state.items.tv = state.items.tv.filter((item) => item.id !== payload.id);
      } else if (payload.name === "cycle") {
        state.items.cycle = state.items.cycle.filter((item) => item.id !== payload.id);
      }
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeToCart } = cartSlice.actions;
