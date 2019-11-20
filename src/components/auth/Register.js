import React, { useState } from 'react';
import { connect } from 'react-redux';
import { navigate } from 'gatsby';

import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

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
    <div>
      <h1> Register Today</h1>
      <form onSubmit={onSubmitHandler}>
        <input
          onChange={e => handleChange(e)}
          type="text"
          placeholder="Your Full Name"
          value={name}
          name="name"
          required
        />
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
        <input
          onChange={e => handleChange(e)}
          type="password"
          placeholder="Confirm Password"
          value={password2}
          name="password2"
          minLength={6}
          required
        />
        <button type="submit" className="btn btn-transparent">
          Register
        </button>
      </form>
    </div>
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
