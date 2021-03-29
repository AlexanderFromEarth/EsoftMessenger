import React from "react";
import "./FormButtons.css";

const FormButtons = ({ className, children }) => (
  <div className={["form__buttons", className].join(" ")}>
    {children}
  </div>
);

export default React.memo(FormButtons);
