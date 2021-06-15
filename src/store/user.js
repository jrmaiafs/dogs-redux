import { USER_GET } from "../api";
import createAsyncSlice from "./helper/createAsyncSlice";
import { tokenFetch } from "./token";

const slice = createAsyncSlice({
  name: "user",
  fetchConfig: (token) => USER_GET(token),
});

export const userFetch = slice.asyncAction;

export const userLogin = (user) => async (dispatch) => {
  const { payload } = await dispatch(tokenFetch(user));
  if (payload.token) await dispatch(userFetch(payload.token));
};

export default slice.reducer;
