import classNames from "classnames";
import React, { useState } from "react";
import "../style/CustomDropdown.css";
import ContainerRow from "./Container";

export default function CustomDropdown({ dropTitle = "Drop-click" }) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div style={{ position: "relative", width: "20rem", height: "3rem" }}>
      <div className={classNames("drop-container", { active: isClicked })}>
        <ContainerRow
          className="drop__selector"
          onClick={() => setIsClicked(!isClicked)}
        >
          <span>{dropTitle}</span>
          <span className="drop__selector__indicate">&#62;</span>
        </ContainerRow>
        <ul className="drop__list">
          <li className="drop__item">item1</li>
          <li className="drop__item">item2</li>
          <li className="drop__item">item3</li>
          <li className="drop__item">item4</li>
          <li className="drop__item">item5</li>
          <li className="drop__item">item6 </li>
        </ul>
      </div>
    </div>
  );
}
