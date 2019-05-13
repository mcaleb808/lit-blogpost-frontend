import { combineReducers } from "redux";

import login from "./loginReducer";
import blogs from "./blogReducer";

const reducer = combineReducers({
  login,
  blogs
});

export default reducer;
