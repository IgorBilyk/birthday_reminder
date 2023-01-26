import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closePopup,
  removeBirthday,
} from "../../../app/actions/birthdaySlicer";

import "../../../App.css";

export const Alert = () => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.birthday.removeId);
  return (
    <div className="wrraper-alert" onClick={() => dispatch(closePopup())}>
      <div className="wrraper-content">
        <h3>Do you want to remove this reminder!</h3>
        <div className="wrrapers-buttons">
          <button onClick={() => dispatch(closePopup())}>Cancel</button>
          <button onClick={() => dispatch(removeBirthday(id))}>Delete</button>
        </div>
      </div>
    </div>
  );
};
