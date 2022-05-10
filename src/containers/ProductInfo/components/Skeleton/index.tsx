import React from 'react';

import Container from 'components/Container';
import { ImageSkeleton } from './ImageSkeleton';
import { SkeletonDescription } from './SkeletonDescription';
import { TextLine } from './TextLine';
import { ProductText } from '../ProductText';
import { Layout } from '../Layout';

const ProductInfoSkeleton: React.FC = () => {
  return (
    <Container>
      <Layout>
        <ImageSkeleton />
        <ProductText>
          <TextLine main length={400} />
          <TextLine secondary length={50} />

          <SkeletonDescription>
            <TextLine />
            <TextLine />
            <TextLine />
            <TextLine />
            <TextLine length={200} />
          </SkeletonDescription>
        </ProductText>
      </Layout>
    </Container>
  );
};

export default React.memo(ProductInfoSkeleton);
