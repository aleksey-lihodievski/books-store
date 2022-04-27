import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Header from 'containers/Header';
import ProductInfo from 'containers/ProductInfo';
import { IProduct } from 'typings/entities/products';
import { getProduct } from 'api/products';
import Body from 'components/Body';

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
    <Body>
      <Header />
      <ProductInfo product={product} />
    </Body>
  );
};

export default React.memo(Product);
