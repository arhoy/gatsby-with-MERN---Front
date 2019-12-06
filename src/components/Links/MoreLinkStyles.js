import styled from '@emotion/styled';
import { Link } from 'gatsby';

const UnderLineStyleLink = styled(Link)`
  text-decoration: underline;
  color: ${props => props.theme.colors.black};
`;

export { UnderLineStyleLink };
