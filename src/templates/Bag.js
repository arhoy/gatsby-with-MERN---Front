import React from 'react';
import { graphql } from 'gatsby';

import Layout5 from '../components/layouts/Layout5';
import SEO from '../hooks/SEO';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

import { P, Bold } from '../components/reusableStyles/typography/Typography';
import { TagContainer, Tag } from '../components/reusableStyles/tags/Tag';
import {
  Section,
  Container1200,
  Container800,
  SectionPrimaryTransparent,
} from '../components/reusableStyles/sections/Sections';
import { SnipCartButton1 } from '../components/reusableStyles/buttons/SnipCartAddToCartButton';
import {
  ProductContainer,
  ProductContentContainer,
  ProductImageContainer,
  StyledImage,
  ProductTitle,
  ProductRating,
  ProductRatingStars,
  ProductRatingDescription,
  StyledOldPrice,
  StyledDiscountPrice,
  StyledPrice,
  PriceContainer,
  StyledDiscountBadge,
  ProductContainerLHS,
} from '../components/products/ProductStyle1/ProductStyles';
import renderProductRating from '../helpers/renderRating';
import calculatePercentage from '../helpers/calculatePercentages';

import RRC from '../components/reusableStyles/carousel/RRC';
import prependIf from '../helpers/prependIf';
import ContentfulProductReviews from '../components/reviews/ContentfulProductReviews';
import ProductBranding from '../components/products/ProductBranding';

import OrderReviewContainer from '../components/order-review/OrderReviewContainer';

// run template query
export const query = graphql`
  query bagTemplateQuery($slug: String!) {
    review: allContentfulReviews(
      filter: { productName: { productSlug: { eq: $slug } } }
    ) {
      nodes {
        id
        title
        productName {
          productName
          productSlug
        }
        rating
        description {
          description
        }
        reviewedDate(formatString: "MMM Do, Y")
        customerName
      }
    }

    item: contentfulFashionTwoBags(productSlug: { eq: $slug }) {
      id
      productSlug
      productName
      shortDescription
      description {
        json
      }

      mainImage {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      otherImages {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      price
      discountPrice
      tags
      rating
      color
    }
  }
`;

const RTFBold = ({ children }) => <Bold>{children}</Bold>;
const Text = ({ children }) => <P>{children}</P>;

const BagTemplate = ({
  data: {
    item,
    review: { nodes: reviews },
  },
}) => {
  const {
    id,
    productName,
    price,
    discountPrice,
    productSlug,
    shortDescription: { description },
    description: { json },

    mainImage,
    otherImages,

    tags,
    rating,
  } = item;

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <RTFBold>{text}</RTFBold>,
    },

    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    },
  };

  return (
    <Layout5 full={true}>
      <SEO title={productName} description={description} />
      <Section style={{ paddingTop: '4rem' }}>
        <Container1200>
          <ProductContainer>
            <ProductContainerLHS>
              <ProductImageContainer>
                <ProductTitle>{productName}</ProductTitle>
                <TagContainer style={{ textAlign: 'center' }}>
                  {tags.map(tag => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </TagContainer>
                <ProductRating>
                  <ProductRatingStars>
                    {renderProductRating(rating)}
                  </ProductRatingStars>
                  <ProductRatingDescription>
                    {rating} stars
                  </ProductRatingDescription>
                </ProductRating>

                {otherImages ? (
                  <RRC images={prependIf(mainImage, otherImages)} />
                ) : (
                  <StyledImage fluid={mainImage.fluid} alt={productName} />
                )}

                {discountPrice ? (
                  <PriceContainer>
                    <StyledOldPrice>${price}</StyledOldPrice>
                    <StyledDiscountPrice>${discountPrice}</StyledDiscountPrice>
                    <StyledDiscountBadge>
                      {`Save ${calculatePercentage(discountPrice, price, 0)}% `}
                    </StyledDiscountBadge>
                  </PriceContainer>
                ) : (
                  <PriceContainer>
                    <StyledPrice> Sale ${price}</StyledPrice>
                  </PriceContainer>
                )}
                <SnipCartButton1
                  className={`snipcart-add-item`}
                  data-item-id={id}
                  data-item-name={productName}
                  data-item-image={mainImage.fluid.src}
                  data-item-price={discountPrice ? discountPrice : price}
                  data-item-url={`/bags/${productSlug}`}
                >
                  Add to Cart
                </SnipCartButton1>
              </ProductImageContainer>
            </ProductContainerLHS>

            <ProductContentContainer>
              <main>{documentToReactComponents(json, options)}</main>
              <ProductBranding
                title="The Fashion Two Guarantee"
                benefits={[
                  '30 Day Money Back Guarantee',
                  'Free Shipping over $20',
                ]}
              />
            </ProductContentContainer>
          </ProductContainer>
        </Container1200>
      </Section>
      {reviews.length > 0 ? (
        <SectionPrimaryTransparent>
          <Container800>
            <ContentfulProductReviews reviews={reviews} />
          </Container800>
        </SectionPrimaryTransparent>
      ) : null}
      <Section>
        <Container800>
          <OrderReviewContainer slug={productSlug} />
        </Container800>
      </Section>
    </Layout5>
  );
};

export default BagTemplate;
