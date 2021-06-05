import React from "react";

export default function InputField({
  onChange,
  type,
  label,
  id,
  name,
  ...props
}) {
  return (
    <>
      <label htmlFor={id}>
        {label}
        <input type={type} id={id} onChange={onChange} {...props} name={name} />
      </label>
    </>
  );
}
