import "./style/app.css";

function App() {
  return (
    <>
      <header className="header--main">
        <nav className="nav--main">
          {/* brand*/}
          <a className="nav__logo" href="#">
            Chatting App
          </a>

          <div className="nav--items">
            <span className="nav__item">placeholder-1</span>
            <span className="nav__item">placeholder-2</span>

            <div className="nav__item dropdown">
              <span className="dropdown__title">Dropdown</span>
              <div className="dropdown__toggle ">
                <a className="dropdown__toggle__item" href="#">
                  drop 1
                </a>
                <a className="dropdown__toggle__item" href="#">
                  drop 2
                </a>
                <a className="dropdown__toggle__item" href="#">
                  drop 3
                </a>
              </div>
            </div>
          </div>

          <button className="btn btn--signin">SignIn</button>
        </nav>
      </header>
    </>
  );
}

export default App;
