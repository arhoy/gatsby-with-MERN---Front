import React, { useEffect } from 'react';
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
import { StyledImage2 } from '../amazonproducts/AmazonProductsStyling';
import { TagContainer, Tag } from '../reusableStyles/tags/Tag';
import RRC from '../reusableStyles/carousel/RRC';
import prependIf from '../../helpers/prependIf';
import calculatePercentage from '../../helpers/calculatePercentages';
import ProductBranding from '../products/ProductBranding';
import OrderReviewContainer from '../order-review/OrderReviewContainer';

const AmazonProduct = ({
  getAmazonProduct,
  amazonproduct: { amazonproduct, loading },
  location,
}) => {
  useEffect(() => {
    const index = location.pathname.split('/').length - 1;
    const slug = location.pathname.split('/')[index];
    getAmazonProduct(slug);
  }, [getAmazonProduct]);

  if (loading || !amazonproduct) {
    return <div>Loading Products</div>;
  }
  return (
    <>
      <Section style={{ paddingTop: '4rem' }}>
        <Container1200>
          <ProductContainer>
            <ProductContainerLHS>
              <ProductImageContainer>
                <ProductTitle>{amazonproduct.name}</ProductTitle>
                <TagContainer style={{ textAlign: 'center' }}>
                  {amazonproduct.tags &&
                    amazonproduct.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
                </TagContainer>
                <ProductRating>
                  <ProductRatingStars>
                    {renderRating(amazonproduct.rating)}
                  </ProductRatingStars>
                  <ProductRatingDescription>
                    {amazonproduct.rating} stars
                  </ProductRatingDescription>
                </ProductRating>

                {amazonproduct.otherImages ? (
                  <RRC
                    images={prependIf(
                      amazonproduct.image,
                      amazonproduct.otherImages,
                    )}
                  />
                ) : (
                  <StyledImage2
                    src={amazonproduct.image}
                    alt={amazonproduct.name}
                  />
                )}

                {amazonproduct.discountPrice ? (
                  <PriceContainer>
                    <StyledOldPrice>${amazonproduct.priceValue}</StyledOldPrice>
                    <StyledDiscountPrice>
                      ${amazonproduct.discountPrice}
                    </StyledDiscountPrice>
                    <StyledDiscountBadge>
                      {`Save ${calculatePercentage(
                        amazonproduct.discountPrice,
                        amazonproduct.priceValue,
                        0,
                      )}% `}
                    </StyledDiscountBadge>
                  </PriceContainer>
                ) : (
                  <PriceContainer>
                    <StyledPrice> Sale ${amazonproduct.priceValue}</StyledPrice>
                  </PriceContainer>
                )}
                <SnipCartButton1
                  className={`snipcart-add-item`}
                  data-item-id={amazonproduct.name}
                  data-item-name={amazonproduct.name}
                  data-item-image={amazonproduct.image}
                  data-item-price={
                    amazonproduct.discountPrice
                      ? amazonproduct.discountPrice
                      : amazonproduct.priceValue
                  }
                  data-item-url={`/app/amazonproducts/${amazonproduct.slug}`}
                >
                  Add to Cart
                </SnipCartButton1>
              </ProductImageContainer>
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
          </ProductContainer>
        </Container1200>
      </Section>

      <Section>
        <Container1200>
          <OrderReviewContainer slug={amazonproduct.slug} />
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
