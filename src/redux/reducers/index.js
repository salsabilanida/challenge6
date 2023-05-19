import { combineReducers } from "@reduxjs/toolkit";
import authReducers from "./authReducers";

// We will have some reducers here
export default combineReducers({
  auth: authReducers,
});