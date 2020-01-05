import React from 'react';

import Layout5 from '../components/layouts/Layout5';
import SEO from '../hooks/SEO';
import { Section } from '../components/reusableStyles/sections/Sections';

import MailChimpEmailForm1 from '../components/mailchimp/MailChimpEmailForm1';

import { AmazonProductsHOC } from '../components/amazonproducts/AmazonProductHOC';
import { AboutMe } from '../components/home/AboutMe';
import { HeroSection } from '../components/home/HeroSection';
import { ContactUs } from '../components/home/ContactUs';

export default () => {
  console.log('This is the server host', process.env.GATSBY_SERVER_HOST_ROOT);
  return (
    <Layout5 full={true}>
      <SEO title="Fashion Five" description="Fashion Store with Backend" />

      <HeroSection />

      <Section>
        <AmazonProductsHOC department={'amazonproducts'} limit={true} />
      </Section>

      <AboutMe />

      <ContactUs />

      <MailChimpEmailForm1 timeToPopUp={4000} />
    </Layout5>
  );
};
