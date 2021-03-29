import React from "react";
import logo from "./logo.svg";
import "./Home.css";

const App = ({ name: pname }) => {
  const [name, setName] = React.useState();

  const getData = React.useCallback(() => {
    let finished = false;
    let cancel = () => (finished = true);
    const promise = new Promise((resolve, reject) => {
      const timer = setTimeout(resolve, 5000, { name: pname });
      cancel = () => {
        if (finished) {
          return;
        }
        clearTimeout(timer);
        reject();
      };
      if (finished) {
        cancel();
      }
    }).then((result) => (finished = true) && result);
    return { promise, cancel };
  }, [pname]);

  React.useEffect(() => {
    const { promise, cancel } = getData();
    promise
      .then((result) => setName((state) => result.name))
      .catch((err) => err);
    return () => cancel();
  }, [getData]);

  return (
    <div className="app">
      <div className="app__header">
        <img src={logo} className="app__logo" alt="logo" />
        <h1>{name ? `Hello, ${name}!` : "Loading..."}</h1>
      </div>
    </div>
  );
};

export default React.memo(App);
