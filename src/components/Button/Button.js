import React from "react";
import "./Button.css";

const Button = ({ className, ...rest }) => (
  <button className={["button", className].join(" ")} {...rest} />
);

export default React.memo(Button);
