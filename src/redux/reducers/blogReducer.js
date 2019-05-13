import { FETCH_BLOG_SUCCESS, FETCH_BLOG_FAILURE } from "../actions-types";
import { blogs as initialState } from "../store/initialState";

const blogReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_BLOG_SUCCESS:
      return {
        ...state,
        blogs: [...payload]
      };
    case FETCH_BLOG_FAILURE:
      return {
        ...state,
        error: {
          ...state.error,
          message: payload.message
        }
      };
    default:
      return state;
  }
};

export default blogReducer;
