// Routes.tsx

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import page from "./page";
import guidedBreathing from "./guided-breathing/page";

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={page} />
        <Route path="/guidedBreathing" component={guidedBreathing} />
      </Switch>
    </Router>
  );
};

export default Routes;
