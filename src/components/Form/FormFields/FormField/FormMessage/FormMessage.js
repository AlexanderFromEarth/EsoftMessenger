import React from "react";
import "./FormMessage.css";

const FormMessage = ({ className, errors }) =>
  errors?.length !== 0 ? (
    <div className={["form__message", className].join(" ")}>{errors[0]}</div>
  ) : null;

export default React.memo(FormMessage);
