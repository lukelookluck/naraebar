// react
import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// ui
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

// hook
import { CommonContext } from './context/CommonContext';
import { useLocalStorageSetState } from './common/CommonHooks';

// pages
import MainDisplay from './pages/MainDisplay';
import MakingCocktail from './pages/MakingCocktail/';
import Complete from './pages/Complete/';
import NotFound from './pages/NotFound/';

// css
// import './index.css';

/// theme
const theme = createMuiTheme({
  typography: {
    fontFamily: ['Noto Sans KR'].join(','),
    button: {
      fontFamily: 'Noto Sans KR',
    },
    body1: {
      fontWeight: 500,
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: 'white',
        },
      },
    },
  },
});

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
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={MakingCocktail}></Route>
            <Route exact path="/MainDisplay" component={MainDisplay} />
            <Route exact path="/MakingCocktail" component={MakingCocktail}></Route>
            <Route exact path="/Complete" component={Complete}></Route>
            <Redirect to="/NotFound" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    </CommonContext.Provider>
  );
};

export default App;
