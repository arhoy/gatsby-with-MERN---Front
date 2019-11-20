import React from 'react';
import Layout5 from '../components/layouts/Layout5';

import { graphql } from 'gatsby';
import SEO from '../hooks/SEO';
import Articles from '../components/articles/Articles';

import { H1 } from '../components/reusableStyles/typography/Typography';
import {
  Container800,
  Section,
} from '../components/reusableStyles/sections/Sections';

export const getArticles = graphql`
  query {
    allArticles: allContentfulFashionTwoArticles {
      nodes {
        slug
        title
        publishDate(formatString: "MMM Do YYYY")
        author {
          name
        }
        heroImage {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
`;

const articles = ({ data }) => {
  return (
    <Layout5 full={true}>
      <SEO
        title="Fashion Two Articles"
        description="Please see all the articles below related to Fashion Two"
      />
      <Section>
        <Container800>
          <H1>Articles</H1>
          <Articles articles={data.allArticles.nodes} />
        </Container800>
      </Section>
    </Layout5>
  );
};

export default articles;
