import React from "react";
import "./FormLabel.css";

const FormLabel = ({ className , htmlFor, label }) => (
  <label htmlFor={htmlFor} className={["form__label", className].join(" ")}>
    {label}
  </label>
);

export default React.memo(FormLabel);
