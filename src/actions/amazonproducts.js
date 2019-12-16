import axios from 'axios';
import {
  GET_AMAZON_PRODUCTS,
  GET_AMAZON_PRODUCT,
  AMAZON_PRODUCTS_ERROR,
} from './types';

// make reusable based on url department that is passed in (amazonproducts, amazon-tools, amazon-home-decore etc)
export const getAmazonProducts = (
  department,
  sort,
  price,
  page,
  limit,
) => async dispatch => {
  try {
    const res = await axios.get(
      `${
        process.env.GATSBY_SERVER_HOST_ROOT
      }/api/v1/${department}?sort=${sort}&priceValue[gte]=${price ||
        0}&page=${page || 1}&limit=${limit}`,
    );

    // switch statement to determine which department of products to render
    dispatch({
      type: `${GET_AMAZON_PRODUCTS}_${department}`,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: AMAZON_PRODUCTS_ERROR,
      payload: { msg: 'Could not load product(s) at this time' },
    });
  }
};

export const getAmazonProduct = (department, slug) => async dispatch => {
  try {
    const res = await axios.get(
      `${process.env.GATSBY_SERVER_HOST_ROOT}/api/v1/${department}/${slug}`,
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
