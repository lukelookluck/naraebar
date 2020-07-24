import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import UndoIcon from '@material-ui/icons/Undo';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const useStyles = makeStyles({
  root: {
    width: 'auto',
    display: 'flex',
    justifyContent: 'around',
    // color: 'rgb(12, 12, 12)',
    // backgroundColor: 'rgb(203, 245, 255)',
    backgroundColor: 'rgba(255, 255, 255, 0)',
  },
  item: {
    backgroundColor: 'white',
    paddingLeft: 150,
    paddingRight: 150,
    marginLeft: 25,
    marginRight: 25,
    borderRadius: 25,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        className={classes.item}
        label="SELECT"
        icon={<CheckBoxIcon />}
        to="/MakingCocktail"
        component={Link}
      />
      <BottomNavigationAction
        className={classes.item}
        label="BACK"
        icon={<UndoIcon />}
        to="/MenuList"
        component={Link}
      />
      {/* <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} /> */}
    </BottomNavigation>
  );
}
