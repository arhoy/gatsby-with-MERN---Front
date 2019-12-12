// app is client side rendered

import React from 'react';
import { Router } from '@reach/router';
import Register from '../components/auth/Register';
import Layout5 from '../components/layouts/Layout5';

import Dashboard from '../components/dashboard/Dashboard';
import Login from '../components/auth/Login';

// REDUX
// import { Provider } from 'react-redux';
// import store from '../store';
import PopupAlerts from '../components/reusableStyles/alerts/PopupAlerts';
// import setAuthToken from '../utils/setAuthToken';

import AppLanding from '../components/dashboard/AppLanding';
import PrivateRoute from '../components/routing/PrivateRoute';
import ForgotPassword from '../components/auth/ForgotPassword';
import ResetPassword from '../components/auth/ResetPassword';
import AmazonProduct from '../components/amazonproduct/AmazonProduct';

const app = () => {
  return (
    // <Provider store={store}>
    <Layout5>
      <Router>
        <AppLanding exact path="/app" />
        <PrivateRoute path="/app/dashboard" component={Dashboard} />
        <Register exact path="/app/register" />
        <Login exact path="/app/login" />
        <ForgotPassword exact path="/app/forgotpassword" />
        <ResetPassword exact path="/app/resetpassword" />
        <AmazonProduct
          department="amazonproducts"
          exact
          path="/app/amazonproducts/:slug"
        />
        <AmazonProduct
          department="amazon-tools"
          exact
          path="/app/amazon-tools/:slug"
        />
        <AmazonProduct
          department="amazon-electronics"
          exact
          path="/app/amazon-electronics/:slug"
        />
        <AmazonProduct
          department="amazon-automotive"
          exact
          path="/app/amazon-automotive/:slug"
        />
        <AmazonProduct
          department="amazon-home-and-decore"
          exact
          path="/app/amazon-home-and-decore/:slug"
        />
      </Router>
      <PopupAlerts />
    </Layout5>
    // </Provider>
  );
};

export default app;
