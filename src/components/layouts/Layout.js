import React, { useEffect } from 'react';
import { Global, css } from '@emotion/core';
import NavFashion3 from '../navigation/NavFashion3';
import { ThemeProvider } from 'emotion-theming';
import { Provider } from 'react-redux';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import store from '../../store';

// real global scss styles
import '../../scss/main.scss';
import Footer from './Footer';
import { loadUser } from '../../actions/auth';
import setAuthToken from '../../utils/setAuthToken';

// import local storage
import { getLocalStorage } from '../../utils/localStorage';

const theme = {
  colors: {
    primary: 'rgb(92, 52, 145)',
    primaryDark: 'rgb(63, 3, 122)',
    primaryLight: 'rgb(148, 103, 206)',
    primaryVeryLight: 'rgb(232, 213, 250)',
    primaryTransparent: 'rgba(92, 52, 145,0.2)',
    secondary: 'rgb(24, 163, 201)',
    lightgrey: 'rgb(240,240,240)',
    lightgrey2: 'rgb(224, 217, 217)',
    white: '#fff',
    black: '#1a1a1a',
    blackTransparent: 'rgba(41, 43, 46, 0.4)',
    darkgrey: 'rgb(109, 109, 109)',
    red: 'rgb(218, 18, 31)',
    lightRed: 'rgb(232, 180, 182)',
    blue: 'rgb(19, 73, 178)',
    lightGreen: '#D4EDDA',
    green: 'rgb(31, 90, 46)',
  },
  pageWidth: {
    fixed: '800px',
    fixedHome: '900px',
  },
  screenSize: {
    mobileL: '600px',
    mobileVS: '300px',
    eightHundred: '800px',
    nineHundred: '900px',
    oneThousand: '1000px',
  },
};

const Div = styled.div`
  overflow-x: hidden;
  display: grid;
  grid-template-columns:
    [full-start] 1fr
    [center-start] repeat(8, [col-start] minmax(min-content, 1fr) [col-end])
    [center-end] 1fr [full-end];
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    grid-template-columns:
      [full-start] 0.5fr
      [center-start] repeat(8, [col-start] minmax(min-content, 1fr) [col-end])
      [center-end] 0.5fr [full-end];
  }
`;

const DivFixed = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  max-width: 800px;
  margin: 0 auto;
`;

const NavLayout = styled.header`
  grid-column: center-start/center-end;
`;

const FullNavLayout = styled.header`
  grid-column: full-start/full-end;
`;

const Main = styled.main`
  grid-column: center-start/center-end;
`;

const MainFull = styled.main`
  grid-column: full-start/full-end;
`;

const FooterLayout = styled.footer`
  grid-column: center-start/center-end;
`;

const FullFooterLayout = styled.footer`
  grid-column: full-start/full-end;
`;

// check and load user from local storage
if (typeof window !== undefined) {
  setAuthToken(getLocalStorage());
}

const Layout = ({ children, full }) => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  const white = '#fff';
  const primaryColor = 'rgb(92, 52, 145)';

  return (
    <Provider store={store}>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          body {
            background: ${white};
            margin: 0;
            font-family: Poppins, Roboto, Helvetica, Arial, sans-serif;
          }

          h1 {
            color: ${primaryColor};
            font-family: Poppins;
          }
        `}
      />

      {full ? (
        <ThemeProvider theme={theme}>
          <Div>
            <FullNavLayout>
              <NavFashion3 />
            </FullNavLayout>
            <MainFull>{children}</MainFull>

            <FullFooterLayout>
              <Footer />
            </FullFooterLayout>
          </Div>
        </ThemeProvider>
      ) : (
        <ThemeProvider theme={theme}>
          <DivFixed>
            <NavLayout>
              <NavFashion3 />
            </NavLayout>
            <Main>{children} </Main>

            <FooterLayout>
              <Footer />
            </FooterLayout>
          </DivFixed>
        </ThemeProvider>
      )}
    </Provider>
  );
};
Layout.propTypes = {
  full: PropTypes.bool,
};
Layout.defaultProps = {
  full: true,
};

export default Layout;
