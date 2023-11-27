import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HomeState {
  islogin: boolean;
  name: string;
}

const initialState: HomeState = {
  islogin: false,
  name: "",
};

const homeSlice = createSlice({
  name: "homeSlice",
  initialState,
  reducers: {
    updateHome: (state, action: PayloadAction<{ a: string; b: boolean }>) => {
      state.islogin = action.payload.b;
      state.name = action.payload.a;
    },
  },
});

export default homeSlice.reducer;
export const { updateHome } = homeSlice.actions;
