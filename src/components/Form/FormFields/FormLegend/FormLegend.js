import React from "react";
import "./FormLegend.css";

const FormLegend = ({ className, title }) => (
  <legend className={["form__legend", className].join(" ")}>{title}</legend>
);

export default React.memo(FormLegend);
