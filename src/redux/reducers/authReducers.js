import { createSlice } from "@reduxjs/toolkit";
import {login2} from "../actions/auth";

const initialState = {
  token: localStorage.getItem("token") || null,
  isLoggedIn: !!localStorage.getItem("token"),
  user: null,
};

const authSlicer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      if (action.payload) {
        localStorage.setItem("token", action.payload);
      } else {
        localStorage.removeItem("token");
      }

      state.token = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: builder => {
      builder
        .addCase(login2.pending, (state, action) => {
          console.log("loading");
        })
        .addCase(login2.fulfilled, (state, action) => {
          state.isLoggedIn = action.payload;
        })
        .addCase(login2.rejected, (state, action) => {
          console.log("error", action);
        })
    },
});

export const { setToken, setIsLoggedIn, setUser } = authSlicer.actions;

export default authSlicer.reducer;
