import { ErrorMessage, Field } from "formik";
import React from "react";
import CustomContainer from "./CustomerContainer";

export default function FormikInput({
  name,
  label,
  type,
  errorName,
  ...otherProps
}) {
  return (
    <CustomContainer flexType="column">
      <label htmlFor={name}>{label}</label>
      <Field
        name={name}
        type={type}
        id={name}
        {...otherProps}
        autoComplete="off"
      />
      <div style={{ color: "red" }}>
        <ErrorMessage name={errorName}></ErrorMessage>
      </div>
    </CustomContainer>
  );
}
