import React from 'react';

import Container from 'components/Container';
import Button from 'components/Button';
import { ImageSkeleton, Layout, SkeletonDescription, TextLine } from './styled';

const ProductInfoSkeleton: React.FC = () => {
  return (
    <Container>
      <Layout>
        <ImageSkeleton />
        <div>
          <TextLine main length={400} />
          <TextLine secondary length={50} />

          <SkeletonDescription>
            {Array(4)
              .fill(null)
              .map((_, idx) => (
                <TextLine key={idx} />
              ))}
            <TextLine length={200} />
          </SkeletonDescription>

          <div>
            <Button>
              {/* <TextLine /> */}
              Add to cart
            </Button>
          </div>
        </div>
      </Layout>
    </Container>
  );
};

export default React.memo(ProductInfoSkeleton);
