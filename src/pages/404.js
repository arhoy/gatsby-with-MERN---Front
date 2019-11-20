import React from 'react';
import { FaPlug } from 'react-icons/fa';

import Layout5 from '../components/layouts/Layout5';
import SEO from '../hooks/SEO';
import styled from '@emotion/styled';
import { H1, P } from '../components/reusableStyles/typography/Typography';
import {
  Container1200,
  Section,
} from '../components/reusableStyles/sections/Sections';

const StyledH1 = styled(H1)`
  text-align: center;
`;

const Container = styled(Container1200)`
  text-align: center;
`;

const StyledIcon = styled(FaPlug)`
  transform: rotate(45deg);
  font-size: 6rem;
`;
const NotFound = () => {
  return (
    <Layout5>
      <SEO
        title="NOT FOUND PAGE"
        description="The page you are looking for has returned 404 not found"
      />
      <Section>
        <Container>
          <StyledH1>404 NOT FOUND</StyledH1>
          <P>The page you are looking for may have moved or does not exist!</P>
          <StyledIcon />
        </Container>
      </Section>
    </Layout5>
  );
};

export default NotFound;
