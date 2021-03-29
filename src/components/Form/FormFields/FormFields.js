import React from "react";
import FormLegend from "./FormLegend/FormLegend";
import FormField from "./FormField/FormField";
import FormButtons from "./FormButtons/FormButtons";
import "./FormFields.css";

const FormFields = ({ title, titleClassName, className, children }) => (
  <fieldset className={["form__fields", className].join(" ")}>
    <FormLegend title={title} className={titleClassName} />
    {children.map((child) =>
      child.type !== FormButtons ? (
        <FormField
          key={child.props.id}
          component={child}
          name={child.props.name}
          labelClassName={child.props.labelClassName}
        />
      ) : (
        child
      )
    )}
  </fieldset>
);

export default React.memo(FormFields);
