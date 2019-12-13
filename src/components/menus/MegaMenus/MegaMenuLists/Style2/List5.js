// NO STYLES IN THIS FILE! Import from MegaMenuLists/ListStyles
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  MegaMenuUl,
  MegaMenuLi,
  MegaMenuLink,
  MegaMenuSpan,
  MegaMenuButton,
} from './ListStyles';

import ListHeader from './ListHeader';
import { logout } from '../../../../../actions/auth';

const List5 = ({ auth: { isAuthenticated, user }, logout }) => {
  return (
    <>
      <MegaMenuUl>
        <ListHeader title="Components" />
        <MegaMenuLi>
          <MegaMenuLink to="/examples/navigation-examples">
            Navigation
          </MegaMenuLink>
          <MegaMenuSpan spanColor="primary">New</MegaMenuSpan>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/examples/mapbox-examples">MapBox</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/bags">Cards</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/examples/carousels">Carousel</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/examples/mailchimp-forms">
            Subscriber Forms
          </MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/bags">Forms</MegaMenuLink>
        </MegaMenuLi>
      </MegaMenuUl>
      <MegaMenuUl>
        <ListHeader title="Landing Pages" />

        <MegaMenuLi>
          <MegaMenuLink to="/demos/fashion-one">Fashion One</MegaMenuLink>
          <MegaMenuSpan>Hot</MegaMenuSpan>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/demos/fashion-two">Fashion Two</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/demos/fashion-three">Fashion Three</MegaMenuLink>
        </MegaMenuLi>

        <MegaMenuLi>
          <MegaMenuLink to="/demos/fashion-five">Fashion Five</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/demos/fashion-five-amazon">
            Amazon Fashion Five
          </MegaMenuLink>
        </MegaMenuLi>
      </MegaMenuUl>

      {isAuthenticated && user ? (
        <MegaMenuUl>
          <ListHeader
            title={` Hello ${user && user.data && user.data.name} `}
          />

          <MegaMenuLi>
            <MegaMenuLink to="/app">App</MegaMenuLink>
          </MegaMenuLi>
          <MegaMenuLi>
            <MegaMenuLink to="/app/dashboard">Dashboard</MegaMenuLink>
          </MegaMenuLi>
          <MegaMenuLi>
            <MegaMenuButton onClick={() => logout()}>Logout</MegaMenuButton>
          </MegaMenuLi>
        </MegaMenuUl>
      ) : (
        <MegaMenuUl>
          <ListHeader title="Account" />

          <MegaMenuLi>
            <MegaMenuLink to="/app">App</MegaMenuLink>
          </MegaMenuLi>
          <MegaMenuLi>
            <MegaMenuLink to="/app/dashboard">Dashboard</MegaMenuLink>
          </MegaMenuLi>
          <MegaMenuLi>
            <MegaMenuLink to="/app/register">Register</MegaMenuLink>
          </MegaMenuLi>
          <MegaMenuLi>
            <MegaMenuLink to="/app/login">Sign In</MegaMenuLink>
          </MegaMenuLi>
        </MegaMenuUl>
      )}
    </>
  );
};

List5.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { logout },
)(List5);
