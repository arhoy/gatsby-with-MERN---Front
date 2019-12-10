import styled from '@emotion/styled';
import { ButtonStyle2 } from '../reusableStyles/buttons/Button';

// for amazon products
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
`;
// for amazon product below
const Div = styled.div`
  width: 35rem;
  margin: 2rem;
  padding: 2rem;
  background: ${props => props.theme.colors.lightgrey};
  & h3 {
    font-size: 1.8rem;
    color: ${props => props.theme.colors.primaryDark};
  }
  & p {
    font-size: 1.6rem;
  }
`;

const ButtonStyleAmazon = styled(ButtonStyle2)`
  display: flex;
`;
const ImageContainer = styled.img`
  max-height: 20rem;
`;

const PriceStyle = styled.span`
  font-weight: bold;
  font-size: 2.3rem;
`;

export { Div, ImageContainer, ButtonStyleAmazon, PriceStyle, Container };
