import { GET_AMAZON_PRODUCTS, AMAZON_PRODUCTS_ERROR } from '../actions/types';

const initialState = {
  amazonproduct: null,
  amazonproducts: [],
  loading: true,
  error: {},
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_AMAZON_PRODUCTS:
      return {
        ...state,
        amazonproducts: payload.data,
        loading: false,
        error: {},
      };
    case AMAZON_PRODUCTS_ERROR:
      return {
        ...state,
        error: payload.error,
      };
    default:
      return state;
  }
}
