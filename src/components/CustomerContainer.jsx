import React from "react";
import "../style/CustomContainer.css";

export default function CustomContainer({ children, flexType, ...otherProps }) {
  return (
    <div
      className={`${
        flexType === "column" ? "flex-column" : "flex-row"
      } common-cont`}
    >
      {children}
    </div>
  );
}
