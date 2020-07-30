import React, {useState, useEffect} from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Start from './pages/Start';
import Main from './pages/Main/';
import Community from './pages/Community/';
import MyBar from './pages/MyBar/';
import SignUp from './pages/SignUp/';
import FindPW from './pages/FindPW/';
import UploadRecipe from './pages/UploadRecipe/';


function App() {

  // const [user, setUser] = useState(null);
  // const logout = () => setUser(null);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Start}></Route>
        <Route exact path="/Main" component={Main}></Route>
        <Route exact path="/Community" component={Community}></Route>
        <Route exact path="/MyBar" component={MyBar}></Route>
        <Route exact path="/SignUp" component={SignUp}></Route>
        <Route exact path="/FindPW" component={FindPW}></Route>
        <Route exact path="/UploadRecipe" component={UploadRecipe}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
