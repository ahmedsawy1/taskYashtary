import {createSlice} from '@reduxjs/toolkit';
import {
  getProductByIdAction,
  getProductsAction,
} from '../actions/productsActions';

interface IState {
  products: [];
  singleProduct: {};
  loader: boolean;
}

const initialState: IState = {
  products: [],
  singleProduct: {},
  loader: false,
};

export const productsSlice = createSlice({
  name: 'productsSlice',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder.addCase(getProductsAction.fulfilled, (state, action) => {
      state.products = action.payload.products;
      state.loader = false;
    });
    builder.addCase(getProductsAction.pending, (state, action) => {
      state.loader = true;
    });
    builder.addCase(getProductsAction.rejected, (state, action) => {
      state.loader = false;
    });
    builder.addCase(getProductByIdAction.fulfilled, (state, action) => {
      state.singleProduct = action.payload;
      state.loader = false;
    });
    builder.addCase(getProductByIdAction.pending, state => {
      state.loader = true;
    });
    builder.addCase(getProductByIdAction.rejected, state => {
      state.loader = false;
    });
  },
});

export default productsSlice.reducer;
