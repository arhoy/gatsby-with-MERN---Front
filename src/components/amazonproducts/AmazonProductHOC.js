import React from 'react';
import AmazonProducts from './AmazonProducts';
import AmazonProduct from '../amazonproduct/AmazonProduct';

// determines which department to render products from
export const AmazonProductsHOC = ({ department, title, pagination, limit }) => {
  return (
    <AmazonProducts
      department={department}
      title={title}
      pagination={pagination}
      limit={limit}
    />
  );
};

export const AmazonProductHoc = ({ department, title, ...rest }) => {
  return <AmazonProduct {...rest} department={department} title={title} />;
};
