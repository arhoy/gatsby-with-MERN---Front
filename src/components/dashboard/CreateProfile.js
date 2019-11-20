import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from '@emotion/styled';

import { createProfile } from '../../actions/profile';

const Div = styled.div`
  background: ${props => props.theme.colors.lightgrey};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  & > * {
    margin: 1rem;
  }
  & input,
  textarea {
    padding: 0.5rem 1rem;
    outline: none;
    border: none;
  }
`;

const CreateProfile = ({ createProfile }) => {
  const [formData, setFormData] = useState({
    location: '',
    phoneNumber: '',
    about: '',
    interests: '',
  });

  const { location, phoneNumber, about, interests } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData);
  };

  return (
    <Div>
      <h1>Create Your Profile</h1>

      <Form onSubmit={e => onSubmit(e)}>
        <input
          type="text"
          placeholder="Enter your location"
          name="location"
          value={location}
          onChange={e => onChange(e)}
        />

        <input
          type="text"
          placeholder="Enter your phone number"
          name="phoneNumber"
          value={phoneNumber}
          onChange={e => onChange(e)}
        />

        <input
          type="text"
          placeholder="Enter interests seperated by commas"
          name="interests"
          value={interests}
          onChange={e => onChange(e)}
        />

        <div>
          <textarea
            placeholder="A short bio of yourself"
            name="about"
            value={about}
            onChange={e => onChange(e)}
          />
        </div>

        <input type="submit" />
      </Form>
    </Div>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
};

export default connect(
  null,
  { createProfile },
)(CreateProfile);
