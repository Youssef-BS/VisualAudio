import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Features/Product/ProductSlice"
import newsReducer from '../Features/Newsroom/newsSlices'

export const store = configureStore({
  reducer: {
    product: productReducer,
    news: newsReducer

  },
});
