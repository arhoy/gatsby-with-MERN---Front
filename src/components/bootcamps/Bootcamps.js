import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getBootcamps } from '../../actions/bootcamps';
import Bootcamp from './Bootcamp';
import { H2 } from '../reusableStyles/typography/Typography';
import 'react-input-range/lib/css/index.css';

const Div = styled.div`
  & select {
    padding: 1rem;
    border-radius: 0.5rem;
    margin: 1rem 0;
  }
`;

const SelectContainer = styled.div``;

const InputRangeContainer = styled.div``;

const Bootcamps = ({ getBootcamps, bootcamp: { bootcamps, loading } }) => {
  useEffect(() => {
    getBootcamps();
  }, [getBootcamps]);

  // select dropdown options
  const options = [
    { label: 'Alphabetical (A-Z)', value: 'name' },
    { label: 'Alphabetical (Z-A)', value: '-name' },
    { label: 'Cost High to Low', value: '-averageCost' },
    { label: 'Cost Low to High', value: 'averageCost' },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0].value);
  const [price, setPrice] = useState(500);

  const selectOptionHandler = e => {
    setSelectedOption(e.target.value);
    // pass sort option into getBootcamps

    getBootcamps(e.target.value, price);
  };

  const setPriceHandler = e => {
    setPrice(e.target.value);
    getBootcamps(selectedOption, e.target.value);
  };

  if (loading) return <div>Loading...</div>;
  return (
    <Div>
      <H2>Tech Bootcamps</H2>
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
            max="20000"
            value={price}
          />
        </InputRangeContainer>
      </SelectContainer>

      {bootcamps.length > 0 &&
        bootcamps.map(bootcamp => (
          <Bootcamp key={bootcamp._id} bootcamp={bootcamp} />
        ))}
    </Div>
  );
};

Bootcamps.propTypes = {
  bootcamp: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  bootcamp: state.bootcamp,
});

export default connect(
  mapStateToProps,
  { getBootcamps },
)(Bootcamps);
