import styled from '@emotion/styled';

const H1 = styled.h1`
  font-size: 4rem;
  color: ${props => props.theme.colors.black};
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    text-align: center;
    font-size: 3.4rem;
  }
`;

const ProductPageH1 = styled.h1`
  font-size: 4rem;
  font-style: italic;
  color: ${props => props.theme.colors.primary};
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    text-align: center;
    font-size: 3.4rem;
  }
`;

const H2 = styled.h2`
  font-size: 3rem;
  color: ${props => props.theme.colors.black};
`;

const H3 = styled.h3`
  font-size: 2.6rem;
  color: ${props => props.theme.colors.black};
`;

const H4 = styled.h4`
  font-size: 2.2rem;
  color: ${props => props.theme.colors.black};
`;

const A = styled.a`
  color: ${props => props.theme.colors.black};
  text-decoration: none;
`;

const Li = styled.li`
  color: ${props => props.theme.colors.black};
`;

const Ul = styled.ul`
  margin: 1rem 0;
`;

const Bold = styled.span`
  font-weight: bolder;
`;

const Span = styled.span``;

const P = styled.p`
  padding: 1rem 0rem;
`;

export { H1, H2, H3, H4, A, Li, Ul, Span, Bold, P, ProductPageH1 };
