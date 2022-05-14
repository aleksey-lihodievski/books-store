import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

import { IProduct, ICartProduct } from 'typings/entities/products';

export interface ICartState {
  usersCart: ICartProduct[];
  loading: boolean;
  error: boolean;
}

const initialState: ICartState = {
  usersCart: [],
  loading: false,
  error: false,
};

export const buyCart = createAsyncThunk('cart/buyCart', async () => {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state: ICartState, action: PayloadAction<IProduct>) => {
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

    increaseQuantity: (state: ICartState, action: PayloadAction<number>) => {
      state.usersCart.map((product) => {
        if (product.id === action.payload) product.quantity += 1;
        return product;
      });
    },

    decreaseQuantity: (state: ICartState, action: PayloadAction<number>) => {
      state.usersCart.map((product) => {
        if (product.id === action.payload) product.quantity -= 1;
        return product;
      });

      state.usersCart = state.usersCart.filter(
        (product) => product.quantity > 0,
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(buyCart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(buyCart.fulfilled, (state) => {
      state.loading = false;
      state.usersCart = [];
    });
    builder.addCase(buyCart.rejected, (state) => {
      state.error = true;
      state.loading = false;
    });
  },
});

export default cartSlice.reducer;
export const { addToCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
