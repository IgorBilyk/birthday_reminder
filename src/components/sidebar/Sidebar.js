import React, { useState } from "react";
import { useDispatch } from "react-redux";
import uniqid from "uniqid";

import { addBirthday } from "../../app/actions/birthdaySlicer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import "../../App.css";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [gender, setGender] = useState("man");
  const handleRadioButtons = (e) => {
    setGender(e.target.value);
  };
  const handleSidebarOpening = () => {
    setIsOpen((prev) => !prev);
  };
  const [values, setValues] = useState({
    name: "",
    date: "",
    gift: "",
    link: "",
  });

  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleForm = (e) => {
    e.preventDefault();

    dispatch(addBirthday({ id: uniqid(), gender: gender, ...values }));
    setValues({ name: "", date: "", gift: "", link: "" });
  };
  return (
    <div
      className={isOpen ? "sidebar-wrapper sidebar-opened" : "sidebar-wrapper"}
    >
      <h3>Add Friend</h3>
      <form className="form" onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Name"
          autoComplete="false"
          name="name"
          value={values.name}
          onChange={handleInputChange}
          min="2"
          required
        />
        <input
          type="date"
          max={new Date().toISOString().slice(0, -14)}
          name="date"
          value={values.date}
          onChange={handleInputChange}
          onKeyDown={() => false}
          required
        />
        <input
          type="text"
          placeholder="Gift"
          autoComplete="false"
          name="gift"
          min="2"
          value={values.gift}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          placeholder="Link"
          autoComplete="false"
          name="link"
          value={values.link}
          onChange={handleInputChange}
          min="2"
          required
        />
        <div className="radio-group" onChange={handleRadioButtons}>
          <label>
            Man
            <input type="radio" name="gender" value="man" />
          </label>
          <label>
            Woman
            <input type="radio" name="gender" value="woman" />
          </label>
        </div>
        <button className="btn">Save</button>
        {!isOpen && (
          <FontAwesomeIcon
            icon={faArrowRight}
            className="arrow-right"
            onClick={handleSidebarOpening}
          />
        )}
        {isOpen && (
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="arrow-left"
            onClick={handleSidebarOpening}
          />
        )}
      </form>
    </div>
  );
};
