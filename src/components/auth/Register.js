import React, { useState } from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import { Redirect } from '@reach/router';

import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import { InputStyle1 } from '../reusableStyles/inputs/Input';
import { ButtonStyle2 } from '../reusableStyles/buttons/Button';
import { FormStyle1 } from '../reusableStyles/form/Form';
import { H1 } from '../reusableStyles/typography/Typography';
import { Section } from '../reusableStyles/sections/Sections';
import { UnderLineStyleLink } from '../Links/MoreLinkStyles';

const P = styled.p`
  text-align: center;
`;

const ErrorDiv = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
`;

const Register = ({ register, auth: { isAuthenticated, error } }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formData;

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmitHandler = async e => {
    e.preventDefault();
    register({ name, email, password });
  };

  // redirect if authenticated.
  if (isAuthenticated) return <Redirect to="/app/dashboard" noThrow />;

  return (
    <Section>
      <H1> Register Today</H1>
      <FormStyle1 onSubmit={onSubmitHandler}>
        <InputStyle1
          onChange={e => handleChange(e)}
          type="text"
          placeholder="Your Full Name"
          value={name}
          name="name"
          required
        />
        <InputStyle1
          onChange={e => handleChange(e)}
          type="email"
          placeholder="Your Email"
          value={email}
          name="email"
          required
        />
        <InputStyle1
          onChange={e => handleChange(e)}
          type="password"
          placeholder="Your Password"
          value={password}
          name="password"
          minLength={6}
          required
        />

        <ButtonStyle2 type="submit" className="btn btn-transparent">
          Register
        </ButtonStyle2>

        {error && error.includes('Duplicate') && (
          <ErrorDiv> User with this email already exists!</ErrorDiv>
        )}
        {error && !error.includes('Duplicate') && (
          <ErrorDiv>
            {error} Please contact {process.env.EMAIL} for assistance
          </ErrorDiv>
        )}

        <P>
          Already a user?
          <UnderLineStyleLink to="/app/login"> Login </UnderLineStyleLink>
        </P>
      </FormStyle1>
    </Section>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { register },
)(Register);
