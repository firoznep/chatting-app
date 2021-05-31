import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Button from "./components/Button";
import ContainerRow from "./components/Container";
import CustomDropdown from "./components/CustomDropdown";
import Dropdown from "./components/Dropdown";
import "./style/App.css";

const App = () => {
  const [scrolledTo, setScrolledTo] = useState(0);

  useEffect(() => {
    window.onscroll = scrollHandle;
  }, [scrolledTo]);

  function scrollHandle(props) {
    let srl = document.scrollingElement.scrollTop;

    if (srl > 200) {
      setScrolledTo(200);
    } else {
      setScrolledTo(0);
    }
  }
  return (
    <BrowserRouter>
      <header
        className={classNames("header-main", {
          "header-main--shrink": scrolledTo === 200,
        })}
      >
        <ContainerRow>
          <Link to="/chatting-app" className="brand">
            Brand
          </Link>

          <Dropdown
            // dropdownName="Go To"
            listInArray={["one", "two", "Contact", "some little long text"]}
          />

          <CustomDropdown />
          <Button className="btn--active">Button Full</Button>
          <Button>Button</Button>
        </ContainerRow>
      </header>
      <div className="spaceholder"></div>
    </BrowserRouter>
  );
};

export default App;
