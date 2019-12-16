import styled from '@emotion/styled';
import Image from 'gatsby-image';
import { Link } from 'gatsby';

// actions on each product render
const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const SelectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  & select {
    padding: 0.7rem 1.4rem;
    border-radius: 6px;
  }
  & > * {
    margin: 1rem;
  }
`;

const InputRangeContainer = styled.div`
  & input {
    cursor: pointer;
  }
`;

// each product on the products render
const StyledLinkContainer = styled(Link)`
  position: relative;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${props => props.theme.colors.black};

  margin: 3rem;
  background: ${props => props.theme.colors.lightgrey};
  border-radius: 1rem;

  &:hover {
    background: ${props => props.theme.colors.primaryTransparent};
  }

  width: 28rem;
  height: 25rem;
`;

const ImageContainer = styled.div`
  text-align: center;
  padding: 0 2rem;
`;

const DiscountBadge = styled.span`
  position: absolute;
  padding: 2px 4px;

  border-top-left-radius: 1rem;
  border-bottom-right-radius: 1rem;

  font-size: 1.2rem;

  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
`;

const DisplayBadgeContainer = styled.div`
  font-size: 1.4rem;
  & > * {
    margin-right: 4px;
  }
`;

const StyledImage = styled(Image)`
  width: 50%;
  object-fit: cover;
  margin: 0 auto;
`;

const StyledImage2 = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  margin: 0 auto;
`;

const StyledOldPrice = styled.span`
  color: ${props => props.theme.colors.darkgrey};
  text-decoration: line-through;
`;

const StyledPrice = styled.span`
  color: ${props => props.theme.colors.black};
  font-size: 2.2rem;
  font-weight: bold;
`;

const StyledDiscountPrice = styled.span`
  font-size: 2.2rem;
  font-weight: bold;
  margin-left: 6px;
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RatingContainer = styled.div`
  text-align: center;
`;

const PaginationContainer1 = styled.div`
  display: flex;
  justify-content: center;

  & button {
    margin: 0.5rem;
    cursor: pointer;
    padding: 0.5rem 1rem;
    outline: none;
    border: none;
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.primary};
    &:hover {
      background: ${props => props.theme.colors.primaryDark};
    }
  }
`;

const ProductInputContainer1 = styled.div`
  display: flex;
  justify-content: center;
  & input {
    padding: 0.5rem;
    border-radius: 6px;
    outline: none;
    border: 1px solid ${props => props.theme.colors.primary};
  }
`;

export {
  StyledLinkContainer,
  ImageContainer,
  DiscountBadge,
  DisplayBadgeContainer,
  StyledImage,
  StyledOldPrice,
  StyledPrice,
  StyledImage2,
  StyledDiscountPrice,
  PriceContainer,
  RatingContainer,
  ActionContainer,
  SelectContainer,
  InputRangeContainer,
  PaginationContainer1,
  ProductInputContainer1,
};
