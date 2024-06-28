import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Features/Product/ProductSlice"
import newsReducer from '../Features/Newsroom/newsSlices'
import authSliceReducer from "../Features/auth/authSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    auth : authSliceReducer ,

    news: newsReducer

  },
});
