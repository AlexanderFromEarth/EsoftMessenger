import React from "react";
import FormLabel from "./FormLabel/FormLabel";
import "./FormField.css";

const FormField = ({ component, name, labelClassName, className }) => (
  <div className={["form__field", className].join(" ")}>
    <FormLabel
      htmlFor={component.props.id}
      label={name}
      className={labelClassName}
    />
    {component}
  </div>
);

export default React.memo(FormField);
