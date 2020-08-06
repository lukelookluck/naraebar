import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
// import BottomNavigation from '@material-ui/core/BottomNavigation';
// import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import UndoIcon from '@material-ui/icons/Undo';
// import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { Grid, Button } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  item: {
    marginTop: "50px"
    
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();

  let history = useHistory();

  const onClickRedirectPathHandler = name => e => {

    // 여기 뭔가 아두이노나 라즈베리파이한테 만들어!라는 명령을 주는게 와야할 듯


    history.push(name);
  };

  return (
    <Grid>
        <Button className={classes.item} variant="contained" onClick={onClickRedirectPathHandler("/MakingCocktail")}>선택</Button>
        <Button className={classes.item} variant="contained" onClick={onClickRedirectPathHandler("/MenuList")}>취소</Button>
    </Grid>
  );
}
