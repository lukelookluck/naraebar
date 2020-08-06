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
import NotFound from './pages/NotFound/';
import SelectCocktail from './pages/SelectCocktail/';
import Start from './pages/Start/';

// app
const App = () => {
  const [user, setUser] = useLocalStorageSetState(
    {
      user_no: 0,
      user_id: '',
      user_nm: '',
      user_pwd: '',
      user_img_url: '',
      status: '',
      web_site: '',
      token: '',
    },
    'user',
  );
  const [infoData, setInfoData] = useState({});
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [userDialogIndex, setUserDialogIndex] = useState(0);
  const [isShowKeyborad, setIsShowKeyborad] = useState(false);
  const [signDialogOpen, setSignDialogOpen] = useState(false);
  const [infoDialogOpen, setInfoDetailDialogOpen] = useState(false);
  const [userDialogOpen, setUserDetailDialogOpen] = useState(false);

  return (
    <CommonContext.Provider
      value={{
        user,
        setUser,
        drawerOpen,
        setDrawerOpen,
        signDialogOpen,
        setSignDialogOpen,
        infoDialogOpen,
        setInfoDetailDialogOpen,
        infoData,
        setInfoData,
        userDialogOpen,
        setUserDetailDialogOpen,
        userDialogIndex,
        setUserDialogIndex,
        isShowKeyborad,
        setIsShowKeyborad,
      }}
    >
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Start}></Route>
            <Route exact path="/Start" component={Start}></Route>
            <Route exact path="/MenuList" component={MenuList}></Route>
            <Route exact path="/MakingCocktail" component={MakingCocktail}></Route>
            <Route exact path="/CompleteCocktail" component={CompleteCocktail}></Route>
            <Route exact path="/SelectCocktail/:cocktailId" component={SelectCocktail}></Route>
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
    </CommonContext.Provider>
  );
};

export default App;
