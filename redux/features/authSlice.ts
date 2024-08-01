import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface IAuthState {
  authState: boolean;
}

// Define the initial state using that type
const initialState: IAuthState = {
  authState: true,
};

export const authSlice = createSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setAuthStateTrue: (state) => {
      state.authState = true;
    },
    setAuthStateFalse: (state) => {
      state.authState = false;
    },
  },
});

export const { setAuthStateTrue, setAuthStateFalse } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth.authState;
export default authSlice.reducer;
