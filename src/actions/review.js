import axios from 'axios';

import { GET_REVIEWS, REVIEW_ERROR } from './types';

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
