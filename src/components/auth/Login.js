import React, { useState } from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { Redirect } from '@reach/router';
import { FaKey } from 'react-icons/fa';
import { setAlert } from '../../actions/alert';
import { login } from '../../actions/auth';
import { FormStyle1 } from '../reusableStyles/form/Form';
import { InputStyle1 } from '../reusableStyles/inputs/Input';
import { ButtonStyle2 } from '../reusableStyles/buttons/Button';
import { UnderLineStyleLink } from '../Links/MoreLinkStyles';
import { H3 } from '../reusableStyles/typography/Typography';
import { Section } from '../reusableStyles/sections/Sections';

const StyledIcon = styled(FaKey)`
  font-size: 5rem;
  color: ${props => props.theme.colors.white};
  margin: 2rem;
`;

const ErrorDiv = styled.div`
  text-align: center;
`;

const P = styled.p`
  text-align: center;
`;

const Title = styled(H3)`
  text-transform: uppercase;
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
      <FormStyle1 onSubmit={onSubmitHandler}>
        <StyledIcon />
        <Title>Login</Title>
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

        <P>
          <UnderLineStyleLink to="/app/register">
            Create a New Account
          </UnderLineStyleLink>
        </P>
        <P>
          <UnderLineStyleLink to="/app/forgotpassword">
            Forget Password?
          </UnderLineStyleLink>
        </P>
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
