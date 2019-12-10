import axios from 'axios';
import {
  GET_AMAZON_PRODUCTS,
  GET_AMAZON_PRODUCT,
  AMAZON_PRODUCTS_ERROR,
} from './types';

export const getAmazonProducts = (sort, price) => async dispatch => {
  try {
    const res = await axios.get(
      `${
        process.env.GATSBY_SERVER_HOST_ROOT
      }/api/v1/amazonproducts?sort=${sort}&priceValue[gte]=${price || 0}`,
    );

    dispatch({
      type: GET_AMAZON_PRODUCTS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: AMAZON_PRODUCTS_ERROR,
      payload: { msg: 'Could not load product(s) at this time' },
    });
  }
};

export const getAmazonProduct = slug => async dispatch => {
  try {
    const res = await axios.get(
      `${process.env.GATSBY_SERVER_HOST_ROOT}/api/v1/amazonproducts/${slug}`,
    );
    dispatch({
      type: GET_AMAZON_PRODUCT,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: AMAZON_PRODUCTS_ERROR,
      payload: { msg: 'Could not load product(s) at this time' },
    });
  }
};
