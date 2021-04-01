import React from "react";
import FormFields from "./FormFields/FormFields";
import "./Form.css";

const Form = ({
  title,
  titleClassName,
  fieldsClassName,
  className,
  children,
  ...rest
}) => (
  <form className={["form", className].join(" ")} method="POST" {...rest}>
    <FormFields
      className={fieldsClassName}
      title={title}
      titleClassName={titleClassName}
      children={children}
    />
  </form>
);

export default React.memo(Form);
