import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getAmazonProducts } from '../../actions/amazonproducts';
import AmazonProduct from './AmazonProduct';
import { H2 } from '../reusableStyles/typography/Typography';

import { ProductLayout1 } from '../products/ProductContainerStyles/ProductContainerStyle';
import {
  InputRangeContainer,
  ActionContainer,
  SelectContainer,
} from './AmazonProductsStyling';
import { ButtonStyle2 } from '../reusableStyles/buttons/Button';

const AmazonProducts = ({
  getAmazonProducts,
  amazonproduct: {
    amazonproducts,
    amazontools,
    amazonelectronics,
    amazonautomotive,
    amazonhomeanddecore,
    loading,
  },
  department,
  title,
  pagination,
}) => {
  useEffect(() => {
    getAmazonProducts(department);
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
  const [limit, setLimit] = useState(25);
  const [price, setPrice] = useState(0);

  const selectOptionHandler = e => {
    setSelectedOption(e.target.value);
    // pass sort option into getAmazonProducts

    getAmazonProducts(department, e.target.value, price);
  };

  const setPriceHandler = e => {
    setPrice(e.target.value);
    getAmazonProducts(department, selectedOption, e.target.value);
  };

  const setLimitHandler = e => {
    setLimit(prevLimit => prevLimit + 25);
    getAmazonProducts(department, selectedOption, price, 1, limit);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <ActionContainer>
        <H2>Amazon {title || 'Products'}</H2>
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

      {department === 'amazonproducts' && (
        <>
          <ProductLayout1>
            {amazonproducts.data &&
              amazonproducts.data.length > 0 &&
              amazonproducts.data.map(amazonproduct => (
                <AmazonProduct
                  key={amazonproduct._id}
                  amazonproduct={amazonproduct}
                  department={department}
                />
              ))}
          </ProductLayout1>
          {limit ? (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ButtonStyle2 onClick={setLimitHandler}>View More</ButtonStyle2>
            </div>
          ) : null}
        </>
      )}

      {department === 'amazon-tools' && (
        <>
          <ProductLayout1>
            {amazontools.data &&
              amazontools.data.length > 0 &&
              amazontools.data.map(amazonproduct => (
                <AmazonProduct
                  key={amazonproduct._id}
                  amazonproduct={amazonproduct}
                  department={department}
                />
              ))}
          </ProductLayout1>
          {limit ? (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ButtonStyle2 onClick={setLimitHandler}>View More</ButtonStyle2>
            </div>
          ) : null}
        </>
      )}
      {department === 'amazon-electronics' && (
        <>
          <ProductLayout1>
            {amazonelectronics.data &&
              amazonelectronics.data.length > 0 &&
              amazonelectronics.data.map(amazonproduct => (
                <AmazonProduct
                  key={amazonproduct._id}
                  amazonproduct={amazonproduct}
                  department={department}
                />
              ))}
          </ProductLayout1>
          {limit ? (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ButtonStyle2 onClick={setLimitHandler}>View More</ButtonStyle2>
            </div>
          ) : null}
        </>
      )}
      {department === 'amazon-automotive' && (
        <>
          <ProductLayout1>
            {amazonautomotive.data &&
              amazonautomotive.data.length > 0 &&
              amazonautomotive.data.map(amazonproduct => (
                <AmazonProduct
                  key={amazonproduct._id}
                  amazonproduct={amazonproduct}
                  department={department}
                />
              ))}
          </ProductLayout1>
          {limit ? (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ButtonStyle2 onClick={setLimitHandler}>View More</ButtonStyle2>
            </div>
          ) : null}
        </>
      )}
      {department === 'amazon-home-and-decore' && (
        <>
          <ProductLayout1>
            {amazonhomeanddecore.data &&
              amazonhomeanddecore.data.length > 0 &&
              amazonhomeanddecore.data.map(amazonproduct => (
                <AmazonProduct
                  key={amazonproduct._id}
                  amazonproduct={amazonproduct}
                  department={department}
                />
              ))}
          </ProductLayout1>
          {limit ? (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ButtonStyle2 onClick={setLimitHandler}>View More</ButtonStyle2>
            </div>
          ) : null}
        </>
      )}
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
