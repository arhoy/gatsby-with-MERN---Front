import React from 'react';

import SEO from '../hooks/SEO';
import Layout5 from '../components/layouts/Layout5';

import getAllPants from '../hooks/contentful/products/pants/getAllPantsHook';
import Products from '../components/products/Products';

import ProductPageHeader from '../components/products/ProductPageHeader';
import { ProductLayout1 } from '../components/products/ProductContainerStyles/ProductContainerStyle';

const pants = () => {
  const title = 'Fashion Two Pants';
  const description =
    'We got lots of Monnet Pants, please see our amazing deals on Pants';
  return (
    <Layout5>
      <SEO title={title} description={description} />
      <ProductPageHeader title={title} description={description} />

      <ProductLayout1>
        <Products products={getAllPants()} productType="products" />
      </ProductLayout1>
    </Layout5>
  );
};

export default pants;
