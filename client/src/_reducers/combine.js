import { combineReducers } from "redux";
import login from "./login";
import signup from "./signup";
import handlePost from "./handlePost.js";
import bookmarks from './bookmarks.js';
import getFollow from "./getFollow";
import following from "./following.js";
import handleComment from "./handleComment.js"

const combined = combineReducers({
  login,
  signup,
  handlePost,
  bookmarks,
  following,
  getFollow,
  handleComment,

});

export default combined;
