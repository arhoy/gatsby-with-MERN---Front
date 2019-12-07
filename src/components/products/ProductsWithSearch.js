import React, { useState } from 'react';
import styled from '@emotion/styled';

import ContentfulProduct from '../ecommerceProducts/ContentfulProduct';
import { ProductLayout1 } from './ProductContainerStyles/ProductContainerStyle';

const ProductInputContainer = styled.div`
  display: flex;
  justify-content: center;
  & input {
    padding: 0.5rem;
    border-radius: 6px;
    outline: none;
    border: 1px solid ${props => props.theme.colors.primary};
  }
`;

const P = styled.p`
  text-align: center;
`;

const ProductsWithSearch = ({ products, productType }) => {
  const [keyword, setKeyword] = useState('');
  const [filtered, setFiltered] = useState(products);

  const inputHandler = e => {
    // update filtered and keyword
    setKeyword(e.target.value);

    const updatedProducts = products.filter(query =>
      query.productName.toLowerCase().includes(e.target.value.toLowerCase()),
    );

    setFiltered(updatedProducts);
  };

  return (
    <>
      <ProductInputContainer>
        <input
          onChange={inputHandler}
          type="text"
          placeholder="Search for Products"
        />
      </ProductInputContainer>
      <ProductLayout1>
        {filtered.map(product => (
          <ContentfulProduct
            key={product.id}
            product={product}
            productType={productType}
          />
        ))}
        {keyword !== '' && filtered.length === 0 && <P>No products found!</P>}
      </ProductLayout1>
    </>
  );
};

export default ProductsWithSearch;
