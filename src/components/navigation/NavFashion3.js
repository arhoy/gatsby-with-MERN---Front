import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { FaOpencart, FaAlignRight, FaTimes } from 'react-icons/fa';

import styled from '@emotion/styled';
import netlifyIdentity from 'netlify-identity-widget';
import { FaPhone } from 'react-icons/fa';

import MyMenu2 from '../menus/MyMenu2';

import { Container1200 } from '../reusableStyles/sections/Sections';

import NoStyleLink from '../Links/NoStyleLink';
import MegaMenu2 from '../menus/MegaMenus/MegaMenu2';
import List5 from '../menus/MegaMenus/MegaMenuLists/Style2/List5';
import List4 from '../menus/MegaMenus/MegaMenuLists/Style2/List4';

const AlertBar = styled.div`
  text-align: center;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
`;

const Header = styled.header`
  height: 80px;
  position: relative;

  background: ${props => props.theme.colors.lightgrey};
  display: flex;
  border-bottom: 3px solid ${props => props.theme.colors.primarDark};
  margin: 0 auto;

  justify-content: space-around;
  align-items: center;

  z-index: 1;

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    display: flex;
  }
`;
const LogoLink = styled(Link)`
  padding: 0;
  margin: 0;
`;
const Logo = styled.span`
  color: ${props => props.theme.colors.primary};

  & i {
    font-weight: bold;
    color: ${props => props.theme.colors.primaryDark};
  }
  & ${LogoLink} {
    text-decoration: none !important;
    font-size: 3rem;
    line-height: 2.4rem;
  }
`;

const LogoBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoPhone = styled.span`
  margin-right: 3px;
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;

  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    display: none;
  }
`;

const Cart = styled(FaOpencart)`
  margin-left: 2rem;
  font-size: 3rem;
  cursor: pointer;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    display: none;
  }
`;

const BurgerIcon = styled(FaAlignRight)`
  @media (min-width: ${props => props.theme.screenSize.mobileL}) {
    display: none;
  }
`;

const CloseIconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CloseIcon = styled(FaTimes)`
  font-size: 2rem;
  margin-right: 4px;
`;

const MobileMenuContainer = styled.div`
  padding: 1rem 3rem;
  position: absolute;
  top: 0;
  right: 0;
  background: ${props => props.theme.colors.lightgrey};

  width: 100%;

  & ul {
    list-style: none;
    height: 100%;
  }
  & li {
    padding: 0.5rem 0;
    border-bottom: 1px solid ${props => props.theme.colors.darkGrey};
    font-weight: bold;
  }
`;

const NavFashion2 = () => {
  useEffect(() => {
    netlifyIdentity.init();
  }, []);

  const [mobileMenuOpen, setMobileMenu] = useState(false);

  const mobileMenuHandler = () => {
    setMobileMenu(prevState => !prevState);
 
  };

  return (
    <>
      <AlertBar>100% Free Storewide Shipping</AlertBar>

      <Header>
        <Logo>
          <LogoLink to="/">
            <i>FashionTwo</i>
          </LogoLink>
          <LogoBottom>
            <LogoPhone>1 888 FASHION</LogoPhone>
            <FaPhone />
          </LogoBottom>
        </Logo>
        <NavContainer>
          <MyMenu2 title={`Women`}>
            <Container1200>
              <MegaMenu2>
                <List4 />
              </MegaMenu2>
            </Container1200>
          </MyMenu2>

          <MyMenu2 title={`Men`}>
            <Container1200>
              <MegaMenu2>
                <List4 />
              </MegaMenu2>
            </Container1200>
          </MyMenu2>

          <MyMenu2 title={`More`}>
            <Container1200>
              <MegaMenu2>
                <List5 />
              </MegaMenu2>
            </Container1200>
          </MyMenu2>
        </NavContainer>
        <Cart className="snipcart-checkout">
          <span className="snipcart-items-count"></span>
          <span className="snipcart-total-price"></span>
        </Cart>
        <BurgerIcon onClick={mobileMenuHandler} />
        {mobileMenuOpen ? (
          <MobileMenuContainer>
            <CloseIconContainer>
              <CloseIcon onClick={mobileMenuHandler} /> close
            </CloseIconContainer>

            <ul>
              <li>
                <NoStyleLink to="/"> Home </NoStyleLink>{' '}
              </li>
              <li>
                <NoStyleLink to="/bags"> Bags </NoStyleLink>{' '}
              </li>
              <li>
                <NoStyleLink to="/pants"> Pants </NoStyleLink>{' '}
              </li>
              <li>
                <NoStyleLink to="/shoes"> Shoes </NoStyleLink>{' '}
              </li>
            </ul>
          </MobileMenuContainer>
        ) : null}
      </Header>
    </>
  );
};

export default NavFashion2;
