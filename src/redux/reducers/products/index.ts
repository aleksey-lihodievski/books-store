import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TFilterDirection } from 'typings/entities/categories/index';
import { getCategories, getFilteredProducts } from 'api/products';
import { TCategory } from 'typings/entities/categories';
import { IProduct } from 'typings/entities/products';
import { RootState } from 'redux/store/index';

type IState = {
  allProducts: Array<IProduct>;
  categories: TCategory[];
  filter: TCategory;
  filterDirection: TFilterDirection;
  loading: boolean;
  error: boolean;
};

const initialState: IState = {
  allProducts: [],
  categories: [],
  filter: 'all',
  filterDirection: 'asc',
  loading: false,
  error: false,
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;

    const { filter: category, filterDirection: direction } = state.products;
    const data = await getFilteredProducts({ category, direction });
    return data;
  },
);

export const fetchCategories = createAsyncThunk(
  'products/fetchCategories',
  async () => {
    const data = await getCategories();
    return data;
  },
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<TCategory>) => {
      state.filter = action.payload;
    },
  },
  extraReducers(builder) {
    // fetch products
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.allProducts = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.error = true;
      state.loading = false;
    });

    // fetch categories
    builder.addCase(fetchCategories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = ['all', ...action.payload];
      state.loading = false;
    });
    builder.addCase(fetchCategories.rejected, (state) => {
      state.error = true;
      state.loading = false;
    });
  },
});

export default productsSlice.reducer;
export const { setCategory } = productsSlice.actions;
