import { PHOTOS_GET } from "../api";
import createAsyncSlice from "./helper/createAsyncSlice";

const slice = createAsyncSlice({
  name: "userData",
  fetchConfig: ({ page, total, user }) => PHOTOS_GET({ page, total, user }),
});

export const userData = slice.asyncAction;

export default slice.reducer;
