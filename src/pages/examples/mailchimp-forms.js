import React from 'react';
import MailChimpEmailForm1 from '../../components/mailchimp/MailChimpEmailForm1';
import Layout5 from '../../components/layouts/Layout5';
import { Section } from '../../components/reusableStyles/sections/Sections';
import { H2, P } from '../../components/reusableStyles/typography/Typography';

const mailChimpForms = () => {
  return (
    <>
      <Layout5>
        <Section>
          <H2>Example Mail Chimp Form</H2>
          <P>Mail Chimp for Popup, complete customizable to your liking</P>
        </Section>

        <MailChimpEmailForm1 timeToPopUp={1000} />
      </Layout5>
    </>
  );
};

export default mailChimpForms;
