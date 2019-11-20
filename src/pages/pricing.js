import React from 'react';
import Layout5 from '../components/layouts/Layout5';
import styled from '@emotion/styled';
import { FaBolt, FaCrown, FaHome, FaCode, FaLeaf } from 'react-icons/fa';

import Pricing from '../components/pricing/Pricing';
import { H2 } from '../components/reusableStyles/typography/Typography';
import FeatureSection from '../components/features/FeatureSection';
import {
  Section,
  SectionGrey,
  Container1200,
} from '../components/reusableStyles/sections/Sections';

import { MarginBottom6 } from '../components/reusableStyles/modular/modularStyles';
import { SimpleNetlifyForm } from '../components/forms/SimpleNetlifyForm';
import Hero from '../components/heros/Hero';
import { DefaultPageContainer } from '../components/layouts/PageContainers';

const StyledH2 = styled(H2)`
  text-align: center;
  padding: 2rem 0;
  font-size: 4.4rem;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    font-size: 3.4rem;
  }
`;

const Bold = styled.span`
  font-weight: bold;
`;

const Italic = styled.span`
  font-style: italic;
`;

const CustomMargin = styled.div`
  margin: 2rem;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    margin: 1rem;
  }
`;

const textSEO = () => (
  <p>
    Your site will be build on a <Bold>Gatsby framework</Bold> and will be
    server rendered and available to Google and search engines. Performance
    optimization incorporated using the PRPL pattern and advanced image
    optimization. SEO meta tags including description and title tags on each
    page.
  </p>
);

const textFast = () => (
  <p>
    Google rewards speed with improved search rankings. Your site is guaranteed
    to be
    <Bold> faster </Bold>
    than any agency developing in Wordpress, Shopify, Drupal or other monolithic
    system. Using a modern approach to web development with best practices and
    leveraging the latest technologies like React, Gatsby and GraphQL. Your site
    is built for the future in mind
  </p>
);

const textHosting = () => (
  <p>
    Unlike many agencies, we offer affordable hostings with all of our sites.
    Starting at <Bold> $10/month </Bold>we will make sure you site is always up
    and running smoothly with no issues. Offering premium support for your site
    after it is built.
  </p>
);

const textCustomization = () => (
  <p>
    100% customizable, custom coded with no bloated unnecessary code or plugins
    that slow your site down. Designed in mind to suit <Italic> your </Italic>
    brand.
  </p>
);

const textGrowth = () => (
  <p>
    After your beautiful new website is done, the journey is not over. Continous
    SEO through fresh updated content, advertising on Google and Facebook, data
    analysis must be done to ensure continual growth of your brand. We offer
    online advertising, data analysis and consulting.
  </p>
);

const pricing = () => {
  return (
    <Layout5 full={true}>
      <StyledH2>My Pricing</StyledH2>

      <Pricing />
      <MarginBottom6 />

      <StyledH2>The Aquasar Advantage</StyledH2>

      <SectionGrey>
        <Container1200>
          <FeatureSection
            heading="SEO Optimized"
            subheading="Built with SEO as a priority"
            text={textSEO()}
            icon={FaCrown()}
            rotate="rotate(15deg)"
            iconSize="10rem"
          />
        </Container1200>
      </SectionGrey>

      <Section>
        <Container1200>
          <FeatureSection
            heading="Hosting"
            subheading="Affordable Hosting"
            text={textHosting()}
            icon={FaHome()}
            rotate="rotate(0deg)"
          />
        </Container1200>
      </Section>

      <SectionGrey>
        <Container1200>
          <FeatureSection
            heading="Blazingly Fast"
            subheading="Google rewards faster sites"
            text={textFast()}
            icon={FaBolt()}
            rotate="rotate(20deg)"
          />
        </Container1200>
      </SectionGrey>
      <Section>
        <Container1200>
          <FeatureSection
            heading="Endless Customization"
            subheading="Completely customized"
            text={textCustomization()}
            icon={FaCode()}
            rotate="rotate(0deg)"
          />
        </Container1200>
      </Section>

      <SectionGrey>
        <Container1200>
          <FeatureSection
            heading="Grow Your Online Presence"
            subheading="Completely customized"
            text={textGrowth()}
            icon={FaLeaf()}
            rotate="rotate(0deg)"
          />
        </Container1200>
      </SectionGrey>

      <Section>
        <DefaultPageContainer>
          <Container1200>
            <CustomMargin>
              <H2>Contact Me</H2>
              <SimpleNetlifyForm />
            </CustomMargin>
          </Container1200>
        </DefaultPageContainer>
      </Section>

      <SectionGrey>
        <Container1200>
          <Hero />
        </Container1200>
      </SectionGrey>
    </Layout5>
  );
};

export default pricing;
