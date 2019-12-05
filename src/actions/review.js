import axios from 'axios';

import {
  GET_REVIEWS,
  REVIEW_ERROR,
  ADD_REVIEW,
  EDIT_REVIEW,
  DELETE_REVIEW,
  UPDATE_LIKES,
} from './types';
import { setAlert } from './alert';

// get all the reviews (PUBLIC)
export const getReviews = () => async dispatch => {
  try {
    const res = await axios.get(
      `${process.env.SERVER_HOST_ROOT}/api/v1/reviews`,
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

// get all reviews for a specific productSlug
export const getReviewForSlug = productSlug => async dispatch => {
  try {
    const res = await axios.get(
      `${process.env.SERVER_HOST_ROOT}/api/v1/reviews/${productSlug}`,
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
      `${process.env.SERVER_HOST_ROOT}/api/v1/reviews/review/${productSlug}`,
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

// edit the review
export const editReview = (formData, reviewId) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.put(
      `${process.env.SERVER_HOST_ROOT}/api/v1/reviews/review/${reviewId}`,
      formData,
      config,
    );
    dispatch({
      type: EDIT_REVIEW,
      payload: res.data,
    });
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

// delete review
export const deleteReview = reviewId => async dispatch => {
  try {
    await axios.delete(
      `${process.env.SERVER_HOST_ROOT}/api/v1/reviews/review/${reviewId}`,
    );
    dispatch({
      type: DELETE_REVIEW,
      payload: reviewId,
    });
    dispatch(setAlert('Post has been removed', 'success'));
  } catch (err) {
    dispatch({
      type: REVIEW_ERROR,
      payload: { msg: 'Not able to delete review' },
    });
  }
};

// Add like
export const addLike = reviewId => async dispatch => {
  try {
    const res = await axios.put(
      `${process.env.SERVER_HOST_ROOT}/api/v1/reviews/like/${reviewId}`,
    );

    dispatch({
      type: UPDATE_LIKES,
      payload: { reviewId, likes: res.data },
    });
  } catch (err) {
    dispatch({
      type: REVIEW_ERROR,
      payload: { msg: err.response.status },
    });
  }
};

// remove like
export const removeLike = reviewId => async dispatch => {
  try {
    const res = await axios.put(
      `${process.env.SERVER_HOST_ROOT}/api/v1/reviews/unlike/${reviewId}`,
    );
    dispatch({
      type: UPDATE_LIKES,
      payload: { reviewId, likes: res.data },
    });
  } catch (err) {
    dispatch({
      type: REVIEW_ERROR,
      payload: { msg: err.response.status },
    });
  }
};
