import React from 'react';
import { graphql } from 'gatsby';

import Layout5 from '../components/layouts/Layout5';
import SEO from '../hooks/SEO';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

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

// run template query
export const query = graphql`
  query pantTemplateQuery($slug: String!) {
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

    item: contentfulFashionTwoPants(productSlug: { eq: $slug }) {
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

const PantTemplate = ({
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
    renderNode: {
      'embedded-asset-block': node => {
        const { file, title } = node.data.target.fields;
        return (
          <div>
            <img width="400" src={file['en-US'].url} alt={title} />
          </div>
        );
      },
      'embedded-entry-block': node => {
        const { name, images, description } = node.data.target.fields;
        return (
          <div>
            <h3>{name['en-US']}</h3>
            <img
              width="400"
              src={
                images['en-US'][0].fields.file['en-US'].url ||
                images['en-US'].fields.file['en-US'].url
              }
              alt={description['en-US']}
            />
            <p> {description['en-US']}</p>
          </div>
        );
      },
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
                  data-item-url={`/pants/${productSlug}`}
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
    </Layout5>
  );
};

export default PantTemplate;
