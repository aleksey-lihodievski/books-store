import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Body from 'components/Body';
import Header from 'containers/Header';
import ProductInfo from 'containers/ProductInfo';
import { IProduct } from 'typings/entities/products';
import { getProduct } from 'api/products';

const Product: React.FC = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await getProduct(Number(productId));
      setProduct(response);
    };

    fetchProduct();
  }, [productId]);

  return (
    <>
      <Header />
      <Body>
        <ProductInfo product={product} />
      </Body>
    </>
  );
};

export default React.memo(Product);
