import { createSlice } from "@reduxjs/toolkit";
// import { StoreProduct } from "../../type";

// interface NextState {
//   productData: StoreProduct[];
//   favoriteData: StoreProduct[];
//   allProducts: StoreProduct[];
//   userInfo: null | string;
// }

const initialState = {
  productData: [],
  favoriteData: [],
  allProducts: [],
  userInfo: null,
};

export const nextSlice = createSlice({
    name: "next",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.productData = action.payload;
        },
    },
});

export const { addToCart } = nextSlice.actions;
export default nextSlice.reducer