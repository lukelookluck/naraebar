import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Start from "./pages/Start";
import Main from "./pages/Main/";
import Community from "./pages/Community/";
import MyBar from "./pages/MyBar/";
import SignUp from "./pages/SignUp/";
import FindPW from "./pages/FindPW/";
import UploadRecipe from "./pages/UploadRecipe/";
import ArticleForm from "./pages/ArticleForm/";
import CommentDisplay from "./pages/CommentDisplay/";

import { useLocalStorageSetState } from "./common/CommonHooks";
import { CommonContext } from "./context/CommonContext";

function App() {
  const HOST = "192.168.0.5:8000";
  const serverUrl = `http://${HOST}`;

  const [user, setUser] = useLocalStorageSetState(
    {
      token: "",
      user: {
        username: "",
        email: "",
      },
    },
    "user"
  );

  return (
    <CommonContext.Provider
      value={{
        serverUrl,
        user,
        setUser,
      }}
    >
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Start}></Route>
          <Route exact path="/Main" component={Main}></Route>
          <Route exact path="/Community" component={Community}></Route>
          <Route exact path="/MyBar" component={MyBar}></Route>
          <Route exact path="/SignUp" component={SignUp}></Route>
          <Route exact path="/FindPW" component={FindPW}></Route>
          <Route exact path="/UploadRecipe" component={UploadRecipe}></Route>
          <Route exact path="/Community/Create" component={ArticleForm}></Route>
          <Route
            exact
            path="/Community/Comment"
            component={CommentDisplay}
          ></Route>
        </Switch>
      </BrowserRouter>
    </CommonContext.Provider>
  );
}

export default App;
