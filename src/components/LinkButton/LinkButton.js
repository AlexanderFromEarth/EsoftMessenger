import React from "react";
import { useHistory } from "react-router-dom"
import Button from "../Button/Button";
import "./LinkButton.css";

const LinkButton = ({ to, className, onClick, ...rest }) => {
  const history = useHistory();
  return (
    <Button
      className={["link-button", className].join(" ")}
      onClick={React.useCallback(
        (e) => {
          onClick && onClick(e);
          history.push(to);
        },
        [history, onClick, to]
      )}
      {...rest}
    />
  );
};

export default React.memo(LinkButton);
