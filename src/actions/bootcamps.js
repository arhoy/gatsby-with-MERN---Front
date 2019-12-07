import axios from 'axios';
import { GET_BOOTCAMPS, BOOTCAMP_ERROR } from './types';

export const getBootcamps = sort => async dispatch => {
  try {
    const res = await axios.get(
      `${process.env.GATSBY_SERVER_HOST_ROOT}/api/v1/bootcamps?select=name,description,averageCost&sort=${sort}`,
    );

    dispatch({
      type: GET_BOOTCAMPS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: BOOTCAMP_ERROR,
      payload: { msg: 'Could not get the bootcamps' },
    });
  }
};
