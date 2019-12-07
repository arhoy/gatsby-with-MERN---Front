import { GET_BOOTCAMPS, BOOTCAMP_ERROR } from '../actions/types';

const initialState = {
  bootcamp: null,
  bootcamps: [],
  loading: true,
  error: {},
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_BOOTCAMPS:
      return {
        ...state,
        bootcamps: payload.data,
        loading: false,
      };

    case BOOTCAMP_ERROR:
      return {
        ...state,
        error: payload.error,
      };

    default:
      return state;
  }
}
