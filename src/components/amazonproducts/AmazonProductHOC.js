import React from 'react';
import AmazonProducts from './AmazonProducts';
import AmazonProduct from '../amazonproduct/AmazonProduct';

// determines which department to render products from
export const AmazonProductsHOC = ({ department, title }) => {
  return <AmazonProducts department={department} title={title} />;
};

export const AmazonProductHoc = ({ department, title, ...rest }) => {
  return <AmazonProduct {...rest} department={department} title={title} />;
};
