import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

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
  const HOST = "192.168.0.26:8000";
  const serverUrl = `http://${HOST}`;

  const [user, setUser] = useLocalStorageSetState(
    {
      token: "",
      user: {
        id: "",
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
          <Route exact path="/main" component={Main}></Route>
          <Route exact path="/community" component={Community}></Route>
          <Route exact path="/mybar" component={MyBar}></Route>
          <Route exact path="/signup" component={SignUp}></Route>
          <Route exact path="/findpW" component={FindPW}></Route>
          <Route exact path="/uploadrecipe" component={UploadRecipe}></Route>
          <Route exact path="/community/create" component={ArticleForm}></Route>
          <Route
            exact
            path="/community/comment"
            component={CommentDisplay}
          ></Route>
        </Switch>
      </BrowserRouter>
    </CommonContext.Provider>
  );
}

export default App;
