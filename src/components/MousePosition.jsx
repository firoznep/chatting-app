import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function MousePosition(props) {
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
    <Container>
      <h1>Mouse Position</h1>
      <div>
        <span>
          Position X: <strong>{mouseX}</strong>{" "}
        </span>
        <span>
          Position Y: <strong>{mouseY}</strong>{" "}
        </span>
      </div>

      <Head className="person-head">
        <EyeOne className="person-head__eye">
          {/* <CSSTransition in={true} timeout={100}> */}

          <EyeBall className="person-head__eye__ball person-head__eye__ball--left"></EyeBall>
          {/* </CSSTransition> */}
        </EyeOne>
        <EyeTwo className="person-head__eye">
          {/* <CSSTransition> */}

          <EyeBall className="person-head__eye__ball person-head__eye__ball--right"></EyeBall>
          {/* </CSSTransition> */}
        </EyeTwo>
      </Head>
    </Container>
  );
}
const Container = styled.div`
  text-align: center;
`;
const Head = styled.div`
  background-color: tomato;
  width: 300px;
  height: 300px;
  display: inline-block;
  padding: 1rem;
  position: relative;
`;
const Eye = styled.div`
  width: 100px;
  height: 100px;
  background-color: white;
  position: absolute;
  border-radius: 50%;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const EyeOne = styled(Eye)`
  left: 25px;
  top: 75px;
`;
const EyeTwo = styled(Eye)`
  right: 25px;
  top: 75px;
`;

const EyeBall = styled.div`
  width: 25px;
  height: 25px;
  background-color: black;
  border-radius: 50%;
`;
