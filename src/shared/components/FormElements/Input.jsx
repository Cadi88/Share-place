import React from "react";
import "./Input.css";

const Input = ({ id, label, element, rows, placeholder }) => {
  const inputElement =
    element === "input" ? (
      <input id={id} placeholder={placeholder} />
    ) : (
      <textarea id={id} rows={rows || 3} />
    );
  return (
    <div className={`form-control`}>
      <label htmlFor={id}>{label}</label>
      {inputElement}
    </div>
  );
};

export default Input;
