import React, { useState } from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';

import { InputStyle1 } from '../reusableStyles/inputs/Input';
import { FormStyle1 } from '../reusableStyles/form/Form';
import { ButtonStyle2 } from '../reusableStyles/buttons/Button';
import { H3 } from '../reusableStyles/typography/Typography';
import { Section } from '../reusableStyles/sections/Sections';
import { FaLock } from 'react-icons/fa';
import NoStyleLink from '../Links/NoStyleLink';
import { resetPassword } from '../../actions/auth';
import {
  SimpleAlertGreen,
  SimpleAlertRed,
} from '../reusableStyles/alerts/SimpleAlerts';

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

const NoStyleLinkCustom = styled(NoStyleLink)`
  font-weight: bold;
  & :hover {
    text-decoration: underline;
  }
`;

const ResetPassword = ({ resetPassword }) => {
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = e => {
    setEmail(e.target.value);
    setSuccess(false);
    setMessage('');
  };

  const onSubmitHandler = async e => {
    e.preventDefault();

    const result = await resetPassword(email);
    if (result.success) {
      setSuccess(true);
      setMessage(result.data);
    } else {
      setMessage(result.error);
      setSuccess(false);
    }
  };

  return (
    <Section>
      <Div>
        <FormStyle1 onSubmit={onSubmitHandler}>
          <StyledFaLock />
          <H3>Trouble Logging In?</H3>
          <P>
            Enter your email and we'll send you a link to get back into your
            account.
          </P>
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
            <SimpleAlertGreen>{message}</SimpleAlertGreen>
          ) : (
            <SimpleAlertRed>{message}</SimpleAlertRed>
          )}

          <P>Still having trouble with logging in? Contact support</P>
        </FormStyle1>
      </Div>
    </Section>
  );
};

export default connect(
  null,
  { resetPassword },
)(ResetPassword);
