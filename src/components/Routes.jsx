import React from "react";
import { Route } from "react-router-dom";

import Home from "./Home/home";
import Login from "./Auth/Login";

const Routes = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
  </div>
);

export default Routes;
