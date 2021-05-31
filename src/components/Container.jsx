import React from "react";

export default function ContainerRow({ className, children, ...otherProps }) {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 1rem",
      }}
      {...otherProps}
    >
      {children}
    </div>
  );
}
