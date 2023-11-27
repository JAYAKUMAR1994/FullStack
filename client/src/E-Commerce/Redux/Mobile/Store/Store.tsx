import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import mobileReducer from "../Mobile";
import cartReducer from "../Cart/Cart";
import homeReducer from '../Home/Home';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: {
    mobile: mobileReducer,
    cart: cartReducer,
    home: homeReducer,
  },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;
