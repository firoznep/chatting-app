import React from "react";
import { Link } from "react-router-dom";
import "../style/Dropdown.css";
import Button from "./Button";

export default function Dropdown({
  dropdownName = "Drop-hover",
  dropdownNameStyle,
  ulStyle,
  listInArray,
}) {
  return (
    <div className="dropdown">
      <Button className="dropdown__title" style={dropdownNameStyle}>
        {dropdownName}
      </Button>
      <ul className="dropdown__items" style={ulStyle}>
        {listInArray.map((item, index) => {
          return (
            <li className="dropdown__item" key={item[index]}>
              <Link to={`/${item}`}>{item}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
