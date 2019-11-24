import React, { useState } from 'react';
import { connect } from 'react-redux';

import { setAlert } from '../../actions/alert';
import { login } from '../../actions/auth';
import PropTypes from 'prop-types';
import { Redirect } from '@reach/router';
import { Section } from '../reusableStyles/sections/Sections';
import { H1 } from '../reusableStyles/typography/Typography';
import { FormStyle1 } from '../reusableStyles/form/Form';
import { InputStyle1 } from '../reusableStyles/inputs/Input';
import { ButtonStyle2 } from '../reusableStyles/buttons/Button';

const Login = ({ setAlert, login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmitHandler = async e => {
    e.preventDefault();
    login(email, password);
  };

  // redirect if authenticated.
  if (isAuthenticated) return <Redirect to="/app/dashboard" noThrow />;
  return (
    <Section>
      <H1> Login Today</H1>
      <FormStyle1 onSubmit={onSubmitHandler}>
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

        <ButtonStyle2 type="submit">Login</ButtonStyle2>
      </FormStyle1>
    </Section>
  );
};

Login.propTypes = {
  setAlert: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(
  mapStateToProps,
  { setAlert, login },
)(Login);
