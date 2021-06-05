import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function Ball(props) {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const unsub = window.addEventListener("click", (e) => handleMouseMove(e));
    return () => window.removeEventListener("click", unsub);
  }, [mouseX, mouseY]);

  function handleMouseMove(e) {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  }

  return (
    <GoalHead>
      <Goal
        style={{
          backgroundColor: "green",

          transform: `translate(${mouseX - 330}px, ${mouseY - 180}px)`,
        }}
      ></Goal>
    </GoalHead>
  );
}
const GoalHead = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  background-color: orange;

  left: 50%;
  top: 50%;
  transform: translate(-150px, -150px);
`;

const Goal = styled.div`
  width: 30px;
  height: 30px;
  background-color: black;
  border-radius: 50%;
  z-index: 1001;
  transition: transform 0.3s ease;
  box-shadow: 0 0 15px gray;
  display: inline-block;
`;
