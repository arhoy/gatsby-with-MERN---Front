import React from 'react';

import ContentfulProduct from '../ecommerceProducts/ContentfulProduct';
import { ProductLayout1 } from './ProductContainerStyles/ProductContainerStyle';

const Products = ({ products, productType }) => {
  return (
    <>
      <ProductLayout1>
        {products.map(product => (
          <ContentfulProduct
            key={product.id}
            product={product}
            productType={productType}
          />
        ))}
      </ProductLayout1>
    </>
  );
};

export default Products;
