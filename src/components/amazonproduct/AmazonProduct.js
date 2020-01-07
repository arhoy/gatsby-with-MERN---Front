import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getAmazonProduct } from '../../actions/amazonproducts';
import renderRating from '../../helpers/renderRating';

import {
  Section,
  Container1200,
} from '../../components/reusableStyles/sections/Sections';

import { SnipCartButton1 } from '../../components/reusableStyles/buttons/SnipCartAddToCartButton';
import {
  ProductContainer,
  ProductContentContainer,
  ProductImageContainer,
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
} from '../../components/products/ProductStyle1/ProductStyles';
import { StyledImage3 } from '../amazonproducts/AmazonProductsStyling';
import { TagContainer, Tag } from '../reusableStyles/tags/Tag';
import RRC from '../reusableStyles/carousel/RRC';
import prependIf from '../../helpers/prependIf';
import calculatePercentage from '../../helpers/calculatePercentages';
import ProductBranding from '../products/ProductBranding';
import OrderReviewContainer from '../order-review/OrderReviewContainer';

const CustomProductContainer = styled(ProductContainer)`
  grid-template-columns: 1fr 1fr;
`;

const CustomProductImageContainer = styled(ProductImageContainer)`
  @media (min-width: ${props => props.theme.screenSize.nineHundred}) {
    max-width: 55rem;
  }
`;

const AmazonProduct = ({
  getAmazonProduct,
  amazonproduct: { amazonproduct, loading },
  department,
  title,
  location,
}) => {
  useEffect(() => {
    const index = location.pathname.split('/').length - 1;
    const slug = location.pathname.split('/')[index];

    getAmazonProduct(department, slug);
  }, [getAmazonProduct]);

  if (loading || !amazonproduct) {
    return <div>Loading {title}</div>;
  }
  return (
    <>
      <Section style={{ paddingTop: '4rem' }}>
        <Container1200>
          <CustomProductContainer>
            <ProductContainerLHS>
              <CustomProductImageContainer>
                <ProductTitle>{amazonproduct.data.name}</ProductTitle>
                <TagContainer style={{ textAlign: 'center' }}>
                  {amazonproduct.data.tags &&
                    amazonproduct.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
                </TagContainer>
                <ProductRating>
                  <ProductRatingStars>
                    {renderRating(amazonproduct.data.rating)}
                  </ProductRatingStars>
                  <ProductRatingDescription>
                    {amazonproduct.data.rating} stars
                  </ProductRatingDescription>
                </ProductRating>

                {amazonproduct.data.otherImages ? (
                  <RRC
                    images={prependIf(
                      amazonproduct.data.image,
                      amazonproduct.data.otherImages,
                    )}
                  />
                ) : (
                  <StyledImage3
                    src={amazonproduct.data.image}
                    alt={amazonproduct.data.name}
                  />
                )}

                {amazonproduct.data.discountPrice ? (
                  <PriceContainer>
                    <StyledOldPrice>
                      ${amazonproduct.data.priceValue}
                    </StyledOldPrice>
                    <StyledDiscountPrice>
                      ${amazonproduct.data.discountPrice}
                    </StyledDiscountPrice>
                    <StyledDiscountBadge>
                      {`Save ${calculatePercentage(
                        amazonproduct.data.discountPrice,
                        amazonproduct.data.priceValue,
                        0,
                      )}% `}
                    </StyledDiscountBadge>
                  </PriceContainer>
                ) : (
                  <PriceContainer>
                    <StyledPrice>
                      {' '}
                      Sale ${amazonproduct.data.priceValue}
                    </StyledPrice>
                  </PriceContainer>
                )}
                <SnipCartButton1
                  className={`snipcart-add-item`}
                  data-item-id={amazonproduct.data.name}
                  data-item-name={amazonproduct.data.name}
                  data-item-image={amazonproduct.data.image}
                  data-item-price={
                    amazonproduct.data.discountPrice
                      ? amazonproduct.data.discountPrice
                      : amazonproduct.data.priceValue
                  }
                  data-item-url={`/app/${department}/${amazonproduct.data.slug}`}
                >
                  Add to Cart
                </SnipCartButton1>
              </CustomProductImageContainer>
            </ProductContainerLHS>

            <ProductContentContainer>
              <ProductBranding
                title="The Fashion Two Guarantee"
                benefits={[
                  '30 Day Money Back Guarantee',
                  'Free Shipping over $20',
                  '100% Customer Satisfaction Guaranteed',
                  '2 Day Flat Shipping Fee, fullfilled by UPS',
                  'Delivering to Europe, Canada, US, Asia and Africa',
                ]}
              />
            </ProductContentContainer>
          </CustomProductContainer>
        </Container1200>
      </Section>

      <Section>
        <Container1200>
          <OrderReviewContainer slug={amazonproduct.data.slug} />
        </Container1200>
      </Section>
    </>
  );
};

AmazonProduct.propTypes = {
  amazonproduct: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  amazonproduct: state.amazonproduct,
});

export default connect(
  mapStateToProps,
  { getAmazonProduct },
)(AmazonProduct);
