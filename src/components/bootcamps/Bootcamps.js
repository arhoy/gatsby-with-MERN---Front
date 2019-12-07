import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getBootcamps } from '../../actions/bootcamps';
import Bootcamp from './Bootcamp';
import { H2 } from '../reusableStyles/typography/Typography';

const Div = styled.div`
  & select {
    padding: 1rem;
    border-radius: 0.5rem;
    margin: 1rem 0;
  }
`;

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

  const selectOptionHandler = e => {
    setSelectedOption(e.target.value);
    // pass sort option into getBootcamps
    const sort = e.target.value;
    getBootcamps(sort);
  };

  if (loading) return <div>Loading...</div>;
  return (
    <Div>
      <H2>Tech Bootcamps</H2>
      <select value={selectedOption} onChange={e => selectOptionHandler(e)}>
        {options.map(o => (
          <option value={o.value}>{o.label}</option>
        ))}
      </select>
      {bootcamps.length > 0 &&
        bootcamps.map(bootcamp => (
          <Bootcamp key={bootcamp.id} bootcamp={bootcamp} />
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
