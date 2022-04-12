import React from "react";
import Switch from "./components/switch/Switch";
import { BrowserRouter as Router } from "react-router-dom";
import Context from "./context/Context";

const App = () => {
  return (
    <>
      <Context>
        <Router>
          <Switch />
        </Router>
      </Context>
    </>
  );
};
export default App;
