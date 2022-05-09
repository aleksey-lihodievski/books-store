import React, { useCallback, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';

import Header from 'containers/Header';
import Card from 'components/Card';
import ProductsList from 'components/ProductsList';
import Container from 'components/Container';
import Body from 'components/Body';
import ShopHeader from 'assets/headers/shop-header.jpg';
import {
  fetchCategories,
  fetchProducts,
  setCategory,
} from 'redux/reducers/products';
import { selectCategories, selectProducts } from 'redux/selectors/products';
import { addToCart } from 'redux/reducers/cart';
import { useAppDispatch } from 'hooks/redux';
import { IProduct } from 'typings/entities/products';
import { Categories } from './components/Categories';

const Products: React.FC = () => {
  const dispatch = useAppDispatch();

  const products = useSelector(selectProducts);
  const { filter, filterDirection } = products;

  const categories = useSelector(selectCategories);

  const chipValue = useMemo(
    () => categories.findIndex((category) => category === filter),
    [filter, categories],
  );

  const setFilter = useCallback(
    (taskIdx: number) => {
      dispatch(setCategory(categories[taskIdx]));
    },
    [dispatch, categories],
  );

  const onAddToCart = useCallback(
    (product: IProduct) => {
      dispatch(addToCart(product));
    },
    [dispatch],
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch, filter, filterDirection]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <>
      <Header title='Products' image={ShopHeader} />
      <Body>
        <Container>
          <Categories
            primary
            value={chipValue}
            options={categories}
            onChange={setFilter}
          />
          <ProductsList>
            {products.allProducts.map((product) => (
              <Card key={product.id} onClick={onAddToCart} product={product} />
            ))}
          </ProductsList>
        </Container>
      </Body>
    </>
  );
};

export default React.memo(Products);
