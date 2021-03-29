import React from "react";
import LinkButton from "../../LinkButton/LinkButton";
import "./NavbarButton.css";

const NavbarButton = ({ className, ...rest }) => (
  <LinkButton className={["navbar__button", className].join(" ")} {...rest} />
);

export default React.memo(NavbarButton);
