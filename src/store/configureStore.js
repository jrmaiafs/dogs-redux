import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import photo from "./photo";
import token from '../store/token'
import user from '../store/user'

const middleware = [...getDefaultMiddleware()];

const reducer = combineReducers({ photo, token, user});

const store = configureStore({ reducer, middleware });

export default store;
