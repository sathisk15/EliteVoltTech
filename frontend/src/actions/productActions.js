import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  ADD_PRODUCT_DETAILS_FAIL,
  ADD_PRODUCT_DETAILS_REQUEST,
  ADD_PRODUCT_DETAILS_SUCCESS,
  DELETE_PRODUCT_DETAILS_REQUEST,
  DELETE_PRODUCT_DETAILS_SUCCESS,
  DELETE_PRODUCT_DETAILS_FAIL,
} from '../constants/productConstants';
import { getBaseURL } from '../utils/utils';

import axios from 'axios';

const apiBaseURL = getBaseURL();

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const { data } = await axios.get(`${apiBaseURL}/api/products`);
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.messsage
          : error.message,
    });
  }
};

export const productDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });
    const { data } = await axios.get(`${apiBaseURL}/api/products/${id}`);
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.message,
    });
  }
};

export const uploadProduct = (formData) => async (dispatch, getState) => {
  try {
    dispatch({ type: ADD_PRODUCT_DETAILS_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.post(
      `${apiBaseURL}/api/products/upload`,
      formData,
      config
    );
    dispatch({
      type: ADD_PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_PRODUCT_DETAILS_FAIL,
      payload: error?.response?.data?.message || error.message,
    });
  }
};
export const deleteProduct = (productId) => async (dispatch, getState) => {
  try {
    dispatch({ type: DELETE_PRODUCT_DETAILS_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.delete(
      `${apiBaseURL}/api/products/delete/${productId}`,
      config
    );
    dispatch({
      type: DELETE_PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PRODUCT_DETAILS_FAIL,
      payload: error?.response?.data?.message || error.message,
    });
  }
};
