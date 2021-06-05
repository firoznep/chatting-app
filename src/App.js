import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Ball from "./components/Ball";
import ContainerRow from "./components/Container";
import CustomConfirm from "./components/CustomConfirm";
import CustomDropdown from "./components/CustomDropdown";
import Dropdown from "./components/Dropdown";
import SignUp from "./components/SignUp";
import HomePage from "./page/HomePage";
import "./style/App.css";

const App = () => {
  const [scrolledTo, setScrolledTo] = useState(0);

  useEffect(() => {
    window.onscroll = scrollHandle;
  }, [scrolledTo]);

  const scrollHandle = (props) => {
    let srl = document.scrollingElement.scrollTop;

    if (srl > 100) {
      setScrolledTo(100);
    } else {
      setScrolledTo(0);
    }
  };
  return (
    <BrowserRouter>
      <header
        className={classNames("header-main", {
          "header-main--shrink": scrolledTo === 100,
        })}
      >
        <ContainerRow>
          <Link to="/chatting-app" className="brand">
            Brand
          </Link>

          <Dropdown
            // dropdownName="Go To"
            listInArray={["Ball", "two", "Contact", "confirmMessage"]}
          />

          <CustomDropdown />
          <Link to="/" className="btn--active">
            Home
          </Link>
          <Link to="/signup" style={{ color: "white" }}>
            Sign Up
          </Link>
        </ContainerRow>
      </header>

      <div style={{ height: "8rem" }}></div>

      <Switch>
        <Route exact path="/">
          {" "}
          <HomePage />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/confirmMessage">
          <CustomConfirm />
        </Route>
        <Route path="/Ball">
          <Ball />
        </Route>
      </Switch>
      <div className="spaceholder"></div>
    </BrowserRouter>
  );
};

export default App;
