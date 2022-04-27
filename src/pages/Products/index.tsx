import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

// import Header from 'containers/Header';
import ChipsArray from 'containers/ChipsArray';
import Card from 'components/Card';
import ProductsList from 'components/ProductsList';
import Container from 'components/Container';
import Body from 'components/Body';
import ShopHeader from 'assets/headers/shop-header.jpg';
import { useAppDispatch } from 'redux/store';
import {
  fetchCategories,
  fetchProducts,
  setCategory,
} from 'redux/reducers/products';
import { selectCategories, selectProducts } from 'redux/selectors/products';
import { addToCart } from 'redux/reducers/cart';
import { TCategory } from 'typings/entities/categories';
import { IProduct } from 'typings/entities/products';
import { getCategories } from 'api/products';
import { Scroller } from './style';

const Header = React.lazy(() => import('containers/Header'));

const Products: React.FC = () => {
  const dispatch = useAppDispatch();

  const products = useSelector(selectProducts);
  const { filter, filterDirection } = products;
  // const filteredProducts = useMemo(() => getFilteredProducts(products, filter, filterDirection), [

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
    // const fetchCategories = async () => {
    //   const data = await getCategories();
    //   setCategories(['all', ...data]);
    // };
    // fetchCategories();

    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <Body>
      <Header title='Products' image={ShopHeader} />
      <Container>
        <Scroller>
          <ChipsArray
            primary
            value={chipValue}
            options={categories}
            onChange={setFilter}
          />
        </Scroller>
        <ProductsList>
          {products.allProducts.map((product) => (
            <Card
              key={product.id}
              onClick={onAddToCart}
              // id={product.id}
              // title={product.title}
              // image={product.image}
              // price={product.price}
              product={product}
            />
          ))}
        </ProductsList>
      </Container>
    </Body>
  );
};

export default React.memo(Products);
