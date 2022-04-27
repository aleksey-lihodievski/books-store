import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProduct, ICartProduct } from 'typings/entities/products';

type IState = {
  usersCart: ICartProduct[];
  loading: boolean;
  error: boolean;
};

const initialState: IState = {
  usersCart: [],
  loading: false,
  error: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const isInCart = state.usersCart.some(
        (product) => product.id === action.payload.id,
      );

      if (!isInCart) {
        state.usersCart.push({ ...action.payload, quantity: 1 });
      } else {
        state.usersCart.map((product) => {
          if (product.id === action.payload.id) product.quantity += 1;
          return product;
        });
      }
    },
  },
});

export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;
