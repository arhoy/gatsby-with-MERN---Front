import axios from 'axios';

import { GET_REVIEWS, REVIEW_ERROR, ADD_REVIEW } from './types';
import { setAlert } from './alert';

// get all the reviews (PUBLIC)
export const getReviews = () => async dispatch => {
  try {
    const res = await axios.get(`${process.env.SERVER_HOST_ROOT}/api/reviews`);

    dispatch({
      type: GET_REVIEWS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: REVIEW_ERROR,
      payload: { msg: 'Could not get the order reviews' },
    });
  }
};

// get all reviews for a specific productSlug
export const getReviewForSlug = productSlug => async dispatch => {
  try {
    const res = await axios.get(
      `${process.env.SERVER_HOST_ROOT}/api/reviews/${productSlug}`,
    );
    dispatch({
      type: GET_REVIEWS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: REVIEW_ERROR,
      payload: { msg: 'Could not get the order reviews' },
    });
  }
};

// add review for specific productSlug
export const addReviewForSlug = (formData, productSlug) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post(
      `${process.env.SERVER_HOST_ROOT}/api/reviews/review/${productSlug}`,
      formData,
      config,
    );

    // dispatch add review
    dispatch({
      type: ADD_REVIEW,
      payload: res.data,
    });

    // return true once successfully added review
    return true;
  } catch (error) {
    // if user not logged in return error
    if (error.response.status === 401)
      dispatch(setAlert('User must be logged in to add review!', 'danger'));

    // check form errors / validation express
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: REVIEW_ERROR,
      payload: { msg: error.response.status },
    });
  }
};
