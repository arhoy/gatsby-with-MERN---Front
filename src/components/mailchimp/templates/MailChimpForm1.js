// used as templates refer to MailChimpEmailForm1 for full use

import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import addToMailchimp from 'gatsby-plugin-mailchimp';

import { InputStyle1 } from '../../reusableStyles/inputs/Input';

import {
  SimpleAlertRed,
  SimpleAlertGreen,
} from '../../reusableStyles/alerts/SimpleAlerts';
import {
  Button1,
  Blurb,
  StyledH2,
  SubContainer,
  Closed,
  StyledFormTemplate1Purple,
} from '../form-styles/StyledForms';

const MailChimpForm1 = ({ timeToPopUp }) => {
  const [email, setEmail] = useState('');
  const [showForm, setShowForm] = useState(true);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      // sets local storage
    }, timeToPopUp);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    const result = await addToMailchimp(email);
    if (result.result === 'error') {
      setError(true);
      // reset so message is not up for long
      setTimeout(() => {
        setError(false);
      }, 2000);
    } else {
      setSuccess(true);
      setTimeout(() => {
        setShowForm(false);
      }, 5000);
    }
  };

  const closePopUp = () => {
    setShowForm(false);
  };

  const Container = styled.div`
    position: fixed;
    background: ${props => props.theme.colors.blackTransparent};
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    z-index: 11;
  `;

  if (showForm) {
    return (
      <>
        <Container onClick={closePopUp}></Container>
        <StyledFormTemplate1Purple onSubmit={handleSubmit}>
          <Closed onClick={closePopUp} />
          <StyledH2>
            {success ? `Submission Success!` : `Subscribe Now and Save!`}
          </StyledH2>
          <Blurb>
            Get the latest deals straight to your inbox, never miss a sale again
          </Blurb>

          <SubContainer>
            <InputStyle1
              autoFocus={true}
              type="email"
              placeholder="Your Email"
              onChange={event => setEmail(event.target.value)}
              value={email}
            />

            <Button1 type="submit">Submit</Button1>
          </SubContainer>
          {error && (
            <SimpleAlertRed>Form Submission was not successful</SimpleAlertRed>
          )}
          {success && (
            <SimpleAlertGreen>
              Thank you for subscribing! Sweet deals are coming to your inbox
            </SimpleAlertGreen>
          )}
        </StyledFormTemplate1Purple>
      </>
    );
  } else {
    return null;
  }
};

export default MailChimpForm1;
