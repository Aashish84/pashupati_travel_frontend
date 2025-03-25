import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") || false, // Persist token in localStorage
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload); // Save token in localStorage
    },
    logout: (state) => {
      state.token = "";
      localStorage.removeItem("token"); // Remove token on logout
    },
  },
});

export const { setToken, logout } = authSlice.actions;
export default authSlice.reducer;
