import React from "react";
import { useSelector } from "react-redux";

import { Birthday } from "./birthday/Birthday";

export const Birthdays = () => {
  const birthdays = useSelector((state) => state.birthday.value);

  return (
    <div>
      {birthdays.length < 1 && (
        <h4 style={{ color: "#fff" }}>
          No Birthdays found! Please add a new one.
        </h4>
      )}
      {birthdays &&
        birthdays.map((item, index) => <Birthday data={item} key={index} />)}
    </div>
  );
};
