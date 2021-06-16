import { TOKEN_POST } from "../api";
import createAsyncSlice from "./helper/createAsyncSlice";

const slice = createAsyncSlice({
  name: "token",
  initialState: {
    data: {
      token: window.localStorage.getItem('token') || null
    }
  },
  fetchConfig: (user) => TOKEN_POST(user),
});
console.log("oi");
export const tokenFetch = slice.asyncAction;
export const { resetState: resetTokenState } = slice.actions;

export default slice.reducer;
