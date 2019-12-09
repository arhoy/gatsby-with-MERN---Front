import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FaLock } from 'react-icons/fa';
import { connect } from 'react-redux';

import { resetpassword } from '../../actions/auth';

import { InputStyle1 } from '../reusableStyles/inputs/Input';
import { FormStyle1 } from '../reusableStyles/form/Form';
import { ButtonStyle2 } from '../reusableStyles/buttons/Button';
import { H3 } from '../reusableStyles/typography/Typography';
import { Section } from '../reusableStyles/sections/Sections';

import {
  SimpleAlertGreen,
  SimpleAlertRed,
} from '../reusableStyles/alerts/SimpleAlerts';
import { UnderLineStyleLink } from '../Links/MoreLinkStyles';

const Div = styled.div`
  text-align: center;
`;

const StyledFaLock = styled(FaLock)`
  font-size: 5rem;
  color: ${props => props.theme.colors.white};
  margin: 2rem;
`;

const P = styled.p`
  padding: 1rem;
`;

const ResetPassword = ({ resetpassword, location }) => {
  const token = location.search.substring(1);

  const [message, setMessage] = useState(null);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    password: '',
    passwordConfirm: '',
  });

  const { password, passwordConfirm } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    setSuccess(false);
    setMessage('');
  };

  const onSubmitHandler = async e => {
    e.preventDefault();
    setFormData({ ...formData, password: '', passwordConfirm: '' });
    if (password === passwordConfirm) {
      // pass in password and token from email
      const result = await resetpassword(password, token);
      console.log('The result is', result);
      if (result.success) {
        setSuccess(true);
        setMessage('Password Reset Success, Please Login below');
      } else {
        setSuccess(false);
        setMessage(result.error);
      }
    } else {
      setSuccess(false);
      setMessage('Passwords must match!');
    }
  };

  return (
    <Section>
      <Div>
        <FormStyle1 onSubmit={onSubmitHandler}>
          <StyledFaLock />
          <H3>Enter your new secure password</H3>
          <div>{message}</div>
          <div>{success}</div>

          <InputStyle1
            onChange={e => handleChange(e)}
            type="password"
            placeholder="New Password"
            value={password}
            name="password"
            required
          />
          <InputStyle1
            onChange={e => handleChange(e)}
            type="password"
            placeholder="New Password (again)"
            value={passwordConfirm}
            name="passwordConfirm"
            required
          />

          <ButtonStyle2 type="submit">Submit</ButtonStyle2>

          {!message ? null : success ? (
            <SimpleAlertGreen>
              <div>{message}</div>

              <UnderLineStyleLink to="/app/login">
                Please Login Here
              </UnderLineStyleLink>
            </SimpleAlertGreen>
          ) : (
            <SimpleAlertRed>{message}</SimpleAlertRed>
          )}

          <div>Still having trouble with logging in? Contact support</div>
        </FormStyle1>
      </Div>
    </Section>
  );
};

export default connect(
  null,
  { resetpassword },
)(ResetPassword);
