import { configureStore } from "@reduxjs/toolkit";
import birthdaySlice from "./actions/birthdaySlicer";

export default configureStore({
  reducer: {
    birthday: birthdaySlice,
  },
});
