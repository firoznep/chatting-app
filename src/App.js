import MainHeader from "./components/mainHeader";
import "./style/app.css";

const App = () => {
  return (
    <>
      <MainHeader />

      <div
        className="placeholder"
        style={{ height: "2000px", backgroundColor: "yellow" }}
      >
        placeholder
      </div>
    </>
  );
};

export default App;
