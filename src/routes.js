import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    );
  }
}
