import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Home from "./containers/Home/index.js";
import About from "./containers/About/index.js";
import Auth from "./containers/Auth/index.js";
import ProfilePage from "containers/ProfilePage/ProfilePage.js";
import Developers from "./containers/Developers/index.js";

var history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/developers"  component={Developers} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/auth" component={Auth} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
