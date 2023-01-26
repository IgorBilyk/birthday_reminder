import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

export const Filter = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Search by name..." />
        <div class="arrow-wrraper">
            <span>
              <FontAwesomeIcon icon={faArrowDown} className="arrow-down" />
            </span>
            <span>
              <FontAwesomeIcon icon={faArrowUp} className="arrow-up" />
            </span>
        </div>
      </form>
    </div>
  );
};
