import styled from '@emotion/styled';

const Div = styled.div`
  padding: 3rem;
  & h3 {
    color: ${props => props.theme.colors.primary};
    font-size: 2.3rem;
  }
`;

const BlurbContainer = styled.div`
  background: ${props => props.theme.colors.lightgrey};
  & p {
    background: ${props => props.theme.colors.lightgrey2};
    margin: 1rem 0;
    padding: 0.5rem 2rem;
  }
  & .style2 {
    background: ${props => props.theme.colors.primaryTransparent};
  }
`;

export { Div, BlurbContainer };
