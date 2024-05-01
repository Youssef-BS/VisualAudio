import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    customer: customerReducer,
    product: productReducer,
    brand: brandReducer,
    pCategory: pCategoryReducer,
    bCategory: bCategoryReducer,
    blogs: blogReducer,
    color: colorReducer,
    enquiry: enquiryReducer,
    upload: uploadReducer,
    coupon: couponReducer,
  },
});
