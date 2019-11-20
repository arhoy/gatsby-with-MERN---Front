import React from 'react';
import styled from '@emotion/styled';

import NoStyleLink from '../Links/NoStyleLink';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  list-style: none;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    padding: 1rem 0;
    font-size: 1.5rem;
  }
`;

const CustomLink = styled(NoStyleLink)``;

const ProductSearchPreview = ({ hit }) => {
  if (hit) {
    return (
      <Container>
        <CustomLink to={`/products/${hit.productSlug}`}>
          <h4>{hit.productName}</h4>
        </CustomLink>
      </Container>
    );
  } else {
    return null;
  }
};

export default ProductSearchPreview;
