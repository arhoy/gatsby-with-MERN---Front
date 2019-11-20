import React from 'react';
import { navigate } from 'gatsby';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, auth, location, ...rest }) => {
  if (!auth.isAuthenticated && location.pathname !== `/app/login`) {
    navigate('/app/login');
    return null;
  }

  return <Component {...rest} user={auth} />;
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
