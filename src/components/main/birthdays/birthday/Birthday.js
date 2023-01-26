import React from "react";

import { useDispatch } from "react-redux";
import { openPopup } from "../../../../app/actions/birthdaySlicer";
import { calculateDaysToBithday } from "../../../../utils";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import "./Birthday.css";

export const Birthday = ({ data, popup }) => {
  const dispatch = useDispatch();

  const { id, name, date, gift, link, gender } = data;
  const url = `https://avataaars.io/?avatarStyle=Transparent&topType=${
    gender === "man"
      ? "ShortHairShortFlat&accessoriesType"
      : "LongHairStraight&accessoriesType"
  }=Blank&hairColor=BrownDark&facialHairType=Blank&${
    gender === "man"
      ? "clotheType=BlazerShirt"
      : "clotheType=ShirtScoopNeck&clotheColor=PastelRed"
  }&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light`;
  const subStr = link.substring(15, 40);
  //Calculating days until birthday
  const d = date.split("-");

  const daysCount = calculateDaysToBithday(d[2], d[1]);
  return (
    <div className={daysCount < 10 ? "container container-alert" : "container"}>
      <h4>
        Days to Birthday{" "}
        <span className="date-to-birthday">
          {daysCount === 0 ? (
            <p style={{ color: "orange" }}>Tomorrow is Birthday</p>
          ) : (
            daysCount
          )}
        </span>
      </h4>
      <FontAwesomeIcon
        icon={faXmark}
        className="cross"
        id="cross"
        onClick={() => dispatch(openPopup(id))}
      />

      <div className="card">
        <div className="imgBx">
          <img src={url} alt="avatar" />
        </div>
        <div className="contentBx">
          <h2>{name}</h2>
          <div className="size">
            <h3>Birthday</h3>
            <span>{date}</span>
          </div>
          <div className="color">
            <h3>Gift</h3>
            <span>{gift}</span>
          </div>
          <a href={subStr} target="_blank" rel="noreferrer">
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};
