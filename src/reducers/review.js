import { GET_REVIEWS, REVIEW_ERROR, ADD_REVIEW } from '../actions/types';

const initialState = {
  reviews: [],
  review: null,
  loading: true,
  error: {},
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_REVIEW:
      return {
        ...state,
        reviews: [payload, ...state.reviews.data],
        loading: false,
      };
    case GET_REVIEWS:
      return {
        ...state,
        reviews: payload,
        loading: false,
      };
    case REVIEW_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
