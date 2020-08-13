// react
import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// ui
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

// hook
import { CommonContext } from './context/CommonContext';
import { useLocalStorageSetState } from './common/CommonHooks';

// pages
import MenuList from './pages/MenuList';
import MakingCocktail from './pages/MakingCocktail/';
import CompleteCocktail from './pages/CompleteCocktail/';
import SelectCocktail from './pages/SelectCocktail/';
import Start from './pages/Start/';
import Error from './pages/Error/';
import Cleaning from './pages/Cleaning';

// app
const App = () => {

  const HOST = "127.0.0.1:8000";
  const serverUrl = `http://${HOST}`;

  return (
    <CommonContext.Provider
      value={{
        serverUrl
      }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Start}></Route>
          <Route exact path="/Start" component={Start}></Route>
          <Route exact path="/MenuList" component={MenuList}></Route>
          <Route exact path="/MakingCocktail" component={MakingCocktail}></Route>
          <Route exact path="/CompleteCocktail" component={CompleteCocktail}></Route>
          <Route exact path="/SelectCocktail/:cocktailId" component={SelectCocktail}></Route>
          <Route exact path="/Cleaning" component={Cleaning}></Route>
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </CommonContext.Provider>
  );
};

export default App;
