import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/Routes";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
  <Router>
    <Routes />
  </Router>
);

export default App;
