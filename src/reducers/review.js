import {
  GET_REVIEWS,
  REVIEW_ERROR,
  ADD_REVIEW,
  EDIT_REVIEW,
  DELETE_REVIEW,
  UPDATE_LIKES,
} from '../actions/types';

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
        reviews: [payload, ...state.reviews],
        loading: false,
      };

    case EDIT_REVIEW:
      return {
        ...state,
        reviews: state.reviews.map(review =>
          review._id === payload._id
            ? {
                ...review,
                title: payload.title,
                description: payload.description,
                rating: payload.rating,
              }
            : review,
        ),
        loading: false,
      };
    case GET_REVIEWS:
      return {
        ...state,
        reviews: payload.data,
        loading: false,
      };
    case DELETE_REVIEW:
      return {
        ...state,
        reviews: state.reviews.filter(review => review._id !== payload),
        loading: false,
      };
    case REVIEW_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case UPDATE_LIKES:
      return {
        ...state,
        reviews: state.reviews.map(review =>
          review._id === payload.reviewId
            ? { ...review, likes: payload.likes }
            : review,
        ),
        loading: false,
      };
    default:
      return state;
  }
}
