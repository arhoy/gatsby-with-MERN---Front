import styled from '@emotion/styled';
import Img from 'gatsby-image';
import NoStyleLink from '../../../../Links/NoStyleLink';

const MegaMenuUl = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const MegaMenuLi = styled.li`
  display: flex;
  margin: 1px 0;
  padding: 2px 4px;
  &:hover {
    font-weight: bolder;
  }
`;

const MegaMenuSpan = styled.span`
  margin-left: 1rem;
  background: ${props =>
    props.spanColor === 'primary'
      ? props.theme.colors.primary
      : props.theme.colors.red};
  color: ${props => props.theme.colors.white};
  border-radius: 4px;
  padding: 2px 4px;
  font-size: 1.3rem;
`;

const MegaMenuLink = styled(NoStyleLink)``;

const MegaMenuButton = styled.span`
  text-decoration: none;
  color: ${props => props.theme.colors.black};
  outline: none;
  border: none;
  background: transparent;
  font-size: 1.8rem;
  &:hover {
    font-weight: bold;
  }
`;

const MegaMenuPictureContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  @media (max-width: ${props => props.theme.screenSize.oneThousand}) {
    display: none;
  }
`;

const MegaMenuPicture = styled(Img)``;

export {
  MegaMenuUl,
  MegaMenuLi,
  MegaMenuLink,
  MegaMenuButton,
  MegaMenuSpan,
  MegaMenuPictureContainer,
  MegaMenuPicture,
};
