import React from "react";
import Button from "../../../../Button/Button";
import "./FormSubmit.css";

const FormSubmit = ({ className, ...rest }) => (
  <Button className={["form__submit", className].join(" ")} {...rest} />
);

export default React.memo(FormSubmit);
