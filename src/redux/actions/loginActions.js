import {
  LOGIN_FAILURE,
  HANDLE_LOGIN_INPUT,
  INPUT_VALIDATION_FAILURE,
  INPUT_VALIDATION_SUCCESS,
  CLEAR_LOGIN,
  SUBMIT_LOGIN_FORM,
  LOGIN_SUCCESS
} from "../actions-types";
import Axios from "axios";

const API_URL = "https://lit-blog.herokuapp.com/api/v1";

export const clearLogin = () => ({
  type: CLEAR_LOGIN
});

export const submitLoginForm = () => ({
  type: SUBMIT_LOGIN_FORM
});

export const loginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload
});

export const loginUser = user => dispatch => {
  dispatch(submitLoginForm());
  return Axios.post(`${API_URL}/auth/login`, user)
    .then(res => {
      dispatch(clearLogin());
      dispatch(loginSuccess(res.data.data));
      localStorage.setItem("token", res.token);
      return res;
    })
    .catch(err => {
      dispatch({
        type: LOGIN_FAILURE,
        payload: err
      });
      return err;
    });
};

export const inputHandler = ({ field, value }) => ({
  type: HANDLE_LOGIN_INPUT,
  payload: {
    value,
    field
  }
});

export const validationResponse = (
  payload,
  type = INPUT_VALIDATION_FAILURE
) => ({
  type,
  payload
});

export const validateCredentials = ({ email, password }) => dispatch =>
  new Promise(resolve => {
    if (email.length === 0 && password.length === 0) {
      const payload = {
        response: {
          message: "All fields are required"
        }
      };
      dispatch(validationResponse(payload));
      return resolve(payload.response);
    }
    if (email.length === 0) {
      const payload = {
        response: {
          emailRequired: "Required",
          message: undefined
        }
      };
      dispatch(validationResponse(payload));
      return resolve(payload.response);
    }
    if (password.length === 0) {
      const payload = {
        response: {
          passwordRequired: "Required",
          usernameRequired: undefined,
          message: undefined
        }
      };
      dispatch(validationResponse(payload));
      return resolve(payload.response);
    }
    const payload = {
      response: {
        message: "Ok",
        passwordRequired: undefined,
        usernameRequired: undefined
      }
    };
    dispatch(validationResponse(payload, INPUT_VALIDATION_SUCCESS));
    return resolve(payload.response);
  });
