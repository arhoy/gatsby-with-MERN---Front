import React from 'react';
import styled from '@emotion/styled';
import { Link } from '@reach/router';
import { logout } from '../../../actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Div = styled.div`
  background: ${props => props.theme.colors.primaryTransparent};
  & > * {
    margin: 1rem;
  }
`;
const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  // links depending on authentication
  const authLinks = (
    <Div>
      <Link to="/app/dashboard">Dashboard</Link>

      <button onClick={logout}> Logout </button>
    </Div>
  );

  const guestLinks = (
    <Div>
      <Link to="/app/dashboard">Dashboard</Link>
      <Link to="/app/register">Register</Link>
      <Link to="/app/login">Login</Link>
    </Div>
  );
  return <>{!loading && <> {isAuthenticated ? authLinks : guestLinks} </>}</>;
};

const mapStateToProps = state => ({
  auth: state.auth,
});

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  { logout },
)(Navbar);
