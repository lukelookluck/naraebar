import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Main from "./pages/Main/";
import Community from "./pages/Community/";
import MyBar from "./pages/MyBar/";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main}></Route>
        <Route exact path="/Main" component={Main}></Route>
        <Route exact path="/Community" component={Community}></Route>
        <Route exact path="/MyBar" component={MyBar}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
