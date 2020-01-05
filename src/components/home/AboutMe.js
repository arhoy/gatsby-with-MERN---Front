import React from 'react';
import styled from '@emotion/styled';
import {
  SectionGrey,
  Container800,
  Section,
} from '../reusableStyles/sections/Sections';
import FeatureSection from '../features/BasicFeatureSection';
import { A } from '../reusableStyles/typography/Typography';

const CustomHighlight = styled.span`
  padding: 0px 4px;
  border-radius: 4px;

  margin: 0 2px;
  background: ${props => props.theme.colors.primaryTransparent};
`;

const CustomHighlightPrimary = styled(CustomHighlight)`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
`;

const P = styled.p`
  margin: 1.5rem 0rem;
  font-family: Poppins;
  font-size: 1.7rem;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    text-align: center;
    margin: 3rem 0rem;
  }
`;

const whyFasion = () => (
  <>
    <P>
      <strong>FashionFive</strong> a blazingly fast Ecommerce platform powered
      by
    </P>
    <P>
      <CustomHighlight> Gatsby </CustomHighlight> +
      <CustomHighlight> Contentful </CustomHighlight> +
      <CustomHighlight> Snipcart </CustomHighlight> +
      <CustomHighlightPrimary> Node Custom Backend </CustomHighlightPrimary>
    </P>
    <P>
      Faster and more SEO friendy than any frontend WordPress or Shopify site
      created by the vast majority of web design agencies and at a fraction of
      the cost.
    </P>
    <P>
      What is a Node Custom Backend? This website has a backend built on top of
      Mongo Db Atlas. Here we are able to see the closest stores depending on
      the users location. Users will be able to add and edit product reviews
      which other users can like. Users can create profiles and edit their
      information. All this information will be collected and stored in a custom
      backend database.
    </P>
  </>
);

const aboutMe = () => (
  <>
    <P>
      My name is <strong>Alex Quasar</strong>. I am professional full stack web
      developer and digital ads consultant. I build websites for local
      businesses and work with companies small and large using the latest and
      greatest technoligies. These include:
    </P>
    <P>
      <CustomHighlight> JAM Stack </CustomHighlight> &
      <CustomHighlight> MERN Stack </CustomHighlight> &
      <CustomHighlight> Gatsby </CustomHighlight> &
      <CustomHighlight> Contentful </CustomHighlight>
    </P>
    <P>
      You can read more on my about page:{' '}
      <A href="https://aquasar.io/about/">here</A>
    </P>
  </>
);

const pricing = () => (
  <P>
    What platform I use to develop a custom site for a client depends on a
    individual case by case base on a wide variety of factors such as budget,
    inventory, transaction cost and client preference. For more information on
    pricing, please check out my pricing page:{' '}
    <A href="https://aquasar.io/pricing/">here</A>
  </P>
);

export const AboutMe = () => {
  return (
    <div>
      <SectionGrey>
        <Container800>
          <FeatureSection heading="Why FashionFive" text={whyFasion()} />
        </Container800>
      </SectionGrey>
      <Section>
        <Container800>
          <FeatureSection heading="About Me" text={aboutMe()} />
        </Container800>
      </Section>

      <SectionGrey>
        <Container800>
          <FeatureSection heading="Pricing" text={pricing()} />
        </Container800>
      </SectionGrey>
    </div>
  );
};
