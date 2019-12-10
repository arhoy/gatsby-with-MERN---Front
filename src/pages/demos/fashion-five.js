import React from 'react';
import styled from '@emotion/styled';
import { FaShippingFast } from 'react-icons/fa';
import ReactTyped from 'react-typed';
import { graphql } from 'gatsby';

import Layout5 from '../../components/layouts/Layout5';
import SEO from '../../hooks/SEO';
import {
  Section,
  Container800,
  SectionGrey,
} from '../../components/reusableStyles/sections/Sections';

import BackgroundImage from 'gatsby-background-image';
import { H2, A } from '../../components/reusableStyles/typography/Typography';
import { SimpleNetlifyForm } from '../../components/forms/SimpleNetlifyForm';

import CatchyBanner from '../../components/reusableStyles/banner/CatchyBanner';
import BasicFeatureSection from '../../components/features/BasicFeatureSection';

import ProductsWithSearch from '../../components/products/ProductsWithSearch';

import AliceGallery from '../../components/reusableStyles/carousel/AliceGallery';

import 'react-alice-carousel/lib/alice-carousel.css';
import NoStyleLink from '../../components/Links/NoStyleLink';
import getAllProductsHook from '../../hooks/contentful/products/allProducts/getAllProductsHook';
import Bootcamps from '../../components/bootcamps/Bootcamps';
import AmazonProducts from '../../components/amazonproducts/AmazonProducts';

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

const HeroBackgroundImageThird = styled(BackgroundImage)`
  width: 33.33vw;
  min-height: 30vh;
  background-size: cover;
  background-position: center;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.4s ease-in;
  &:hover {
    background: ${props => props.theme.colors.blackTransparent};
  }
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    width: 100%;
    min-height: 30vh;
`;

const HeroBackgroundImageHalf = styled(BackgroundImage)`
  width: 50vw;
  min-height: 30vh;
  background-size: cover;
  background-position: center;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.4s ease-in;
  &:hover {
    background: ${props => props.theme.colors.blackTransparent};
  }
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    width: 100%;
    min-height: 30vh;
`;

const CustomHighlight = styled.span`
  padding: 0px 4px;
  border-radius: 4px;

  margin: 0 2px;
  background: ${props => props.theme.colors.primaryTransparent};
`;

const CustomSection = styled(Section)`
  padding-top: 1rem;
  padding-bottom: 1rem;
  background: ${props => props.theme.colors.lightRed};
  color: ${props => props.theme.colors.red};
  font-weight: bold;
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
const TypeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconContainerShipping = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
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

const FullNarrowBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  min-height: 25vh;
  max-height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CustomBannerContainer = styled.div`
  padding: 4rem 1rem;
  width: 100%;
  display: grid;
  justify-content: center;
  grid-gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(max-content, 35rem));
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

      <CustomSection>
        <Container800>
          <TypeContainer>
            <IconContainerShipping>
              <FaShippingFast />
            </IconContainerShipping>

            <ReactTyped
              strings={[
                'Free Shipping on orders over $50',
                'Free Shipping actually on orders over $40',
                'Free Shipping even on orders over $20!',
                'We have free shipping on all orders over $20 ❤',
              ]}
              typeSpeed={40}
              backSpeed={10}
              smartBackspace
              loop
            >
              <span type="text" />
            </ReactTyped>
          </TypeContainer>
        </Container800>
      </CustomSection>

      <FullNarrowBackgroundImage fluid={data.picture3.childImageSharp.fluid}>
        <CustomBannerContainer>
          <CatchyBanner
            color="white"
            title="Red Tag"
            background="rgb(218, 18, 31)"
          >
            <p
              style={{
                fontWeight: 'bold',
                marginTop: '4px',
                color: 'lightgrey',
                textAlign: 'center',
              }}
            >
              Up to 50% of selected brands
            </p>
          </CatchyBanner>
        </CustomBannerContainer>
      </FullNarrowBackgroundImage>

      <Section>
        <CenteredH2>Fashion Two Products</CenteredH2>

        <ProductsWithSearch
          products={getAllProductsHook()}
          productType="products"
        />
      </Section>

      <HerosContainer>
        <HeroBackgroundImageThird fluid={data.picture7.childImageSharp.fluid}>
          <NoStyleLink to="/bags">
            <CatchyBanner
              color="white"
              title="Shop"
              fontSize="4.5rem"
              background="rgba(218, 18, 31,0.4)"
            />
          </NoStyleLink>
        </HeroBackgroundImageThird>
        <HeroBackgroundImageThird fluid={data.picture8.childImageSharp.fluid}>
          <NoStyleLink to="/shoes">
            <CatchyBanner
              color="white"
              title="This"
              fontSize="4.5rem"
              background="rgba(92, 52, 145,0.4)"
            />
          </NoStyleLink>
        </HeroBackgroundImageThird>
        <HeroBackgroundImageHalf fluid={data.picture9.childImageSharp.fluid}>
          <NoStyleLink to="/pants">
            <CatchyBanner
              color="white"
              title="Look"
              fontSize="4.5rem"
              background="rgba(19, 73, 178,0.4)"
            />
          </NoStyleLink>
        </HeroBackgroundImageHalf>
      </HerosContainer>

      <HerosContainer>
        <HeroBackgroundImageHalf fluid={data.picture4.childImageSharp.fluid}>
          <NoStyleLink to="/pants">
            <CatchyBanner
              color="white"
              title="Jeans"
              fontSize="4.5rem"
              background="none"
            />
          </NoStyleLink>
        </HeroBackgroundImageHalf>
        <HeroBackgroundImageThird fluid={data.picture5.childImageSharp.fluid}>
          <NoStyleLink to="/shoes">
            <CatchyBanner
              color="white"
              title="Shoes"
              fontSize="4.5rem"
              background="none"
            />
          </NoStyleLink>
        </HeroBackgroundImageThird>
        <HeroBackgroundImageThird fluid={data.picture6.childImageSharp.fluid}>
          <NoStyleLink to="/bags">
            <CatchyBanner
              color="white"
              title="Bags"
              fontSize="4.5rem"
              background="none"
            />
          </NoStyleLink>
        </HeroBackgroundImageThird>
      </HerosContainer>

      <Section>
        <Container800>
          <CatchyBanner
            color="white"
            title="Designer Brands"
            fontSize="4.5rem"
            background="rgb(218, 18, 31)"
          />
          <AliceGallery
            gatsbyImageArray
            images={data.heroCarousel.nodes}
            dotsDisabled={true}
            autoPlay
            duration={1000}
            autoPlayInterval={1000}
            buttonsDisabled={true}
            stopAutoPlayOnHover={false}
            imageHeight={'50vh'}
          >
            <CatchyBanner
              background="rgb(92, 52, 145)"
              color="white"
              title="Amazing Prices"
            />
          </AliceGallery>
        </Container800>
      </Section>

      <Section>
        <AmazonProducts />
      </Section>

      <Section>
        <Bootcamps />
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
    </Layout5>
  );
};
