import React from 'react';

import {
  StyledLinkContainer,
  ImageContainer,
  DiscountBadge,
  DisplayBadgeContainer,
  StyledImage2,
  StyledOldPrice,
  StyledPrice,
  StyledDiscountPrice,
  PriceContainer,
  RatingContainer,
} from './AmazonProductsStyling';

import renderRating from '../../helpers/renderRating';
import calculatePercentage from '../../helpers/calculatePercentages';

const AmazonProduct = ({ amazonproduct, department }) => {
  if (!amazonproduct) {
    return <div> No products found in this category</div>;
  }
  return (
    <StyledLinkContainer to={`/app/${department}/${amazonproduct.slug}`}>
      <DiscountBadge>
        {amazonproduct.discountPrice
          ? `Save ${calculatePercentage(
              amazonproduct.discountPrice,
              amazonproduct.priceValue,
              0,
            )}% `
          : 'NEW ITEM'}
      </DiscountBadge>

      <ImageContainer>
        <StyledImage2 src={amazonproduct.image} alt={amazonproduct.name} />

        <h4>
          {amazonproduct.name.length <= 65
            ? amazonproduct.name
            : `${amazonproduct.name.substring(0, 65)}...`}
        </h4>
        <DisplayBadgeContainer>
          {amazonproduct.displayBadge &&
            amazonproduct.displayBadge.map(badge => (
              <span key={badge}>{badge}</span>
            ))}
        </DisplayBadgeContainer>
      </ImageContainer>

      <RatingContainer>{renderRating(amazonproduct.rating)}</RatingContainer>
      {amazonproduct.discountPrice ? (
        <PriceContainer>
          <StyledOldPrice>${amazonproduct.priceValue}</StyledOldPrice>
          <StyledDiscountPrice>
            ${amazonproduct.discountPrice}
          </StyledDiscountPrice>
        </PriceContainer>
      ) : (
        <PriceContainer>
          <StyledPrice>${amazonproduct.priceValue}</StyledPrice>
        </PriceContainer>
      )}
    </StyledLinkContainer>
  );
};
export default AmazonProduct;
