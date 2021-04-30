import { combineReducers } from "redux";
import login from "./login";
import signup from "./signup";
import handlePost from "./handlePost.js";
import bookmarks from './bookmarks.js';

const combined = combineReducers({
  login,
  signup,
  handlePost,
  bookmarks,
});

export default combined;
