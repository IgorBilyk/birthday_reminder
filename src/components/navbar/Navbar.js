import React, { useState } from "react";
import { useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import "../../App.css";

import { Popup } from "./popup/Popup";

export const Navbar = () => {
  const deadlinesState = useSelector((state) => state.birthday.deadline);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar">
      <h1>Birthay Reminder</h1>
      <span className="bell">
        <span className="num">{deadlinesState?.length}</span>

        <FontAwesomeIcon
          icon={faBell}
          className="bell bell-normal"
          id="cross"
          onClick={() => {
            deadlinesState.length > 0 && setIsOpen((prev) => !prev);
            return false;
          }}
        />
      </span>
      <Popup active={isOpen} deadlinesState={deadlinesState} />
    </nav>
  );
};
