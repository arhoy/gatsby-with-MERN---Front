import React from 'react';

import Layout5 from '../../components/layouts/Layout5';
import { P, A } from '../../components/reusableStyles/typography/Typography';
import { Section } from '../../components/reusableStyles/sections/Sections';

import SEO from '../../hooks/SEO';
import ProductPageHeader from '../../components/products/ProductPageHeader';
import Map1 from '../../components/mapbox/Map1';

const mapboxExamples = () => {
  return (
    <Layout5>
      <SEO
        title="Gatsby Mapbox Examples"
        description="Using Gatsby Mapbox Demos"
      />
      <Section style={{ padding: '1rem 4rem' }}>
        <ProductPageHeader
          title={`Mapbox`}
          description={`Add Maps to your Gatsby site with mapbox`}
        />
        <P>
          There is an amazing gallery of Mapbox maps to choose from that I can
          integrate to you site found on the{' '}
          <A href="https://www.mapbox.com/gallery/">Mapbox site Gallery</A>
        </P>
      </Section>

      <Section>
        <Map1
          title={`Simple Mapbox`}
          mapStyle="mapbox://styles/arhoy/ck2ktklfm3o8b1co185ptfskc"
          width="90rem"
          height="60rem"
        />
      </Section>
    </Layout5>
  );
};

export default mapboxExamples;
