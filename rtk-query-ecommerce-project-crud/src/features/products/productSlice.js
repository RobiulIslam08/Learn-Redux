import {  createSlice } from "@reduxjs/toolkit";


const initialState = {
	products: [],
	isLoading: false,
	error: null
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
 
});

export default productsSlice.reducer;
