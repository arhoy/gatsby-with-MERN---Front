import React from 'react';
import {
  Div,
  ImageContainer,
  ButtonStyleAmazon,
  PriceStyle,
} from './AmazonProductStyles';

const AmazonProduct = ({ amazonproduct }) => {
  return (
    <Div>
      <h3> {amazonproduct.name}</h3>
      <PriceStyle> {amazonproduct.price}</PriceStyle>
      <p> {amazonproduct.ratting}</p>
      <ImageContainer src={amazonproduct.image} />
      <ButtonStyleAmazon>Learn More</ButtonStyleAmazon>
      <pre>{JSON.stringify(amazonproduct, null, 2)}</pre>
    </Div>
  );
};
export default AmazonProduct;
