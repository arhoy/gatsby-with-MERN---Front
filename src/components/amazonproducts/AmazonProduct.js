import React from 'react';

import {
  Div,
  ImageContainer,
  ButtonStyleAmazon,
  PriceStyle,
} from './AmazonProductStyles';
import NoStyleLink from '../Links/NoStyleLink';

const AmazonProduct = ({ amazonproduct }) => {
  return (
    <NoStyleLink to={`/app/amazonproducts/${amazonproduct.slug}`}>
      <Div>
        <h3> {amazonproduct.name}</h3>
        <PriceStyle> {amazonproduct.price}</PriceStyle>
        <p> {amazonproduct.ratting}</p>
        <ImageContainer src={amazonproduct.image} />
        <ButtonStyleAmazon>Learn More</ButtonStyleAmazon>
        <pre>{JSON.stringify(amazonproduct, null, 2)}</pre>
      </Div>
    </NoStyleLink>
  );
};
export default AmazonProduct;
