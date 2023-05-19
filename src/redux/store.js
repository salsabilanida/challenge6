import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./reducers";
import thunk from "redux-thunk";

// Create the store
export default configureStore({
  reducer: rootReducers,
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
