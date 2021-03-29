import React from "react";
import "./FormInput.css";

const FormInput = ({ id, className, ...rest }) => (
  <input id={id} className={["form__input", className].join(" ")} {...rest} />
);

export default React.memo(FormInput);
