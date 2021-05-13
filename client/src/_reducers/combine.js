import { combineReducers } from "redux";
import login from "./login";
import signup from "./signup";
import handlePost from "./handlePost.js";
import bookmarks from './bookmarks.js';
import getFollow from "./getFollow";
import following from "./following.js";

const combined = combineReducers({
  login,
  signup,
  handlePost,
  bookmarks,
  following,
  getFollow,
});

export default combined;
