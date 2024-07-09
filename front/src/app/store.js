import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Features/Product/ProductSlice"
import newsReducer from '../Features/Newsroom/newsSlices'
import authSliceReducer from "../Features/auth/authSlice";
import cartSliceReducer from '../Features/cart/cartSlice'
import wshlistSliceReducer from '../Features/wishlist/wishlistSlice'
export const store = configureStore({
  reducer: {
    product: productReducer,
    auth : authSliceReducer ,
    wishlist : wshlistSliceReducer,
    news: newsReducer,
    cart : cartSliceReducer

  },
});
