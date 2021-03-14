import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from './components/HOC/index';

import Login from "./containers/Login";
import Home from "./containers/Home";

function App() {
  return (
    <div className="App">
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
