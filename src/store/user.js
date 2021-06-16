import { USER_GET } from "../api";
import createAsyncSlice from "./helper/createAsyncSlice";
import { resetTokenState, tokenFetch } from "./token";

const slice = createAsyncSlice({
  name: "user",
  fetchConfig: (token) => USER_GET(token),
});

export const userFetch = slice.asyncAction;

const { resetState: resetUserState, fetchError } = slice.actions;

export const userLogin = (user) => async (dispatch) => {
  const { payload } = await dispatch(tokenFetch(user));
  if (payload.token) {
    window.localStorage.setItem("token", payload.token);
    await dispatch(userFetch(payload.token));
  }
};

export const userLogout = () => async (dispatch) => {
  dispatch(resetUserState());
  dispatch(resetTokenState());
  window.localStorage.removeItem("token");
};

export const autoLogin = () => async (dispatch, getState) => {
  const { token } = getState();
  if (token?.data?.token) {
    const { type } = await dispatch(userFetch(token.data.token));
    if (type === fetchError.type) {
      dispatch(userLogout());
    }
  }
};

export default slice.reducer;
