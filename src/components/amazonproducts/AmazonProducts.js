import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getAmazonProducts } from '../../actions/amazonproducts';
import AmazonProduct from './AmazonProduct';
import { H2 } from '../reusableStyles/typography/Typography';
import 'react-input-range/lib/css/index.css';

import { ProductLayout1 } from '../products/ProductContainerStyles/ProductContainerStyle';
import {
  InputRangeContainer,
  ActionContainer,
  SelectContainer,
} from './AmazonProductsStyling';

const AmazonProducts = ({
  getAmazonProducts,
  amazonproduct: { amazonproducts, loading },
}) => {
  useEffect(() => {
    getAmazonProducts();
  }, [getAmazonProducts]);

  // select dropdown options
  const options = [
    { label: 'Alphabetical (A-Z)', value: 'name' },
    { label: 'Alphabetical (Z-A)', value: '-name' },
    { label: 'Cost High to Low', value: '-priceValue' },
    { label: 'Cost Low to High', value: 'priceValue' },
    { label: 'Rating High to Low', value: '-rating' },
    { label: 'Rating Low to High', value: 'rating' },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0].value);
  const [price, setPrice] = useState(0);

  const selectOptionHandler = e => {
    setSelectedOption(e.target.value);
    // pass sort option into getAmazonProducts

    getAmazonProducts(e.target.value, price);
  };

  const setPriceHandler = e => {
    setPrice(e.target.value);
    getAmazonProducts(selectedOption, e.target.value);
  };

  if (loading) return <div>Loading...</div>;
  return (
    <>
      <ActionContainer>
        <H2>Amazon Products</H2>
        <SelectContainer>
          <select value={selectedOption} onChange={e => selectOptionHandler(e)}>
            {options.map(o => (
              <option key={o.label} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          <InputRangeContainer>
            <h4> Starting Price ${price} </h4>
            <input
              onChange={e => setPriceHandler(e)}
              type="range"
              min="0"
              max="1000"
              value={price}
            />
          </InputRangeContainer>
        </SelectContainer>
      </ActionContainer>

      <ProductLayout1>
        {amazonproducts &&
          amazonproducts.length > 0 &&
          amazonproducts.map(amazonproduct => (
            <AmazonProduct
              key={amazonproduct._id}
              amazonproduct={amazonproduct}
            />
          ))}
      </ProductLayout1>
    </>
  );
};

AmazonProducts.propTypes = {
  amazonproduct: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  amazonproduct: state.amazonproduct,
});

export default connect(
  mapStateToProps,
  { getAmazonProducts },
)(AmazonProducts);
