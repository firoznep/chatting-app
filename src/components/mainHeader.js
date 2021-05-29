import { useEffect, useState } from "react";

const MainHeader = () => {
  const [scrollPoint, setScrollPoint] = useState(0);
  useEffect(() => {
    // window.addEventListener("scroll", handleScroll);
    window.onscroll = handleScroll;
  }, [scrollPoint]);

  function handleScroll() {
    let res = document.scrollingElement.scrollTop;
    if (res > 200) {
      setScrollPoint(200);
    } else {
      setScrollPoint(0);
    }
  }

  const styleSheet = {
    navStyle: {
      height: scrollPoint === 200 ? `60px` : `100px`,
      boxShadow: scrollPoint === 200 ? `1px 5px 10px black` : "none",
    },
  };

  return (
    <header className="header--main">
      <nav style={styleSheet.navStyle} className="nav--main">
        <a className="brand" href="#">
          Logo
        </a>
        <div className="nav__items">
          <span className="nav__item">button</span>
          <span className="nav__item">button</span>

          <div className="nav__item dropdown">
            <span className="dropdown--title">Dropdown</span>
            <ul className="dropdown__items">
              <li className="dropdown__item">
                <a href="#">item one</a>
              </li>
              <li className="dropdown__item">
                <a href="#">item one</a>
              </li>
              <li className="dropdown__item">
                <a href="#">item one</a>
              </li>
            </ul>
          </div>
        </div>
        <button className="btn btn--signin">SignIn </button>
      </nav>
      <div className="corision">corision</div>
    </header>
  );
};

export default MainHeader;
