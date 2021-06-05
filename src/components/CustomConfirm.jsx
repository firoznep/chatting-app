import classNames from "classnames";
import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "../style/CustomConfirm.css";
import Button from "./Button";

export default function CustomConfirm() {
  const [toggleMsgBtn, setToggleMsgBtn] = useState(true);
  const [isIn, setIsIn] = useState(false);

  return (
    <>
      {toggleMsgBtn && (
        <Button onClick={() => setIsIn(true)}>Toggle Message</Button>
      )}

      <CSSTransition
        in={isIn}
        timeout={600}
        unmountOnExit
        classNames="trns-test"
        onEnter={() => setToggleMsgBtn(false)}
        onExited={() => setToggleMsgBtn(true)}
      >
        <div className={classNames("confirm", "trns-test")}>
          <span onClick={() => setIsIn(false)}>&#x2717;</span>
          <div className="confirm__title">"Are you sure want to exit?"</div>
          <div className="confirm__btn-container">
            <Button className="confirm__btn">Yes</Button>
            <Button className="confirm__btn">NO</Button>
          </div>
        </div>
      </CSSTransition>
    </>
  );
}
