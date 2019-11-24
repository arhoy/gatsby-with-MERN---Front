import React, { useState } from 'react';
import { connect } from 'react-redux';
import { navigate } from 'gatsby';

import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import { InputStyle1 } from '../reusableStyles/inputs/Input';
import { ButtonStyle2 } from '../reusableStyles/buttons/Button';
import { FormStyle1 } from '../reusableStyles/form/Form';
import { H1 } from '../reusableStyles/typography/Typography';
import { Section } from '../reusableStyles/sections/Sections';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmitHandler = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Password not matching!', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  // redirect if authenticated.
  if (isAuthenticated) return navigate('/app');

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
        <InputStyle1
          onChange={e => handleChange(e)}
          type="password"
          placeholder="Confirm Password"
          value={password2}
          name="password2"
          minLength={6}
          required
        />
        <ButtonStyle2 type="submit" className="btn btn-transparent">
          Register
        </ButtonStyle2>
      </FormStyle1>
    </Section>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(
  mapStateToProps,
  { setAlert, register },
)(Register);
