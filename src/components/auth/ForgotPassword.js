import React, { useState } from 'react';
import styled from '@emotion/styled';
import { InputStyle1 } from '../reusableStyles/inputs/Input';
import { FormStyle1 } from '../reusableStyles/form/Form';
import { ButtonStyle2 } from '../reusableStyles/buttons/Button';
import { H3 } from '../reusableStyles/typography/Typography';
import { Section } from '../reusableStyles/sections/Sections';
import { FaLock } from 'react-icons/fa';
import NoStyleLink from '../Links/NoStyleLink';

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

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleChange = e => setEmail(e.target.value);

  const onSubmitHandler = async e => {
    e.preventDefault();
    console.log('Your Email', email);
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
            type="email"
            placeholder="Your Email"
            value={email}
            name="email"
            required
          />

          <ButtonStyle2 type="submit">Submit</ButtonStyle2>
          <P>OR</P>
          <P>
            <NoStyleLinkCustom to="/app/register">
              Create a New Account
            </NoStyleLinkCustom>
          </P>
          <P>
            <NoStyleLinkCustom to="/app/login">
              Return to Login
            </NoStyleLinkCustom>
          </P>
        </FormStyle1>
      </Div>
    </Section>
  );
};

export default ForgotPassword;
