import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import CatchyBanner from '../../components/reusableStyles/banner/CatchyBanner';

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

export const HeroSection = () => {
  const data = useStaticQuery(graphql`
    {
      picture1: file(relativePath: { eq: "woman.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);
  return (
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
  );
};
