import React from 'react';
import { graphql } from 'gatsby';

import Layout5 from '../../components/layouts/Layout5';
import { P, H2 } from '../../components/reusableStyles/typography/Typography';
import { Section } from '../../components/reusableStyles/sections/Sections';

import SEO from '../../hooks/SEO';
import ProductPageHeader from '../../components/products/ProductPageHeader';

import AliceGallery from '../../components/reusableStyles/carousel/AliceGallery';
export const query = graphql`
  {
    imageArray1: allFile(filter: { relativePath: { regex: "/megaMenu/" } }) {
      nodes {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
    imageArray2: allFile(
      filter: { relativePath: { regex: "/carouselArray1/" } }
    ) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  }
`;

const carousel = ({ data }) => {
  const images1 = data.imageArray1.nodes;
  const images2 = data.imageArray2.nodes;

  return (
    <Layout5>
      <SEO
        title="Gatsby Aquasar Carousel Examples"
        description="Carousel examples in a Gatsby Site"
      />
      <Section style={{ padding: '1rem 4rem' }}>
        <ProductPageHeader
          title={`Carousels`}
          description={`Some example Carousels for your next Gatsby Site`}
        />
        <P></P>
      </Section>
      <Section>
        <H2> Carousel #1 </H2>
        <P> Moving Carousal with autoPlay and duration and pause on hover</P>

        <AliceGallery
          gatsbyImageArray
          images={images1}
          autoPlay
          duration={3000}
          buttonsDisabled={true}
          imageHeight={'30rem'}
          maxImageWidth={'30rem'}
        />
      </Section>
      <Section>
        <H2> Carousel #2 </H2>
        <P>
          Fast moving Carousal with autoPlay and duration and no pause on hover
        </P>

        <AliceGallery
          gatsbyImageArray
          images={images1}
          autoPlay
          duration={900}
          stopAutoPlayOnHover={false}
          autoPlayInterval={2000}
          buttonsDisabled={true}
          imageHeight={'30rem'}
          maxImageWidth={'30rem'}
        />
      </Section>
      <Section>
        <H2> Carousel #3 </H2>
        <P>No autoPlay</P>

        <AliceGallery
          gatsbyImageArray
          images={images2}
          buttonsDisabled={true}
          maxImageWidth={'60rem'}
        />
      </Section>

      <Section>
        <H2> Carousel #4 </H2>
        <P>No autoPlay, don't show dots, show buttons</P>
        <AliceGallery
          gatsbyImageArray
          images={images2}
          dotsDisabled={true}
          imageHeight={'80vh'}
        />
      </Section>
    </Layout5>
  );
};

export default carousel;
