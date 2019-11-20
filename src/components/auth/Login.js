import React, { useState } from 'react';
import { connect } from 'react-redux';

import { setAlert } from '../../actions/alert';
import { login } from '../../actions/auth';
import PropTypes from 'prop-types';
import { Redirect } from '@reach/router';

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
    <div>
      <h1> Login Today</h1>
      <form onSubmit={onSubmitHandler}>
        <input
          onChange={e => handleChange(e)}
          type="email"
          placeholder="Your Email"
          value={email}
          name="email"
          required
        />
        <input
          onChange={e => handleChange(e)}
          type="password"
          placeholder="Your Password"
          value={password}
          name="password"
          minLength={6}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
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
