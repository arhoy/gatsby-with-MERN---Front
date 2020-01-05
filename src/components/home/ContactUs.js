import React from 'react';
import { Section, Container800 } from '../reusableStyles/sections/Sections';
import { SimpleNetlifyForm } from '../forms/SimpleNetlifyForm';
import { H2 } from '../reusableStyles/typography/Typography';

export const ContactUs = () => {
  return (
    <Section>
      <Container800>
        <H2>Contact US</H2>
        <SimpleNetlifyForm />
      </Container800>
    </Section>
  );
};
