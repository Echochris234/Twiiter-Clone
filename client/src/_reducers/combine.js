import { combineReducers } from "redux";
import login from "./login";
import signup from "./signup";
import handlePost from "./handlePost.js"

const combined = combineReducers({
  login,
  signup,
  handlePost,
});

export default combined;
