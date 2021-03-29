import React from "react";
import "./Navbar.css";

const Navbar = ({ className, navClassName, children }) => (
  <nav className={["navbar", className].join(" ")}>
    <ul className={["navbar__nav", navClassName].join(" ")}>
      {children.map((child, index) => (
        <li
          key={index}
          className={["navbar__elem", child.props.elemClassName].join(" ")}
        >
          {child}
        </li>
      ))}
    </ul>
  </nav>
);

export default React.memo(Navbar);
