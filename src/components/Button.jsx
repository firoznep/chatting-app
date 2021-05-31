import React from "react";
import "../style/Button.css";

export default function Button({ className, ...otherProps }) {
  return (
    <button className={`button ${className}`} {...otherProps}>
      {otherProps.children}
    </button>
  );
}
