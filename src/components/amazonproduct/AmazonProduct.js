import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getAmazonProduct } from '../../actions/amazonproducts';
import { Div, BlurbContainer } from './AmazonProductStyle';
import {
  PriceStyle,
  ImageContainer,
  ButtonStyleAmazon,
} from '../amazonproducts/AmazonProductStyles';

const AmazonProduct = ({
  getAmazonProduct,
  amazonproduct: { amazonproduct, loading },
  location,
}) => {
  useEffect(() => {
    const index = location.pathname.split('/').length - 1;
    const slug = location.pathname.split('/')[index];
    getAmazonProduct(slug);
  }, [getAmazonProduct]);
  if (loading) {
    return <div>Loading Products</div>;
  }
  return (
    <Div>
      <h3> {amazonproduct.name}</h3>
      <PriceStyle> {amazonproduct.price}</PriceStyle>
      <p> {amazonproduct.ratting}</p>
      <ImageContainer src={amazonproduct.image} />
      <ButtonStyleAmazon>Add to Cart</ButtonStyleAmazon>
      <BlurbContainer>
        <p className="style1"> 100% Customer Satisfaction Guaranteed</p>
        <p className="style2"> Call Anytime to order </p>
        <p className="style1"> 2 Day Flat Shipping Fee, fullfilled by UPS </p>
        <p className="style2">
          Delivering to Europe, Canada, US, Asia and Africa
        </p>
      </BlurbContainer>
    </Div>
  );
};

AmazonProduct.propTypes = {
  amazonproduct: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  amazonproduct: state.amazonproduct,
});

export default connect(
  mapStateToProps,
  { getAmazonProduct },
)(AmazonProduct);
