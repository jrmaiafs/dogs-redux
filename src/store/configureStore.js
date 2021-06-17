import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import photo from "./photo";
import photoPost from "./photoPost";
import token from "../store/token";
import user from "../store/user";
import feed from "../store/feed";
import ui from "../store/ui";
import userData from "../store/userData";

const middleware = [...getDefaultMiddleware()];

const reducer = combineReducers({
  photo,
  token,
  user,
  feed,
  ui,
  photoPost,
  userData,
});

const store = configureStore({ reducer, middleware });

export default store;
