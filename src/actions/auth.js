import axios from 'axios';

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from './types';
import { setAlert } from './alert';
import setAuthToken from '../utils/setAuthToken';

// loader user
export const loadUser = () => async dispatch => {
  // set header

  if (typeof window !== undefined && localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get(
      `${process.env.GATSBY_SERVER_HOST_ROOT}/api/v1/auth/me`,
    );

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// register user
export const register = ({ name, email, password }) => async dispatch => {
  // set headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post(
      `${process.env.GATSBY_SERVER_HOST_ROOT}/api/v1/auth/register`,
      body,
      config,
    );

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    // dispatch user
    dispatch(loadUser());
  } catch (error) {
    if (error.response.data.errors) {
      error.response.data.errors.forEach(error =>
        dispatch(setAlert(error.msg, 'danger')),
      );
    }
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data.error || 'Unknown Error',
    });
  }
};

// login user
export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(
      `${process.env.GATSBY_SERVER_HOST_ROOT}/api/v1/auth/login`,
      body,
      config,
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    // dispatch user
    dispatch(loadUser());
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.error || 'Unknown Error',
    });
  }
};

// Logout / Clear Profile
export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT,
  });
};

// Forgot Password
export const forgotPassword = email => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ email });

  try {
    const res = await axios.post(
      `${process.env.GATSBY_SERVER_HOST_ROOT}/api/v1/auth/forgotPassword`,
      body,
      config,
    );
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

// Reset Password
export const resetpassword = (password, token) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ password, token });

  try {
    const res = await axios.post(
      `${process.env.GATSBY_SERVER_HOST_ROOT}/api/v1/auth/resetpassword`,
      body,
      config,
    );

    return res.data;
  } catch (error) {
    return error.response.data;
  }
};
