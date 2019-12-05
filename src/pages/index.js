import React from 'react';
import styled from '@emotion/styled';

import { graphql } from 'gatsby';

import Layout5 from '../components/layouts/Layout5';
import SEO from '../hooks/SEO';
import {
  Section,
  Container800,
  SectionGrey,
} from '../components/reusableStyles/sections/Sections';

import BackgroundImage from 'gatsby-background-image';
import { H2, A } from '../components/reusableStyles/typography/Typography';
import { SimpleNetlifyForm } from '../components/forms/SimpleNetlifyForm';

import CatchyBanner from '../components/reusableStyles/banner/CatchyBanner';
import BasicFeatureSection from '../components/features/BasicFeatureSection';

import { ProductLayout1 } from '../components/products/ProductContainerStyles/ProductContainerStyle';
import Products from '../components/products/Products';

import getAllBagsHook from '../hooks/contentful/products/bags/getAllBagsHook';

import MailChimpEmailForm1 from '../components/mailchimp/MailChimpEmailForm1';

import Insta from '../components/Insta';

import { getLocalStorage } from '../utils/localStorage';

const P = styled.p`
  margin: 1.5rem 0rem;
  font-family: Poppins;
  font-size: 1.7rem;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    text-align: center;
    margin: 3rem 0rem;
  }
`;

const HeroBackgroundImage = styled(BackgroundImage)`
  width: 100vw;
  height: 92vh;
  background-size: cover;
  background-position: top;
  display: flex;
  justify-content: stretch;
  align-items: center;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    width: 100%;
    height: 50vh;

 
    align-items:flex-start;
    
`;

const CustomHighlight = styled.span`
  padding: 0px 4px;
  border-radius: 4px;

  margin: 0 2px;
  background: ${props => props.theme.colors.primaryTransparent};
`;

const CenteredH2 = styled(H2)`
  text-align: center;
`;

const HerosContainer = styled.div`
  display: flex;

  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    flex-direction: column;
  }
`;

const HeroCatchyDiv = styled.div`
  display: flex;
  flex-direction: column;
  & > * {
    margin: 1rem 0;
  }
  align-items: flex-start;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    display: none;
  }
`;

const StyledItalicSpan2 = styled.span`
  color: ${props => props.theme.colors.red};
  font-size: 2rem;
  font-style: italic;
`;

const whyFasion = () => (
  <>
    <P>
      <strong>FashionTwo</strong> a blazingly fast Ecommerce platform powered by
    </P>
    <P>
      <CustomHighlight> Gatsby </CustomHighlight> +
      <CustomHighlight> Contentful </CustomHighlight> +
      <CustomHighlight> Snipcart </CustomHighlight>
    </P>
    <P>
      Faster and more SEO friendy than any frontend WordPress or Shopify site
      created by the vast majority of web design agencies and at a fraction of
      the cost.
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

export const query = graphql`
  {
    picture1: file(relativePath: { eq: "woman.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    picture2: file(relativePath: { eq: "man.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    picture3: file(relativePath: { eq: "purple-blob.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    picture4: file(relativePath: { eq: "jeans.JPG" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    picture5: file(relativePath: { eq: "runningshoes.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    picture6: file(relativePath: { eq: "jeans_3.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    picture7: file(relativePath: { eq: "woman2.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    picture8: file(relativePath: { eq: "woman4.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    picture9: file(relativePath: { eq: "man2.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    picture10: file(relativePath: { eq: "man2.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    heroCarousel: allFile(
      filter: { relativePath: { regex: "/carouselArray1/" } }
    ) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  }
`;

export default ({ data }) => {
  return (
    <Layout5 full={true}>
      <SEO title="Fashion two" description="Sample Fashion Store" />
      <HerosContainer>
        <HeroBackgroundImage fluid={data.picture1.childImageSharp.fluid}>
          <HeroCatchyDiv>
            <CatchyBanner
              background="rgba(218, 18, 31,0.4)"
              color="white"
              title="Designer Brands"
            />
            <CatchyBanner
              background="rgba(92, 52, 145,0.4)"
              color="white"
              title="Stunning Prices"
            />
            <CatchyBanner
              background="rgba(19, 73, 178,0.4)"
              color="white"
              title="Shop Now"
            />
          </HeroCatchyDiv>
        </HeroBackgroundImage>
      </HerosContainer>

      <Section>
        <CenteredH2>
          Fashion Bags <StyledItalicSpan2>Trending</StyledItalicSpan2>
        </CenteredH2>
        <ProductLayout1>
          <Products products={getAllBagsHook()} productType="products" />
        </ProductLayout1>
      </Section>

      <SectionGrey>
        <Container800>
          <BasicFeatureSection heading="Why FashionTwo" text={whyFasion()} />
        </Container800>
      </SectionGrey>
      <Section>
        <Container800>
          <BasicFeatureSection heading="About Me" text={aboutMe()} />
        </Container800>
      </Section>

      <SectionGrey>
        <Container800>
          <BasicFeatureSection heading="Pricing" text={pricing()} />
        </Container800>
      </SectionGrey>

      <Section>
        <Container800>
          <H2>Contact US</H2>
          <SimpleNetlifyForm />
        </Container800>
      </Section>
      <SectionGrey>
        <Insta limit={2} />
      </SectionGrey>
      <MailChimpEmailForm1 timeToPopUp={4000} />
    </Layout5>
  );
};
