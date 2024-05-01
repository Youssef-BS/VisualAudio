import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthProduct from "./productServices";
const getUserfromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;
const initialState = {
  Product: getUserfromLocalStorage,
  orderbyuser:[],
  orders: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};


export const GetAllProductMarket = createAsyncThunk(
    "product/get-all-Product-market",
    async(thunkAPI) => {
        try{ 
        return await AuthProduct.GetAllProductMarket(market_id)
    }catch(error){
    return thunkAPI.rejectWithValue(error)

}}
)
export const GetProductById = createAsyncThunk(
  "product/get-Product",
  async (thunkAPI) => {
    try {
      return await AuthProduct.GetProductById(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (buildeer) => {
    buildeer
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.message = "success";
      })
      .addCase(login.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
      
      .addCase(getOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.orders = action.payload;
        state.message = "success";
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
      .addCase(getOrderByUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrderByUser.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.orderbyuser = action.payload;
        state.message = "success";
      })
      .addCase(getOrderByUser.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      });
  },
});

export default authSlice.reducer;
