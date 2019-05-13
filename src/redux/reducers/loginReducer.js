import {
  LOGIN_FAILURE,
  HANDLE_LOGIN_INPUT,
  INPUT_VALIDATION_FAILURE,
  INPUT_VALIDATION_SUCCESS,
  CLEAR_LOGIN,
  SUBMIT_LOGIN_FORM,
  LOGIN_SUCCESS
} from "../actions-types";
import { user as initialState } from "../store/initialState";

const loginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CLEAR_LOGIN:
      return initialState;
    case SUBMIT_LOGIN_FORM:
      return { ...state, submitting: true };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: {
          ...state.error,
          message: payload.message
        },
        submitting: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        profile: {
          ...payload
        },
        isLoggedIn: true
      };
    case HANDLE_LOGIN_INPUT:
      return {
        ...state,
        credentials: {
          ...state.credentials,
          [payload.field]: payload.value
        }
      };
    case INPUT_VALIDATION_FAILURE:
      return {
        ...state,
        error: {
          ...state.error,
          ...payload.response
        }
      };
    case INPUT_VALIDATION_SUCCESS:
      return { ...state, error: undefined };
    default:
      return state;
  }
};

export default loginReducer;
