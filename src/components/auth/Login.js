import React, { useState } from 'react';
import styled from '@emotion/styled';
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
import { UnderLineStyleLink } from '../Links/MoreLinkStyles';

const SubDiv = styled.div`
  text-align: center;
  padding: 2rem;
  margin: 1rem;
  display: flex;
  justify-content: space-between;
  & > * {
    margin: 1rem;
  }
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    flex-direction: column;
    & > * {
      margin: 4px;
    }
  }
`;

const ErrorDiv = styled.div`
  text-align: center;
`;

const Login = ({ login, auth }) => {
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
  if (auth.isAuthenticated) return <Redirect to="/app/dashboard" noThrow />;
  return (
    <Section>
      <H1> Login</H1>
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
        <ErrorDiv>{auth.error && <div> {auth.error} </div>}</ErrorDiv>

        <SubDiv>
          <UnderLineStyleLink to="/app/register"> Register </UnderLineStyleLink>
          <UnderLineStyleLink to="/app/forgotpassword">
            Forgot Password
          </UnderLineStyleLink>
        </SubDiv>
      </FormStyle1>
    </Section>
  );
};

Login.propTypes = {
  setAlert: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { setAlert, login },
)(Login);
