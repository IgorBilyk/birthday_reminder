import React from "react";

import "../../../App.css";

export const Popup = ({ active, deadlinesState }) => {
  return (
    <div className={active ? "popup-wrraper-active" : "popup-wrraper"}>
      <h3 className="birthday-alert">Birthday Alert</h3>
      {deadlinesState &&
        deadlinesState.map((item, index) => {
          const { data } = item;
          return (
            <div className="wrapper-item-popup" key={index}>
              <span className="index">{index + 1}</span>
              <h4>Birthday in : {item.daysToBirthday}</h4>
              <h4>Name : {data.name}</h4>
              <h4>Birthday : {data.date}</h4>
              <h4>Gift : {data.gift}</h4>
              <a href={data.link}>Buy</a>
            </div>
          );
        })}
    </div>
  );
};
