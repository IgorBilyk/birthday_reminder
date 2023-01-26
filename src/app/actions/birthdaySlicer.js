import { createSlice } from "@reduxjs/toolkit";

import { BIRTHDAYS } from "../../data";
import { calculateDaysToBithday } from "../../utils";

export const birthdaySlice = createSlice({
  name: "birthday",
  initialState: {
    value: BIRTHDAYS,
    deadline: [],
    alert: false,
    removeId: null,
  },
  reducers: {
    addBirthday: (state, action) => {
      state.value.unshift(action.payload);
      const d = action.payload.date.split("-");
      const day = d[2];
      const month = d[1];
      const BDSoon = calculateDaysToBithday(day, month) < 10;
      if (BDSoon) {
        state.deadline.push({
          data: action.payload,
          daysToBirthday: calculateDaysToBithday(day, month),
        });
      } else {
        console.log("More than 10 days to Birthday");
      }
    },
    openPopup: (state, action) => {
      state.alert = true;
      state.removeId = action.payload;
    },
    closePopup: (state, action) => {
      state.alert = false;
    },
    removeBirthday: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
      state.deadline = state?.deadline.filter(
        (item) => item.data.id !== action.payload
      );
    },
    filterBirthday: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const {
  addBirthday,
  openPopup,
  closePopup,
  removeBirthday,
  filterBirthday,
  checkDaysToBirthday,
} = birthdaySlice.actions;

export default birthdaySlice.reducer;
