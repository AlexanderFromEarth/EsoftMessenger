import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import NavbarButton from "./components/Navbar/NavbarButton/NavbarButton";
import Home from "./components/Home/Home";
import LoginForm from "./components/LoginForm/LoginForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <Navbar>
      <NavbarButton to="/">Home</NavbarButton>
      <NavbarButton to="/login">Login</NavbarButton>
      <NavbarButton to="/registration">Registration</NavbarButton>
    </Navbar>
    <section className="container container_centered">
      <Switch>
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/registration" component={RegisterForm} />
        <Route
          path="/"
          component={(props) => <Home {...props} name="Alex" />}
        />
      </Switch>
    </section>
  </BrowserRouter>,
  document.getElementById("root")
);
