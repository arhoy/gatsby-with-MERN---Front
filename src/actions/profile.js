import axios from 'axios';

import { GET_PROFILE, PROFILE_ERROR, CLEAR_PROFILE } from './types';
import { setAlert } from './alert';

// get current user profile
export const getCurrentProfile = () => async dispatch => {
  try {
    const res = await axios.get(
      `${process.env.GATSBY_SERVER_HOST_ROOT_ROOT}/api/v1/profile/me`,
    );

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: 'Could not get profile at this time' },
    });
  }
};

// create profile or update profile
export const createProfile = (formData, edit = false) => async dispatch => {
  try {
    // sending data, headers needed
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    // route creates profile
    const res = await axios.post(
      `${process.env.GATSBY_SERVER_HOST_ROOT_ROOT}/api/v1/profile`,
      formData,
      config,
    );

    // dispatch profile after created
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });

    dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created'));
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: 'Could not create or edit profile at this time' },
    });
  }
};

// delete the profile only or current user
export const deleteProfile = () => async dispatch => {
  try {
    if (
      typeof window &&
      window.confirm('Are you sure you want to delete profile?')
    ) {
      await axios.delete(`${process.env.GATSBY_SERVER_HOST_ROOT_ROOT}/api/v1/profile`);
      dispatch({
        type: CLEAR_PROFILE,
      });
      dispatch(setAlert('Your profile has now been deleted'));
    }
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg:
          'Profile not found/ We could not delete profile please contact customer service for assistance',
      },
    });
  }
};
