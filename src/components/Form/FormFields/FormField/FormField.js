import React from "react";
import FormLabel from "./FormLabel/FormLabel";
import FormMessage from "./FormMessage/FormMessage";
import "./FormField.css";

const FormField = ({
  component,
  name,
  labelClassName,
  messageClassName,
  className,
  errors,
}) => (
  <div className={["form__field", className].join(" ")}>
    <FormLabel
      htmlFor={component.props.id}
      label={name}
      className={labelClassName}
    />
      {component}
      <FormMessage className={messageClassName} errors={errors} />
  </div>
);

export default React.memo(FormField);
