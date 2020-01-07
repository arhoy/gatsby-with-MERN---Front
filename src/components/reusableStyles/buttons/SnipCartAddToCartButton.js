// Styles only

import styled from '@emotion/styled';

const SnipCartButton1 = styled.button`
  max-width: 30rem;
  margin: 2rem auto;
  outline: none;
  border: none;
  cursor: pointer;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  font-weight: bolder;
  font-size: 1.6rem;
  padding: 1rem 3rem;
  &:hover {
    background: ${props => props.theme.colors.primaryDark};
  }
`;

export { SnipCartButton1 };
